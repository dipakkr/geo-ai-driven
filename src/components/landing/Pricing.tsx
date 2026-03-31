import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Launch",
    price: "$499",
    popular: false,
    features: [
      "AI Hub — up to 100 pages",
      "10 authority backlinks",
      "All 8 AI agents included",
      "Lead tracking dashboard",
      "Monthly insights report",
      "Email support",
    ],
  },
  {
    name: "Grow",
    price: "$999",
    popular: true,
    features: [
      "AI Hub — up to 200 pages",
      "20 authority backlinks",
      "Buyer journey tracking on leads",
      "Spam & bot filtering",
      "Weekly performance insights",
      "Email + Slack support",
    ],
  },
  {
    name: "Scale",
    price: "$1,799",
    popular: false,
    features: [
      "AI Hub — up to 400 pages",
      "40 authority backlinks",
      "Accelerated content refreshes",
      "Custom reporting dashboards",
      "Quarterly strategy reviews",
      "Dedicated priority support",
    ],
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="px-6 py-24 md:py-[100px]">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-heading text-[#0a0a0a]">
          Simple pricing. Serious results.
        </h2>
        <p className="mb-14 text-center text-sm text-[#6f6f6f]">
          14-day free trial on all plans. No credit card required.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 card-hover transition-all duration-500 ${
                tier.popular
                  ? "border-2 border-[#6A60DD] bg-white shadow-[0_0_0_4px_rgba(106,96,221,0.1)]"
                  : "border border-black/[0.08] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.04)]"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6A60DD] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 text-xl font-medium text-[#0a0a0a]">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading tracking-[-0.04em] text-[#0a0a0a]">{tier.price}</span>
                <span className="text-sm text-[#6f6f6f]">/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#6f6f6f]">
                    <span className="mt-0.5 text-[#1483F3]">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                className={`w-full rounded-full h-12 text-base font-medium transition-all duration-300 ${
                  tier.popular
                  ? "bg-[#1483F3] hover:bg-[#0F6DD0] text-white border-0 btn-shimmer hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(20,131,243,0.3)]"
                  : "border-black/[0.08] text-[#0a0a0a] hover:bg-[#f5f5f5]"
                }`}
              >
                <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
                  Book a Demo <ArrowRight className="ml-1 h-4 w-4" />
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
