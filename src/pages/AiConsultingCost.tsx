import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const pricingModels = [
  {
    model: "Project-Based",
    range: "$10,000 - $75,000+",
    description: "Fixed scope, fixed price. Best for well-defined AI implementations like chatbot deployment or document automation.",
    pros: ["Predictable budget", "Clear deliverables", "Defined timeline"],
    cons: ["Scope changes cost extra", "Less flexibility"],
  },
  {
    model: "Retainer / Monthly",
    range: "$2,000 - $25,000/mo",
    description: "Ongoing advisory and implementation support. Ideal for companies building AI capabilities over time.",
    pros: ["Continuous improvement", "Priority access", "Flexible scope"],
    cons: ["Long-term commitment", "Variable output"],
  },
  {
    model: "Hourly Consulting",
    range: "$150 - $500/hr",
    description: "Pay-as-you-go expert guidance. Good for specific questions, audits, or short-term technical reviews.",
    pros: ["No commitment", "Pay for what you use", "Expert access"],
    cons: ["Costs add up quickly", "No ownership of outcomes"],
  },
  {
    model: "AI-as-a-Service",
    range: "$499 - $5,000/mo",
    description: "Done-for-you AI solutions with transparent monthly pricing. Agents work autonomously on your behalf.",
    pros: ["Predictable cost", "No hiring needed", "Immediate results"],
    cons: ["Platform dependency", "Less customization"],
    highlight: true,
  },
];

const costFactors = [
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Team Size & Expertise",
    description: "Senior AI strategists command $300-500/hr. Junior consultants start around $150/hr. The right team depends on your project complexity.",
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-500" />,
    title: "Project Duration",
    description: "A 2-week AI audit costs far less than a 6-month enterprise transformation. Longer engagements often come with volume discounts.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    title: "Scope & Complexity",
    description: "A simple chatbot implementation differs vastly from a full AI-powered supply chain optimization. Define scope clearly to control costs.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-yellow-500" />,
    title: "Industry & Data Requirements",
    description: "Healthcare, finance, and legal AI projects cost more due to compliance requirements, data sensitivity, and regulatory considerations.",
  },
];

const hiddenCosts = [
  "Data cleaning and preparation (often 40-60% of total project time)",
  "Integration with existing systems and workflows",
  "Employee training and change management",
  "Ongoing model maintenance and retraining",
  "Infrastructure and compute costs",
  "Compliance and security audits",
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

const AiConsultingCost = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-500/10 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 rounded-full bg-indigo-500/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 animate-fade-in backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.15)]">
            <DollarSign className="h-3.5 w-3.5" />
            AI Consulting Pricing Guide
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl animate-fade-in font-extrabold" style={{ animationDelay: "0.1s" }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              How Much Does
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AI Consulting Cost?
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s", fontWeight: 300 }}>
            AI consulting costs range from $150/hour for freelance advisors to $500+/hour for top-tier firms.
            Project-based engagements typically run $10K-$75K+. Here's what actually drives the cost — and how to get the best ROI.
          </p>

          <p className="text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Updated March 2026 · 8 min read
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-blue-900/5">
              <h2 className="mb-6 text-2xl sm:text-3xl font-bold">The Quick Answer</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Hourly Rate", value: "$150 - $500+/hr", sub: "Freelancer to Big 4" },
                  { label: "Monthly Retainer", value: "$2K - $25K/mo", sub: "Ongoing advisory" },
                  { label: "Project-Based", value: "$10K - $75K+", sub: "Fixed scope" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1" style={{ fontWeight: 300 }}>{item.sub}</p>
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
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">4 Common AI Consulting Pricing Models</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
              Each model fits different business needs and budgets
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {pricingModels.map((pm, i) => (
                <div
                  key={pm.model}
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                    pm.highlight
                      ? "border-blue-500 bg-blue-500/5 shadow-[0_0_30px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/50"
                      : "border-border bg-card/40 backdrop-blur-xl shadow-xl shadow-blue-900/5"
                  }`}
                >
                  {pm.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-lg shadow-blue-500/30">
                      Best Value
                    </span>
                  )}
                  <h3 className="mb-1 text-xl font-bold">{pm.model}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-3">{pm.range}</p>
                  <p className="text-sm text-muted-foreground mb-6" style={{ fontWeight: 300 }}>{pm.description}</p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-500 mb-2">Pros</p>
                      {pm.pros.map((p) => (
                        <p key={p} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1" style={{ fontWeight: 300 }}>
                          <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-500 shrink-0" /> {p}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500 mb-2">Cons</p>
                      {pm.cons.map((c) => (
                        <p key={c} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1" style={{ fontWeight: 300 }}>
                          <AlertTriangle className="h-3 w-3 mt-0.5 text-yellow-500 shrink-0" /> {c}
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

      {/* What Drives the Cost */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">What Actually Drives the Cost?</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
              Understanding these factors helps you negotiate smarter
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {costFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-xl p-6 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 dark:border-white/10 bg-card/60 shadow-lg mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>{factor.description}</p>
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
            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-12 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl sm:text-3xl font-bold">Hidden Costs Most Businesses Miss</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6" style={{ fontWeight: 300 }}>
                The consulting fee is just the starting point. Budget for these often-overlooked expenses:
              </p>
              <ul className="space-y-3">
                {hiddenCosts.map((cost) => (
                  <li key={cost} className="flex items-start gap-3 text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
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
            <p className="mb-12 text-center text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
              Why more businesses are choosing autonomous AI solutions
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10 dark:border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-card/60">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Factor</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Traditional Consulting</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-500">Lucato AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Monthly Cost", "$5,000 - $25,000+", "$499 - $2,499"],
                    ["Time to Results", "3-6 months", "Week 1"],
                    ["Ongoing Work", "You implement", "Agents do the work"],
                    ["Scalability", "Hire more consultants", "Built-in"],
                    ["AI Search Expertise", "Generalist", "Purpose-built"],
                    ["Commitment", "6-12 month contracts", "Month-to-month"],
                  ].map(([factor, trad, lucato]) => (
                    <tr key={factor} className="hover:bg-card/40 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{factor}</td>
                      <td className="px-6 py-4 text-muted-foreground" style={{ fontWeight: 300 }}>{trad}</td>
                      <td className="px-6 py-4 text-blue-500 font-medium">{lucato}</td>
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
              Skip the consulting bill. Get AI working for you today.
            </h2>
            <p className="mb-10 text-base text-muted-foreground" style={{ fontWeight: 300 }}>
              Lucato AI gives you 8 specialized agents for a fraction of traditional consulting costs. No contracts, no hourly billing — just results.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02] border border-blue-500/50 transition-all duration-300 h-14">
              <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground/80 font-medium">
              Plans start at $499/mo · No contracts · Cancel anytime
            </p>
          </div>
        </Section>
      </section>

      <Footer />
    </div>
  );
};

export default AiConsultingCost;
