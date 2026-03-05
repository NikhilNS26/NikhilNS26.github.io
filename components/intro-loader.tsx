"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type IntroLoaderProps = {
  onComplete: () => void;
};

export const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [progress, setProgress] = useState(0);

  // Progress: 0 → 100
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, 35); // ~3.5s

    return () => clearInterval(interval);
  }, []);

  // Finish after 100% + pause
  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => {
        sessionStorage.setItem("introPlayed", "true");
        onComplete();
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  // Hidden skip
  useEffect(() => {
    const skip = () => {
      sessionStorage.setItem("introPlayed", "true");
      onComplete();
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-100"
        src="\intro.mp4"   // ⬅️ CHANGE THIS PATH LATER
        autoPlay
        loop
        muted
        playsInline
      />


      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="text-center text-[4rem] md:text-[6rem] lg:text-[6rem]
                     font-semibold tracking-[0.15em] text-white/30"
        >
          WELCOME&nbsp;TO&nbsp;MY&nbsp;WORLD
        </h1>
      </div>

      {/* BOTTOM LOADING BOX */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   rounded-xl px-1 py-1"
      >
        {/* PERCENTAGE */}
        <div className="mb-3 text-center text-[rem] font-semibold text-sky-800">
          {progress}%
        </div>

        {/* LOADING PIPE */}
        <div className="h-[3px] w-[320px] md:w-[420px] rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full
              bg-gradient-to-r from-red-900 via-sky-600 to-purple-900"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  );
};