"use client";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  const { scrollY } = useScroll();

  // Scroll-based animations
  const imageX = useTransform(scrollY, [0, 300], [0, -200]);
  const textX = useTransform(scrollY, [0, 300], [0, 200]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  return (
    <div
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >

      {/* Background spotlights */}
      <div>
        <Spotlight
          className="-left-20 -top-40 h-screen md:-left-40"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="left-96 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-black-100" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex w-full max-w-[85vw] items-center gap-20 md:flex-row">

          {/* LEFT: Image */}
          {/* LEFT: Image + Social Media Tabs */}
          <motion.div
            style={{ x: imageX, opacity }}
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex w-1/2 flex-col items-center pr-10"
          >
            {/* Profile Image */}
            <div className="h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.35)]">
              <img
                src="/profile_img.png"
                alt="Profile photo"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Social Media Tabs */}
            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com/NikhilNS26"
                className="flex h-11 w-11 items-center justify-center rounded-full
                          bg-black/40 backdrop-blur-md
                          border border-white/10
                          text-white
                          shadow-md shadow-black/40
                          hover:scale-110 hover:shadow-purple-500/30
                          transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-n-s-3683402b6/"
                className="flex h-11 w-11 items-center justify-center rounded-full
                          bg-black/40 backdrop-blur-md
                          border border-white/10
                          text-white
                          shadow-md shadow-black/40
                          hover:scale-110 hover:shadow-purple-500/30
                          transition-all duration-200"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://scholar.google.com/citations?user=H70z5ocAAAAJ&hl=en"
                className="flex h-11 w-11 items-center justify-center rounded-full
                          bg-black/40 backdrop-blur-md
                          border border-white/10
                          text-white
                          shadow-md shadow-black/40
                          hover:scale-110 hover:shadow-purple-500/30
                          transition-all duration-200"
              >
                <FaGoogle size={18} />
              </a>
              <a
                href="https://www.instagram.com/_.branded__soul._26/"
                className="flex h-11 w-11 items-center justify-center rounded-full
                          bg-black/40 backdrop-blur-md
                          border border-white/10
                          text-white
                          shadow-md shadow-black/40
                          hover:scale-110 hover:shadow-purple-500/30
                          transition-all duration-200"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="mailto:nikhilns@iisc.ac.in"
                className="flex h-11 w-11 items-center justify-center rounded-full
                          bg-black/40 backdrop-blur-md
                          border border-white/10
                          text-white
                          shadow-md shadow-black/40
                          hover:scale-110 hover:shadow-purple-500/30
                          transition-all duration-200"
              >
                <MdEmail size={18} />
              </a>    
            </div>
          </motion.div>


          {/* RIGHT: Text */}
          <motion.div
            style={{ x: textX, opacity }}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex w-1/2 flex-col items-start"
          >
            <h2 className="mb-2 text-3sm uppercase tracking-widest text-blue-100">
              Hello! Glad to see you here.
            </h2>

            <TextGenerateEffect
              className="text-[44px] md:text-4xl lg:text-4xl"
              words="Building Intelligent Data-Driven Systems for Industry 4.0 Manufacturing"
            />  

            <p className="mt-4 mb-6 text-base md:text-xl lg:text-xl text-gray-300">
              I am Nikhil, a Master’s student in Smart Manufacturing at IISc Bangalore, specializing in Data Science, Machine Learning, and Generative AI for Industry 4.0 manufacturing solutions.
            </p>

            <Link href="#about">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
                asChild
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
