import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} />,
    ul: (props) => <ul {...props} className="list-disc ps-8 mb-4" />,
    a: (props) => (
      <a {...props} className="underline underline-offset-4 text-primary" />
    ),
    ...components,
  };
}
