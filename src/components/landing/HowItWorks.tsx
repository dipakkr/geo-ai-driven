import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plug, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Plug,
    title: "Connect",
    desc: "Tell GEO AI about your business. Upload content, describe your customers, share your URL. Cortex builds your profile in minutes.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    icon: Rocket,
    title: "Deploy",
    desc: "All 8 agents activate. Scout finds opportunities. Blueprint plans. Forge creates. Signal publishes, fully optimized for AI crawlers.",
    accent: "from-violet-500 to-purple-500",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Compound",
    desc: "Pulse monitors everything. Agents rewrite underperformers, double down on winners, and adapt to changes automatically. Every week gets stronger.",
    accent: "from-emerald-500 to-green-500",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary shadow-sm glass glass-border">
            How It Works
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            Up and running in <span className="text-gradient-blue">3 steps.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`group relative overflow-hidden rounded-2xl bg-card p-8 glass glass-border card-hover noise ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms`, transitionDuration: "600ms" }}
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mb-2 block text-xs font-bold tracking-wider text-muted-foreground/40">STEP {step.num}</span>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
