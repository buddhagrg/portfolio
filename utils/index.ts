import fs from "fs";
import { Metadata } from "next";
import matter from "gray-matter";
import path from "path";
import { format } from "date-fns";

import type { ArticleMeta, MetaProps, ProjectMeta } from "@/types";
import { URL } from "@/config";

const BASE_PATH = "content";
const PROJECT_PATH = "/projects";
const DEFAULT_DATE_FORMAT = "MMMM dd, yyyy";

const getArticleDirectory = () => {
  return path.join(process.cwd(), "content", "articles");
};

export const getArticleSlugs = () => {
  const dir = getArticleDirectory();
  return fs.readdirSync(dir).filter((name) => {
    const fullPath = path.join(dir, name);
    return fs.statSync(fullPath).isDirectory();
  });
};

export const getAllArticles = (): ArticleMeta[] => {
  const slugs = getArticleSlugs();

  const articles: ArticleMeta[] = slugs.map((slug) => {
    const dir = getArticleDirectory();
    const filePath = path.join(dir, slug, "index.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      tags: data.tags,
      slug,
      description: data.description,
      featured: data.featured,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getArticleContent = (slug: string) => {
  const dir = getArticleDirectory();
  const filePath = path.join(dir, slug, "index.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const article = matter(fileContent);
  return article;
};

export const getProjectMetadata = (): ProjectMeta[] => {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "projects"));
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  const projects: ProjectMeta[] = markdownProjects
    .map((filename) => {
      const fileContents = fs.readFileSync(
        path.join(BASE_PATH, PROJECT_PATH, filename),
        "utf8"
      );
      const {
        data: { title, subtitle, code, demo, date, stack, featured },
      } = matter(fileContents);

      return {
        title,
        subtitle,
        code,
        demo,
        date,
        stack,
        featured,
      };
    })
    .filter(Boolean);

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const generateCustomMetadata = ({
  title,
  description = "Personal site - Buddha Gurung",
  ogAbsolutePath,
  keywords,
  canonicalUrl = URL,
}: MetaProps): Metadata => {
  const type = "website";
  const img = getFallbackOgUrl(ogAbsolutePath);

  return {
    title,
    description,
    keywords: keywords?.join(","),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
};

export const getFallbackOgUrl = (path?: string) => {
  const absPath = path ? path : `/default-og.png`;
  const baseUrl = URL || `http://localhost:3000`;
  const ogUrl = `${baseUrl.replace(/\/$/, "")}/${absPath.replace(/^\/+/, "")}`;
  return ogUrl;
};

export const getFormattedDate = (dt: string | null | undefined) => {
  if (!dt) return "";

  const formattedDate = format(dt, DEFAULT_DATE_FORMAT);
  return formattedDate;
};
