import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Tell GEO AI about your business. Upload your existing content, describe your customers, share your website URL. Cortex ingests everything and builds your business profile in minutes.",
  },
  {
    num: "02",
    title: "Deploy",
    desc: "All 8 agents activate. Scout finds your opportunities. Blueprint builds your content plan. Forge writes and designs your pages. Signal publishes them, fully optimized for AI crawlers.",
  },
  {
    num: "03",
    title: "Compound",
    desc: "Pulse monitors everything. Agents rewrite underperformers, double down on winners, and adapt to algorithm changes automatically. Your AI search presence gets stronger every single week.",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          How It Works
        </span>
        <h2 className="mb-14 text-3xl sm:text-4xl md:text-5xl">
          Up and running in 3 steps.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="mb-4 inline-block font-['Syne'] text-4xl font-extrabold text-primary/20">
                {step.num}
              </span>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
