"use client";

import { useEffect, useMemo, useRef } from "react";
import { lpCopy, lpPrograms } from "@/constants/lp-data";
import { revealOnScroll } from "@/lib/gsap";

function WireIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[2px] h-4 w-4 opacity-80"
    >
      <path
        d="M12 2l7 4v12l-7 4-7-4V6l7-4z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M12 7v10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M7.5 9.5l9 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M16.5 9.5l-9 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Programs() {
  const ref = useRef<HTMLElement | null>(null);

  const ordered = useMemo(() => lpPrograms, []);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    revealOnScroll(root.querySelectorAll("[data-reveal]"));
  }, []);

  return (
    <section
      id="programs"
      ref={ref}
      className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-3">
        <h2 data-reveal className="text-balance text-2xl font-semibold md:text-4xl">
          {lpCopy.sections.programsTitle}
        </h2>
        <p
          data-reveal
          className="max-w-2xl whitespace-pre-line opacity-70"
        >
          {lpCopy.sections.programsDesc}
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 gap-6">
        {ordered.map((p) => (
          <div
            key={p.id}
            data-plan={p.id}
            data-reveal
            className="relative overflow-hidden rounded-none border border-black/10 bg-[#FBFBFB] p-10 text-black md:p-12"
          >
            {/* Bloom mesh */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                backgroundImage: `
                  radial-gradient(900px circle at 15% 10%, rgba(255,194,226,0.10), transparent 60%),
                  radial-gradient(700px circle at 90% 30%, rgba(218,191,255,0.10), transparent 58%),
                  radial-gradient(650px circle at 20% 92%, rgba(185,215,255,0.10), transparent 60%),
                  radial-gradient(520px circle at 85% 85%, rgba(191,255,231,0.09), transparent 58%),
                  radial-gradient(520px circle at 55% 75%, rgba(255,245,181,0.09), transparent 55%)
                `,
              }}
            />

            {/* LVX "光" motif: one-point rays, no downward vertical line */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-26"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 700'%3E%3Cg stroke='%23000000' stroke-opacity='0.28' stroke-width='1.2' stroke-linecap='round'%3E%3Cline x1='320' y1='170' x2='320' y2='36'/%3E%3Cline x1='320' y1='170' x2='430' y2='60'/%3E%3Cline x1='320' y1='170' x2='700' y2='170'/%3E%3Cline x1='320' y1='170' x2='640' y2='490'/%3E%3Cline x1='320' y1='170' x2='210' y2='280'/%3E%3Cline x1='320' y1='170' x2='120' y2='170'/%3E%3Cline x1='320' y1='170' x2='220' y2='70'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "68% auto",
                backgroundPosition: "-10% -12%",
                WebkitMaskImage:
                  "radial-gradient(500px circle at 18% 18%, black 52%, transparent 100%)",
                maskImage:
                  "radial-gradient(500px circle at 18% 18%, black 52%, transparent 100%)",
              }}
            />

            <div className="relative">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="text-xs tracking-[0.32em] opacity-60">
                    {p.name} / {p.depthLabel} / {p.sessionsLabel}
                  </div>
                  <div className="text-3xl font-light leading-[1.05] tracking-[0.06em] md:text-4xl">
                    {p.title}
                  </div>
                  <div className="text-sm md:text-base opacity-75">
                    {p.subtitle}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-end justify-end gap-2">
                    <div className="font-light leading-none tracking-tight text-2xl md:text-3xl lg:text-4xl">
                      {p.priceLabel}
                    </div>
                    <div className="pb-2 text-[10px] opacity-70">円</div>
                  </div>
                  <div className="mt-2 text-[10px] tracking-wide opacity-60">
                    （税込 / デモ表記）
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-black/10 pt-8">
                <ul className="space-y-4">
                  {p.bullets.map((b, idx) => (
                    <li
                      key={`${p.id}-${idx}`}
                      className="flex items-start gap-3 text-[12px] leading-6 opacity-70"
                    >
                      <span className="text-black/80">
                        <WireIcon />
                      </span>
                      <span className="italic">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

