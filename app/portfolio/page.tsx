import { portfolioProjects } from "@/content/projects/projects";
import PortfolioCard from "./components/PortfolioCard";

export default function PortfolioPage() {
  const projects = portfolioProjects;

  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-start mb-8 text-primary-foreground">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <PortfolioCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
