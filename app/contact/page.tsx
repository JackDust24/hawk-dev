import React from "react";

export default function ContactPage() {
  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">
        Contact Me
      </h1>
      <p className="text-lg text-primary-lighter mb-4">
        I&apos;d love to hear from you! Whether you have a project in mind, want
        to collaborate, or looking for a frontend or a fullstack developer, feel
        free to get in touch by email, LinkedIn or phone.
      </p>

      <h2 className="text-2xl font-semibold text-primary-foreground mt-6 mb-2">
        Contact Details
      </h2>
      <ul className="text-primary-lighter">
        <li>
          Email:{" "}
          <a href="mailto:your-email@example.com" className="underline">
            jason.hawkdev@gmail.com
          </a>
        </li>
        <li>Phone/Whatsapp: +66 8208 17453</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/whittakerjason"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/whittakerjason
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://www.github.com/JackDust24"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://www.github.com/JackDust24
          </a>
        </li>
      </ul>
    </div>
  );
}
