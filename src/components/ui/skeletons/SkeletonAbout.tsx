"use client";

/* SkeletonAbout — mirrors 2-col layout: avatar+bio on left, stat grid on right */
export function SkeletonAbout() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--surface-2)" }}
      aria-hidden="true"
    >
      <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="skeleton-shimmer h-6 w-32 rounded-full" />
          </div>
          <div className="flex justify-center mb-3">
            <div className="skeleton-shimmer h-12 w-56 rounded-xl" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Avatar + bio */}
          <div className="flex flex-col gap-6">
            {/* Avatar circle */}
            <div className="flex justify-center lg:justify-start">
              <div className="skeleton-shimmer rounded-full" style={{ width: 180, height: 180 }} />
            </div>

            {/* Name + role pills */}
            <div className="flex flex-col gap-3">
              <div className="skeleton-shimmer h-8 w-56 rounded-lg" />
              <div className="flex gap-2 flex-wrap">
                <div className="skeleton-shimmer h-6 w-32 rounded-full" />
                <div className="skeleton-shimmer h-6 w-28 rounded-full" />
              </div>
            </div>

            {/* Bio paragraph lines */}
            <div className="flex flex-col gap-2">
              {[100, 95, 88, 80, 70].map((w, i) => (
                <div key={i} className="skeleton-shimmer h-4 rounded-md" style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* Social links row */}
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="skeleton-shimmer h-10 w-10 rounded-xl" />
              ))}
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="skeleton-base rounded-2xl p-6 flex flex-col gap-3"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="skeleton-shimmer h-9 w-20 rounded-lg" />
                <div className="skeleton-shimmer h-3 w-full rounded-md" />
                <div className="skeleton-shimmer h-3 w-[70%] rounded-md" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
