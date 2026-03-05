import { links } from "@/config";
import { FaInstagram } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    type: "about-me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    profileImage: "/techy.png",
    aboutText:
      "I enjoy making machines, data, and algorithms communicate with each other, often more effectively than humans do. My work sits at the intersection of Machine Learning, Generative AI, Digital Twins, and Industry 4.0, where I turn messy sensor streams and process data into models that support better manufacturing decisions. From AI-driven process optimization to knowledge graph reasoning and edge AI pipelines, I focus on building solutions that not only look good in notebooks but hold up in the real world. What excites me most is designing intelligent, scalable systems that make factories smarter, more efficient, and a little less mysterious.",
    roles: [
      "Data Analyst",
      "AI Engineer",
      "Technology Consultant",
    ],
    workingAreas: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "NLP",
      "Computer Vision",
      "Data Analytics",
      "Manufacturing AI",
    ],
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3",
    imgClassName: "",
    titleClassName: "",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    type: "tech-skills",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    id: 6,
    title: "Download Resume",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "mb-1 text-3xl font-bold text-sky-400 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Driven Application for HPDC",
    des: "Developed a small-data ML pipeline for squeeze-casting optimization, achieving high UTS and elongation prediction accuracy.",
    img: "/p1.png",
    iconLists: ["/icons/python.png", "/icons/pandas.png", "/icons/numpy.png", "/icons/seaborn.png", "/icons/sklearn.png"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "Knowledge Graph-based RAG Framework",
    des: "A Knowledge Graph-based Retrieval-Augmented Generation Framework for Algorithm Selection in the Facility Layout Problem.",
    img: "/p2.png",
    iconLists: ["/icons/neo4j.png", "/icons/langchain.png", "/icons/python.png", "/icons/numpy.png", "/icons/gradio.png"],
    link: "https://arxiv.org/abs/2509.18054",
    sourceCode: "https://github.com/NikhilNS26/Knowledge-Graph-based-RAG-Framework",
  },
  {
    id: 3,
    title: "Edge AI–based Precision Irrigation System",
    des: "An edge AI solution for precision irrigation, optimizing water usage & crop yield through real-time data analysis using ML models.",
    img: "/p3.png",
    iconLists: ["/icons/python.png", "/icons/numpy.png", "/icons/pandas.png", "/icons/gradio.png", "/icons/pytorch.png", "/icons/pandas.png"],
    link: "https://github.com/NikhilNS26/Smart-irrigation-system/blob/main/Technical-info-and-visualization/Edge_based_Smart_iirigation_system_report_blog.html",
    sourceCode: "https://github.com/NikhilNS26/Smart-irrigation-system",
  },
  {
    id: 4,
    title: "Data Analysis on Web Scraped Mobile Dataset",
    des: "Performed Data Gathering, Cleaning,EDA, feature engineering, and modeling on a web-scraped mobile dataset from Smartpix website.",
    img: "/p4.png",
    iconLists: ["/icons/python.png", "/icons/pandas.png", "/icons/numpy.png", "/icons/sklearn.png", "/icons/seaborn.png"],
    link: "https://github.com/NikhilNS26/Data-analysis-with-web-scrapped-data",
    sourceCode: "https://github.com/NikhilNS26/Data-analysis-with-web-scrapped-data",
  },
  {
    id: 5,
    title: "Energy Consumption Analysis of Ender-3 3D Printer",
    des: "A comprehensive analysis of energy consumption patterns in components of the Ender-3 3D printers using PZEM-017DC , proposing optimization strategies for efficiency.",
    img: "/p5.png",
    iconLists: ["/icons/python.png", "/icons/pandas.png", "/icons/numpy.png", "/icons/sklearn.png", "/icons/seaborn.png"],
    link: "https://github.com/NikhilNS26/Makers-project/blob/main/MN_205_report%20%20.pdf",
    sourceCode: "https://github.com/NikhilNS26/Makers-project/tree/main",
  },
  {
    id: 6,
    title: "Sentiment Analysis of Text using Generative & Discriminative Models",
    des: "Implemented sentiment analysis on text data using both generative (Naive Bayes) and discriminative (Logistic Regression) models.",
    img: "/p6.png",
    iconLists: ["/icons/python.png", "/icons/numpy.png", "/icons/pytorch.png", "/icons/sklearn.png", "/icons/seaborn.png"],
    link: "https://github.com/NikhilNS26/Natural-Language-Processing/blob/main/NLP_assignment_naivebais_word2vac_BOW.ipynb",
    sourceCode: "https://github.com/NikhilNS26/Natural-Language-Processing/blob/main/NLP_assignment_naivebais_word2vac_BOW.ipynb",
  },
];

export type Certificate = {
  id: number;
  title: string;
  img: string;
  iconLists?: string[];
  link: string;
};

export const testimonials: Certificate[] = [
  {
    id: 1,
    title: "Digital Twins",
    img: "/c1.png",
    iconLists: ["/icons/neo4j.png"],
    link: "https://coursera.org/verify/N8S4OO7P6OUN",
  },
  {
    id: 2,
    title: "Knowledge optioneering for manufacturing processs",
    img: "/c2.png",
    iconLists: ["/icons/pymoo.jpg","/icons/python.png","/icons/neo4j.png","/icons/langchain.png","/icons/pytorch.png","/icons/gradio.png"],
    link: "https://drive.google.com/file/d/1QvhQ32yh0QcP0jYCBIFPrhJUH3ZdBKec/view?usp=sharing",
  },
  {
    id: 3,
    title: "Gate Score-Card AIR-13 2024 (808)",
    img: "/c3.png",
    iconLists: [""],
    link: "https://drive.google.com/file/d/114T1gwHdihIOZ05LygNXdkI0tk4pFicK/view?usp=sharing",
  },
  {
    id: 4,
    title: "IBM Data Science Professional Certificate",
    img: "/c4.png",
    iconLists: ["/icons/python.png","/icons/pandas.png","/icons/numpy.png","/icons/seaborn.png","/icons/sklearn.png","/icons/mysql.png","/icons/pytorch.png"],
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZIGYPY21IAQ3",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Intern TCS Research Bengaluru",
    desc: "Developed a knowledge graph-based RAG framework for algorithm selection in facility layout problems.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Student Intern NERFMTTI Assam",
    desc: "Learned about agricultural machinery and testing procedures.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  { name: "GitHub", img: "/git.svg", link: "https://github.com/NikhilNS26" },
  { name: "Instagram", img: "/insta.svg", link: "https://www.instagram.com/_.branded__soul._26/" },
  { name: "LinkedIn", img: "/link.svg", link: "https://www.linkedin.com/in/nikhil-n-s-3683402b6/" },
];

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
};