import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import fastdev from "@/public/fastdev.png";
import wordpress from "@/public/wordpress.jpg";
import react from "@/public/react.jpg";
import javascript from "@/public/javascript.jpg";
import html from "@/public/html.jpg";
import intern from "@/public/Intern Certificate.jpg";
import numpy from "@/public/numpy.jpg";
import data from "@/public/Data Manipulation in SQL.jpg";
import rmtdevImg from "@/public/rmtdev.png";
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
    title: "Web Development Inter",
    location: "Remote",
    company: "FastDev Labs",
    description:"Contributed to a client project, developing and maintaining React.js front-end components. " +
    "Implemented server-side logic and API integration using Node.js and Express.js. " +
    "Collaborated with cross-functional teams, ensuring project delivery within deadlines. " +
    "Acquired skills in responsive design, RESTful APIs, and MongoDB database management. ",

    date: "Jul 2023 - Sep 2023",
  },
  {
    title: "Teacher Assistant",
    location: "Faisalabad",
    company: "FAST NUCES",
    description:"Assisted students in understanding programming concepts. " +
    "Conducted sessions on web development, teaching students how to build responsive websites using HTML, CSS, and JavaScript. " +
    "Mentored students in developing web applications using React.js and Node.js. ",
    date: "Feb 2024 - Jul 2024",
  }
] as const;

export const projectsData = [
  {
    title: "Food Delivery App",
    description:
      "A food delivery app with features like filtering, sorting and pagination. I was the front-end developer.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Node.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Filmi App",
    description:
      " A movie api app with features like filtering, sorting and pagination. I was the front-end developer.",
    tags: ["React","Tailwind"],
    imageUrl: rmtdevImg,
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