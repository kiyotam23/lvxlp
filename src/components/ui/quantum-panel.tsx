"use client";

import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
  className?: string;
  contentClassName?: string;
  variant?: "light" | "dark";
}
>;

export function QuantumPanel({
  children,
  className,
  contentClassName,
  variant = "light",
  ...rest
}: Props) {
  const isDark = variant === "dark";

  return (
    <div
      {...rest}
      className={cn(
        "relative overflow-hidden rounded-none p-8 md:p-10",
        isDark
          ? "border border-white/10 bg-black/40 text-white"
          : "border border-black/10 bg-[#FBFBFB] text-black",
        className,
      )}
    >
      {/* Bloom mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(900px circle at 15% 10%, rgba(255,194,226,${isDark ? "0.14" : "0.10"}), transparent 60%),
            radial-gradient(700px circle at 90% 30%, rgba(218,191,255,${isDark ? "0.13" : "0.10"}), transparent 58%),
            radial-gradient(650px circle at 20% 92%, rgba(185,215,255,${isDark ? "0.13" : "0.10"}), transparent 60%),
            radial-gradient(520px circle at 85% 85%, rgba(191,255,231,${isDark ? "0.12" : "0.09"}), transparent 58%),
            radial-gradient(520px circle at 55% 75%, rgba(255,245,181,${isDark ? "0.12" : "0.09"}), transparent 55%)
          `,
        }}
      />

      {/* LVX "光" motif: one-point rays, no downward vertical line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-26"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 700'%3E%3Cg stroke='${isDark ? "%23ffffff" : "%23000000"}' stroke-opacity='${isDark ? "0.34" : "0.28"}' stroke-width='1.2' stroke-linecap='round'%3E%3Cline x1='320' y1='170' x2='320' y2='36'/%3E%3Cline x1='320' y1='170' x2='430' y2='60'/%3E%3Cline x1='320' y1='170' x2='700' y2='170'/%3E%3Cline x1='320' y1='170' x2='640' y2='490'/%3E%3Cline x1='320' y1='170' x2='210' y2='280'/%3E%3Cline x1='320' y1='170' x2='120' y2='170'/%3E%3Cline x1='320' y1='170' x2='220' y2='70'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "68% auto",
          backgroundPosition: "-10% -12%",
          WebkitMaskImage:
            "radial-gradient(500px circle at 18% 18%, black 52%, transparent 100%)",
          maskImage:
            "radial-gradient(500px circle at 18% 18%, black 52%, transparent 100%)",
        }}
      />

      <div className={cn("relative", contentClassName)}>{children}</div>
    </div>
  );
}

