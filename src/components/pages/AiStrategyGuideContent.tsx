"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, BookOpen, Target, Layers, BarChart3, Shield, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

const chapters = [
  {
    number: "01",
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Define Your AI Vision",
    content: "Before choosing any tool or vendor, get crystal clear on what winning looks like. Audit current workflows, identify friction points, and map where AI can create the most measurable impact.",
    keyPoints: [
      "Audit workflows for automation and acceleration opportunities",
      "Identify high-impact, low-risk starting points",
      "Set measurable KPIs tied directly to business outcomes",
      "Align AI goals with your 12-month business plan",
    ],
  },
  {
    number: "02",
    icon: <Layers className="h-6 w-6 text-violet-500" />,
    title: "Assess Your Readiness",
    content: "Most AI initiatives fail not because of technology but because of data gaps, unclear processes, or organizational resistance. Evaluate readiness across four dimensions before committing budget.",
    keyPoints: [
      "Data quality — Is your data clean, accessible, and structured?",
      "Infrastructure — Can your systems handle AI workloads?",
      "Team capability — Do decision-makers understand AI tradeoffs?",
      "Cultural readiness — Will teams embrace AI-driven workflows?",
    ],
  },
  {
    number: "03",
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
    title: "Build a Phased Roadmap",
    content: "A staged approach reduces risk and builds organizational confidence. Start with quick wins, prove ROI, then scale to transformative projects. Each phase should deliver measurable value.",
    keyPoints: [
      "Phase 1 (Month 1–2): Quick wins — chatbots, content automation, AI search visibility",
      "Phase 2 (Month 3–4): Process optimization — workflow automation, predictive analytics",
      "Phase 3 (Month 5–8): Strategic AI — custom models, competitive intelligence",
      "Phase 4 (Month 9–12): Enterprise-wide AI integration and optimization",
    ],
  },
  {
    number: "04",
    icon: <Shield className="h-6 w-6 text-amber-500" />,
    title: "Navigate Risks & Governance",
    content: "AI governance isn't a checkbox — it's a competitive advantage. Companies that build trust through responsible AI will win long-term. Address risks proactively.",
    keyPoints: [
      "Establish clear AI usage policies and review guidelines",
      "Implement human oversight for high-stakes decisions",
      "Ensure data privacy compliance (GDPR, CCPA, industry-specific)",
      "Create an ethics review process for customer-facing AI applications",
    ],
  },
  {
    number: "05",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "The AI Search Imperative",
    content: "Over 40% of product and service discovery now starts with AI — ChatGPT, Perplexity, Gemini. If your business isn't optimized for how these engines find and recommend, you're losing a growing share of buyers.",
    keyPoints: [
      "AI search engines use fundamentally different ranking signals than Google",
      "Structured, authoritative content gets cited far more often",
      "Brand mentions across trusted third-party sources drive AI recommendations",
      "Early movers in AI search visibility are building durable competitive moats",
    ],
  },
  {
    number: "06",
    icon: <Rocket className="h-6 w-6 text-rose-500" />,
    title: "Measure, Iterate, Scale",
    content: "AI strategy is iterative by nature. Track what works, cut what doesn't, and double down on the highest-ROI initiatives. The best strategies are living systems, not static documents.",
    keyPoints: [
      "Track ROI by business outcome, not just model accuracy",
      "Run controlled experiments before scaling any initiative",
      "Build feedback loops between AI outputs and business results",
      "Reallocate budget from low performers to proven winners",
    ],
  },
];

const mistakes = [
  {
    mistake: "Starting with technology, not problems",
    fix: "Identify your top 3 business bottlenecks first, then evaluate which AI can address them.",
  },
  {
    mistake: "Trying to do everything at once",
    fix: "Pick one high-impact use case and execute it well before expanding scope.",
  },
  {
    mistake: "Ignoring AI search entirely",
    fix: "40%+ of discovery is shifting to AI engines. Optimize your presence on ChatGPT, Perplexity, and Gemini now.",
  },
  {
    mistake: "Underinvesting in change management",
    fix: "Allocate 20–30% of your AI budget for training, communication, and organizational readiness.",
  },
  {
    mistake: "No measurement framework",
    fix: "Define success metrics before launch. If you can't measure it, you can't improve it.",
  },
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

export default function AiStrategyGuideContent() {
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
            <BookOpen className="h-3.5 w-3.5" />
            Complete Guide
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl animate-fade-in font-extrabold" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground pb-2">The Complete</span>
            <span className="block bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              AI Strategy Playbook
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A practical, no-fluff framework for building an AI strategy that
            actually moves the needle. From vision to execution — everything
            your team needs.
          </p>

          <p className="text-xs text-muted-foreground/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Updated March 2026 &middot; 12 min read &middot; 6 chapters
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12">
              <h2 className="text-xl font-bold mb-6">What&rsquo;s Inside</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {chapters.map((ch) => (
                  <a
                    key={ch.number}
                    href={`#chapter-${ch.number}`}
                    className="flex items-center gap-3 rounded-xl p-3 text-sm text-muted-foreground transition-all hover:bg-secondary/50 hover:text-foreground group"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      {ch.number}
                    </span>
                    <span>{ch.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Chapters */}
      {chapters.map((ch) => (
        <section key={ch.number} id={`chapter-${ch.number}`} className="px-6 py-16 md:py-20">
          <Section>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-5 mb-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card/60 shadow-sm">
                  {ch.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Chapter {ch.number}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold">{ch.title}</h2>
                </div>
              </div>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                {ch.content}
              </p>

              <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Key Actions</p>
                <ul className="space-y-3">
                  {ch.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {ch.number === "03" && (
                <div className="mt-12 rounded-2xl border border-primary/15 bg-primary/[0.03] p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Need help building your AI roadmap?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Lucato's team can identify quick wins and build a phased plan for AI search growth.
                  </p>
                  <a
                    href="https://cal.com/lucato-demo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all hover:brightness-110"
                  >
                    Book a Strategy Call <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </Section>
        </section>
      ))}

      {/* Common Mistakes */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">Five Strategy Mistakes to Avoid</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground">
              We've watched these derail hundreds of AI initiatives.
            </p>

            <div className="space-y-4">
              {mistakes.map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="sm:w-1/2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">Mistake #{i + 1}</p>
                    <p className="text-base font-semibold text-foreground">{m.mistake}</p>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-1">The Fix</p>
                    <p className="text-sm text-muted-foreground">{m.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 text-center md:py-32">
        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to turn strategy into action?
            </h2>
            <p className="mb-10 text-base text-muted-foreground leading-relaxed">
              Stop planning and start executing. Lucato deploys 8 specialized
              agents that make your business the top answer across AI search
              platforms — starting in week one.
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
              See how AI search visibility works for your business &middot; No commitment required
            </p>
          </div>
        </Section>
      </section>
    </>
  );
}
