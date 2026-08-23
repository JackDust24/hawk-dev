import type { Metadata } from "next";
import { format } from "date-fns";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on delivery, ecommerce, AI agents, and shipping software.",
};

export default function PostsPage() {
  const posts = getPosts();

  if (!posts.length) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-muted">
        No posts found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Writing
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
        Notes on build and delivery
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        How work gets from a brief to production — and the agents, commerce,
        and platforms in between.
      </p>
      <div className="mt-10 border-t border-line">
        {posts.map((post) => {
          const date = new Date(post.date);
          const formatted = Number.isNaN(date.getTime())
            ? ""
            : format(date, "MMM d, yyyy");

          return (
            <Link
              key={post.id}
              href={`/posts/${post._sys.breadcrumbs.join("/")}`}
              className="group block border-b border-line py-8 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-xl font-medium text-ink group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {formatted}
                </span>
              </div>
              {post.subtitle && (
                <p className="mt-2 text-sm text-muted sm:text-base">
                  {post.subtitle}
                </p>
              )}
              {post.excerpt && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.excerpt.replace(/\s+/g, " ").trim()}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
