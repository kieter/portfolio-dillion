import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kieter Balisnomo",
  initials: "KB",
  url: "https://kieter.com",
  location: "Vancouver, BC",
  locationLink: "https://www.google.com/maps/place/vancouver",
  description:
    "Senior software engineer + amateur designer = design engineer. Web developer, mostly frontend. Pretty good at CSS. Speaks English, French, and Japanese.",
  summary:
    "I quit my job in 2024 to take a well-needed break but now I'm back on the job hunt. I travelled Japan for nearly 2 months and moved from San Francisco back home with my family to Vancouver. Before then, I graduated in the top 10% of my computer science class in 2019, and moved to the San Francisco Bay Area for work. " +
      "\n\n[Currently building an improved portfolio website, designs here.](https://www.figma.com/design/KGn5YcAdnM6qRhoT8JhT50/Kieter's-Portfolio-Website?node-id=0-1&t=HTkI1cyO53qRU3ow-1) Credits to [Dillion Verma](https://dillion.io/) for this temporary home." ,
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Jest",
    "Cypress",
    "Playwright",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Git",
    "Vercel",
    "AWS",
    "Splunk",
    "Posthog",
    "Scrum",
    "Agile",
    "Figma"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "me@kieter.com",
    tel: "+15875994446",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/kieter-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/kieter-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/kieter-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@kieter.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Intuit",
      href: "https://quickbooks.intuit.com/",
      badges: ["San Francisco", "Vancouver"],
      location: "San Francisco",
      title: "Senior Software Engineer",
      logoUrl: "/intuit.png",
      start: "May 2019",
      end: "April 2024",
      description:
          "Engineering lead on a ground-up UX re-design and tech refresh initiative of QuickBooks Online's sales transaction pages using modern web technologies (React, Redux, TypeScript, PostCSS). Experienced by 1M+ global customers daily. Developed a Node server-side rendering service that converts HTML to PDF and facilitates web previews of QuickBooks Online's sales and expense transactions. Functioned as scrum lead, optimizing operational mechanisms, streamlining meeting efficiency, and effectively managing team productivity to drive project success. Served as a mentor and coach, providing guidance and training to apprentices, interns contractors, and new graduates; several of whom went on to receive promotions..",
    },
    {
      company: "Intuit",
      href: "https://quickbooks.intuit.com/",
      badges: ["San Francisco"],
      location: "San Francisco",
      title: "Software Engineering Intern",
      logoUrl: "/intuit.png",
      start: "April 2018",
      end: "August 2018",
      description:
          "Led an engineering team in the development and UI/UX design of the QuickBooks Admin Tool, a platform leveraged by 1k+ customer care representatives and 5k+ engineers to effectively support millions of small businesses, boosting their troubleshooting velocity. Acted as accessibility champion, improving tabbing and screen readability of high-traffic QuickBooks Online pages.",
    },
    {
      company: "Intuit",
      href: "https://quickbooks.intuit.com/",
      badges: ["Edmonton"],
      location: "Edmonton",
      title: "Software Developer Co-op",
      logoUrl: "/intuit.png",
      start: "Jan 2017",
      end: "April 2018",
      description:
          "Adapted key QuickBooks Online features for over 250k+ Canadian small businesses, incorporating bilingual support and provincial-specific features using modern web technologies. Implemented an advanced automated testing suite (Cypress, Playwright), enhancing weekly release speed by 2+ hours.",
    },

  ],
  education: [
    {
      school: "Emily Carr University of Art and Design",
      href: "https://www.ecuad.ca/",
      degree: "UI Design Certificate",
      logoUrl: "/ecuad.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "University of Alberta",
      href: "https://www.ualberta.ca",
      degree: "Bachelor of Science, Computer Science (BSc)",
      logoUrl: "/ualberta.png",
      start: "2014",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "Canadle",
      href: "https://canadle.ca",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "A Canadian trivia game. Guess the Canadian thing pictured or you're an American! New game every day! [As seen on famous streamer NorthernLion's and YouTube.](https://x.com/kieterdotca/status/1816142186242777373)",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://canadle.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/canadle.png",
      video: ""
    },
    {
      title: "Lo-fi Space",
      href: "https://www.figma.com/design/FH38VcGouReMmodotnYzUa/My-Lofi-App?node-id=62-2327&t=a4Ppd9byUR3WIQs5-1",
      dates: "Sep 2024 - Present",
      active: true,
      description:
          "A lo-fi music player and productivity space. Designed during my studies at Emily Carr and is currently being built.",
      technologies: [
        "Figma",
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Designs",
          href: "https://www.figma.com/design/FH38VcGouReMmodotnYzUa/My-Lofi-App?node-id=62-2327&t=a4Ppd9byUR3WIQs5-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/lofispace.png",
      video: ""
    }
  ],
  hackathons: []
} as const;
