"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
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
              className="bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg shadow-[var(--card-border)] rounded-md transform hover:scale-105 transition-transform duration-200"
            >
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={
                      post.heroImg.startsWith("/")
                        ? post.heroImg
                        : `/${post.heroImg}`
                    }
                    alt={post.title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-t-md object-cover"
                    priority={index < 3}
                    placeholder="blur"
                    blurDataURL="/image-loading-placeholder.webp"
                  />
                </div>
                <CardTitle className="text-xl font-bold mt-4 text-[var(--card-text)] line-clamp-2 h-[3.4rem] overflow-hidden">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-[var(--card-text)] line-clamp-2 h-[3rem] overflow-hidden">
                  {post.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-1 text-[var(--card-text)]">
                <div className="line-clamp-3">
                  <ReactMarkdown>{post.excerpt}</ReactMarkdown>
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
