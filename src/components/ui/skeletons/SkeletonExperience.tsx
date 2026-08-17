"use client";

/* SkeletonExperience — mirrors timeline card + 4 impact stat boxes */
export function SkeletonExperience() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--background)" }}
      aria-hidden="true"
    >
      <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="skeleton-shimmer h-6 w-40 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-80 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <div className="skeleton-shimmer h-4 w-96 rounded-md" />
          </div>
        </div>

        {/* Impact stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-base rounded-2xl p-6 flex flex-col gap-3"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="skeleton-shimmer h-8 w-16 rounded-lg" />
              <div className="skeleton-shimmer h-3 w-full rounded-md" />
            </div>
          ))}
        </div>

        {/* Timeline card */}
        <div
          className="skeleton-base rounded-2xl p-8"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Card header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div className="flex flex-col gap-3">
              <div className="skeleton-shimmer h-7 w-72 rounded-lg" />
              <div className="skeleton-shimmer h-5 w-56 rounded-md" />
              <div className="flex gap-3">
                <div className="skeleton-shimmer h-5 w-32 rounded-full" />
                <div className="skeleton-shimmer h-5 w-28 rounded-full" />
              </div>
            </div>
            <div className="skeleton-shimmer h-6 w-24 rounded-full" />
          </div>

          {/* Highlights list */}
          <div className="flex flex-col gap-3 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="skeleton-shimmer h-4 w-4 rounded-full mt-1 shrink-0" />
                <div className="skeleton-shimmer h-4 rounded-md" style={{ width: `${85 - i * 8}%` }} />
              </div>
            ))}
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="skeleton-shimmer h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
