# Niranjan Saravanakumar — Personal Portfolio

> A modern, recruiter-ready developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.  
> Fully personalized for Niranjan Saravanakumar — Software Engineering Intern @ ABB.

---

## 🌐 Live Preview

| Environment | URL |
|---|---|
| Development | `http://localhost:3000` |
| Production  | *(deploy to Vercel — see [Deployment](#-deployment))* |

---

## ✨ Features

- 🎭 **Interactive boot terminal** — cinematic entry animation
- 🧭 **Sticky responsive navbar** — collapses to hamburger on mobile
- 👤 **About section** — profile narrative + quick facts + education timeline
- 💼 **Experience section** — ABB internship with quantified impact stats
- 🔧 **Skills section** — 6 categorized skill groups with interactive tags
- 📂 **Projects section** — expandable cards with Problem / Solution / Features / Impact
- 📜 **Certifications section** — Oracle + NPTEL credentials with skills validation
- 🏆 **Achievements section** — 6 achievement cards + leadership highlights
- 📬 **Contact section** — 5 social links + working contact form (Web3Forms)
- 🎨 **CRT scanline overlay** — subtle retro atmosphere
- ✨ **Framer Motion animations** — every section enters with smooth transitions
- 📱 **Fully responsive** — mobile, tablet, and desktop optimized
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigable
- 🔍 **SEO optimized** — full metadata, OpenGraph, Twitter cards

---

## 🧰 Technologies Used

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Poppins (headings), Inter (body), JetBrains Mono (code/tags) |
| **Contact Form** | [Web3Forms](https://web3forms.com/) |
| **Deployment** | [Vercel](https://vercel.com/) (recommended) |

---

## 📁 Folder Structure

```
MyPortfolio/
├── public/                     # Static assets (favicon, og image, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, base styles, animations
│   │   ├── layout.tsx          # Root layout: fonts, metadata, scanlines
│   │   └── page.tsx            # Main page — assembles all sections
│   ├── components/
│   │   ├── sections/           # Full-page section components
│   │   │   ├── Hero.tsx        # Boot terminal + hero name + CTAs
│   │   │   ├── About.tsx       # Profile narrative + education timeline
│   │   │   ├── Experience.tsx  # ABB internship card + impact stats
│   │   │   ├── Skills.tsx      # Skill category cards
│   │   │   ├── Projects.tsx    # Expandable project cards
│   │   │   ├── Certifications.tsx  # Credential cards
│   │   │   ├── Achievements.tsx    # Achievement cards + leadership
│   │   │   └── Contact.tsx     # Contact links + form
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── Navbar.tsx      # Sticky navigation with mobile hamburger
│   │       ├── Typewriter.tsx  # Animated typewriter for boot logs
│   │       ├── InteractiveBackground.tsx  # Particle/canvas background
│   │       ├── SectionBackground.tsx      # Per-section glow bg
│   │       ├── TiltCard.tsx    # 3D tilt hover effect wrapper
│   │       ├── ScrambleText.tsx
│   │       ├── StatsCounter.tsx
│   │       └── AIAssistant.tsx
│   └── lib/
│       └── utils.ts            # Utility helpers (cn, etc.)
├── eslint.config.mjs
├── firebase.json               # Firebase configuration
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts          # (auto-detected via @import "tailwindcss")
├── tsconfig.json
└── package.json
```

---

## 🚀 Installation & Setup

### Step 1 — Clone the Repository

```bash
git clone https://github.com/nickniranjan2929/portfolio.git
cd portfolio
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Web3Forms key — get yours free at https://web3forms.com/
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

> Without this key, the contact form will silently fail. The rest of the portfolio works without it.

### Step 4 — Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5 — Build for Production

```bash
npm run build
npm run start
```

---

## ☁️ Deployment

### Firebase (Current Setup)

This project is configured for deployment using Firebase.
To deploy your application:

1. Ensure you are logged into the Firebase CLI (`npx -y firebase-tools@latest login`).
2. Run the deployment command:
   ```bash
   npx -y firebase-tools@latest deploy
   ```

### Vercel (Alternative)

1. Push your code to a GitHub repository.
2. Visit [vercel.com](https://vercel.com) and click **New Project**.
3. Import your GitHub repository.
4. Add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel dashboard.
5. Click **Deploy** — done.

### Manual (other platforms)

```bash
npm run build      # creates .next/ directory
npm run start      # serves production build on port 3000
```

---

## 🧩 Component Reference

### `Hero.tsx`
**Purpose:** First-impression entry point with animated boot terminal.  
**Interaction:** User watches a typewriter boot sequence, then clicks `[ ENTER_PORTFOLIO ]` to reveal the portfolio. After entry, displays name with animated gradient, trait badges, tagline, CTA buttons, and social icon row.  
**Typography:** JetBrains Mono for terminal logs and tagline → Poppins for the name heading → Inter for subtitle and CTA text.

---

### `About.tsx`
**Purpose:** Personal introduction + quick facts + education timeline.  
**Interaction:** Scroll-triggered fade animations on profile bullets and quick fact cards.  
**Typography:** Poppins for headings → Inter for all body text → Mono for date labels and score badges.

---

### `Experience.tsx`
**Purpose:** Detailed breakdown of ABB internship with quantified metrics.  
**Interaction:** Impact stats animate on scroll entry. Highlights list staggers in sequentially.  
**Typography:** Poppins for role/company → Inter for bullet descriptions → Mono for tech tags, dates, type badge.

---

### `Skills.tsx`
**Purpose:** 6-category skill grid with interactive hover color-swap tags.  
**Interaction:** Hovering a skill tag swaps it to the category's accent color (JavaScript-driven, not pure CSS).  
**Typography:** Poppins for category names → Mono for skill tags (tech identifiers suit mono).

---

### `Projects.tsx`
**Purpose:** Featured project showcase with expandable detail panels.  
**Interaction:** Each card has a `[ view details ]` toggle that reveals Problem / Solution / Features / Impact via `AnimatePresence`. 3D tilt effect on hover via `TiltCard`. Stats counter animates when entering viewport.  
**Typography:** Poppins for project titles → Inter for descriptions and detail text → Mono for category, tech tags, toggle button, stats numbers.

---

### `Certifications.tsx`
**Purpose:** Professional credentials with validated skill tags.  
**Interaction:** Cards fade in with stagger delay. Skill tags show checkmarks in the cert's accent color.  
**Typography:** Poppins for cert title → Inter for description/issuer → Mono for type badge and skill tags.

---

### `Achievements.tsx`
**Purpose:** 6 achievement cards + a leadership & soft skills sub-section.  
**Interaction:** Cards animate in with stagger. Left border colored by category. Hover reveals a radial glow.  
**Typography:** Poppins for achievement titles → Inter for descriptions → Mono for category badges and metadata tags.

---

### `Contact.tsx`
**Purpose:** Contact information + a working contact form (Web3Forms).  
**Interaction:** Submitting the form sends an email via Web3Forms API and shows inline success/error feedback. Form fields use Inter. Submit button is mono-styled.  
**Typography:** Poppins for section heading → Inter for form fields and contact values → Mono for field labels, submit button, status feedback.

---

### `Navbar.tsx`
**Purpose:** Sticky navigation bar with smooth scroll links and mobile hamburger menu.  
**Interaction:** Background becomes opaque + blurred after 50px scroll. Mobile menu expands with Framer Motion. Active link highlighted in primary color.  
**Typography:** Inter for nav item text → Mono for the NS brand mark.

---

## 🎨 Customization Guide

### Update Personal Details

Edit the data arrays at the top of each component:

| What to change | File |
|---|---|
| Name, tagline, social links | `src/components/sections/Hero.tsx` |
| Profile text, quick facts, education | `src/components/sections/About.tsx` |
| Internship / job experience | `src/components/sections/Experience.tsx` |
| Email, phone, LinkedIn, GitHub | `src/components/sections/Contact.tsx` |
| SEO title and description | `src/app/layout.tsx` |

---

### Add a New Project

Open `src/components/sections/Projects.tsx` and add an object to the `projects` array:

```ts
{
  title: "Your Project Title",
  subtitle: "Short subtitle",
  category: "Web Application",
  description: "One-paragraph description...",
  problem: "What problem does it solve?",
  solution: "How did you solve it?",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  impact: "What was the measurable outcome?",
  githubLink: "https://github.com/yourrepo",
  liveLink: "https://yourapp.vercel.app",   // null if not deployed
  color: "var(--primary)",                  // var(--primary) | var(--accent) | var(--secondary)
  techStack: ["React", "TypeScript", "MongoDB"],
  icon: "🚀",
},
```

---

### Modify Skills

Edit `src/components/sections/Skills.tsx`, `skillCategories` array:

```ts
{
  title: "My New Category",
  color: "var(--accent)",
  skills: ["Skill A", "Skill B", "Skill C"],
},
```

---

### Change the Color Palette

Edit `:root` in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;   /* Page background */
  --foreground: #ededed;   /* Default text color */
  --primary:    #00ff41;   /* Main accent — green */
  --secondary:  #ffb000;   /* Secondary — amber */
  --accent:     #00f0ff;   /* Contrast — cyan */
  --muted:      #1a1a1a;   /* Card backgrounds */
  --border:     #2a2a2a;   /* Border color */
}
```

---

### Update Social Links

In `src/components/sections/Hero.tsx`, edit the `socialLinks` array.  
In `src/components/sections/Contact.tsx`, edit the `contactLinks` array.

---

### Add a Certificate

In `src/components/sections/Certifications.tsx`, add an object to `certifications`:

```ts
{
  id: 3,
  icon: "🎯",
  title: "Your Certificate Name",
  issuer: "Issuing Organization",
  type: "Professional Certification",
  color: "var(--secondary)",
  description: "What the cert covers and what you learned.",
  skills: ["Skill 1", "Skill 2"],
},
```

---

## ⚡ Optimizations Performed

### UI / Design Improvements
- Replaced generic Arial body font with **Poppins (headings) + Inter (body)** for professional typography
- Applied **JetBrains Mono selectively** — only for terminal output, tech tags, section labels, stats counters, and code-like elements
- Added **radial glow hover effects** on skill and project cards
- Improved **color contrast** of text opacity levels for WCAG AA compliance
- Tightened **spacing scale** across all sections for better visual rhythm
- Added **section numbering** (01–07) for clear information hierarchy
- Added **gradient divider lines** under section headings

### Performance Improvements
- Fonts loaded with `display: "swap"` to eliminate render-blocking
- `scroll-smooth` and `overflow-x: hidden` set at root level
- Animations use `whileInView` with `once: true` to avoid re-triggering
- `AnimatePresence` used for detail panel mount/unmount transitions (no DOM bloat)
- CSS custom properties used for all colors (single source of truth, no redundancy)

### Accessibility Improvements
- All sections have `aria-label` attributes
- All icon-only links have `aria-label` or `title`
- Hamburger button has `aria-expanded` state
- Form fields have proper `<label>` associations via `htmlFor` / `id`
- Form inputs have `autoComplete` attributes
- Color contrast maintained above WCAG 4.5:1 for all primary text

### SEO Improvements
- `<html lang="en">` set in layout
- Descriptive `<title>` tag with name + role
- `meta description` with rich, searchable content
- `keywords` meta tag with relevant technical terms
- `robots: "index, follow"` meta tag
- OpenGraph tags: `title`, `description`, `type`, `locale`
- Twitter card: `summary_large_image` format
- `scroll-smooth` on `<html>` for better UX on anchor links

---

## 🔮 Future Enhancements

| Feature | Description |
|---|---|
| **Dark / Light Mode Toggle** | Add a theme switcher that persists preference in `localStorage` |
| **Blog Integration** | Add a `/blog` route with MDX-powered posts using `next-mdx-remote` |
| **Analytics** | Integrate [Vercel Analytics](https://vercel.com/analytics) or [PostHog](https://posthog.com/) |
| **Resume PDF** | Link the "Hire Me" button to a hosted resume PDF for direct download |
| **Project Filtering** | Add category tabs to filter projects by type (Web, Desktop, etc.) |
| **Testimonials Section** | Add references or endorsements from colleagues/mentors |
| **Admin Dashboard** | Build a headless CMS so content updates don't require code changes |
| **AI Chat Feature** | Add an AI assistant that can answer recruiter questions about the portfolio |
| **Hackathon Tracker** | Dedicated section for hackathons, competitions, and event participations |
| **GitHub Stats Widget** | Live GitHub contribution graph and language stats card |

---

## 📝 What Changed & Why

| Change | Reason | Impact |
|---|---|---|
| Added **Poppins** font for headings | Generic Arial lacked visual authority; Poppins has strong weight contrast | Headings feel premium and distinct |
| Added **Inter** for body text | More readable at small sizes than Arial; modern standard | Better UX for long-form content |
| Restricted **JetBrains Mono** to labels/tags/code | Mono font everywhere caused visual noise and reduced readability | Clean typographic hierarchy |
| Added **Achievements section** | Resume had quantified wins with no dedicated showcase | Recruiters can instantly spot impact |
| Rewrote Experience bullet points | Direct copy from resume sounds passive; professional rewrite is active-voice | Higher perceived seniority |
| Added `aria-label` to all sections/links | Missing accessibility annotations | WCAG compliance, screen reader support |
| Added `autoComplete` to form fields | Improves form UX on mobile and password managers | Faster form completion |
| Changed navbar breakpoint from `md:` to `lg:` | 7 nav items don't fit on medium screens | No overflow/wrapping on tablets |
| Added `section-label` CSS utility class | Repeated mono+uppercase+tracking pattern across all sections | Single source of truth, DRY CSS |
| Darkened `--border` from `#333` to `#2a2a2a` | Slightly subtler border improves contrast of card backgrounds | Cleaner card separation |
| Added OpenGraph + Twitter metadata | Social sharing previews were missing | Better brand presence when shared |
| Added `display: "swap"` to fonts | Google Fonts defaults could block render | Faster perceived load time |

---

## 👤 About the Developer

**Niranjan Saravanakumar**  
Software Engineering Intern @ ABB · B.Tech IT · K S Rangasamy College of Technology  

📧 [nickniranjan2929@gmail.com](mailto:nickniranjan2929@gmail.com)  
💼 [LinkedIn](https://linkedin.com/in/niranjan-saravanakumar)  
🐙 [GitHub](https://github.com/nickniranjan2929)  
📍 Erode, Tamil Nadu, India

---

*Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.*
