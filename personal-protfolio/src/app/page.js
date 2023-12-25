import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "@/component/Navbar/Navbar";
import Hero from "@/component/Hero/Hero";
import About from "@/component/About/About";
import Image from "next/image";
import Skills from "@/component/Skills/Skills";
import Experience from "@/component/Experience/Experience";
import Projects from "@/component/Projects/Projects";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      
    </>
  );
}
