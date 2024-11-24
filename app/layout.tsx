import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav, NavLink } from "@/components/nav";
import Link from "next/link";
import Image from "next/image";
import YellowLogo from "@/public/YellowLogo.png";
import BlueLogo from "@/public/BlueLogo.png";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HawkDev Portfolio",
  description: "Portfolio of work built",
};

type ThemeType = "theme-blue" | "theme-yellow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = "theme-blue" as ThemeType;
  const logoSrc = theme === "theme-blue" ? BlueLogo : YellowLogo;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme} bg-primary-main text-primary-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="w-full fixed top-0 left-0 z-50 bg-primary-main shadow-md">
            <Nav className="container flex justify-between">
              <div className="flex space-x-4 relative">
                <div className="flex top-0">
                  <Link href="/" passHref>
                    <Image
                      src={logoSrc}
                      alt="hawkdev"
                      style={{ objectFit: "contain" }}
                      width={100}
                      height={100}
                      draggable={false}
                    />
                  </Link>
                </div>
                <NavLink href="/posts">Blog</NavLink>
                <NavLink href="/aboutme">About Me</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </Nav>
          </header>
          <main className="flex-grow py-[60px] mt-[40px] px-6 md:px-0">
            {children}
          </main>
          <footer className="row-start-3 w-full flex text-white gap-6 flex-wrap items-center justify-center  bg-black">
            <div className="pl-8">
              © {new Date().getFullYear()} HawkDev. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
