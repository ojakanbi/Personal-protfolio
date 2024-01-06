"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "@/component/Navbar/Navbar";
import Hero from "@/component/Hero/Hero";
import About from "@/component/About/About";
import Image from "next/image";
import Skills from "@/component/Skills/Skills";
import Experience from "@/component/Experience/Experience";
import Projects from "@/component/Projects/Projects";
import Contact from "@/component/Contact/Contact";
import Copyright from "@/component/Copyright/Copyright";
import axios from "axios";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {" "}
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}

      >
        {" "}
        <Hero />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <Skills id="skills" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <Experience id="experience" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <Contact />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

      >
        {" "}
        <Copyright />
      </motion.div>

     
   
   
   
    
    </>
  );
}
