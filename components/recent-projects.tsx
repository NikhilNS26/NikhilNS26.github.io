import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        {" "}
        <span className="text-purple">Recent projects</span>
      </h1>

      {/* ✅ GRID LAYOUT */}
      <div
        className="
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-x-1 gap-y-16
          px-4
          w-full px-1
          mx-auto
          max-w-[1600px]
        "
      >
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div key={id} className="flex justify-center">
              {/* ✅ CARD SIZE CONTROL */}
              <PinContainer title="Visit" href={link}>
                <div className="w-full max-w-[300px]">

                  {/* IMAGE AREA (REDUCED HEIGHT) */}
                  <div className="relative w-[260px] h-[180px] w-full overflow-hidden rounded-2xl bg-[#13162d]">
                    <Image
                      fill
                      src="/bg.png"
                      alt="bg"
                      className="object-cover"
                    />

                    <Image
                      src={img}
                      alt={title}
                      width={300}
                      height={180}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
                    />
                  </div>

                  {/* TITLE */}
                  <h1 className="line-clamp-2 text-sm font-bold text-green-400">
                    {title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="mt-1 line-clamp-4 text-xs text-white/70">
                    {des}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-4 flex items-center justify-between">
                    {/* TECH ICONS */}
                    <div className="flex items-center">
                      {iconLists.map((icon, i) => (
                        <div
                          key={icon}
                          className="
                            flex h-7 w-7 items-center justify-center
                            rounded-full
                            border border-white/[0.2]
                            bg-black
                          "
                          style={{
                            transform: `translateX(-${6 * i}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={icon}
                            width={16}
                            height={16}
                          />
                        </div>
                      ))}
                    </div>

                    {/* SOURCE LINK */}
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center text-xs text-purple"
                    >
                      Code
                      <FaLocationArrow className="ml-2" color="#cbacf9" />
                    </Link>
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
