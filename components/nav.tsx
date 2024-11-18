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
  return (
    <nav className={cn("text-primary-foreground", className)}>{children}</nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "hover:text-primary-foreground text-primary-lighter h-100 flex items-center md:text-2xl focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "text-primary-foreground"
      )}
    />
  );
}
