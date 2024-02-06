'use client'
import { useState } from "react";
import { certificatesData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Certificates = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden relative mb-28 w-[20rem] sm:w-[30rem] md:[40rem] lg:w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Certificates</SectionHeading>
      <div className="flex transition ease-out duration-300" style={{ transform: `translateX(-${current * 100}%)` }}>
        {certificatesData.map((certificate, index) => (
          <div key={index} className="group w-full h-full flex-shrink-0">
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              width={3000}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full top-1 flex justify-between items-center text-zinc-700 text-4xl">
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
