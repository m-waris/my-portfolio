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
      <p className="mb-3">
        I'm a <span className="font-medium">software engineer</span> based in
        the Pakistan. I enjoy building things that live on the internet, whether
        that be websites, applications, or anything in between. My goal is to
        always build products that provide{" "}
        <span className="font-medium">pixel-perfect</span>, performant
        experiences.

      </p>
    
    </motion.section>
  );
}
