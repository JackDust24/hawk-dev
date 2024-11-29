import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
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

type Frontmatter = {
  title: string;
  subtitle?: string;
  heroImg?: string;
  poster?: string;
  date?: string;
};

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

  // Parse the file content
  const parsedFile = matter(fileContent) as GrayMatterFile<string>;

  // Validate or cast frontmatter to the expected type
  const frontmatter = parsedFile.data as Frontmatter;

  // Check if the required fields are present (optional for runtime safety)
  if (!frontmatter.title) {
    throw new Error("Frontmatter must include a title.");
  }

  const content = parsedFile.content;

  return (
    <div className="p-4 sm:p-10 mt-10 max-w-5xl bg-primary-lighter mx-auto rounded-lg shadow-lg mb-6">
      <PostClientPage frontmatter={frontmatter} content={content} />
    </div>
  );
}
