"use client";

/* SkeletonContact — mirrors left info card + right contact form */
export function SkeletonContact() {
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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — contact info card */}
          <div
            className="skeleton-base rounded-2xl p-8 flex flex-col gap-6"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="skeleton-shimmer h-7 w-48 rounded-lg" />
            <div className="flex flex-col gap-3">
              <div className="skeleton-shimmer h-4 w-full rounded-md" />
              <div className="skeleton-shimmer h-4 w-[85%] rounded-md" />
            </div>

            {/* Info rows: icon + text */}
            <div className="flex flex-col gap-5 mt-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="skeleton-shimmer h-10 w-10 rounded-xl shrink-0" />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="skeleton-shimmer h-3 w-16 rounded-md" />
                    <div className="skeleton-shimmer h-4 w-40 rounded-md" />
                  </div>
                </div>
              ))}
            </div>

            {/* Social icon row */}
            <div className="flex gap-3 mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="skeleton-shimmer h-10 w-10 rounded-xl" />
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div
            className="skeleton-base rounded-2xl p-8 flex flex-col gap-6"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <div className="skeleton-shimmer h-3 w-16 rounded-md" />
                <div className="skeleton-shimmer h-11 w-full rounded-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="skeleton-shimmer h-3 w-16 rounded-md" />
                <div className="skeleton-shimmer h-11 w-full rounded-xl" />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <div className="skeleton-shimmer h-3 w-20 rounded-md" />
              <div className="skeleton-shimmer h-11 w-full rounded-xl" />
            </div>

            {/* Message textarea */}
            <div className="flex flex-col gap-2">
              <div className="skeleton-shimmer h-3 w-24 rounded-md" />
              <div className="skeleton-shimmer h-36 w-full rounded-xl" />
            </div>

            {/* Submit button */}
            <div className="skeleton-shimmer h-12 w-full rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
