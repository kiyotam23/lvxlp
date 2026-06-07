"use client";

export function TransitionGate() {
  return (
    <section
      id="transition"
      aria-label="Transition"
      className="relative w-full py-10 md:py-32"
    >
      <div className="relative h-[360px] overflow-hidden md:h-[520px]">

          {/* falling orb (the only shape) */}
          <div
            data-transition-orb
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "rgb(247 248 248 / 0.98)",
              borderRadius: "999px",
              filter: "blur(0px)",
              boxShadow: "0 0 36px rgba(247,248,248,0.35)",
            }}
          />
      </div>
    </section>
  );
}

