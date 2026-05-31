"use client";

import Image from "next/image";
import waris from "./waris.jpg";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref: sectionRef } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "WELCOME! ";
  return (
    <section
      ref={sectionRef}
      id="home"
      className="mb-28 max-w-200 text-center sm:mb-0 scroll-mt-400"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="flex justify-center items-center"
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <a
            className="bg-white/60 p-4 h-12 mt-8 mr-5 text-gray-700 hover:text-gray-950 hover:bg-white rounded-full  cursor-pointer  dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/80 transition duration-300"
            href="https://www.linkedin.com/in/muhammad-waris-mahmood-16503820b/"
            target="_blank"
          >
            <BsLinkedin className="text-lg" />
          </a>

          <Image
            src={waris}
            alt="wairs portrait"
            className="w-52 rounded-full border-[0.35rem] border-stone-200 shadow-xl"
          />
          <a
            className="bg-white/60 p-4 h-12 mt-8 ml-5 text-gray-700 hover:text-gray-950 hover:bg-white rounded-full  cursor-pointer  dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/80 transition duration-300"
            href="https://github.com/m-waris"
            target="_blank"
          >
            <BsGithub className="text-lg" />
          </a>
        </motion.div>
      </div>
      <div className="flex space-x-1 justify-center mt-4">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.p
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-2xl text-center sm:text-4xl font-black tracking-tighter md:text-6xl md:leading-16 text-transparent bg-clip-text bg-linear-to-br from-slate-500 to-stone-500 opacity-50"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

      <motion.h2
        ref={ref}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="text-xl text-center sm:text-2xl font-bold tracking-tighter md:text-4xl md:leading-16"
      >
        I'm <span className="font-bold italic">Waris</span>, a full-stack web
        developer passionate about building modern and user-focused web
        experiences.
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-black"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-black"
          href="/Muhammad Waris Mahmood - Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
