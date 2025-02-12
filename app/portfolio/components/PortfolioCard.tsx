"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ProjectType } from "@/content/projects/projects";

function PortfolioCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Card
      key={project.title}
      className={`group relative p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden transition-all duration-300 ${
        project.clickable
          ? "hover:shadow-xl hover:border-blue-500 cursor-pointer"
          : ""
      } flex flex-col h-full`}
    >
      <CardHeader className="relative">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md shadow-gray-500/40">
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
          )}
          <Image
            src={
              project.image.startsWith("/")
                ? project.image
                : `/${project.image}`
            }
            alt={`Project image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsImageLoading(false)}
            priority={index < 2}
            loading={index >= 2 ? "lazy" : undefined}
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
          {project.title}
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {project.description}
        </p>
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Project Type:
            </span>{" "}
            {project.clientInfo}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              How to use:
            </span>{" "}
            {project.howToUse}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Tech Stack:
            </span>{" "}
            {project.techStack}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Deployment:
            </span>{" "}
            {project.deployedInfo}
          </p>
        </div>
      </CardContent>

      {project.clickable && (
        <CardFooter className="mt-auto">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors duration-200"
          >
            {project.deployed ? "Visit site" : "See Code on Github"}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}

export default PortfolioCard;
