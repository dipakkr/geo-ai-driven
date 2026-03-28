"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Share your website, describe your customers, upload existing content. Cortex ingests everything and builds a comprehensive business profile in minutes.",
  },
  {
    num: "02",
    title: "Deploy",
    desc: "All 8 agents activate simultaneously. Scout finds opportunities, Blueprint creates the plan, Forge writes and designs pages, Signal publishes them — fully optimized for AI crawlers.",
  },
  {
    num: "03",
    title: "Compound",
    desc: "Pulse monitors performance daily. Agents rewrite underperformers, amplify winners, and adapt to algorithm changes automatically. Your visibility grows every week.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          How It Works
        </span>
        <h2 className="mb-14 text-3xl sm:text-4xl md:text-5xl font-bold">
          Live in three steps.
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="mb-4 inline-block text-5xl font-extrabold text-primary/15">
                {step.num}
              </span>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
