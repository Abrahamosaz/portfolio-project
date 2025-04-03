import React, { useState } from "react";
import Link from "next/link";
import { BiSolidDownload } from "react-icons/bi";
import { motion } from "motion/react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex items-center justify-between text-white p-10 relative"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Link href="#" className="font-extrabold text-xl md:text-2xl">
          PORTFOLIO
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between space-x-20">
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link className="text-[#FEFEFF]" href="#contacts">
            CONTACTS
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#566CFF] p-4 py-2 rounded-lg text-white"
        >
          <button className="font-semibold">RESUME</button>
          <BiSolidDownload className="text-white" />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-24 left-0 right-0 bg-black/90 backdrop-blur-sm p-6 rounded-lg lg:hidden"
        >
          <div className="flex flex-col space-y-4">
            <Link
              className="text-[#FEFEFF] text-sm text-center"
              href="#contacts"
            >
              CONTACTS
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-sm justify-center gap-2 bg-[#566CFF] p-4 py-2 rounded-lg text-white"
            >
              <button className="font-semibold">RESUME</button>
              <BiSolidDownload className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
