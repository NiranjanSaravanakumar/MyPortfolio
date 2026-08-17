import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { ThemeProvider } from "@/context/ThemeContext";

/* Primary heading font — bold & modern */
const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* Body / paragraph font — clean & highly readable */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Mono font — used ONLY for code, tech tags, stats, section labels */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niranjan Saravanakumar | Software Engineer",
  description:
    "Portfolio of Niranjan Saravanakumar — Software Engineering Intern at ABB Global Industries and Services Private Limited with expertise in test automation, full-stack development, and DevOps. CGPA 8.62 | Python | React | TypeScript | Azure DevOps.",
  keywords:
    "Niranjan Saravanakumar, Software Engineer, Software Engineering Intern, ABB Global Industries and Services Private Limited, Full Stack Developer, Python, React, TypeScript, Test Automation, DevOps, CI/CD, SonarQube, Portfolio",
  authors: [{ name: "Niranjan Saravanakumar" }],
  robots: "index, follow",
  openGraph: {
    title: "Niranjan Saravanakumar | Software Engineer",
    description:
      "Software Engineering Intern @ ABB Global Industries and Services Private Limited | Test Automation | Full-Stack | DevOps | Python | React",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Saravanakumar | Software Engineer",
    description: "Software Engineering Intern @ ABB Global Industries and Services Private Limited | Python · React · TypeScript · DevOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-FOUT: set data-theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <div className="scanlines" />
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
