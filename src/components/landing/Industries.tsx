"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leaf, Hotel, Factory } from "lucide-react";

const industries = [
  {
    icon: Leaf,
    name: "Climate tech",
    who: "Seed to Series B companies selling carbon accounting, energy software, batteries, materials and other B2B climate products.",
    pain: "Excellent products, thin marketing teams, and buyers who now ask an AI to shortlist vendors before they ever visit a website.",
    query: "Which carbon-accounting tools work for a 200-person German manufacturer?",
    color: "text-emerald-500",
    bg: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    icon: Hotel,
    name: "Hospitality groups",
    who: "Multi-location hotel and restaurant operators, boutique chains and the platforms that serve them.",
    pain: "Travelers and event planners ask ChatGPT for a recommendation, and the AI names three properties before a booking site loads.",
    query: "Best boutique hotel in Vienna for a conference group of 40?",
    color: "text-primary",
    bg: "from-primary/15 to-primary/0",
  },
  {
    icon: Factory,
    name: "Manufacturers",
    who: "Mid-sized B2B manufacturers in lighting, plastics, chemicals, components and industrial equipment, in the US and Europe.",
    pain: "Decades of engineering expertise locked in PDFs and catalogs that AI crawlers cannot read or cite.",
    query: "Who supplies custom LED lighting modules for industrial fixtures in Europe?",
    color: "text-amber-500",
    bg: "from-amber-500/15 to-amber-500/0",
  },
];

export default function Industries() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="industries" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          Who we work with
        </span>
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
          Built for industries where the AI picks the shortlist.
        </h2>
        <p className="mb-14 max-w-3xl text-base text-muted-foreground leading-relaxed">
          Our strongest results come from three kinds of companies. Each has a
          great product, a small marketing team, and customers who ask ChatGPT,
          Claude or Gemini before they ask Google.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className={`relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${ind.bg}`} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background shadow-sm">
                    <Icon className={`h-5 w-5 ${ind.color}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{ind.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{ind.who}</p>
                  <p className="mb-5 text-sm text-foreground/80 leading-relaxed">{ind.pain}</p>
                  <div className="mt-auto rounded-lg border border-border/50 bg-secondary/60 px-4 py-3 text-sm italic text-foreground">
                    &ldquo;{ind.query}&rdquo;
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
