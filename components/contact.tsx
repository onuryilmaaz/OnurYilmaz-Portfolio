"use client";

import React from "react";
import { FC } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/utils/send-email";
import { useForm } from "react-hook-form";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const { ref } = useSectionInView("Contact", 0.4);

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

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:onuryilm.41@gmail.com">
          onuryilm.41@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit(async (data) => {
          try {
            await sendEmail(data);
            toast.success("Email sent successfully!");
          } catch (error) {
            toast.error("Failed to send email. Please try again.");
          }
        })}
      >
        <input
          className="h-14 px-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          {...register("name", { required: true })}
          type="text"
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          {...register("email", { required: true })}
          type="email"
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          {...register("message", { required: true })}
          placeholder="Your message"
          maxLength={5000}
        />
        <SubmitBtn pending={isSubmitting} />
      </form>
    </motion.section>
  );
};

export default Contact;
