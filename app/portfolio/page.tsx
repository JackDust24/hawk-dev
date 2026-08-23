import type { Metadata } from "next";
import { WorkRow } from "@/components/work-row";
import { portfolioProjects } from "@/content/projects/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product, ecommerce, and AI work. New case studies landing soon.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Work
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
        Selected work
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        A new set of case studies is coming. These rows show the kinds of
        products I ship — ecommerce, agents, platforms, and delivery tools —
        until the live list lands.
      </p>
      <div className="mt-10 border-t border-line">
        {portfolioProjects.map((project) => (
          <WorkRow key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
