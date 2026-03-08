import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    popular: false,
    desc: "For businesses getting started with AI search.",
    features: [
      "1 business profile",
      "4 agents active",
      "Up to 50 pages/month",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    popular: true,
    desc: "For businesses ready to dominate AI search.",
    features: [
      "1 business profile",
      "All 8 agents active",
      "Up to 200 pages/month",
      "Weekly performance reports",
      "Competitor tracking (5 competitors)",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$2,499",
    popular: false,
    desc: "For teams managing multiple brands.",
    features: [
      "Up to 3 business profiles",
      "All 8 agents, full autonomy",
      "Unlimited pages",
      "Daily monitoring and auto-rewrites",
      "White-glove onboarding",
      "Dedicated account agent",
    ],
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Simple pricing. <span className="text-gradient-blue">Serious results.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            14-day free trial on all plans. No credit card required.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-600 card-hover noise ${
                tier.popular
                  ? "bg-foreground text-background shadow-2xl shadow-foreground/15 scale-[1.02]"
                  : "bg-card glass glass-border"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
                  <Sparkles className="h-3 w-3" /> Popular
                </div>
              )}
              <h3 className={`mb-1 text-lg font-bold ${tier.popular ? "" : "text-foreground"}`}>{tier.name}</h3>
              <p className={`mb-5 text-xs ${tier.popular ? "text-background/60" : "text-muted-foreground"}`}>{tier.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className={`text-sm ${tier.popular ? "text-background/60" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.popular ? "text-background/80" : "text-muted-foreground"}`}>
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.popular ? "text-primary" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "secondary" : "outline"}
                className={`w-full rounded-full font-medium ${tier.popular ? "bg-background text-foreground hover:bg-background/90" : ""}`}
              >
                <a href="/signup">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
