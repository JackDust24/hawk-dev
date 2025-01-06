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
    image: "/uploads/WFH_Studio.png",
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
    image: "/uploads/Trips.png",
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
    image: "/uploads/Flights.png",
    link: "http://52.221.201.49:3000/",
    title: "Flight booking",
    description: "Demo project for booking fake flights.",
    clientInfo: "Personal project",
    howToUse: "Book a flight - this is just a demo, not a real booking system.",
    techStack: "Next.js, Node.js/Express, Typescript, SQLLite",
    deployedInfo: "Deployed with Docker in AWS",
    clickable: true,
    deployed: true,
  },
  {
    image: "/uploads/AI_Chat.png",
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
    image: "/uploads/Equinox.png",
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
    image: "/uploads/BlueLogo.png",
    link: "https://beta.green-layer.com/",
    title: "B2B e-commerce site",
    description: "B2B e-Commerce site for users to create own designs",
    clientInfo: "Freelance for B2B client",
    howToUse: "Not for public use - will show link when released to client",
    techStack: "Static Next.js, Cloudfare, Typescript, TailwindCSS",
    deployedInfo: "Static Next.js",
    clickable: false,
    deployed: false,
  },
  {
    image: "/uploads/FriendsAttack.png",
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
    image: "/uploads/BlueLogo.png",
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
    image: "/uploads/BlueLogo.png",
    link: "https://github.com/JackDust24/hawk-ntfs",
    title: "NFT Marketplace",
    description: "NFT Marketplace fullstack project.",
    clientInfo: "Personal project",
    howToUse: "Not deployed, personal - Can see code on Github",
    techStack: "Solidity, Next.js, Graph",
    deployedInfo: "Not deployed",
    clickable: true,
    deployed: false,
  },
  {
    image: "/uploads/TodayX.png",
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
    image: "/uploads/Interpass.png",
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
  {
    image: "/uploads/BlueLogo.png",
    link: "/",
    title: "Profile Application",
    description: "Application for registering to a site.",
    clientInfo: "For learning purposes",
    howToUse:
      "Not in use at the moment - IN PROGRESS - will be deployed at later date",
    techStack: "HTMX, Golang, TEMPL",
    deployedInfo: "N/A",
    clickable: false,
    deployed: false,
  },
];
