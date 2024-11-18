"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
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
// import { RichText } from "../lib/richText";
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
          // <Link
          //   key={post.id}
          //   href={`/posts/` + post._sys.breadcrumbs.join("/")}
          //   className="group block px-6 sm:px-8 md:px-10 py-10 mb-8 last:mb-0 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm transition-all duration-150 ease-out hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
          // >
          // <h3
          //   className={`text-gray-700 dark:text-white text-3xl lg:text-4xl font-semibold title-font mb-5 transition-all duration-150 ease-out`}
          // >
          //   {post.title}{" "}
          //   <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          //     <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
          //   </span>
          // </h3>
          // <div className="prose dark:prose-dark w-full max-w-none mb-5 opacity-70">
          //   <TinaMarkdown content={post.excerpt} />
          // </div>
          // <div className="flex items-center">
          //   <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
          //     {post?.author}
          //   </p>
          //   {formattedDate !== "" && (
          //     <>
          //       <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
          //         —
          //       </span>
          //       <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
          //         {formattedDate}
          //       </p>
          //     </>
          //   )}
          // </div>
          // </Link>

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
                <span>{post.author}</span>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
