"use client";

import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const socialIcons = [
  { Icon: FiGithub, link: "#" },
  { Icon: FaWhatsapp, link: "#" },
  { Icon: FaLinkedinIn, link: "#" },
  { Icon: BsTwitterX, link: "#" },
  { Icon: FaDiscord, link: "#" },
];

const HeroSection = () => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="hero-background max-h-screen md:min-h-screen relative overflow-hidden flex flex-col"
    >
      <NavBar />

      <div className="flex-1 flex items-center justify-center">
        <div className="w-[90%] md:w-[80%] xl:w-[70%] flex flex-col gap-4 md:gap-8">
          {/* Desktop Version */}
          <motion.div className="w-full h-full font-bold md:flex hidden flex-col gap-1 lg:gap-3.5 text-center text-white text-3xl md:text-4xl lg:text-5xl">
            <motion.p variants={textVariant(0.1)}>
              Hi There! I'm Abraham Omorisiagbon,
            </motion.p>
            <motion.p variants={textVariant(0.2)}>
              A Software Engineer &
            </motion.p>
            <motion.p variants={textVariant(0.3)} className="text-[#BBCDE5]">
              Blockchain Developer
            </motion.p>
          </motion.div>

          {/* Mobile Version */}
          <motion.div className="md:hidden w-full font-bold flex flex-col gap-0 lg:gap-3.5 text-center text-white text-2xl">
            <motion.p variants={textVariant(0.1)}>
              Hi There! I'm Abraham
            </motion.p>
            <motion.p variants={textVariant(0.2)}>
              Omorisiagbon, A Software Engineer &
            </motion.p>
            <motion.p variants={textVariant(0.3)} className="text-[#BBCDE5]">
              Blockchain Developer
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col text-center text-[#AAAAAA] text-xs md:text-xl"
          >
            <p>
              With A Strong Foundation In Building Dynamic, User-Focused Web
              Applications And Tackling The Complexities
            </p>
            <p>
              Of Scalable Full-Stack Development, I Thrive On Crafting
              Innovative And Efficient Digital Solutions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex items-center justify-center pb-20 md:pb-0 gap-4 md:gap-6"
          >
            {socialIcons.map((Item, index) => (
              <motion.a
                key={index}
                href={Item.link}
                whileHover={{ scale: 1.2, color: "#BBCDE5" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Item.Icon className="text-white text-base md:text-2xl cursor-pointer" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated gradient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 left-1/4 right-1/4 h-8 bg-gradient-to-r from-transparent via-[#02c0ff] to-transparent blur-lg opacity-70"
      />
    </motion.div>
  );
};

export default HeroSection;
