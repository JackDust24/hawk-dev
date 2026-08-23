import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jason Whittaker — fullstack developer in Bangkok. Ecommerce, AI agents, and delivery from brief to release.",
};

const skillGroups = [
  {
    label: "Product",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Go", "Postgres"],
  },
  {
    label: "Ecommerce",
    items: ["Storefronts", "Customizers", "Checkout", "Ops dashboards", "B2B / B2C"],
  },
  {
    label: "AI",
    items: ["Agents", "Chatbots", "OpenAI", "Product-embedded assistants"],
  },
  {
    label: "Delivery",
    items: ["Agile", "Scope", "Stakeholders", "Jira", "Release"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Swift"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        About
      </p>
      <h1 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
        I build products and take them through to something a team can run.
      </h1>

      <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          I&apos;m Jason Whittaker, a fullstack developer based in Bangkok.
          I work across frontend, backend, and the delivery around them —
          from the first brief through launch.
        </p>
        <p>
          A lot of that work is{" "}
          <span className="text-ink">ecommerce</span>: storefronts,
          customizers, catalogs, checkout, and the ops dashboards merchandising
          and support actually use. I care about the path from a product idea
          to an order that can be fulfilled, not a pretty catalog that dies in
          staging.
        </p>
        <p>
          I also build{" "}
          <span className="text-ink">AI agents and chatbots</span> that live
          inside real products — support, internal tools, loyalty and chat —
          wired into the same APIs and data the rest of the system uses. A
          bot that can&apos;t act on the product is just a demo.
        </p>
        <p>
          The other half is{" "}
          <span className="text-ink">project management</span>. I scope work,
          sit with stakeholders, and run Agile delivery so engineering is not
          the only thing that moves. Code without a path to release is still
          unfinished.
        </p>
      </div>

      <h2 className="mt-16 text-xl font-medium tracking-tight">How I work</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Start with the outcome, then the smallest system that can deliver it.
        I write the interfaces and the services, and I stay in the room for
        scope changes, launch, and the first weeks after. If you need someone
        who can both ship the product and keep the project honest, that is the
        work I want.
      </p>

      <h2 className="mt-16 text-xl font-medium tracking-tight">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 text-muted">
        Want to work together?{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
}
