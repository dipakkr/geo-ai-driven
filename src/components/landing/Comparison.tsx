"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const features = [
  { label: "Engineered for AI crawlers", seo: false, diy: false, geo: true },
  { label: "Auto-publishes hundreds of pages", seo: false, diy: false, geo: true },
  { label: "Adapts to algorithm changes in real time", seo: false, diy: false, geo: true },
  { label: "Runs 24/7 without manual input", seo: false, diy: false, geo: true },
  { label: "Schema + llms.txt + structured data", seo: "partial" as const, diy: false, geo: true },
  { label: "Built-in competitive intelligence", seo: false, diy: false, geo: true },
  { label: "Scales without scaling cost", seo: false, diy: true, geo: true },
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-primary" />;
  if (value === "partial") return <span className="text-xs text-muted-foreground">Partial</span>;
  return <X className="mx-auto h-4 w-4 text-muted-foreground/30" />;
}

export default function Comparison() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Purpose-built for the AI search era.
        </h2>

        <div
          className={`overflow-x-auto rounded-xl border border-border bg-card/60 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Capability
                </th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Traditional SEO
                </th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  DIY Content
                </th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-primary">
                  Lucato AI
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="border-b border-border/50 last:border-0">
                  <td className="px-5 py-3.5 text-foreground">{f.label}</td>
                  <td className="px-5 py-3.5 text-center"><Cell value={f.seo} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell value={f.diy} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell value={f.geo} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
