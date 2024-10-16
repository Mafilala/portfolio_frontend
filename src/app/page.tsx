"use client";
import Drawer from "@/components/drawer/drawer";
import Navbar from "@/components/navbar/navbar";
import { useState } from "react";
import Home from "@/components/home/home";
import Skills from "@/components/skills/skills";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import ContactMe from "@/components/contact/contactMe";
import Footer from "@/components/footer/footer";
import SvgIcon from "@/components/common/svgIcon";
export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const [observed, setObserved] = useState("");
  return (
    <main className="" id="scrolling-container">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} observed={observed} />
      <Home setObserved={setObserved} />
      <Skills setObserved={setObserved} />
      <About setObserved={setObserved} />
      <Projects setObserved={setObserved} />
      <ContactMe />
      <Footer />
    </main>
  );
}
