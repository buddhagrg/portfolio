import Link from "next/link";
import { MoveRight } from "lucide-react";

import { Button } from "../ui/button";
import { getAllArticles } from "@/utils";
import { Article } from "./article";

export function Articles() {
  const articles = getAllArticles().filter(
    (article) => article.featured === true
  );

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-5">
          <h1 className="text-2xl font-bold">Articles</h1>
          <Button className="ml-auto" variant="secondary" size="sm" asChild>
            <Link href={`/articles`} className="space-x-1">
              View All
              <MoveRight className="size-6 md:size-5 lg:size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-y-8">
          {articles.map((article) => (
            <Article key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
