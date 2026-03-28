"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, DollarSign, TrendingUp, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const pricingModels = [
  {
    model: "Project-Based",
    range: "$10,000 – $75,000+",
    description: "A fixed scope with a fixed price. Best suited for clearly defined implementations such as chatbot deployment or document automation.",
    pros: ["Predictable budget", "Clear deliverables", "Defined timeline"],
    cons: ["Scope changes cost extra", "Less flexibility"],
  },
  {
    model: "Retainer / Monthly",
    range: "$2,000 – $25,000/mo",
    description: "Ongoing advisory and hands-on support. Ideal for organizations building AI capabilities incrementally.",
    pros: ["Continuous improvement", "Priority access", "Flexible scope"],
    cons: ["Long-term commitment", "Variable output"],
  },
  {
    model: "Hourly Consulting",
    range: "$150 – $500/hr",
    description: "Pay-per-session expertise. Works well for targeted audits, technical reviews, or answering specific questions.",
    pros: ["No commitment", "Pay only for what you use", "Immediate expert access"],
    cons: ["Costs accumulate fast", "No ownership of outcomes"],
  },
  {
    model: "AI-as-a-Service",
    range: "$499 – $5,000/mo",
    description: "Fully managed AI solutions with predictable monthly pricing. Autonomous agents handle the work on your behalf.",
    pros: ["Predictable cost", "No hiring needed", "Results from day one"],
    cons: ["Platform dependency", "Less customization"],
    highlight: true,
  },
];

const costFactors = [
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Team Size & Seniority",
    description: "Senior strategists bill $300–500/hr while junior consultants start around $150/hr. Match the team to your project's complexity.",
  },
  {
    icon: <Clock className="h-5 w-5 text-violet-500" />,
    title: "Engagement Duration",
    description: "A two-week audit is a fraction of the cost of a six-month transformation. Longer engagements often unlock volume discounts.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    title: "Scope & Technical Depth",
    description: "Implementing a simple chatbot is very different from optimizing an entire supply chain with AI. Scope clarity controls cost.",
  },
  {
    icon: <DollarSign className="h-5 w-5 text-amber-500" />,
    title: "Industry & Compliance",
    description: "Healthcare, finance, and legal AI projects carry higher costs due to data sensitivity, regulatory requirements, and compliance audits.",
  },
];

const hiddenCosts = [
  "Data cleaning and preparation (often 40–60% of total project time)",
  "Integration with legacy systems and existing workflows",
  "Employee training and organizational change management",
  "Ongoing model maintenance, retraining, and drift monitoring",
  "Infrastructure and compute expenses",
  "Security reviews and compliance certifications",
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function AiConsultingCostContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/8 blur-[120px] animate-glow-pulse" />
        </div>
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
            <DollarSign className="h-3.5 w-3.5" />
            Pricing Guide
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl animate-fade-in font-extrabold" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground pb-2">How Much Does</span>
            <span className="block bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              AI Consulting Cost?
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Rates range from $150/hour for independent advisors to $500+/hour
            for top-tier firms. Projects typically land between $10K and $75K+.
            Here's what shapes the price — and how to maximize ROI.
          </p>

          <p className="text-xs text-muted-foreground/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Updated March 2026 &middot; 8 min read
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-8 md:p-12">
              <h2 className="mb-6 text-2xl sm:text-3xl font-bold">At a Glance</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Hourly Rate", value: "$150 – $500+/hr", sub: "Freelancer to Big 4" },
                  { label: "Monthly Retainer", value: "$2K – $25K/mo", sub: "Ongoing advisory" },
                  { label: "Project-Based", value: "$10K – $75K+", sub: "Fixed scope" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Pricing Models */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">Four Common Pricing Models</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground">
              Each fits a different stage and budget
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {pricingModels.map((pm) => (
                <div
                  key={pm.model}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    pm.highlight
                      ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                      : "border-border bg-card/60"
                  }`}
                >
                  {pm.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25">
                      Best Value
                    </span>
                  )}
                  <h3 className="mb-1 text-xl font-semibold">{pm.model}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent mb-3">{pm.range}</p>
                  <p className="text-sm text-muted-foreground mb-6">{pm.description}</p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-2">Pros</p>
                      {pm.pros.map((p) => (
                        <p key={p} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                          <CheckCircle2 className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0" /> {p}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">Cons</p>
                      {pm.cons.map((c) => (
                        <p key={c} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                          <AlertTriangle className="h-3 w-3 mt-0.5 text-amber-500 shrink-0" /> {c}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Cost Factors */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">What Shapes the Final Price?</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground">
              Understanding these variables helps you plan and negotiate
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {costFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background shadow-sm mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Hidden Costs */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h2 className="text-2xl sm:text-3xl font-bold">Hidden Costs to Budget For</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                The consulting fee is the starting point. Factor in these commonly overlooked expenses:
              </p>
              <ul className="space-y-3">
                {hiddenCosts.map((cost) => (
                  <li key={cost} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    {cost}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">Consulting Firm vs. AI-as-a-Service</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground">
              Why more teams are switching to autonomous AI solutions
            </p>

            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Factor</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Traditional Consulting</th>
                    <th className="px-6 py-4 text-left font-semibold text-primary">Lucato AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    ["Monthly Cost", "$5,000 – $25,000+", "$499 – $1,799"],
                    ["Time to Results", "3–6 months", "Week 1"],
                    ["Who Does the Work", "You implement", "Agents execute"],
                    ["Scalability", "Hire more consultants", "Built in"],
                    ["AI Search Expertise", "Generalist", "Purpose-built"],
                    ["Commitment", "6–12 month contracts", "Month-to-month"],
                  ].map(([factor, trad, lucato]) => (
                    <tr key={factor} className="hover:bg-card/40 transition-colors">
                      <td className="px-6 py-3.5 font-medium text-foreground">{factor}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">{trad}</td>
                      <td className="px-6 py-3.5 text-primary font-medium">{lucato}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              Skip the consulting overhead. Let agents do the work.
            </h2>
            <p className="mb-10 text-base text-muted-foreground leading-relaxed">
              Lucato gives you 8 specialized agents at a fraction of traditional consulting costs. No contracts, no hourly billing — just measurable results.
            </p>
            <a
              href="https://cal.com/lucato-demo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-10 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            >
              Book a Free Demo <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Plans start at $499/mo &middot; No contracts &middot; Cancel anytime
            </p>
          </div>
        </Section>
      </section>
    </>
  );
}
