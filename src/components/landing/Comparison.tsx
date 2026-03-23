import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const features = [
  { label: "Optimized for AI agents (Lucato)", seo: false, diy: false, geo: true },
  { label: "Publishes 100s of pages automatically", seo: false, diy: false, geo: true },
  { label: "Adapts to algorithm changes in real time", seo: false, diy: false, geo: true },
  { label: "Works 24/7 without your input", seo: false, diy: false, geo: true },
  { label: "Schema + llms.txt + structured data", seo: "partial", diy: false, geo: true },
  { label: "Competitive intelligence built in", seo: false, diy: false, geo: true },
  { label: "Cost-effective at scale", seo: false, diy: true, geo: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === "partial") return <span className="text-sm text-muted-foreground">Partial</span>;
  return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
};

const Comparison = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-5xl">
          Built for the way AI search actually works.
        </h2>

        <div
          className={`overflow-x-auto rounded-xl border border-border bg-card transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-widest text-muted-foreground">Feature</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">Traditional SEO</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">DIY Content</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-primary">Lucato AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="border-b border-border/50 last:border-0">
                  <td className="px-5 py-4 text-foreground">{f.label}</td>
                  <td className="px-5 py-4 text-center"><Cell value={f.seo} /></td>
                  <td className="px-5 py-4 text-center"><Cell value={f.diy} /></td>
                  <td className="px-5 py-4 text-center"><Cell value={f.geo} /></td>
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
