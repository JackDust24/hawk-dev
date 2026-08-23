import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostListItem = {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt?: string;
  poster?: string;
  heroImg?: string;
  _sys: {
    breadcrumbs: string[];
  };
};

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPosts(): PostListItem[] {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const id = filename.replace(/\.mdx$/, "");

    return {
      id,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      excerpt: data.excerpt,
      poster: data.poster,
      heroImg: data.heroImg,
      _sys: {
        breadcrumbs: [id],
      },
    };
  });

  return posts.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
  });
}
