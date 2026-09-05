import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
    "Portfolio of Niranjan Saravanakumar — Software Engineer skilled in Java, DSA, Full Stack Web Development & building scalable, high-performance applications.",
  keywords:
    "Niranjan Saravanakumar, Software Engineer, Full Stack Developer, Java, Data Structures and Algorithms, DSA, Web Development, React, TypeScript, Next.js, Portfolio",
  authors: [{ name: "Niranjan Saravanakumar" }],
  robots: "index, follow",
  metadataBase: new URL("https://iamniranjan.me"),
  alternates: {
    canonical: "https://iamniranjan.me/",
  },
  openGraph: {
    title: "Niranjan Saravanakumar | Software Engineer",
    description:
      "Software Engineer skilled in Java, DSA & Full Stack Web Development. Explore my projects, experience, and skills.",
    url: "https://iamniranjan.me/",
    siteName: "Niranjan Saravanakumar",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Saravanakumar | Software Engineer",
    description:
      "Software Engineer skilled in Java, DSA & Full Stack Web Development. Explore my projects and experience.",
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
        {/* Google Analytics — loads after page is interactive, never blocks render */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7D95DB6B7X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7D95DB6B7X');
          `}
        </Script>
        <ThemeProvider>
          <div className="scanlines" />
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
