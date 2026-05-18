'use client'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certificatesData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeSlide = (newIndex: number, directionValue: number) => {
    setDirection(directionValue);
    setCurrent(newIndex);
  };

  const previousSlide = () => {
    changeSlide(current === 0 ? certificatesData.length - 1 : current - 1, -1);
  };

  const nextSlide = () => {
    changeSlide(current === certificatesData.length - 1 ? 0 : current + 1, 1);
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      previousSlide();
    }
  };

  return (
    <div className="overflow-hidden relative mb-28 w-[20rem] sm:w-120 md:w-160 lg:w-212 scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Certificates</SectionHeading>
      <div className="relative mx-auto mt-6 h-72 sm:h-160 rounded-3xl overflow-hidden bg-zinc-950/5 shadow-lg">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
          >
            <Image
              src={certificatesData[current].imageUrl}
              alt={certificatesData[current].title}
              width={3000}
              height={300}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-3 sm:px-6 text-zinc-700 text-4xl">
          <button
            type="button"
            onClick={previousSlide}
            className="pointer-events-auto rounded-full bg-white/90 p-1 text-zinc-800 shadow-lg transition hover:bg-white"
            aria-label="Previous certificate"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="pointer-events-auto rounded-full bg-white/90 p-1 text-zinc-800 shadow-lg transition hover:bg-white"
            aria-label="Next certificate"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
