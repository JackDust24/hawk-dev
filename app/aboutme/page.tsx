import React from "react";

export default function AboutPage() {
  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">
        About Me
      </h1>
      <p className="text-lg text-primary-lighter mb-4">
        Hi there! I&apos;m a passionate Frontend Developer with years of
        experience working across diverse industries. My expertise spans
        Fullstack Development, Project Management, and Technical Support. With a
        deep understanding of modern web technologies and a focus on delivering
        impactful user experiences, I bring a unique blend of creativity and
        technical know-how to every project.
      </p>
      <p className="text-lg text-primary-lighter mb-4">
        I thrive on solving complex problems and take pride in building robust,
        scalable solutions that drive business success. Whether it&apos;s
        crafting pixel-perfect user interfaces, managing cross-functional teams,
        or supporting technical systems, I&apos;m dedicated to achieving
        excellence in everything I do.
      </p>

      <h2 className="text-2xl font-semibold text-primary-foreground mt-6 mb-2">
        Skills
      </h2>
      <ul className="list-disc pl-6 text-primary-lighter">
        <li>
          Frontend Development: React, Next.js, TailwindCSS, Redux, TypeScript,
          JavaScript
        </li>
        <li>
          Backend Development: Node.js, Express, PostgreSQL, MongoDB, RESTful
          API, websockets
        </li>
        <li>
          Fullstack Development: React Native, Swift, Cloudfare, AWS Amplify
        </li>
        <li>Project Management: Agile methodologies, Jira, Confluence</li>
        <li>
          Technical Support: System troubleshooting, Documentation, Support
          workflows
        </li>
        <li>UI/UX Design: Figma, Responsive Design Principles</li>
        <li>CMS: Wordpress, PayloadCMS, Tina.io, StrapiCMS, Contentful</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary-foreground mt-6 mb-2">
        Main Projects
      </h2>
      <ul className="list-disc pl-6 text-primary-lighter">
        <li>
          <strong>E-commerce Platform:</strong> Developed a fully responsive B2B
          e-commerce web application which enables users to design their own
          product.
        </li>
        <li>
          <strong>Mobile Sales Device:</strong> Built a sales device in React
          Native for a leading education system
        </li>
        <li>
          <strong>Electron Meeting collaboration system:</strong> A touchscreen
          which combines hardware, software and common sense into an all-in-one
          meeting ecosystem.
        </li>
        <li>
          <strong>Fullstack E-commerce Platform:</strong> Developed a fully
          responsive Travel e-commerce web application which enabled businesses
          to set up their products and manage discounts.
        </li>
      </ul>
    </div>
  );
}
