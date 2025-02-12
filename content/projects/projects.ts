export type ProjectType = {
  image: string;
  link: string;
  title: string;
  description: string;
  clientInfo: string;
  howToUse: string;
  techStack: string;
  deployedInfo: string;
  clickable: boolean;
  deployed: boolean;
};
export const portfolioProjects: ProjectType[] = [
  {
    image: "/uploads/WFH_Studio.webp",
    link: "https://wfh-request-system.vercel.app",
    title: "Work From Home Request System",
    description: "A Back Office for HR to manage Work From Home requests.",
    clientInfo: "Mock Application",
    howToUse: "Login and request time off",
    techStack: "React, Typescript",
    deployedInfo: "Deployed on Vercel",
    clickable: true,
    deployed: true,
  },
  {
    image: "/uploads/HawkProducts.png",
    link: "https://hawk-products.vercel.app/",
    title: "Hawk Products",
    description: "eCommerce site for ordering kitchen products.",
    clientInfo: "Freelance project",
    howToUse: "Just a demo site - no real orders can be made.",
    techStack: "React, Node.js, Typescript, Supabase, TailwindCSS",
    deployedInfo: "Vercel",
    clickable: true,
    deployed: true,
  },
  {
    image: "/uploads/YellowLogo.webp",
    link: "https://github.com/JackDust24/user-mgmt",
    title: "User Management",
    description: "User Management System with Admin Dashboard.",
    clientInfo: "Personal project",
    howToUse:
      "In Progress - Instructions to be added, but can see code base on Github",
    techStack: "HTMX, Golang, TEMPL, Postgres, TailwindCSS",
    deployedInfo: "Vercel",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/Trips.webp",
    link: "https://thai-trips.vercel.app/",
    title: "Hiking Trip",
    description: "Mini e-Commerce site for travel and dashboard.",
    clientInfo: "Personal project",
    howToUse:
      "Log in with test@test.com, password - test@1234 to access Admin Dashboard.",
    techStack: "Next.js, Typescript, Postgres, Stripe",
    deployedInfo: "Vercel",
    clickable: true,
    deployed: true,
  },
  {
    image: "/uploads/Flights.webp",
    // link: "http://52.221.201.49:3000/", // Live site
    link: "https://github.com/JackDust24/hawk-flights",
    title: "Flight booking",
    description: "Demo project for booking fake flights.",
    clientInfo: "Personal project",
    howToUse: "Book a flight - this is just a demo, not a real booking system.",
    techStack: "Next.js, Node.js/Express, Typescript, SQLLite",
    deployedInfo:
      "Deployed with Docker in AWS. UPDATE - To save costs temp stopped AWS instance",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/AI_Chat.webp",
    link: "https://github.com/JackDust24/hawk-websockets",
    title: "Loyalty Program",
    description: "Loyalty Program SaaS with AI & chat application.",
    clientInfo: "Personal project",
    howToUse:
      "In Progress - Will be deployed at later date, but can see code base on Github",
    techStack:
      "React, Node.js/Express, OpenAI, MongoDB, websockets, React Native",
    deployedInfo: "Will be deployed to AWS",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/Equinox.webp",
    link: "https://equinoxmarketing.com/",
    title: "Hotel Loyalty Program",
    description: "Website for Loyalty Program built with WordPress.",
    clientInfo: "Equinox Marketing - Loyalty Program company in Bangkok",
    howToUse: "n/a",
    techStack: "Wordpress",
    deployedInfo: "Wordpress, A2 Hosting",
    clickable: true,
    deployed: true,
  },
  {
    image: "/uploads/greenlayer.png",
    link: "/",
    title: "B2B e-commerce site",
    description:
      "B2B e-Commerce site for users to create own designs by uploading their own logos",
    clientInfo: "Freelance for B2B client",
    howToUse: "Not for public use - will show link when released to client",
    techStack: "Static Next.js, Cloudfare, Typescript, TailwindCSS",
    deployedInfo: "Static Next.js",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/FriendsAttack.webp",
    link: "https://github.com/JackDust24/FriendsAttack",
    title: "iOS AR shootem up",
    description: "Take photos of your friend and shootem up in AR setting",
    clientInfo: "Personal project",
    howToUse: "No longer live on Apple Store - but can see code on GitHub",
    techStack: "Swift, AR",
    deployedInfo: "Apple Store",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/YellowLogo.webp",
    link: "https://github.com/JackDust24/hawk-price-feeds",
    title: "Price Feed",
    description: "Price feed comaprison.",
    clientInfo: "Personal project",
    howToUse:
      "In Progress - Soon to be deployed but can see code base on Github",
    techStack: "Node, Next.js, Pusher and Kafka, ReactCharts",
    deployedInfo: "AWS, Docker",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/TodayX.webp",
    link: "https://github.com/JackDust24/TodayX",
    title: "TodayX",
    description: "Weather and Productivity Mobile App.",
    clientInfo: "Personal app",
    howToUse:
      "No longer on Apple or Google Play Store - can see code on Github",
    techStack: "Swift",
    deployedInfo: "Apple Store",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/Interpass.webp",
    link: "https://github.com/JackDust24/interpass",
    title: "Interpass Mobile app",
    description: "Information mobile app for education department.",
    clientInfo: "Education company in Bangkok",
    howToUse:
      "No longer on Apple or Google Play Store - Can see code on Github",
    techStack: "React Native",
    deployedInfo: "Apple Store and Google Play",
    clickable: true,
    deployed: false,
  },
];
