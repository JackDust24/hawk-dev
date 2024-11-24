import PostsPage from "./client-page";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getPosts() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      id: filename.replace(/\.mdx$/, ""),
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      excerpt: data.excerpt,
      poster: data.poster,
      heroImg: data.heroImg,
      content,
      _sys: {
        breadcrumbs: [filename.replace(/\.mdx$/, "")], // Simulate breadcrumb behavior
      },
    };
  });

  return posts;
}

async function Home() {
  const posts = getPosts();

  if (!posts.length) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-start mb-8 text-primary-foreground">
        Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostsPage posts={posts} />
      </div>
    </div>
  );
}

export default Home;
