import Navbar from "@/component/Navbar/Navbar";
import Hero from "@/component/Hero/Hero";
import About from "@/component/About/About";

import Image from "next/image";
import Skills from "@/component/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}
