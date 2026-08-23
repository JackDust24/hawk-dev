import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <Link
            href="/contact"
            className="text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
