"use client";

/* SkeletonHero — mirrors the full-viewport Hero section layout */
export function SkeletonHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
      aria-hidden="true"
    >
      {/* Ambient orb placeholders */}
      <div
        className="skeleton-base absolute rounded-full opacity-20"
        style={{ width: 520, height: 520, top: "10%", right: "-8%", filter: "blur(80px)" }}
      />
      <div
        className="skeleton-base absolute rounded-full opacity-10"
        style={{ width: 360, height: 360, bottom: "5%", left: "-5%", filter: "blur(60px)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Availability badge */}
        <div className="flex justify-center mb-8">
          <div className="skeleton-shimmer h-7 w-52 rounded-full" />
        </div>

        {/* Main heading — 3 lines */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="skeleton-shimmer h-14 w-[70%] rounded-xl" />
          <div className="skeleton-shimmer h-14 w-[55%] rounded-xl" />
          <div className="skeleton-shimmer h-14 w-[40%] rounded-xl" />
        </div>

        {/* Subtitle / typewriter line */}
        <div className="flex justify-center mb-4">
          <div className="skeleton-shimmer h-6 w-96 rounded-lg" />
        </div>

        {/* Description lines */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="skeleton-shimmer h-4 w-[60%] rounded-md" />
          <div className="skeleton-shimmer h-4 w-[48%] rounded-md" />
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="skeleton-shimmer h-12 w-44 rounded-full" />
          <div className="skeleton-shimmer h-12 w-44 rounded-full" />
        </div>

        {/* Tech pill row */}
        <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-7 w-20 rounded-full" />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="skeleton-base w-6 h-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
