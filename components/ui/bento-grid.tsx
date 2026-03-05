"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { IoDownloadOutline } from "react-icons/io5";

import { links } from "@/config";
import { techStack } from "@/data";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";
import { GridGlobe } from "../grid-globe";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";


const techSkills = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "C", icon: "/icons/c.png" },
  { name: "NumPy", icon: "/icons/numpy.png" },
  { name: "Pandas", icon: "/icons/pandas.png" },
  { name: "Seaborn", icon: "/icons/seaborn.png" },
  { name: "PyTorch", icon: "/icons/pytorch.png" },
  { name: "TensorFlow", icon: "/icons/tensorflow.png" },
  { name: "Scikit-learn", icon: "/icons/sklearn.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "Neo4j", icon: "/icons/neo4j.png" },
  { name: "Edge Impulse", icon: "/icons/edgeimpulse.png" },
  { name: "LangChain", icon: "/icons/langchain.png" },
  { name: "Pymoo", icon: "/icons/pymoo.jpg" },
  { name: "Gradio", icon: "/icons/gradio.png" },
];


const BentoGridLottie = dynamic(() => import("./bento-grid-lottie"), {
  ssr: false,
});

/* =======================
   STATS DATA
======================= */
const stats = [
  { label: "Projects Completed", value: 5 },
  { label: "Research Papers & Blogs", value: 2 },
  { label: "Technologies", value: 10 },
  { label: "Years Experience", value: 0 },
];

/* =======================
   ANIMATED COUNTER
======================= */
const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-80px" });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      animate(motionValue, value, {
        duration: 1.6,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center whitespace-nowrap"
    >
      <div className="flex items-baseline gap-1 leading-none">
        <motion.span className="text-3xl lg:text-4xl font-bold text-red-400" >
          {rounded}
        </motion.span>
        <span className="text-red-400 text-xl font-semibold">+</span>
      </div>

      <span className="mt-1 text-xs lg:text-sm text-sky-400">
        {/* label is rendered outside now */}
      </span>
    </div>
  );
}; // ✅ THIS WAS MISSING


/* =======================
   GRID WRAPPER
======================= */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};


/* =======================
   GRID ITEM
======================= */
export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  type,
  profileImage,
  aboutText,
  roles,
  workingAreas,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  type?: string;
  profileImage?: string;
  aboutText?: string;
  roles?: string[];
  workingAreas?: string[];

}) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(false); // prevent auto animation
  }, []);

  const handleResumeDownload = () => {
    setCopied(false);

    setTimeout(() => {
      setCopied(true);
    }, 50);

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  /* =======================
     ABOUT ME CARD (ID = 1)
  ======================= */
  if (type === "about-me") {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] shadow-input text-justify",
          className
        )}
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          src="/about_vid.mp4"   // ⬅️ YOU CAN CHANGE THIS PATH
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 🔤 CONTENT (unchanged) */}
        <div className="relative z-10 p-6 lg:p-10">
          <h3 className="mb-6 text-3xl font-bold text-sky-400">
            About Me
          </h3>

          <div className="flex gap-6">
            <img
              src={profileImage}
              alt="Profile"
              className="h-48 w-48 rounded-xl object-cover border border-white/10"
            />

            <div>
              <p className="text-white/90">{aboutText}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {roles?.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 border border-green-500/30"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {workingAreas?.map((area) => (
              <span
                key={area}
                className="rounded-full bg-rose-500/10 px-3 py-1 text-sm text-rose-400 border border-rose-500/30"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* =======================
    TECH SKILLS GRID (ID = 5)
  ======================= */
  if (type === "tech-skills") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/[0.1]",
          className
        )}
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/tech_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 🔤 Content */}
        <div className="relative z-10 h-full p-6 lg:p-10">

          {/* Heading */}
          <h3 className="mb-6 text-2xl font-bold text-sky-400">
            Technical Skills
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ y: 0 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "circInOut",
                  delay: Math.random() * 1.5,
                }}
                className="
                  flex items-center gap-3
                  rounded-xl border border-white/10
                  bg-white/5 px-4 py-2
                  backdrop-blur-md
                  shadow-sm
                  transition hover:bg-white/10
                "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-6 w-6 object-contain"
                />

                <span className="text-sm text-white/90 whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    );
  }


  /* =======================
     DEFAULT GRID ITEM
  ======================= */
  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 3500);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] shadow-input",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1), rgba(12,14,35,1))",
      }}
    >
      <div className="relative h-full">
        {img && (
          <Image
            width={689}
            height={541}
            src={img}
            alt=""
            className={cn("absolute h-full w-full object-cover", imgClassName)}
          />
        )}

        {spareImg && (
          <Image
            width={208}
            height={96}
            src={spareImg}
            alt=""
            className="absolute right-0 bottom-0 opacity-80"
          />
        )}
        
        {id === 4 && (
          <div className="relative z-10 p-6 lg:p-10">
            {/* Heading */}
            <h3 className="mb-2 text-2xl font-bold text-sky-400">
              Hobbies
            </h3>

            {/* Hobbies floating pills */}
            <div className="flex flex-wrap gap-1">

              {[
                "Cycling",
                "Listening to Music",
                "Photography",
                "Tech Exploring",
                "Reading",
              ].map((hobby) => (
                <motion.span
                  key={hobby}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "circInOut",
                    delay: Math.random() * 1.5,
                  }}
                  className="
                    rounded-full
                    border border-pink-500/30
                    bg-pink-500/10
                    px-4 py-2
                    text-sm
                    text-pink-400
                    backdrop-blur-md
                    whitespace-nowrap
                  "
                >
                  {hobby}
                </motion.span>
              ))}

            </div>
          </div>
        )}

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative z-10 flex flex-col p-5 lg:p-0",
            id === 4 ? "h-auto justify-start" : "h-full justify-center",
            id === 6 ? "h-auto justify-start" : "h-full justify-center",
            titleClassName
          )}
        >

          {/* DESCRIPTION */}
          {description && (
            <div className="text-sm text-white/60">{description}</div>
          )}

          {/* TITLE */}
          {title && (
            <div className="mt-2 text-lg font-bold lg:text-3xl">{title}</div>
          )}

          {/* ===== STATS GRID (ID = 2) ===== */}
          { id === 2 && (
            <div className="relative h-full w-full">

              {/* 🌍 Globe background (restored) */}
              <div className="absolute inset-0 opacity-40">
                <GridGlobe />
              </div>

              {/* 📊 Stats row */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="mx-auto flex w-fit justify-center gap-10">

                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex min-w-[90px] flex-col items-center text-center"
                    >
                      {/* NUMBER */}
                      <AnimatedCounter value={stat.value} />
                      <span className="mt-1 text-xs text-sky-400 text-center leading-tight">
                        {stat.label}
                      </span>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          )}

          {/* CREATIVE COMPANION (ID = 3) */}
          {id === 3 && (
            <div className="absolute inset-0 p-1 lg:p-2">
              {/* Heading */}
              {/* shift the text bit from left to right beacuse the text we attachch with left border of the continer grid*/}
              <h3 className="mb-5 text-xl font-bold text-sky-400 border-l-4 pl-3 ">
                My Creative Companion
              </h3>

              {/* CONTENT ROW */}
              <div className="flex items-start gap-6">

                {/* LEFT: PHOTO */}
                <div className="flex-shrink-0">
                  <img
                    src="" // replace later
                    alt="Creative Companion"
                    className="
                      h-28 w-28
                      rounded-xl
                      object-cover
                      border border-white/10
                    "
                  />
                </div>

                {/* RIGHT: INFO */}
                <div className="flex flex-col gap-1">

                  {/* Name (WHITE, no gradient) */}
                  <h4 className="text-lg font-semibold text-red-400">
                    Surya Tomar
                  </h4>

                  {/* Role */}
                  <span
                    className="
                      w-fit rounded-full px-3 py-1
                      bg-green-500/10
                      text-sm
                      text-green-400
                      border border-green-500/30
                    "
                  >
                    AI | ML Researcher
                  </span>

                  {/* Description */}
                  <p className="max-w-sm text-sm leading-relaxed text-white/70">
                    Focused on resarch in Generative AI, Digital Twins, and Intelligent Systems for Smart Manufacturing applications.
                  </p>

                  {/* Connect */}
                  <a
                    href="mailto:suryatomar@iisc.ac.in" // change later
                    className="
                      inline-flex items-center gap-1
                      text-sm font-medium text-sky-400
                      transition-all duration-200
                      hover:gap-2 hover:underline
                    "
                  >
                    <span className="text-sm text-pink-400">
                    Connect
                    </span>
                    <span className="text-pink-400">→</span>
                  </a>
                </div>
              </div>
            </div>
          )}


          {/* CONTACT (ID = 6) */}
          {id === 6 && (
            <div className="mt-0.5 flex flex-col items-center">
              <BentoGridLottie copied={copied} />
              <a
                href="/resume.pdf"          // ⬅️ change path later
                download
                className="inline-block mt-0.5"
              >
                <MagicButton
                  title="Click here"
                  icon={<IoDownloadOutline className="h-20 w-20 text-white" />}
                  handleClick={handleResumeDownload}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
