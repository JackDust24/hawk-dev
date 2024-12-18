"use client";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { MarkdownPages } from "@/components/Markdown";

interface ClientPostProps {
  frontmatter: {
    title: string;
    subtitle?: string;
    heroImg?: string;
    poster?: string;
    date?: string;
  };
  content: string;
}

export default function PostClientPage({
  frontmatter,
  content,
}: ClientPostProps) {
  const { title, subtitle, heroImg, poster, date } = frontmatter;

  const formattedDate = date ? format(new Date(date), "MMM dd, yyyy") : "";

  return (
    <>
      <div className="flex flex-col gap-4 pt-4">
        <h2 className="w-full relative mb-4 sm:mb-8 text-2xl sm:text-4xl font-extrabold tracking-normal text-center title-font">
          <span>{title}</span>
        </h2>
        {subtitle && (
          <h2 className="w-full relative mb-8 text-xl sm:text-2xl font-extrabold tracking-normal text-center title-font">
            <span>{subtitle}</span>
          </h2>
        )}
      </div>
      {heroImg && (
        <div className="px-4 w-full">
          <div className="relative max-w-2xl lg:max-w-5xl mx-auto">
            <Image
              src={heroImg}
              alt={title}
              width={500}
              height={500}
              className="relative z-10 mb-8 sm:mb-12 block rounded-lg w-full h-auto opacity-100"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mb-8 sm:mb-12">
        {poster && (
          <>
            {poster}
            <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
              —
            </span>
          </>
        )}
        <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
          {formattedDate}
        </p>
      </div>
      <div className="prose dark:prose-dark w-full max-w-none">
        <MarkdownPages content={content} />
      </div>
    </>
  );
}
