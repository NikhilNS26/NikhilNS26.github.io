"use client";

import { useEffect, useState } from "react";

import { IntroLoader } from "@/components/intro-loader";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";

const MainPage = () => {
  const [showIntro, setShowIntro] = useState(false);

  // Check if intro should be shown (only on reload / fresh open)
  useEffect(() => {
    // Clear intro flag on reload or tab close
    const clearIntroFlag = () => {
      sessionStorage.removeItem("introPlayed");
    };

    window.addEventListener("beforeunload", clearIntroFlag);

    const played = sessionStorage.getItem("introPlayed");
    if (!played) {
      setShowIntro(true);
    }

    return () => {
      window.removeEventListener("beforeunload", clearIntroFlag);
    };
  }, []);


  // Called when intro finishes or is skipped
  const handleIntroComplete = () => {
    setShowIntro(false);

    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };


  return (
    <>
      {/* INTRO LOADER (only on reload) */}
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* MAIN WEBSITE CONTENT */}
      {!showIntro && (
        <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
          <FloatingNav navItems={navItems} />

          <div className="w-full max-w-7xl">
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default MainPage;
