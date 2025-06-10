import Link from "next/link";

import type { ArticleMeta } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getFormattedDate } from "@/utils";
import { Tags } from "../tags";

export const Article = ({ article }: { article: ArticleMeta }) => {
  return (
    <Link
      href={`/articles/${article.slug}`}
      key={article.title}
      className="flex"
    >
      <Card className="flex flex-col flex-grow transition-all duration-300 hover:shadow-lg hover:border-primary-hover">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{article.title}</CardTitle>
          <CardDescription className="text-base">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="space-x-2">
            <Tags tags={article.tags} />
          </div>
          <span className="text-sm text-muted-foreground">
            {getFormattedDate(article.date)}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};
