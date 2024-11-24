import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import PostClientPage from "./client-page";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    filename: filename.replace(/\.mdx$/, "").split("/"),
  }));

  return paths;
}

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const filePath = path.join(
    postsDirectory,
    `${params.filename.join("/")}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data: frontmatter, content } = matter(fileContent);

  return (
    <div className="p-10 mt-10 max-w-5xl bg-primary-lighter mx-auto rounded-lg shadow-lg">
      <PostClientPage frontmatter={frontmatter} content={content} />
    </div>
  );
}
