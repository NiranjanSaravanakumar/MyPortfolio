"use client";

/* SkeletonProjects — mirrors filter tabs + 3-column project card grid */
export function SkeletonProjects() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      aria-hidden="true"
    >
      <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="skeleton-shimmer h-6 w-36 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-72 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <div className="skeleton-shimmer h-4 w-80 rounded-md" />
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-9 w-24 rounded-full" />
          ))}
        </div>

        {/* Project card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-base rounded-2xl p-6 flex flex-col gap-4"
              style={{ border: "1px solid var(--border)", minHeight: 320 }}
            >
              {/* Icon + category */}
              <div className="flex items-center justify-between">
                <div className="skeleton-shimmer h-10 w-10 rounded-xl" />
                <div className="skeleton-shimmer h-5 w-24 rounded-full" />
              </div>

              {/* Title + subtitle */}
              <div className="flex flex-col gap-2">
                <div className="skeleton-shimmer h-6 w-[80%] rounded-lg" />
                <div className="skeleton-shimmer h-4 w-[60%] rounded-md" />
              </div>

              {/* Description lines */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="skeleton-shimmer h-3 w-full rounded-md" />
                <div className="skeleton-shimmer h-3 w-[90%] rounded-md" />
                <div className="skeleton-shimmer h-3 w-[75%] rounded-md" />
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="skeleton-shimmer h-5 w-14 rounded-full" />
                ))}
              </div>

              {/* Action links */}
              <div className="flex gap-3 pt-2">
                <div className="skeleton-shimmer h-8 w-24 rounded-full" />
                <div className="skeleton-shimmer h-8 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* "View more" button */}
        <div className="flex justify-center mt-12">
          <div className="skeleton-shimmer h-11 w-40 rounded-full" />
        </div>

      </div>
    </section>
  );
}
