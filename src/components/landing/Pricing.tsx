"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
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
      "Monthly performance report",
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
      "Buyer journey tracking",
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
      "Quarterly strategy sessions",
      "Dedicated priority support",
    ],
  },
];

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Transparent pricing. Real outcomes.
        </h2>
        <p className="mb-14 text-center text-sm text-muted-foreground">
          14-day free trial on every plan. No credit card required.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                tier.popular
                  ? "border-primary bg-primary/[0.03] shadow-xl shadow-primary/10 ring-1 ring-primary/30"
                  : "border-border bg-card/60"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/25">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 text-xl font-semibold">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 text-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://cal.com/lucato-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all ${
                  tier.popular
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:brightness-110"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
