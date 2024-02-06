'use client'
import "./horizontalscroll.css";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

export default function Skills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", 'true');

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        var scrollerContent=null
        if(scrollerInner!== null){  scrollerContent = Array.from(scrollerInner.children)}

        scrollerContent?.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
  }, []); 

  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      {/* Add the necessary class for horizontal scrolling */}
      <div className="scroller max-w-[600px]" >
        <div className="scroller__inner">
          {skillsData.map((skill, index) => (
            <div
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
