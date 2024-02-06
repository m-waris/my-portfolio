"use client";
import { useState } from "react";
import { certificatesData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import SectionHeading from "./section-heading";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Certificates = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(certificatesData.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === certificatesData.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 ">
      <SectionHeading>My Certificates</SectionHeading>
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {certificatesData.map((certificate, i) => {
          return ( 
                <Image
                key={i}
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  width={3000}
                  height={300}
                  className="  w-full h-full object-cover"
                />

          );

        }
        )}
      </div>

      <div className=" absolute w-full h-full top-1   flex justify-between items-center  text-zinc-700  text-4xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill /> 
        </button>
      </div>


    </div>


  );
};

export default Certificates;
