import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // const payload = await getPayloadHMR({ config: configPromise })

  // const posts = await payload.find({
  //   collection: 'posts',
  //   where: {
  //     slug: { equals: slug },
  //   },
  // })

  // if (posts.docs.length === 0) {
  //   return notFound()
  // }

  // const post = posts.docs[0]

  return (
    <div className="p-10 mt-10 max-w-5xl bg-primary-lighter mx-auto rounded-lg shadow-lg">
      PLACEHOLDER
    </div>
    //   <div className="p-10 mt-10 max-w-5xl bg-primary-lighter mx-auto rounded-lg shadow-lg">
    //   {/* Image Section */}
    //   <div className="w-full mb-6">
    //     <Image
    //       src={(post.mainImage as Media)?.url ?? ''}
    //       alt={(post.mainImage as Media)?.alt ?? ''}
    //       width={(post.mainImage as Media)?.width ?? 100}
    //       height={(post.mainImage as Media)?.height ?? 100}
    //       className="w-full h-72 object-cover rounded-lg shadow-md"
    //     />
    //   </div>

    //   {/* Content Section */}
    //   <div className="flex flex-col gap-4">
    //     {/* Title */}
    //     <h1 className="font-bold text-4xl text-primary-foreground mb-3">{post.title}</h1>

    //     {/* Subtitle */}
    //     <h2 className="font-light text-2xl text-primary-foreground mb-4">{post.subtitle}</h2>

    //     {/* Content */}
    //     <div className="prose text-primary-foreground">
    //       <RichText content={post.content} />
    //     </div>
    //   </div>
    // </div>
  );
}

// import React from "react";
// import client from "../../../tina/__generated__/client";
// import Layout from "../../../components/layout/layout";
// import PostClientPage from "./client-page";

// export default async function PostPage({
//   params,
// }: {
//   params: { filename: string[] };
// }) {
//   const data = await client.queries.post({
//     relativePath: `${params.filename.join("/")}.mdx`,
//   });

//   return (
//     <Layout rawPageData={data}>
//       <PostClientPage {...data} />
//     </Layout>
//   );
// }

// export async function generateStaticParams() {
//   const posts = await client.queries.postConnection();
//   const paths = posts.data?.postConnection.edges.map((edge) => ({
//     filename: edge.node._sys.breadcrumbs,
//   }));
//   return paths || [];
// }
