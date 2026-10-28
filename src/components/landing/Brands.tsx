"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type Brand = {
  name: string;
  /** Path under /public. Omit to render a text wordmark until a logo file is added. */
  src?: string;
  industry: string;
};

// Add a client by appending here. Drop the logo into /public and set `src`.
const brands: Brand[] = [
  { name: "AtoZ Insurance", src: "/atoz.webp", industry: "Insurance" },
  { name: "ToolJunction", src: "/tooljunction-logo.png", industry: "Software" },
  { name: "Spyne", src: "/spyne.webp", industry: "AI / Automotive" },
  { name: "Barthelme", src: "/barthelme.png", industry: "Manufacturing · Germany" },
  { name: "GiPlast", src: "/giplast.png", industry: "Manufacturing · Italy" },
];

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
          Trusted by 26 companies across climate tech, hospitality and manufacturing
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              title={`${brand.name} · ${brand.industry}`}
              className="flex h-10 items-center opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100"
            >
              {brand.src ? (
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 md:h-10 w-auto object-contain dark:invert"
                />
              ) : (
                <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
