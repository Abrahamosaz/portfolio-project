"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { arrow, github, redirect } from "@/public/icons";
import { projectCardProps } from "../types";
import { AllProjects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Tabs = ["all-projects", "web", "mobile", "blockchain"];

const ProjectCard: React.FC<projectCardProps> = ({
  previewSite,
  title,
  description,
  githubLink,
  hostedLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group backdrop-blur-sm bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="w-full flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <div className="overflow-hidden rounded-2xl">
          <Image
            className="rounded-[20px] min-h-[250px] md:min-h-[350px]"
            src={previewSite}
            alt="preview project"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-white/90 font-medium text-base md:text-xl">
            {title}
          </h2>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-2 md:mt-5 w-full flex items-center gap-4 text-white">
          <motion.a
            href={hostedLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 rounded-3xl text-center py-3 bg-gradient-to-r from-[#566CFF]/80 to-[#4054DD]/80 hover:from-[#566CFF] hover:to-[#4054DD] flex-1 transition-all duration-300"
          >
            <p className="text-sm md:text-base font-medium">View Live</p>
            <Image className="w-3 h-3" src={redirect} alt="redirect" />
          </motion.a>
          <motion.a
            href={githubLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 rounded-3xl border border-white/20 hover:border-white/40 text-center py-3 flex-1 transition-all duration-300 backdrop-blur-sm"
          >
            <p className="text-sm md:text-base font-medium">Github</p>
            <Image className="w-4 h-4" src={github} alt="github" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all-projects");
  const [projects, setProjects] = useState<projectCardProps[]>([]);

  useEffect(() => {
    let renderProjects: projectCardProps[];

    switch (activeTab) {
      case "all-projects":
        renderProjects = AllProjects;
        break;
      case "web":
        renderProjects = [];
        break;
      case "mobile":
        renderProjects = [];
        break;
      case "blockchain":
        renderProjects = [];
        break;
      default:
        renderProjects = AllProjects;
    }

    setProjects(renderProjects);
  }, [activeTab, setProjects]);

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full py-16 md:py-24 md:pb-40 bg-[#0a0a1b] bg-gradient-to-b from-[#0a0a1b] to-[#0f0f2b] relative z-0"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-center"
        >
          <h1 className="text-white/90 text-3xl md:text-4xl font-bold mb-3">
            Featured Projects
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="mt-5 w-full flex flex-col items-center gap-4 md:gap-8">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 backdrop-blur-sm bg-[#03061C] py-3 sm:py-4 px-4 sm:px-6 rounded-2xl border-[1px] border-[#BBCDE5]"
          >
            {Tabs.map((tab: string, index: number) => (
              <motion.div
                key={index}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={classNames({
                  "text-white/90 font-medium text-[10px] sm:text-[11px] md:text-sm cursor-pointer transition-all duration-300 px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl":
                    true,
                  "bg-gradient-to-r from-[#566CFF]/80 to-[#4054DD]/80":
                    tab === activeTab,
                  "hover:bg-white/10": tab !== activeTab,
                })}
              >
                {tab.replace("-", " ").toUpperCase()}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            className="w-[90%] md:w-[80%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-5"
          >
            {projects?.map((project: projectCardProps) => (
              <motion.div key={project.id}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.a
          href="mailto:abrahamomorisiagbon@gmail.com"
          variants={fadeIn("up", "tween", 0.8, 1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 py-1 px-8 md:px-10 rounded-3xl text-white/90 bg-gradient-to-r from-[#566CFF]/80 to-[#4054DD]/80 flex items-center gap-2 md:gap-3 transition-all duration-300"
        >
          <p className="text-sm md:text-base font-medium">Contact Now</p>
          <Image className="w-10 h-10" src={arrow} alt="arrow" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
