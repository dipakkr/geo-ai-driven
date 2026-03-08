import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    popular: false,
    features: [
      "1 business profile",
      "4 agents active (Scout, Blueprint, Forge, Signal)",
      "Up to 50 pages/month",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    popular: true,
    features: [
      "1 business profile",
      "All 8 agents active",
      "Up to 200 pages/month",
      "Weekly performance reports",
      "Competitor tracking (up to 5 competitors)",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$2,499",
    popular: false,
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
        <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl">
          Simple pricing. Serious results.
        </h2>
        <p className="mb-14 text-center text-sm text-muted-foreground">
          14-day free trial on all plans. No credit card required.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                tier.popular
                  ? "border-primary bg-primary/5 glow-blue-sm"
                  : "border-border bg-card"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 text-xl font-bold">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold font-['Syne']">{tier.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                    <span className="mt-0.5 text-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                className="w-full rounded-full"
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
