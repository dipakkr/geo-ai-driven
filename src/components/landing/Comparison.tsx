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
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#1483F3]" />;
  if (value === "partial") return <span className="text-sm text-[#6f6f6f]">Partial</span>;
  return <X className="mx-auto h-5 w-5 text-black/20" />;
};

const Comparison = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-[100px]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-5xl font-heading text-[#0a0a0a]">
          Built for the way AI search actually works.
        </h2>

        <div
          className={`overflow-x-auto rounded-3xl bg-white border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/[0.06]">
                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-widest text-[#6f6f6f]">Feature</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-[#6f6f6f]">Traditional SEO</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-[#6f6f6f]">DIY Content</th>
                <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-[#1483F3] font-semibold">Lucato AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="border-b border-black/[0.06] last:border-0">
                  <td className="px-5 py-4 text-[#0a0a0a] font-medium">{f.label}</td>
                  <td className="px-5 py-4 text-center"><Cell value={f.seo} /></td>
                  <td className="px-5 py-4 text-center"><Cell value={f.diy} /></td>
                  <td className="px-5 py-4 text-center bg-[#f8f5ff]"><Cell value={f.geo} /></td>
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
