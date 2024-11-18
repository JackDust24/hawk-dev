"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  PostConnectionQuery,
  PostConnectionQueryVariables,
} from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import BlueLogo from "@/public/BlueLogo.png";

interface ClientPostProps {
  data: PostConnectionQuery;
  variables: PostConnectionQueryVariables;
  query: string;
}

export default function PostsClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });

  return (
    <>
      {data?.postConnection.edges.map((postData) => {
        const post = postData.node;
        const date = new Date(post.date);
        let formattedDate = "";
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, "MMM dd, yyyy");
        }
        return (
          <Link
            href={`/posts/` + post._sys.breadcrumbs.join("/")}
            key={post.id}
          >
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
                <div className="line-clamp-3">
                  <TinaMarkdown content={post.excerpt} />
                </div>
              </CardContent>
              <CardFooter className="px-4 py-2 flex justify-between text-[var(--card-text)]">
                <span>{formattedDate}</span>
                <span>{post.poster}</span>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
