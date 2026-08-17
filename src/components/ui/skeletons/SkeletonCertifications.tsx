"use client";

/* SkeletonCertifications — mirrors 2-column certification card grid */
export function SkeletonCertifications() {
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
            <div className="skeleton-shimmer h-6 w-44 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-72 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <div className="skeleton-shimmer h-4 w-96 rounded-md" />
          </div>
        </div>

        {/* 2-column cert card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-base rounded-2xl p-8 flex flex-col gap-5"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between">
                <div className="skeleton-shimmer h-14 w-14 rounded-2xl" />
                <div className="skeleton-shimmer h-6 w-28 rounded-full" />
              </div>

              {/* Title + issuer */}
              <div className="flex flex-col gap-2">
                <div className="skeleton-shimmer h-6 w-[85%] rounded-lg" />
                <div className="skeleton-shimmer h-4 w-[50%] rounded-md" />
              </div>

              {/* Description paragraph */}
              <div className="flex flex-col gap-2">
                <div className="skeleton-shimmer h-3 w-full rounded-md" />
                <div className="skeleton-shimmer h-3 w-[93%] rounded-md" />
                <div className="skeleton-shimmer h-3 w-[80%] rounded-md" />
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="skeleton-shimmer h-6 w-20 rounded-full" />
                ))}
              </div>

              {/* Verify link placeholder */}
              <div className="skeleton-shimmer h-9 w-36 rounded-full mt-1" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
