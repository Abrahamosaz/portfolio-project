"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { esoftResponse, jpgold, kemdi, wisper } from "@/public/icons";
import { mySkillSets } from "../constants";
import { mySkillSetsProps } from "../types";

type skillCardProps = {
  icon: any;
  title: string;
  description: string;
  index: number;
};

const SkillCard: React.FC<skillCardProps> = ({
  icon,
  title,
  description,
  index,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="p-5 md:p-10 flex items-center justify-center rounded-3xl shadow-lg bg-gradient-to-b from-[#030E61] via-[#030619] to-[#344090]"
    >
      <div className="flex flex-col text-center md:text-left gap-4 pt-5 md:pt-10 pb-[6rem] md:pb-[8rem]">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "radial-gradient(circle, #0A4078 0%, #041E3C 70%, #021025 100%)",
          }}
          className="p-4 md:p-6 rounded-full self-center border-[2px] border-[#000000]"
        >
          <Image className="w-8 h-8 md:w-10 md:h-10" src={icon} alt="icon" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 md:mt-10 text-[#BBCDE5] font-bold text-2xl md:text-3xl items-center"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#BBCDE5] text-sm md:text-base"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-[#00063A] to-[#000319] w-full py-10 pb-20 md:py-20 flex flex-col gap-8 relative z-0"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col gap-8 relative z-10"
      >
        <motion.h3
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#BBCDE5] text-center text-xl md:text-3xl lg:text-4xl font-semibold"
        >
          COMPANY EXPERIENCES
        </motion.h3>

        <Slider
          className="mt-5 md:mt-10 overflow-hidden px-4"
          {...{
            ...settings,
            slidesToShow: 4,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
            ],
          }}
        >
          {[
            <Image
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
              src={jpgold}
              alt={`company`}
            />,
            <Image
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
              src={wisper}
              alt={`company`}
            />,
            <Image
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
              src={esoftResponse}
              alt={`company`}
            />,
            <Image
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
              src={kemdi}
              alt={`company`}
            />,
          ].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center p-4"
            >
              {logo}
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <div className="mt-10 md:mt-20 w-full flex flex-col items-center gap-[3rem]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[80%] text-3xl md:text-4xl text-[#BBCDE5] font-extrabold text-center"
        >
          What I Bring To The Table
        </motion.h1>

        <div className="mt-5 md:mt-10 w-[90%] md:w-[80%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {mySkillSets?.map((skill: mySkillSetsProps, index: number) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillSection;
