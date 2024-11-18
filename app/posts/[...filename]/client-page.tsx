"use client";
import React from "react";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { format } from "date-fns";
import { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });
  const post = data.post;

  const date = new Date(post.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <>
      {post.heroImg && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(post, "heroImg")}
            className="relative max-w-4xl lg:max-w-5xl mx-auto"
          >
            <Image
              src={post.heroImg}
              alt={post.title}
              width={500}
              height={500}
              className="relative z-10 mb-14 block rounded-lg w-full h-auto opacity-100"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h2
          data-tina-field={tinaField(post, "title")}
          className={`w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span>{post.title}</span>
        </h2>
        <h2
          data-tina-field={tinaField(post, "subtitle")}
          className={`w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span>{post.subtitle}</span>
        </h2>
      </div>
      <div
        data-tina-field={tinaField(post, "poster")}
        className="flex items-center justify-center mb-16"
      >
        {post.poster && (
          <>
            {post.poster}
            <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
              —
            </span>
          </>
        )}
        <p
          data-tina-field={tinaField(post, "date")}
          className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
        >
          {formattedDate}
        </p>
      </div>
      <div
        data-tina-field={tinaField(post, "_body")}
        className="prose dark:prose-dark w-full max-w-none"
      >
        <TinaMarkdown content={post._body} />
      </div>
    </>
  );
}
