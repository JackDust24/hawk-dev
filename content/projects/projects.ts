export type Project = {
  title: string;
  client: string;
  year: string;
  outcome: string;
  stack: string[];
  href?: string;
  featured: boolean;
  placeholder?: boolean;
};

export const portfolioProjects: Project[] = [
  {
    title: "Ecommerce platform",
    client: "Placeholder",
    year: "—",
    outcome:
      "Custom storefronts and ops dashboards for B2B and B2C — catalog, checkout, and the tools behind them.",
    stack: ["Next.js", "TypeScript", "Commerce"],
    featured: true,
    placeholder: true,
  },
  {
    title: "AI agent / chatbot",
    client: "Placeholder",
    year: "—",
    outcome:
      "A product-embedded assistant for support or internal tools — wired into real workflows, not a standalone demo.",
    stack: ["AI agents", "Chat", "APIs"],
    featured: true,
    placeholder: true,
  },
  {
    title: "Product platform",
    client: "Placeholder",
    year: "—",
    outcome:
      "A fullstack app from the first screen through the API and data layer, built to stay maintainable after launch.",
    stack: ["React", "Node", "Postgres"],
    featured: true,
    placeholder: true,
  },
  {
    title: "Delivery / ops tool",
    client: "Placeholder",
    year: "—",
    outcome:
      "An internal system taken from brief to release — scoped with stakeholders and shipped for the team that runs it.",
    stack: ["Admin", "Delivery"],
    featured: true,
    placeholder: true,
  },
];

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured);
}
