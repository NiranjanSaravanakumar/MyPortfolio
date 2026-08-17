"use client";

import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ui/Navbar";

import {
  SkeletonHero,
  SkeletonExperience,
  SkeletonProjects,
  SkeletonSkills,
  SkeletonAbout,
  SkeletonCertifications,
  SkeletonAchievements,
  SkeletonContact,
} from "@/components/ui/skeletons";

/* Lazily-loaded section components — each gets its own JS chunk */
const Hero           = lazy(() => import("@/components/sections/Hero").then(m => ({ default: m.Hero })));
const Experience     = lazy(() => import("@/components/sections/Experience").then(m => ({ default: m.Experience })));
const Projects       = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const Skills         = lazy(() => import("@/components/sections/Skills").then(m => ({ default: m.Skills })));
const About          = lazy(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const Certifications = lazy(() => import("@/components/sections/Certifications").then(m => ({ default: m.Certifications })));
const Achievements   = lazy(() => import("@/components/sections/Achievements").then(m => ({ default: m.Achievements })));
const Contact        = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <Suspense fallback={<SkeletonHero />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SkeletonExperience />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SkeletonProjects />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SkeletonSkills />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SkeletonAbout />}>
        <About />
      </Suspense>

      <Suspense fallback={<SkeletonAchievements />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<SkeletonCertifications />}>
        <Certifications />
      </Suspense>

      <Suspense fallback={<SkeletonContact />}>
        <Contact />
      </Suspense>
    </main>
  );
}
