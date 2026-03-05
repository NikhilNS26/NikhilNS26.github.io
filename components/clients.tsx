"use client";

import Image from "next/image";
import Link from "next/link";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials as certificates } from "@/data";

export const Clients = () => {
  return (
    <section id="certifications" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Certifications & Achievements</span>
      </h1>

      <div className="mt-10 flex flex-col items-center">
        <div className="relative h-[28rem] w-full overflow-hidden">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="fast"
            renderItem={(item: { img: string; title: string; iconLists?: string[]; link: string }) => (
              <div
                className="
                  min-w-[320px] md:min-w-[360px]
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur
                "
              >
                {/* Certificate image */}
                <div className="mb-4 h-[180px] w-full overflow-hidden rounded-xl bg-[#0f1225]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="line-clamp-2 text-sm font-semibold text-white">
                  {item.title}
                </h3>

                {/* Tools */}
                <div className="mt-3 flex items-center">
                  {(item.iconLists ?? []).map((icon, i) => (
                    <div
                      key={i}
                      className="mr-2 flex h-8 w-8 items-center justify-center
                                 rounded-full border border-white/20 bg-black"
                    >
                      <Image src={icon} alt="" width={16} height={16} />
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple hover:underline"
                >
                  View Certificate →
                </Link>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};