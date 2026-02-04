"use client";

import React, { useEffect, useActionState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  // useActionState takes (action, initialState)
  const [state, formAction] = useActionState<any, FormData>(sendEmail, {
    data: null,
    error: null,
  });

  // Handle Toasts based on state changes
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    } else if (state.data) {
      toast.success("Email sent successfully! 😊");
    }
  }, [state]);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/90">
        Please contact me at{" "}
        <a className=" font-medium" href="mailto: m.warismahmood@gmail.com">
          m.warismahmood@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-white/90"
        action={formAction}
      >
        <input
          className="h-14 px-4 rounded-lg bg-transparent border "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4  bg-transparent resize-none  border "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
