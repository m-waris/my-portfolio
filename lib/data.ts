import blogapp from "@/public/webman.tech_.png";
import biadesign from '@/public/Screenshot_8-10-2024_135755_biadesigns.com.jpeg'
import taxcel from '@/public/thetaxcel.com_.png'
import filmiapp from "@/public/fimiapp.jpeg";
import foodapp from "@/public/cravings-flame-nu.vercel.app_.png";
import fastdev from "@/public/fastdev.png";
import wordpress from "@/public/wordpress.jpg";
import react from "@/public/react.jpg";
import javascript from "@/public/javascript.jpg";
import html from "@/public/html.jpg";
import intern from "@/public/Intern Certificate.jpg";
import numpy from "@/public/numpy.jpg";
import data from "@/public/Data Manipulation in SQL.jpg";

import { FaCircle } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experiance",
    hash: "#experiance",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Remote",
    company: "EBD",
    description: "Developing a full-stack Kanban and ticket management platform using Next.js, Supabase, Zustand and Zod. " +
      " Built analytics dashboards displaying ticket metrics, along with real-time recent activity tracking." +
      " Integrated OpenAI APIs to provide AI-powered ticket comment suggestions and workflow assistance. " +
      " Implemented authentication and session management using Supabase Auth with role-based access control. " +
      " Developed organizations invite workflows enabling secure user onboarding and team collaboration. " +
      " Designed and implemented a notification system for ticket updates and assignment events. " +
      " Focused on scalable architecture, reusable components, and responsive user experience. ",
    date: "Mar 2026 - Present",
  },
  {
    title: "Software Engineer",
    location: "Lahore",
    company: "Devsinc",
    description: "Built and maintained scalable frontend components for a multi-role platform" +
      " Used React Query for efficient server-state management, caching, background refetching, and API synchronization." +
      " Designed intuitive dashboards that transformed complex datasets (scores, achievements, media) into clear UI experiences." +
      " Integrated Twilio SMS for real-time profile sharing and invitation flows." +
      " Focused on performance, responsiveness, and usability across desktop and mobile.",
    date: "Jan 2025 - Apr 2026",
  },
  {
    title: "Next.js Developer",
    location: "Faisalabad",
    company: "MULTI-TECHNO Integrated Solutions",
    description: "Designed and implemented responsive UI components for ERP modules including Sales and Inventory." +
      " Worked on reusable components and layout patterns to ensure consistency across large-scale applications." +
      " Collaborated with cross-functional teams to align UI behavior with business workflows." +
      " Worked within structured Git workflows and collaborative Agile processes.",
    date: "Oct 2024 - Dec 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Lahore",
    company: "Bid Data Analytics",
    description: "Maintained and optimized 20+ web scrapers using Python, Selenium, and Scrapy." +
      " Automated data pipelines and improved data accuracy by ~60% through validation and cleaning." +
      " Uploaded and managed large datasets using AWS S3 buckets, ensuring secure and reliable data storage",
    date: "Jul 2024 - Sep 2024",
  },
  {
    title: "Teacher Assistant",
    location: "Faisalabad",
    company: "FAST NUCES",
    description: "Provided support to the instructor in the Web Engineering course. " +
      "Offered one-on-one assistance to students to address individual learning needs and challenges. " +
      "Graded assignments and quizzes to provide constructive feedback and track student progress. " +
      "Collaborated closely with instructors to create a supportive and engaging learning environment",
    date: "Feb 2024 - June 2024",
  },
  {
    title: "Web Development Intern",
    location: "Remote",
    company: "FastDev Labs",
    description: "Contributed to a client project, developing and maintaining React.js front-end components. " +
      "Implemented server-side logic and API integration using Node.js and Express.js. " +
      "Collaborated with cross-functional teams, ensuring project delivery within deadlines. " +
      "Acquired skills in responsive design, RESTful APIs, and MongoDB database management. ",

    date: "Jul 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: 'Webman Tech - Personal Blog Website',
    description: 'My personal blog website where I write about web development, programming, and technology.',
    tags: ['NextJs', 'Sanity', 'Tailwind', 'Framer Motion'],
    imageUrl: blogapp,
    weburl: 'https://webman.tech/',
    githublink: '',
  },
  {
    title: "Food Delivery App",
    description:
      "Developed a food delivery web application with features like user authentication, menu browsing, order placement, and add to cart. Ensured a responsive design using Tailwind CSS for a seamless user experience.",
    tags: ["Next Js", "Firebase", "Tailwind", "Shadcn UI", "Cloudinary"],
    imageUrl: foodapp,
    githublink: '',
    weburl: 'https://cravings-flame-nu.vercel.app/',
  },
  {
    title: 'Business Portfolio for Client',
    description: 'Portfolio website for clinet, who are accountants. The website showcases their services and contact information and more',
    tags: ['Wordpress', 'Elementor', 'LiteSpeedCache', 'Custom Code'],
    imageUrl: taxcel,
    githublink: '',
    weburl: 'https://thetaxcel.com/',
  },
  {
    title: 'Brand Portfolio for Client',
    description: 'Portfolio website for clinet, who is graphic designer ad a book cover artist. The website showcases her art and services that she provieds alogwith her contact information',
    tags: ['Wordpress', 'Elementor', 'LiteSpeedCache', 'Custom Code'],
    imageUrl: biadesign,
    githublink: '',
    weburl: 'https://biadesigns.com/',
  },

  {
    title: "Filmi App",
    description:
      "Developed a movie web application that allows users to search for movies. Implemented a responsive design using CSS. Integrated API to fetch movie data and display it to users.",
    tags: ["React", "CSS", "OMDB API"],
    imageUrl: filmiapp,
    githublink: 'https://github.com/m-waris/filmiApp',
    weburl: '',

  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Github",
  "Redux",
  "MongoDB",
  "Firebase",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "RESTful APIs",
  "Responsive Design",

] as const;

export const certificatesData = [
  {
    title: "Web Development Intern",
    imageUrl: fastdev,
    date: "2023",
  },
  {
    title: "Front-End Developer Intern",
    imageUrl: wordpress,
    date: "2023",
  },
  {
    title: "React",
    imageUrl: react,
    date: "2023",
  },
  {
    title: "JavaScript",
    imageUrl: javascript,
    date: "2023",
  },
  {
    title: "HTML",
    imageUrl: html,
    date: "2023",
  },
  {
    title: "Data Manipulation in SQL",
    imageUrl: data,
    date: "2023",
  },
  {
    title: "Numpy",
    imageUrl: numpy,
    date: "2023",
  }

] as const;