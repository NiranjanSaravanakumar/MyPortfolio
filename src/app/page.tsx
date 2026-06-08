"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isSystemLive, setIsSystemLive] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {isSystemLive && <Navbar />}
      <Hero onInteract={() => setIsSystemLive(true)} />

      {isSystemLive && (
        <>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </>
      )}
    </main>
  );
}
