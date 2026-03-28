"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Brands() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-b border-border/50 py-12 text-center">
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-8 text-xs font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by growing brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
          <div className="flex items-center transition-transform hover:scale-105 duration-300">
            <img src="/atoz.webp" alt="AtoZ" className="h-8 md:h-10 w-auto object-contain dark:invert opacity-60 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center transition-transform hover:scale-105 duration-300">
            <img src="/tooljunction-logo.png" alt="ToolJunction" className="h-8 md:h-10 w-auto object-contain dark:invert opacity-60 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center transition-transform hover:scale-105 duration-300">
            <img src="/spyne.webp" alt="Spyne" className="h-8 md:h-10 w-auto object-contain dark:invert opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
