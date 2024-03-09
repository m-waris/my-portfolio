import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogapp from "@/public/blogapp.jpeg";
import filmiapp from "@/public/fimiapp.jpeg";
import foodapp from "@/public/foodapp.jpeg";
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
    title: "Teacher Assistant",
    location: "Faisalabad",
    company: "FAST NUCES",
    description:"Provided support to the instructor in the Web Engineering course. "+
    "Offered one-on-one assistance to students to address individual learning needs and challenges. "+
    "Graded assignments and quizzes to provide constructive feedback and track student progress. "+
    "Collaborated closely with instructors to create a supportive and engaging learning environment",
    date: "Feb 2024 - Present",
  },
  {
    title: "Web Development Intern",
    location: "Remote",
    company: "FastDev Labs",
    description:"Contributed to a client project, developing and maintaining React.js front-end components. " +
    "Implemented server-side logic and API integration using Node.js and Express.js. " +
    "Collaborated with cross-functional teams, ensuring project delivery within deadlines. " +
    "Acquired skills in responsive design, RESTful APIs, and MongoDB database management. ",

    date: "Jul 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title:'Full Stack Blog App',
    description: 'Blog app with features user authentication, CRUD operations for blog posts, and a responsive design using Tailwind CSS. Achieved seamless integration of front-end and back-end functionalities.',
    tags: ['NextJs', 'MongoDB', 'Tailwind', 'Express', 'Node.js','NextAuth'],
    imageUrl: blogapp,
  },
  {
    title: "Food Delivery App",
    description:
      "Developed a food delivery web application with features like user authentication, menu browsing, order placement, and add to cart. Ensured a responsive design using Tailwind CSS for a seamless user experience.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Node.js"],
    imageUrl: foodapp,
  },
  {
    title: "Filmi App",
    description:
      "Developed a movie web application that allows users to search for movies. Implemented a responsive design using CSS. Integrated API to fetch movie data and display it to users.",
    tags: ["React","CSS", "OMDB API"],
    imageUrl: filmiapp,
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