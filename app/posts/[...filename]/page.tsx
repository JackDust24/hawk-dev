import React from "react";
import client from "../../../tina/__generated__/client";

import PostClientPage from "./client-page";

export async function generateStaticParams() {
  const posts = await client.queries.postConnection();
  const paths = posts.data?.postConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));
  return paths || [];
}

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.post({
    relativePath: `${params.filename.join("/")}.mdx`,
  });

  return (
    <div className="p-10 mt-10 max-w-5xl bg-primary-lighter mx-auto rounded-lg shadow-lg">
      <PostClientPage {...data} />
    </div>
  );
}
