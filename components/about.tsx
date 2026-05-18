"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { filter: "blur(20px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg text-justify">
        I'm a full-stack developer from Pakistan with a strong passion for
        creating modern, responsive, and user-centric web applications. I
        specialize in technologies like React.js, Next.js, Node.js, TypeScript,
        Firebase, and Tailwind CSS, and I enjoy building products that are both
        visually appealing and technically robust. My journey into web
        development started with curiosity and quickly grew into a long-term
        passion. Over the years, I’ve worked on client projects, dashboards,
        onboarding systems, and scalable web applications, constantly improving
        my problem-solving and development skills. I focus on writing clean,
        maintainable code and creating seamless user experiences that deliver
        real value. I’m always exploring new technologies, refining my craft,
        and pushing myself to build better products with every project.
      </p>
    </motion.section>
  );
}
