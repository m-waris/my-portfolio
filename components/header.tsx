"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-999 relative">
      <motion.div
        className="fixed w-104 left-1/2 h-14 border border-black dark:border-zinc-500 border-opacity-40 bg-zinc-50 bg-opacity-80 shadow-lg shadow-black/3 backdrop-blur-sm bottom-6 sm:w-120 rounded-full dark:bg-gray-950 dark:bg-opacity-75"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      ></motion.div>

      <nav className="flex fixed left-1/2 h-12 -translate-x-1/2 py-2 bottom-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-88 flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links
            .filter((link) => link.name !== "Contact")
            .map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-100",
                    {
                      "text-gray-950 dark:text-gray-100":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-zinc-200 rounded-full absolute inset-0 -z-10 dark:bg-zinc-600"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );

}
