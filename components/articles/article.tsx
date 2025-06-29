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
    <Card className="flex flex-col flex-grow">
      <CardHeader>
        <CardTitle className="text-xl font-medium">
          <Link
            className="hover:text-primary-hover"
            href={`/articles/${article.slug}`}
          >
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="space-y-1">
          <p className="text-[15px]">{getFormattedDate(article.date)}</p>
          <p className="text-lg">{article.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="space-x-2">
          <Tags tags={article.tags} />
        </div>
      </CardContent>
    </Card>
  );
};
