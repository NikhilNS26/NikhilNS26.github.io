"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InfiniteMovingCardsProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export function InfiniteMovingCards<T>({
  items,
  renderItem,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);
    children.forEach((child) => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "40s" : speed === "normal" ? "80s" : "100s"
    );

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex-shrink-0">
            {renderItem(item, idx)}
          </li>
        ))}
      </ul>
    </div>
  );
}
