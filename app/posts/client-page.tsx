"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

interface Post {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  excerpt: string;
  poster: string;
  heroImg: string;
  _sys: {
    breadcrumbs: string[];
  };
}

interface PostsClientPageProps {
  posts: Post[];
}

export default function PostsClientPagee({ posts }: PostsClientPageProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {posts.map((post, index) => {
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
              className={`group relative p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer flex flex-col h-full`}
            >
              <CardHeader className="relative">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md shadow-gray-500/40">
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                  )}
                  <Image
                    src={
                      post.heroImg.startsWith("/")
                        ? post.heroImg
                        : `/${post.heroImg}`
                    }
                    alt={post.title}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      isImageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsImageLoading(false)}
                    priority={index < 3}
                  />
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 h-[3.4rem] overflow-hidden mb-4">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 h-[3rem] overflow-hidden">
                  {post.subtitle}
                </CardDescription>
                <div className="p-1 mb-1 text-sm line-clamp-4 text-gray-700 dark:text-gray-400 bg-gray-600 rounded-xl bg-opacity-10">
                  <ReactMarkdown>{post.excerpt}</ReactMarkdown>
                </div>
              </CardContent>

              <CardFooter className="mt-auto px-4 py-2 flex justify-between text-sm text-gray-700 dark:text-gray-300">
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
