import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWordpress } from "react-icons/fa";
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
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    description:
      "I worked as a web development intern for 3 months. I learned HTML, CSS, JavaScript, React and Next.js.",
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    company: "Inter Pakistan",
    description:
      "I worked as a front-end developer intern for 3 months. I learned React, TypeScript, Tailwind and Framer Motion.",
    icon: React.createElement(FaWordpress),
    date: "2019 - 2021",
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
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
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
  },
  {
    title: "Intern Certificate",
    imageUrl: intern,
    date: "2023",
  },

] as const;