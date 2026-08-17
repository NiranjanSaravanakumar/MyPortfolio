"use client";

/* SkeletonSkills — mirrors 4-column skill group cards with progress bars */
export function SkeletonSkills() {
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
            <div className="skeleton-shimmer h-6 w-36 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-64 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <div className="skeleton-shimmer h-4 w-80 rounded-md" />
          </div>
        </div>

        {/* Skill group cards — 2-col on md, 4-col on xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-base rounded-2xl p-6 flex flex-col gap-5"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Group icon + title */}
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-10 w-10 rounded-xl" />
                <div className="skeleton-shimmer h-5 w-28 rounded-lg" />
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="flex flex-col gap-1.5">
                    <div className="flex justify-between">
                      <div className="skeleton-shimmer h-3 rounded-md" style={{ width: `${50 + j * 8}%` }} />
                      <div className="skeleton-shimmer h-3 w-8 rounded-md" />
                    </div>
                    {/* Progress track */}
                    <div className="skeleton-base h-1.5 w-full rounded-full overflow-hidden">
                      <div
                        className="skeleton-shimmer h-full rounded-full"
                        style={{ width: `${60 + j * 7}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
