import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/NikhilNS26",
  ownerName: "Nikhil",
  ownerEmail: "nikhilns@iisc.ac.in",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Portfolio Data Science and AI for manufacturing.",
  keywords: [
    "Nikhil",
    "Nikhil NS",
    "Nikhil Portfolio",
    "portfolio",
    "machine-learning",
    "data-science",
    "ai",
    "Smart Manufacturing",
    "artificial-intelligence",
    "deep-learning",
    "Industry 4.0",
    "Datascience-portfolio",
    "ML-portfolio",
    "AI-portfolio",
    "IISc",
    "Indian Institute of Science",
    "Nikhil IISc",
    "Design and Manufacturing",
    "Nikhil Design and Manufacturing",
    "Nikhil Smart Manufacturing",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/NikhilNS26",
  },
} as const;
