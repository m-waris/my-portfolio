"use client";

import { certificatesData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const Certificates = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
      });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="flex flex-wrap justify-center">
      {certificatesData.map((item, index) => (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
              }}
          className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
        >
          <motion.div
            
            className="relative group overflow-hidden rounded-md shadow-md"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-cover rounded-md shadow-md group-hover:blur-sm group-hover:opacity-50 duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className=" text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.date}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Certificates;
