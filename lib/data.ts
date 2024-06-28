import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiSpringboot } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import coinControlImg from "@/public/coinControl.png";
import todoApplicationImg from "@/public/todoApplication.png";
import sudokuSolverImg from "@/public/sudokuSolver.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CodeHelp MERN Stack Bootcamp",
    location: "Remote",
    description:
      "I completed my course after 6 months of studying. I immediately found a project to work on as a backend developer intern.",
    icon: React.createElement(LuGraduationCap),
    // We could have written the above line as:
    // icon: <LuGraduationCap />,
    // if this was a .tsx file.
    date: "July 2023 - December 2023",
  },
  {
    title: "Backend Developer Intern",
    location: "Remote",
    description:
      "I worked as a backend developer for a month in a project that involved creating a REST API using Node.js, Express.js, and MongoDB. I also worked on the front-end using React and Tailwind CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - February 2024",
  },
  {
    title: "Backend Developer Intern",
    location: "Remote",
    description:
      "I'm a backend developer at Samrish Technologies Pvt. Ltd. My stack includes Spring Boot, Java, and MySQL ( Although I didn't learn and practice java in any course, but due to my strong fundamentals in MERN, I was able to learn and work on Spring Boot in a very short time). I'm open to full-time opportunities."
      ,
    icon: React.createElement(SiSpringboot),
    date: "February 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Coin Control",
    description:
      "Personal Finance Tracker. I was the full-stack developer. It has features like budgeting, tracking expenses and income, and setting financial goals.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js", "Redux"],
    imageUrl: coinControlImg,
  },
  {
    title: "To-Do Application",
    description:
      "A simple to-do application. I was the full-stack developer. It has features like adding, deleting and updating tasks. We can also set priority levels.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: todoApplicationImg,
  },
  {
    title: "Sudoku Solver",
    description:
      "A sudoku solver. I was the front-end developer. It has features like solving a sudoku puzzle, checking if the puzzle is valid, and resetting the puzzle.",
    tags: ["HTML", "CSS", "JavaScript", "Data Structures", "Algorithms"],
    imageUrl: sudokuSolverImg,
  },
] as const;

export const skillsData = [
  "Data Structures",
  "Algorithms",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Recoil",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
