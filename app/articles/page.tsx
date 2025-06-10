import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Article } from "@/components/articles/article";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { URL } from "@/config";
import { generateCustomMetadata, getAllArticles } from "@/utils";

export const metadata: Metadata = generateCustomMetadata({
  title: "Articles by Buddha Gurung",
  description:
    "Articles on software development, technology and personal opinions.",
  canonicalUrl: `${URL}/articles`,
});

export default function Articles() {
  const articles = getAllArticles();

  return (
    <SiteLayout>
      <section className="max-w-4xl mx-auto pt-30 pb-20">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Button variant="outline" asChild className="w-fit">
            <Link href={"/"} className="flex items-center space-x-1">
              <MoveLeft className="size-6 md:size-5 lg:size-4" />
              <div className="text-base font-normal">Back Home</div>
            </Link>
          </Button>
          <h2 className="text-4xl font-medium">All Articles</h2>
        </div>

        <div className="text-lg text-muted-foreground mt-5 mb-8">
          I write about my experiences, lessons learned, and useful techniques.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {articles.map((article) => (
            <Article key={article.title} article={article} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
