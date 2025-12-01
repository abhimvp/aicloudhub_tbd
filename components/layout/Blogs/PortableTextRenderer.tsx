import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PortableTextRendererProps {
  content: PortableTextBlock[];
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      
      const imageUrl = urlFor(value).url();
      if (!imageUrl) return null;

      return (
        <div className="blog-post-content-image">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={800}
            height={600}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      );
    },
  },
  block: {
    // Headings - render as-is without any styling
    h1: ({ children }) => <h1 className="blog-post-content-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="blog-post-content-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-post-content-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="blog-post-content-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="blog-post-content-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="blog-post-content-h6">{children}</h6>,
    // Normal paragraph
    normal: ({ children }) => (
      <p className="blog-post-content-p">{children}</p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="blog-post-content-blockquote">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="blog-post-content-ul">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="blog-post-content-ol">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="blog-post-content-li">{children}</li>
    ),
    number: ({ children }) => (
      <li className="blog-post-content-li">{children}</li>
    ),
  },
  marks: {
    // Links
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="blog-post-content-a"
        >
          {children}
        </a>
      );
    },
    // Bold
    strong: ({ children }) => (
      <strong className="blog-post-content-strong">{children}</strong>
    ),
    // Italic
    em: ({ children }) => (
      <em className="blog-post-content-em">{children}</em>
    ),
    // Code
    code: ({ children }) => (
      <code className="blog-post-content-code">{children}</code>
    ),
  },
};

export default function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="blog-post-content">
      <PortableText value={content} components={components} />
    </div>
  );
}

