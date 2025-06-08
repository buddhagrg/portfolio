import { Badge } from "./ui/badge";

export const Tags = ({ tags }: { tags: string }) => {
  return tags.length > 0
    ? tags.split(",").map((tag) => (
        <Badge key={tag} variant="outline" className="text-sm mr-3">
          {tag}
        </Badge>
      ))
    : "";
};
