import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X, Minus } from "lucide-react";

const features = [
  { label: "Optimized for AI agents (GEO)", seo: false, diy: false, geo: true },
  { label: "Publishes 100s of pages automatically", seo: false, diy: false, geo: true },
  { label: "Adapts to algorithm changes in real time", seo: false, diy: false, geo: true },
  { label: "Works 24/7 without your input", seo: false, diy: false, geo: true },
  { label: "Schema + llms.txt + structured data", seo: "partial", diy: false, geo: true },
  { label: "Competitive intelligence built in", seo: false, diy: false, geo: true },
  { label: "Affordable for SMBs", seo: false, diy: true, geo: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <div className="flex items-center justify-center"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10"><Check className="h-3.5 w-3.5 text-emerald-600" /></div></div>;
  if (value === "partial") return <div className="flex items-center justify-center"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10"><Minus className="h-3.5 w-3.5 text-amber-600" /></div></div>;
  return <div className="flex items-center justify-center"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted"><X className="h-3.5 w-3.5 text-muted-foreground/40" /></div></div>;
};

const Comparison = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Built for how <span className="text-gradient-blue">AI search</span> works.
          </h2>
        </div>

        <div
          className={`overflow-x-auto rounded-2xl bg-card glass glass-border noise transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-5 text-left text-xs font-medium uppercase tracking-widest text-muted-foreground">Feature</th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">Traditional SEO</th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">DIY Content</th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-widest text-primary">
                  <span className="rounded-full bg-primary/10 px-3 py-1">GEO AI</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={`border-b border-border/50 last:border-0 transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                  <td className="px-6 py-4 font-medium text-foreground">{f.label}</td>
                  <td className="px-6 py-4 text-center"><Cell value={f.seo} /></td>
                  <td className="px-6 py-4 text-center"><Cell value={f.diy} /></td>
                  <td className="px-6 py-4 text-center"><Cell value={f.geo} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
