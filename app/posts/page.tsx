import client from "../../tina/__generated__/client";
import PostsPage from "./client-page";

async function Home() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }

  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-start mb-8 text-primary-foreground">
        Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostsPage {...posts} />
      </div>
    </div>
  );
}

export default Home;
