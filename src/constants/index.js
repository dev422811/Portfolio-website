import {
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  CompileVortex,
  docker,
  IBM,
  Salesforce,
  LinkedIn,
  IGNOU,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "docker", icon: docker },
  { title: "javascript", icon: javascript },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    company_name: "IBM | Coursera",
    icon: IBM,
    iconBg: "#161329",
    date: "Mar 2025 - May 2025",
    points: [
      "This certification trains learners in full-stack web development using tools and technologies like HTML, CSS, JavaScript, React, Node.js, and Express.",
      "It also covers working with databases (SQL and NoSQL), creating RESTful APIs, and deploying apps using Docker and Kubernetes on IBM Cloud. Emphasis is placed on Git, Agile practices, and real-world project building. A capstone project helps demonstrate end-to-end development skills.",
    ],
  },
  {
    title: "AI Associate",
    company_name: "Salesforce",
    icon: Salesforce,
    iconBg: "#161329",
    date: "Dec 2024 - Present",
    points: [
      "This entry-level certification provides an understanding of how AI is integrated into Salesforce products. It covers key AI concepts, ethical considerations, and how Salesforce tools like Einstein AI enhance CRM workflows.",
      "The course emphasizes real-world applications of predictive analytics, automation, and personalization in business. It's ideal for those looking to bridge AI knowledge with Salesforce platforms.",
    ],
  },
  {
    title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    company_name: "Microsoft | LinkedIn",
    icon: LinkedIn,
    iconBg: "#161329",
    date: "Dec 2024 - Present",
    points: [
      "This program introduces core data analysis concepts using Microsoft tools like Excel and Power BI. It covers data cleaning, visualization, and interpretation techniques alongside fundamental statistics.",
      "Hands-on experience in presenting insights and building reports. The course emphasizes real-world business applications and career readiness in data-driven roles.",
    ],
  },
  {
    title: "Digital Forensics",
    company_name: "IGNOU | SWAYAM",
    icon: IGNOU,
    iconBg: "#161329",
    date: "Dec 2024 - Present",
    points: [
      "The Digital Forensics course by IGNOU introduces students to cybercrime investigation techniques and the proper handling of digital evidence.",
      "It covers forensic analysis of computers, networks, mobile devices, and cloud platforms using tools like FTK and Autopsy.",
      "Students also learn about Indian cyber laws and ethical issues surrounding digital evidence. The focus is on practical skills for legal and investigative contexts.",
    ],
  },
];

export const projects = [
  {
    name: "Car Dealership Project",
    description:
      "A full-stack web application that allows users to browse car listings, read dealer reviews, and submit inquiries. Built using Django for the backend and React for the frontend.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "IBM Cloud", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "yellow-text-gradient" },
    ],
    image: weatherpedia, // replace with actual image reference if available
    source_code_link: "https://github.com/dev422811/car-dealership-project",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, certifications, and projects. It includes a responsive design, interactive sections, and smooth animations.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "React", color: "yellow-text-gradient" },
    ],
    image: termpw, // reuse or update with actual portfolio image
    source_code_link: "https://github.com/dev422811/Portfolio-Website",
  },
  {
    name: "Data Analyst Job Market Analysis",
    description:
      "Data analysis project that explores the job market for data analysts using job listing datasets. Includes insights on skills, locations, and salary trends using data visualization.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Matplotlib", color: "pink-text-gradient" },
      { name: "Jupyter Notebook", color: "yellow-text-gradient" },
    ],
    image: mhft, // reuse or update with an appropriate image
    source_code_link: "https://github.com/dev422811/data-analyst-job-market-analysis",
  },
];

