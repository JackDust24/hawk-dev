import client from "../../tina/__generated__/client";
import PostsPage from "./client-page";

// import type { Media } from 'payload-types'

async function Home() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }
  // const payload = await getPayloadHMR({ config })

  // const posts = await payload.find({
  //   collection: 'posts'
  // })

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary-foreground underline">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostsPage {...posts} />
        {/* {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={`${post.slug}`}>
            <Card
              key={post.title}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg shadow-[var(--card-border)] rounded-md transform hover:scale-105 transition-transform duration-200"
            >
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={BlueLogo}
                    alt={post.title}
                    fill
                    className="rounded-t-md object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold mt-4 text-[var(--card-text)]">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-[var(--card-text)]">
                  {post.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-2 text-[var(--card-text)]">

              </CardContent>
              <CardFooter className="px-4 py-2 flex justify-between text-[var(--card-text)]">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.author}</span>
              </CardFooter>
            </Card>
          </Link>
        ))} */}
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="line-clamp-3">
                  <RichText content={post.content} />
                </div> */
}

// import client from "../../tina/__generated__/client";
// import PostsClientPage from "./client-page";

// export default async function PostsPage() {
//   const posts = await client.queries.postConnection();

//   if (!posts) {
//     return null;
//   }

//   return (
//     <Layout rawPageData={posts.data}>
//       <PostsClientPage {...posts} />
//     </Layout>
//   );
// }
