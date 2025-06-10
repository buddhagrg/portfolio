import Link from "next/link";
import { FileText } from "lucide-react";

import { Button } from "../ui/button";
import { getAllArticles } from "@/utils";
import { Article } from "./article";

export function Articles() {
  const articles = getAllArticles().filter(
    (article) => article.featured === true
  );

  return (
    <section className="py-20" id="articles">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Recent Articles
        </h1>
        <p className="mb-10">
          I enjoy sharing my knowledge and experiences through writing. Here are
          some articles I&apos;ve published recently.
        </p>

        <div className="grid grid-cols-1 gap-y-8">
          {articles.map((article) => (
            <Article key={article.title} article={article} />
          ))}
        </div>

        <div className="text-center mt-5">
          <div>Want to read more of my articles?</div>
          <Button className="mt-4" asChild>
            <Link href={"/articles"} className="flex items-center">
              <FileText className="size-6 md:size-5 lg:size-4" />
              <span>View All Articles</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
