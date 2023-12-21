import Navbar from "@/component/Navbar/Navbar";
import Hero from "@/component/Hero/Hero";
import About from "@/component/About/About";

import Image from "next/image";
import Skills from "@/component/Skills/Skills";
import Experience from "@/component/Experience/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      
    </>
  );
}
