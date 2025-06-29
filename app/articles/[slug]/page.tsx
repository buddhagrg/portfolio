import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

import { MDXComponent } from "@/components/mdx-component";
import { SiteLayout } from "@/components/site-layout";
import { Tags } from "@/components/tags";
import { URL } from "@/config";
import {
  getFormattedDate,
  getArticleContent,
  generateCustomMetadata,
  getArticleSlugs,
} from "@/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const {
    data: { title, description, ogPath },
  } = getArticleContent(slug);

  return generateCustomMetadata({
    title: title.charAt(0).toUpperCase() + title.slice(1),
    description,
    ogAbsolutePath: ogPath,
    canonicalUrl: `${URL}/articles/${slug}`,
  });
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const {
    data: { title, date, tags },
    content,
  } = getArticleContent(slug);

  return (
    <SiteLayout>
      <article className="max-w-3xl mx-auto pt-10 pb-20">
        <Link
          href="/articles"
          className="flex mb-5 items-center gap-2 text-primary font-medium hover:text-primary/80"
        >
          <MoveLeft className="size-6 md:size-5 lg:size-4" />
          <span className="text-sm">Back to all articles</span>
        </Link>
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="text-sm text-muted-foreground font-medium my-3">
          {getFormattedDate(date)}
        </div>
        <div>
          <Tags tags={tags} />
        </div>
        <div className="mt-10 mb-2">
          <MDXComponent htmlContent={content} />
        </div>
      </article>
    </SiteLayout>
  );
}
