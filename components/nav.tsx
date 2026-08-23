"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <nav className={cn("text-ink", className)}>{children}</nav>;
}

export function NavLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const href = typeof props.href === "string" ? props.href : "";
  const isActive = href !== "/" && pathname.startsWith(href);

  return (
    <Link
      {...props}
      className={cn(
        "text-sm tracking-wide text-muted transition-colors hover:text-ink",
        isActive && "text-accent",
        className
      )}
    />
  );
}
