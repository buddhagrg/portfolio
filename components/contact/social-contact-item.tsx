import React from "react";
import type { SocialItem } from "@/types";

type SocialContactItemProps = {
  item: Omit<SocialItem, "id">;
};
export const SocialContactItem: React.FC<SocialContactItemProps> = ({
  item,
}) => {
  const { name, link, label, icon: Icon } = item;

  return (
    <div className="flex gap-4 mb-0 md:mb-3">
      <Icon className="mt-2 md:mt-1 size-6 md:size-5 lg:size-4" />
      <div>
        <div className="font-medium">{name}</div>
        <a href={link} className="text-muted-foreground pt-0">
          {label ?? link}
        </a>
      </div>
    </div>
  );
};
