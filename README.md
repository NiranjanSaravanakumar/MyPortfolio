# Niranjan Saravanakumar — Personal Portfolio

> A high-performance, recruiter-ready developer portfolio built with **Next.js 14+**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.  
> Designed to instantly highlight enterprise experience, technical depth, and research publications.

---

## 1. Project Overview
This portfolio is engineered to maximize technical credibility and user experience. It serves as a comprehensive showcase of Niranjan Saravanakumar's software engineering capabilities, specifically highlighting an automation-heavy internship at ABB, full-stack projects, and notable research publications (patents and papers). The architecture prioritizes instantaneous load times, accessible navigation, and high-impact visual design.

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
- **Hero Messaging:** Rewrote tagline and badges for accuracy (e.g., "ABB Intern '25–'26'") and impact.
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
- **Email:** [nickniranjan2929@gmail.com](mailto:nickniranjan2929@gmail.com)
- **LinkedIn:** [linkedin.com/in/niranjansaravanakumar](https://www.linkedin.com/in/niranjansaravanakumar/)
- **GitHub:** [github.com/NiranjanSaravanakumar](https://github.com/NiranjanSaravanakumar)
