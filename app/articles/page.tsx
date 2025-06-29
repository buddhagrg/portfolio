import { Metadata } from "next";

import { Article } from "@/components/articles/article";
import { SiteLayout } from "@/components/site-layout";
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
      <section className="max-w-3xl mx-auto pt-15 pb-20">
        <h2 className="text-4xl font-medium">Articles</h2>

        <div className="text-lg text-muted-foreground mt-2 mb-8">
          Thoughts, ideas, and guides on web technology.
        </div>

        <div className="grid grid-cols-1 gap-y-5">
          {articles.map((article) => (
            <Article key={article.title} article={article} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
