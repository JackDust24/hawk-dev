"use client";

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MarkdownPages } from "@/components/Markdown";

interface ClientPostProps {
  frontmatter: {
    title: string;
    subtitle?: string;
    heroImg?: string;
    poster?: string;
    date?: string;
  };
  content: string;
}

export default function PostClientPage({
  frontmatter,
  content,
}: ClientPostProps) {
  const { title, subtitle, heroImg, poster, date } = frontmatter;
  const formattedDate = date ? format(new Date(date), "MMM d, yyyy") : "";
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <article>
      <Link
        href="/posts"
        className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
      >
        Writing
      </Link>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted">{subtitle}</p>
      )}
      <p className="mt-6 font-mono text-xs text-muted">
        {[poster, formattedDate].filter(Boolean).join(" — ")}
      </p>

      {heroImg && (
        <div className="relative mt-10 overflow-hidden rounded-lg border border-line">
          {isImageLoading && (
            <div className="h-64 animate-pulse bg-surface" />
          )}
          <Image
            src={heroImg}
            alt={title}
            width={1200}
            height={720}
            className={`h-auto w-full transition-opacity duration-500 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
        </div>
      )}

      <div className="mt-10 space-y-4">
        <MarkdownPages content={content} />
      </div>
    </article>
  );
}
