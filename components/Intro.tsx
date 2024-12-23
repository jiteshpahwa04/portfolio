"use client";

import React from "react";
import Image from "next/image";
import profileImg from "@/public/profile.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const downloadResume = async () => {
    try {
      const response = await axios.get('/api/download', {
        responseType: 'blob', // Important for binary data
      });
  
      // Extract filename from content-disposition header
      const contentDisposition = response.headers['content-disposition'];
      const fileNameMatch = contentDisposition ? contentDisposition.match(/filename="(.+)"/) : null;
      const fileName = fileNameMatch ? fileNameMatch[1] : 'downloadedFile';
  
      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" // scroll-margin-top: 100rem, added when we scroll to this section
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Jitesh Pahwa"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full w-24 h-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jitesh.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span>. I enjoy
        building <span className="italic">websites</span>, my focus is{" "}
        <span className="underline">MERN & Next.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          // onClick={downloadResume}
          href="https://drive.google.com/file/d/1TGu7-UqPoHmverVJa0yQtv9IMLCgt1nw/view"
          target="_blank"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/jitesh-pahwa-68aa961b2/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/jiteshpahwa04"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
