import { portfolioProjects } from "@/content/projects/projects";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function PortfolioPage() {
  const projects = portfolioProjects;

  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-start mb-8 text-primary-foreground">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="p-4 bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg shadow-gray-500 rounded-md transform hover:scale-105 transition-transform duration-200 flex flex-col h-full"
          >
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-xl font-bold text-primary-foreground text-center">
                {project.title}
              </CardTitle>
              <div className="image-container w-[300px] h-[200px] relative overflow-hidden mt-4">
                <Image
                  src={project.image}
                  alt={`Project image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="mt-6 text-start flex-grow">
              <CardDescription className="text-primary-foreground mb-4 text-lg">
                {project.description}
              </CardDescription>
              <div className="text-base text-primary-foreground">
                <p>
                  <span className="font-bold text-primary">Information:</span>{" "}
                  {project.clientInfo}
                </p>
                <p>
                  <span className="font-bold text-primary">How to use:</span>{" "}
                  {project.howToUse}
                </p>
              </div>
              <div className="text-base text-primary-foreground">
                <p>
                  <span className="font-bold text-primary">Tech Stack:</span>{" "}
                  {project.techStack}
                </p>
                <p>
                  <span className="font-bold text-primary">Deployment:</span>{" "}
                  {project.deployedInfo}
                </p>
              </div>
            </CardContent>
            {project.clickable ? (
              <CardFooter className="mt-6 flex justify-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  {project.deployed ? "Visit site" : "See Code on Github"}
                </Link>
              </CardFooter>
            ) : (
              <CardFooter className="mt-6 flex justify-center">
                <h3 className="text-gray-500 hover:text-gray-700 font-semibold">
                  Not yet available
                </h3>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
