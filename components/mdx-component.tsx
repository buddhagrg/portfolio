import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import { useMDXComponents } from "@/hooks/use-mdx-components";

export const MDXComponent = ({ htmlContent }: { htmlContent: string }) => {
  const mdxComponents = useMDXComponents({});

  return (
    <MDXRemote
      source={htmlContent}
      options={{
        mdxOptions: { rehypePlugins: [rehypeHighlight] },
      }}
      components={mdxComponents}
    />
  );
};
