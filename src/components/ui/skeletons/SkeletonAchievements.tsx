"use client";

/* SkeletonAchievements — mirrors 3×2 stats grid */
export function SkeletonAchievements() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      aria-hidden="true"
    >
      <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="skeleton-shimmer h-6 w-44 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-80 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <div className="skeleton-shimmer h-4 w-72 rounded-md" />
          </div>
        </div>

        {/* 3×2 stat card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-base rounded-2xl p-8 flex flex-col items-center gap-4"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Big stat value */}
              <div className="skeleton-shimmer h-12 w-24 rounded-xl" />
              {/* Label */}
              <div className="skeleton-shimmer h-3 w-[70%] rounded-md" />
              <div className="skeleton-shimmer h-3 w-[50%] rounded-md" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
