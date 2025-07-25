import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-foreground mb-6 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foreground mb-4 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-foreground leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-lg text-foreground space-y-2 mb-6 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-lg text-foreground space-y-2 mb-6 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-foreground leading-relaxed">
        {children}
      </li>
    ),
    ...components,
  };
}
