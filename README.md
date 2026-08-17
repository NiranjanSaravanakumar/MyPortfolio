# Niranjan Saravanakumar — Personal Portfolio

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=24&pause=1000&color=00C896&center=true&vCenter=true&width=700&lines=Software+Engineer;Full+Stack+Developer;AI+%26+Machine+Learning+Enthusiast;Building+with+React%2C+Python+%26+LLMs" alt="Typing animation" />
</p>

> A high-performance, recruiter-ready developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.  
> Features a full Light/Dark theme toggle, lazy-loaded sections with skeleton loaders, and an interactive canvas background — all optimized for instant load times.

---

## 1. Project Overview

This portfolio is engineered to maximize technical credibility and user experience. It serves as a comprehensive showcase of Niranjan Saravanakumar's software engineering capabilities — specifically highlighting an automation-heavy internship at ABB Global Industries and Services Private Limited, full-stack projects, structured skills, and verified certifications. The architecture prioritizes instant load times, accessible navigation, high-impact visual design, and a fully working Light/Dark mode system.

---

## 2. Features

- ⚡ **Instant Hero Entry** — Optimized for recruiter workflows with immediate, no-gate loading and animated typewriter role titles.
- 🧭 **Context-Aware Navbar** — `IntersectionObserver`-driven active states with mobile scroll-lock and a persistent "Download Resume" CTA.
- 🌗 **Light / Dark Theme Toggle** — Persistent theme switcher (localStorage + `prefers-color-scheme`) with zero Flash-of-Unstyled-Theme via an inline script in `<head>`.
- 🖼️ **Skeleton Loaders** — Every section has a dedicated shimmer-animated skeleton screen while its JS chunk loads.
- 🦾 **Lazy-Loaded Sections** — Each section is a separate dynamic import (`React.lazy`) with `Suspense` boundaries for code-split chunking.
- ✍️ **Scramble Text** — Cyberpunk-style character scramble animation on key headings.
- 🖱️ **Interactive Canvas Background** — Theme-aware animated canvas with a dot grid, glowing orbs, and a mouse-tracking spotlight effect.
- 📜 **Scroll Progress Bar** — Thin accent-colored bar at the top of the page tracking read progress.
- 🎬 **Scroll Animation Wrapper** — Reusable `ScrollAnimationWrapper` for staggered fade-in-up reveals on scroll.
- 🔤 **Scroll Bounce Text** — Letter-by-letter bounce reveal animation for section headings.
- 💼 **Enterprise Experience** — Quantified impact metrics and strategically sorted tech stacks from the ABB Global Industries and Services Private Limited internship.
- 📂 **Interactive Projects** — Expandable detail panels with 3D tilt hover effects powered by `TiltCard`.
- 🔧 **Structured Skills Grid** — Logical categories covering Full-Stack, DevOps, Testing, and AI tooling.
- 📊 **Animated Stats Counter** — Animated counters showcasing key achievement metrics.
- 📜 **Verified Certifications** — Clean credential cards with validated skill tags.
- 📬 **Working Contact Form** — Integrated with EmailJS for direct, validated communication.
- ✨ **Performant Animations** — Hardware-accelerated CSS keyframes and optimized Framer Motion `whileInView` transitions.
- ♿ **Accessible** — `:focus-visible` rings, `prefers-reduced-motion` guards, semantic HTML, and ARIA labels.

---

## 3. Changelog

### [Latest] Theme System & UX Enhancements
- **Added:** Full Light/Dark theme system (`ThemeContext`, `ThemeProvider`, `ThemeToggle`) with localStorage persistence and `prefers-color-scheme` detection.
- **Added:** `themeColors.ts` — centralized theme-aware colour map for components that cannot use CSS variables (e.g. canvas draw calls, inline Framer Motion styles).
- **Added:** `ScrollProgressBar.tsx` — thin accent-colored read-progress indicator fixed at the top of the viewport.
- **Added:** `ScrollAnimationWrapper.tsx` — composable scroll-triggered fade-in-up animation wrapper for section content.
- **Added:** `ScrollBounceText.tsx` — per-letter bounce animation for section heading reveals.
- **Added:** Skeleton loader system (`src/components/ui/skeletons/`) — one shimmer skeleton per section (Hero, Experience, Projects, Skills, About, Certifications, Achievements, Contact).
- **Added:** `use3DScroll.ts` hook — 3D parallax tilt values derived from scroll position for depth effects.
- **Updated:** `InteractiveBackground.tsx` now renders a fully canvas-driven, theme-aware animated background with mouse spotlight tracking, dot grid, and glowing orbs.

### Previous: Dependency Audit & Stabilization
- **Fixed:** Replaced hard-pinned versions with proper semver ranges (`^16`, `^19`) for forward-compatible installs.
- **Updated:** `next` → `^16` (resolves to **16.2.10**), `eslint-config-next` → `^16` to match.
- **Confirmed stable:** React 19 (stable since Dec 2024) and Tailwind CSS v4 (stable since Jan 2025).

---

## 4. Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | `^16` |
| **Language** | TypeScript | `^5` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | `^12` |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.563` |
| **Fonts** | Poppins (Headings) · Inter (Body) · JetBrains Mono (Code) | via `next/font/google` |
| **Email** | [@emailjs/browser](https://www.emailjs.com/) | `^4` |
| **Utilities** | clsx · tailwind-merge | `^2` · `^3` |

---

## 5. Project Architecture

The application follows a modular, component-driven architecture using the Next.js App Router (single-page, statically exported in production).

- **State Management:** React Hooks (`useState`, `useEffect`, `useRef`, `useCallback`) for all local component state. Global theme state is managed via `ThemeContext` / `ThemeProvider` — no external state library.
- **Theme System:** `ThemeContext` provides `theme` + `toggleTheme` to the entire app. `themeColors.ts` exports a typed `Record<Theme, ThemeColors>` map used by canvas and JS-driven components. The `data-theme` attribute on `<html>` drives CSS variable swaps between dark and light palettes, with an inline anti-FOUT script to prevent flashes.
- **Styling System:** Tailwind CSS v4 with custom CSS variables (`--primary`, `--surface-1`, `--text-muted`, etc.) defined in `:root` and exposed via `@theme {}` for consistent theming and enforced dark/light mode.
- **Code Splitting:** Every section is a `React.lazy` dynamic import with a matched skeleton component (`src/components/ui/skeletons/`) as its `Suspense` fallback, eliminating blank-page flashes and reducing initial bundle size.
- **Animation Strategy:** `framer-motion` for complex entrance and layout animations; CSS `@keyframes` for continuous shimmer skeleton effects; Canvas API (`requestAnimationFrame`) for the interactive background.
- **Routing:** Single-page smooth scrolling via native anchor tags combined with an `IntersectionObserver` for navbar state sync.
- **Custom Hook:** `use3DScroll.ts` derives 3D tilt `rotateX`/`rotateY` values from scroll position for subtle depth effects.
- **Output:** Static export (`output: 'export'`) in production — fully deployable to any CDN, Firebase Hosting, or Vercel.

---

## 6. Installation Guide

```bash
# 1. Clone the repository
git clone https://github.com/NiranjanSaravanakumar/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env.local file in the project root with the following:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# 4. Start the development server
npm run dev
# → Navigate to http://localhost:3000
```

---

## 7. Usage Instructions

- **Development:** Run `npm run dev` → `http://localhost:3000`. Component changes hot-reload instantly.
- **Content Updates:** Personal data (projects list, experience entries, skills, etc.) lives inside the data arrays at the top of each section component (e.g., `projects` array in `Projects.tsx`, `experiences` array in `Experience.tsx`).
- **Styling Updates:** Modify global design tokens in the `:root` block of `src/app/globals.css` (colors, fonts, spacing). Tailwind theme extensions live in the `@theme {}` block in the same file. Theme-specific color values for JS/canvas components are in `src/lib/themeColors.ts`.
- **Adding Sections:** Create a new `.tsx` file in `src/components/sections/`, add a matching skeleton in `src/components/ui/skeletons/`, export it from `skeletons/index.ts`, then import and render it (with `lazy` + `Suspense`) inside `src/app/page.tsx`.

---

## 8. Folder Structure

```text
MyPortfolio/
├── public/                                # Static assets
│   ├── Niranjan_Saravanakumar_Resume.pdf  # Resume for download
│   └── photo.png                          # Profile photo
├── src/
│   ├── app/
│   │   ├── globals.css                    # Design tokens (:root), Tailwind @theme, CSS keyframes
│   │   ├── icon.jpg                       # Browser tab favicon
│   │   ├── layout.tsx                     # Root layout: next/font, ThemeProvider, metadata, SEO
│   │   └── page.tsx                       # Main page — lazy-loads all sections with Suspense/skeletons
│   ├── components/
│   │   ├── sections/                      # Full-page feature sections (each is a separate JS chunk)
│   │   │   ├── Hero.tsx                   # Landing hero with typewriter & animated badges
│   │   │   ├── Experience.tsx             # ABB internship timeline & tech stacks
│   │   │   ├── Projects.tsx               # Expandable project cards with TiltCard wrapper
│   │   │   ├── Skills.tsx                 # Categorized skills grid
│   │   │   ├── About.tsx                  # Bio, values, and personal snapshot
│   │   │   ├── Certifications.tsx         # Credential cards with skill tags
│   │   │   ├── Achievements.tsx           # Animated stats & impact metrics
│   │   │   └── Contact.tsx                # EmailJS contact form with validation
│   │   └── ui/                            # Reusable UI primitives & interactive widgets
│   │       ├── Navbar.tsx                 # IntersectionObserver-tracked responsive nav + ThemeToggle
│   │       ├── InteractiveBackground.tsx  # Canvas-driven, theme-aware animated background
│   │       ├── ScrambleText.tsx           # Character-scramble text animation
│   │       ├── ScrollAnimationWrapper.tsx # Scroll-triggered fade-in-up animation wrapper
│   │       ├── ScrollBounceText.tsx       # Per-letter bounce reveal animation for headings
│   │       ├── ScrollProgressBar.tsx      # Fixed read-progress bar at top of viewport
│   │       ├── SectionBackground.tsx      # Per-section background wrapper
│   │       ├── StatsCounter.tsx           # Animated count-up stat display
│   │       ├── ThemeToggle.tsx            # Sun/moon theme switcher button
│   │       ├── TiltCard.tsx               # 3D perspective tilt on hover (mouse-tracked)
│   │       ├── Typewriter.tsx             # Cycling role-title typewriter effect
│   │       └── skeletons/                 # Shimmer skeleton loaders (one per section)
│   │           ├── SkeletonHero.tsx
│   │           ├── SkeletonExperience.tsx
│   │           ├── SkeletonProjects.tsx
│   │           ├── SkeletonSkills.tsx
│   │           ├── SkeletonAbout.tsx
│   │           ├── SkeletonCertifications.tsx
│   │           ├── SkeletonAchievements.tsx
│   │           ├── SkeletonContact.tsx
│   │           └── index.ts               # Barrel export for all skeletons
│   ├── context/
│   │   └── ThemeContext.tsx               # ThemeProvider + useTheme hook (dark/light state)
│   ├── hooks/
│   │   └── use3DScroll.ts                 # Custom hook: scroll-derived 3D tilt values
│   └── lib/
│       ├── themeColors.ts                 # Typed colour map for JS/canvas theme-aware rendering
│       └── utils.ts                       # cn() helper — clsx + tailwind-merge
├── next.config.ts                         # Static export config (output: 'export' in prod)
├── postcss.config.mjs                     # Tailwind v4 PostCSS plugin config
├── tsconfig.json                          # TypeScript config with path aliases (@/)
└── package.json                           # Dependencies with ^-pinned semver ranges
```

---

## 9. Performance Optimizations

- **Code-Split Sections:** Every section is a `React.lazy` import, so only the Hero chunk is loaded on first paint. Other sections are fetched in parallel as idle time allows.
- **Skeleton Loaders:** Dedicated skeleton components eliminate blank white flashes during chunk fetch, giving instant perceived-load feedback.
- **Next.js Font Optimization:** `next/font/google` loads Poppins, Inter, and JetBrains Mono with zero layout shift (`display: swap`).
- **Lazy Animations:** `whileInView` + `once: true` on all Framer Motion components prevents off-screen render costs.
- **Static Export:** `output: 'export'` in production generates a fully static site — no server needed, deployable to any CDN.
- **Image Optimization Bypass:** `images: { unoptimized: true }` is set for static export compatibility.

---

## 10. Accessibility

- **Keyboard Navigation:** Global `:focus-visible` styles provide clear focus indicators for screen readers and power users.
- **Reduced Motion:** `prefers-reduced-motion` media queries guard `TiltCard` and animation-heavy components against vestibular discomfort.
- **Semantic HTML:** Correct heading hierarchy (`h1` → `h2` → `h3`), landmark regions (`<main>`, `<nav>`, `<section>`), and `aria-label`s on icon-only buttons.
- **Contrast Compliance:** All `--text-*` tokens are tested against `--background` for WCAG AA contrast ratios in both dark and light themes.
- **Theme Persistence:** Theme preference is saved to `localStorage` and read via an anti-FOUT inline script in `<head>` to prevent a flash of the wrong theme on page load.

---

## 11. Responsive Design

- **Mobile-First Layouts:** Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`) scale from single-column mobile to multi-column desktop grids.
- **Mobile Scroll-Lock:** Body scrolling is disabled when the hamburger navigation menu is open.
- **Fluid Typography:** Heading font sizes and spacing are tuned per breakpoint for optimal touch-target sizing.

---

## 12. Future Enhancements

- **Live Markdown Blog:** Add a `/blog` route using MDX for in-portfolio technical writing.
- **GitHub API Integration:** Dynamically pull latest repositories and contribution graphs.
- **Theme Toggle:** Context-based light/dark mode switcher.
- **Publications Section:** Restore a dedicated section for filed patents and research papers.

---

## 13. Deployment

The project is statically exported and ready for deployment to Firebase Hosting, Vercel, GitHub Pages, or any static CDN.

```bash
# Build the static export
npm run build
# → Generates the /out directory with all static files

# Preview locally (optional)
npx serve out
```

> **Note:** Ensure all `NEXT_PUBLIC_*` environment variables are configured in your hosting provider's dashboard before deploying.

---

## 14. Contributing

As this is a personal portfolio, direct contributions are not expected. However, if you spot a bug or have a suggestion:

1. Fork the repository.
2. Create a feature branch: `git checkout -b fix/your-fix-name`
3. Commit your changes: `git commit -m 'fix: describe the fix'`
4. Push the branch: `git push origin fix/your-fix-name`
5. Open a Pull Request with a clear description.

---

## 15. Contact

**Niranjan Saravanakumar**

- **Email:** [niranjan29293@gmail.com](mailto:niranjan29293@gmail.com)
- **LinkedIn:** [linkedin.com/in/niranjansaravanakumar](https://www.linkedin.com/in/niranjansaravanakumar/)
- **GitHub:** [github.com/NiranjanSaravanakumar](https://github.com/NiranjanSaravanakumar)

---

## 1. Project Overview
This portfolio is engineered to maximize technical credibility and user experience. It serves as a comprehensive showcase of Niranjan Saravanakumar's software engineering capabilities, specifically highlighting an automation-heavy internship at ABB Global Industries and Services Private Limited, full-stack projects, and notable research publications (patents and papers). The architecture prioritizes instantaneous load times, accessible navigation, and high-impact visual design.

---

## 2. Features
- ⚡ **Instant Hero Entry** — Optimized for recruiter workflows with immediate, no-gate loading.
- 🧭 **Context-Aware Navbar** — IntersectionObserver-driven active states with mobile scroll-lock and a persistent "Download Resume" CTA.
- 💼 **Enterprise Experience** — Quantified impact metrics and strategically sorted tech stacks.
- 📂 **Interactive Projects** — Expandable detail panels with 3D tilt hover effects.
- 🔬 **Research & Patents** — Dedicated section showcasing intellectual property and peer-reviewed papers.
- 🔧 **Structured Skills Grid** — 6 logical categories covering Full-Stack, DevOps, Testing, and AI tools.
- 📊 **By The Numbers** — High-impact stats banner summarizing key achievements.
- 📜 **Verified Certifications** — Clean credential cards with validated skill tags.
- 📬 **Working Contact Form** — Integrated with EmailJS/Web3Forms for direct communication.
- ✨ **Performant Animations** — Hardware-accelerated CSS keyframes and optimized Framer Motion transitions.

---

## 3. Recent Updates / Changelog
### Added & Restored
- **Publications Section:** Integrated a dedicated section for 2 filed patents and 3 research papers.
- **Global Focus Ring:** Added `:focus-visible` styling for comprehensive keyboard navigation support.
- **Download Resume CTA:** Added persistent resume access to the Navbar.

### Modified & Improved
- **Section Reordering:** Prioritized high-signal content: Experience -> Projects -> Skills -> About -> Publications.
- **Hero Messaging:** Rewrote tagline and badges for accuracy (e.g., "ABB Global Industries and Services Private Limited Intern '25–'26'") and impact.
- **Navbar Logic:** Replaced static click-based routing with a dynamic `IntersectionObserver` for accurate scroll tracking.
- **Tailwind v4 Compliance:** Registered custom CSS animations directly into the `@theme` block.
- **Contact Footer:** Improved legibility with increased opacity and dynamic copyright year calculation.

### Optimized & Fixed
- **Performance Overhaul:** Replaced 7 heavy concurrent `requestAnimationFrame` canvas loops with pure CSS `@keyframes`, drastically reducing CPU/battery drain.
- **Reduced Motion Support:** Added `prefers-reduced-motion` guards to 3D interactive components (`TiltCard`).
- **Security & Clarity:** Removed personal phone number from the About section and replaced cliché phrasing with concrete capabilities.

---

## 4. Tech Stack
| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Poppins (Headings), Inter (Body), JetBrains Mono (Code/Tags) |
| **Email Service** | EmailJS / Web3Forms |

---

## 5. Project Architecture
The application follows a modular component-driven architecture using the Next.js App Router.
- **State Management:** React Hooks (`useState`, `useEffect`, `useRef`) for local component state.
- **Styling System:** Tailwind CSS v4 with custom CSS variables (`--primary`, `--surface-1`, `--text-muted`) for consistent theming and dark mode enforcement.
- **Animation Strategy:** `framer-motion` for complex entrance and layout animations; CSS keyframes for continuous background ambient effects to save CPU cycles.
- **Routing:** Single-page smooth scrolling utilizing native anchor tags combined with an `IntersectionObserver` for state sync.

---

## 6. Installation Guide
```bash
# 1. Clone the repository
git clone https://github.com/NiranjanSaravanakumar/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Configure Environment Variables
# Create a .env.local file in the root
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# 4. Start the development server
npm run dev
```

---

## 7. Usage Instructions
- **Development:** Run `npm run dev` and navigate to `http://localhost:3000`. Changes to components will hot-reload.
- **Content Updates:** Personal data is primarily stored in data arrays within individual section components (e.g., `projects` array in `Projects.tsx`).
- **Styling Updates:** Modify global design tokens in the `:root` block of `src/app/globals.css`.

---

## 8. Screenshots
*(Add screenshots of the deployed application here)*
- Hero Section
- Projects & Experience Grid
- Research & Publications

---

## 9. Folder Structure
```text
MyPortfolio/
├── public/                     # Static assets (resume PDF, metadata images)
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, Tailwind @theme, CSS keyframes
│   │   ├── layout.tsx          # Root layout: fonts, metadata
│   │   └── page.tsx            # Main assembly of all sections
│   ├── components/
│   │   ├── sections/           # Feature components
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Publications.tsx # Patents & Papers
│   │   │   ├── Certifications.tsx
│   │   │   ├── Achievements.tsx # Impact metrics
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── Navbar.tsx      # IntersectionObserver tracked nav
│   │       ├── SectionBackground.tsx # High-performance CSS ambient bg
│   │       └── TiltCard.tsx    # 3D interactive wrapper
│   └── lib/
│       └── utils.ts            # Tailwind merge/clsx utilities
```

---

## 10. Performance Optimizations
- **CSS-Driven Ambient Backgrounds:** Replaced expensive Canvas-based particle loops with CSS `@keyframes` and `radial-gradient` for zero-JS background animations.
- **Next.js Font Optimization:** Utilized `next/font/google` for optimal web font loading with zero layout shift.
- **Lazy Animations:** Applied `whileInView` and `once: true` to Framer Motion components to prevent off-screen rendering costs.

---

## 11. Accessibility Improvements
- **Keyboard Navigation:** Global `:focus-visible` styles ensure clear focus indicators for screen readers and power users.
- **Reduced Motion:** Integrated `prefers-reduced-motion` media queries within interactive 3D components (`TiltCard`) to prevent vestibular discomfort.
- **Semantic HTML & Contrast:** Utilized correct heading hierarchies, `aria-label`s on icon-only buttons, and WCAG-compliant `--text-muted` tokens for contrast ratios.

---

## 12. Responsive Design Features
- **Mobile-First Layouts:** Utilized Tailwind's breakpoint system (`md:`, `lg:`) to gracefully scale from single-column mobile views to multi-column desktop grids.
- **Mobile Scroll-Lock:** Prevented background body scrolling when the mobile hamburger navigation menu is active.
- **Fluid Typography:** Adjusted heading font sizes and spacing margins specifically for touch targets on smaller devices.

---

## 13. Future Enhancements
- **Live Markdown Blog:** Integrate a `/blog` route using MDX to write technical articles directly within the portfolio.
- **Dynamic Project Fetching:** Connect the GitHub API to dynamically pull latest repositories and contribution graphs.
- **Theme Toggle:** Implement a context-based Light/Dark mode switcher.

---

## 14. Deployment Information
The project is optimized for deployment on Vercel or Firebase App Hosting.
```bash
# Build for production
npm run build

# Start production server
npm run start
```
*Ensure all environment variables are populated in your hosting provider's dashboard before deployment.*

---

## 15. Contributing Guidelines
As this is a personal portfolio, direct code contributions are not typically expected. However, if you spot a bug or have an optimization suggestion:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/Optimization`).
3. Commit your changes (`git commit -m 'Add Optimization'`).
4. Push to the branch (`git push origin feature/Optimization`).
5. Open a Pull Request.

---

## 16. Contact Information
**Niranjan Saravanakumar**
- **Email:** [niranjan29293@gmail.com](mailto:niranjan29293@gmail.com)
- **LinkedIn:** [linkedin.com/in/niranjansaravanakumar](https://www.linkedin.com/in/niranjansaravanakumar/)
- **GitHub:** [github.com/NiranjanSaravanakumar](https://github.com/NiranjanSaravanakumar)
