import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.owner} — ${site.email}`,
};

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone / WhatsApp",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/whittakerjason",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/JackDust24",
    href: site.github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Contact
      </p>
      <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
        Tell me what you want to ship.
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
        Product, ecommerce, an agent, or a team that needs delivery from brief
        to release. Email is fastest. {site.location}.
      </p>

      <ul className="mt-12 max-w-lg border-t border-line">
        {contacts.map((item) => (
          <li
            key={item.label}
            className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {item.label}
            </span>
            <a
              href={item.href}
              className="text-ink transition-colors hover:text-accent"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
