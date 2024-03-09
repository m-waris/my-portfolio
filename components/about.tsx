"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg text-justify">
        I am from Pakistan. I am result-oriented developer with a proven track record in crafting dynamic and responsive websites. Proficient in
        leveraging a diverse skill set including HTML, CSS, JavaScript, React, Node.js, and other cutting-edge technologies.
        Demonstrated expertise in designing and implementing innovative solutions that enhance user experiences.
        I started my journey in web development out of curiosity, and it has now become my passion. 
        I aim to create dynamic, user-friendly websites that go above and beyond expectations.
        I'm always learning and exploring new technologies to improve my skills and deliver outstanding results.

      </p>

    </motion.section>
  );
}
