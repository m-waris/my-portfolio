"use client";

import Image from "next/image";
import waris from "./waris.jpg";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <a
            className="bg-white/60 p-4 h-12 mt-8 mr-5 text-gray-700 hover:text-gray-950 hover:bg-white rounded-full  cursor-pointer  dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/10 transition duration-300"
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
            className="bg-white/60 p-4 h-12 mt-8 ml-5 text-gray-700 hover:text-gray-950 hover:bg-white rounded-full  cursor-pointer  dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/10 transition duration-300"

            href="https://github.com/m-waris"
            target="_blank"
          >
            <BsGithub className="text-lg" />
          </a>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-[2rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
       <span className=" tracking-wider font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-blue-900 animate-pulse ">WELCOME! </span>  <br /> I'm{" "}
        <span className="font-bold italic">Waris</span>,
        a passionate web developer dedicated to crafting exceptional digital experiences.
        I blend creativity with functionality to deliver impactful websites.

      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-black"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-black"
          href="/muhammad-waris-mahmood-resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>


      </motion.div>
    </section>
  );
}
