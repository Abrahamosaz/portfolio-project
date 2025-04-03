import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#000319] py-10">
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
          <p className="text-[#6B6B6B] text-base">Lagos State, Nigeria</p>
          <p className="text-[#6B6B6B] text-center text-base">
            {new Date().getFullYear()} - All rights reserved - Abraham
            Omorisiagbon
          </p>

          <div className="flex items-center gap-2">
            <FiGithub className="text-[#6B6B6B] text-base cursor-pointer" />
            <FaWhatsapp className="text-[#6B6B6B] text-base cursor-pointer" />
            <FaLinkedinIn className="text-[#6B6B6B] text-base cursor-pointer" />
            <BsTwitterX className="text-[#6B6B6B] text-base cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
