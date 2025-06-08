import React from "react";
import { LucideProps } from "lucide-react";

export type SocialItem = {
  id: string;
  name: string;
  link: string;
  label: string;
  icon: React.FC<LucideProps>;
};

export type ProjectMeta = {
  title: string;
  subtitle: string;
  code: string;
  demo: string;
  date: string;
  stack: string;
  featured: boolean;
};

export type ArticleMeta = {
  title: string;
  date: string;
  tags: string;
  slug: string;
  description: string;
  featured: boolean;
  ogPath?: string;
};

export type ApiResponse = {
  success: boolean;
  message: string;
};

export type FormState = ApiResponse & { loading: boolean };

export type MetaProps = {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogAbsolutePath?: string;
};

export type ArticleMarkdown = {
  data: ArticleMeta;
  content: string;
};
