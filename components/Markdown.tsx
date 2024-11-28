import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface MarkdownPagesProps {
  content: string;
}

export function MarkdownPages({ content }: MarkdownPagesProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold text-gray-600 mb-3">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="text-base text-gray-700">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="pl-6 mb-6 space-y-2 text-gray-700  marker:text-gray-900 ">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal text-gray-700 marker:text-gray-900 pl-6 mb-6 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-base text-gray-700 marker:text-gray-90">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-black pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-palette-greenlayer hover:text-palette-yellow underline"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
          <code className="bg-gray-800 rounded px-1 py-0.5 font-mono text-sm text-white">
            {children}
          </code>
        ),
        pre: ({ children }) => {
          const handleCopy = () => {
            let codeContent = "";

            React.Children.forEach(children, (child) => {
              if (typeof child === "string") {
                codeContent += child;
              } else if (
                React.isValidElement(child) &&
                typeof child.props.children === "string"
              ) {
                codeContent += child.props.children;
              }
            });

            navigator.clipboard
              .writeText(codeContent)
              .then(() => setIsCopied(true));
          };

          return (
            <div className="relative group">
              <pre className="bg-black rounded p-4 overflow-x-auto mb-6 text-white">
                {children}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isCopied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          );
        },

        hr: () => <hr className="my-8 border-gray-800" />,
        img: ({ src, alt }) => (
          <Image
            src={src || ""}
            alt={alt || ""}
            style={{
              objectFit: "contain", // Ensures aspect ratio is preserved within bounds
              width: "100%", // Stretches to fit parent, which Rnd controls
              height: "100%",
            }}
            className="max-w-full h-auto rounded-lg shadow-lg my-6"
          />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
