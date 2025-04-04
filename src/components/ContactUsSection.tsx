"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "motion/react";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),

  message: yup.string().required("Message is required"),
});

type ContactUsForm = yup.InferType<typeof schema>;

const ContactUsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (submitStatus.type) {
        setSubmitStatus({ type: null, message: "" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [submitStatus.type]);

  const form = useForm<ContactUsForm>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = async (data: ContactUsForm) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: "Abraham",
        time: new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "long",
        }),
      };

      await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        templateParams,
        YOUR_PUBLIC_KEY
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! I will get back to you soon.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contacts"
      className="py-10 md:py-20 bg-[#000319] flex items-center justify-center w-full"
    >
      <div className="w-[90%] flex flex-col gap-4">
        <motion.h1
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-4xl md:text-6xl font-bold text-[#BBCDE5] text-center"
        >
          Let's Connect
        </motion.h1>

        <div className="mt-5 md:mt-10 flex md:flex-row flex-col text-center md:text-left items-center justify-between gap-8 text-[#FEFEFF]">
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="flex self-start flex-col gap-6"
          >
            <p className="text-xl md:text-4xl">
              Have a question or just want to connect? Feel free to reach out!
            </p>

            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="flex flex-col gap-2"
            >
              <label className="font-bold">MY PHONE</label>
              <label className="text-sm">+2348061909748</label>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "tween", 0.5, 1)}
              className="flex flex-col gap-2"
            >
              <label className="font-bold">EMAIL</label>
              <label className="text-sm">abrahamomorisiagbon@gmail.com</label>
            </motion.div>
          </motion.div>

          <motion.form
            variants={slideIn("left", "tween", 0.4, 1)}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-10 w-full text-[#FFFFFF03] bg-[#04061B] rounded-lg p-6"
          >
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="w-full text-[#FEFEFF] flex flex-col gap-6">
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="flex flex-col gap-2"
              >
                <input
                  {...register("name")}
                  type="text"
                  placeholder="NAME"
                  className="w-full outline-none pb-3 border-b-[1px] border-[#FFFFFF] bg-transparent placeholder:text-[#FEFEFF] placeholder:text-sm"
                />
                {errors?.name?.message ? (
                  <p className="flex self-start text-red-500 font-semibold mt-0.5 text-xs md:text-sm">
                    {errors?.name?.message}
                  </p>
                ) : null}
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="flex flex-col gap-2"
              >
                <input
                  {...register("email")}
                  type="text"
                  placeholder="EMAIL"
                  className="w-full outline-none pb-3 border-b-[1px] border-[#FFFFFF] bg-transparent placeholder:text-[#FEFEFF] placeholder:text-sm"
                />
                {errors?.email?.message ? (
                  <p className="flex self-start text-red-500 font-semibold mt-0.5 text-xs md:text-sm">
                    {errors?.email?.message}
                  </p>
                ) : null}
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.7, 1)}
                className="flex flex-col gap-2"
              >
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="w-full outline-none pb-3 border-b-[1px] border-[#FFFFFF] bg-transparent placeholder:text-[#FEFEFF] h-20 md:h-32 resize-none placeholder:text-sm"
                />
                {errors?.message?.message ? (
                  <p className="flex self-start text-red-500 font-semibold mt-0.5 text-xs md:text-sm">
                    {errors?.message?.message}
                  </p>
                ) : null}
              </motion.div>
            </div>

            <motion.button
              variants={fadeIn("up", "tween", 0.8, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`text-[#FEFEFF] bg-[#566CFF] py-2 w-[40%] md:w-[20%] rounded-3xl self-center md:self-end
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsSection;
