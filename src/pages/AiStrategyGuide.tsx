import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Layers, BarChart3, Shield, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

const chapters = [
  {
    number: "01",
    icon: <Target className="h-6 w-6 text-blue-500" />,
    title: "Define Your AI Vision",
    content: "Before implementing any AI solution, you need a clear picture of what success looks like. Start by auditing your current business processes, identifying bottlenecks, and mapping where AI can create the most impact.",
    keyPoints: [
      "Audit current workflows for automation opportunities",
      "Identify high-impact, low-risk starting points",
      "Set measurable KPIs tied to business outcomes",
      "Align AI goals with your 12-month business plan",
    ],
  },
  {
    number: "02",
    icon: <Layers className="h-6 w-6 text-indigo-500" />,
    title: "Assess Your AI Readiness",
    content: "Most AI projects fail not because of bad technology, but because of poor data, unclear processes, or organizational resistance. Evaluate your readiness across four dimensions before investing.",
    keyPoints: [
      "Data quality — Is your data clean, accessible, and structured?",
      "Technical infrastructure — Can your systems support AI workloads?",
      "Team capability — Do you have AI-literate decision makers?",
      "Cultural readiness — Will your team embrace AI-driven workflows?",
    ],
  },
  {
    number: "03",
    icon: <BarChart3 className="h-6 w-6 text-green-500" />,
    title: "Build Your AI Roadmap",
    content: "A phased approach reduces risk and builds organizational confidence. Start with quick wins, then scale to transformative projects. Each phase should deliver measurable ROI.",
    keyPoints: [
      "Phase 1 (Month 1-2): Quick wins — chatbots, content automation, AI search visibility",
      "Phase 2 (Month 3-4): Process optimization — workflow automation, predictive analytics",
      "Phase 3 (Month 5-8): Strategic AI — custom models, competitive intelligence, AI-powered growth",
      "Phase 4 (Month 9-12): Scale & optimize — enterprise-wide AI integration",
    ],
  },
  {
    number: "04",
    icon: <Shield className="h-6 w-6 text-yellow-500" />,
    title: "Navigate AI Risks & Governance",
    content: "AI governance isn't optional — it's a competitive advantage. Companies that build trust through responsible AI use will win in the long run. Address risks proactively, not reactively.",
    keyPoints: [
      "Establish clear AI usage policies and guidelines",
      "Implement human oversight for high-stakes decisions",
      "Ensure data privacy compliance (GDPR, CCPA, etc.)",
      "Create an AI ethics review process for customer-facing applications",
    ],
  },
  {
    number: "05",
    icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
    title: "The AI Search Imperative",
    content: "By 2026, over 40% of product and service discovery starts with AI — ChatGPT, Perplexity, Gemini. If your business isn't optimized for AI search, you're invisible to a growing segment of buyers.",
    keyPoints: [
      "AI search engines don't use traditional SEO ranking factors",
      "Structured, authoritative content gets cited more often",
      "Brand mentions across trusted sources drive AI recommendations",
      "Companies investing in AI search visibility today will dominate tomorrow",
    ],
  },
  {
    number: "06",
    icon: <Rocket className="h-6 w-6 text-red-500" />,
    title: "Measure & Scale What Works",
    content: "AI strategy is iterative. Track what works, cut what doesn't, and double down on the highest-ROI initiatives. The best AI strategies are living documents, not shelf-ware.",
    keyPoints: [
      "Track AI ROI by business outcome, not just accuracy metrics",
      "Run A/B tests before scaling any AI initiative",
      "Build feedback loops between AI outputs and business results",
      "Reallocate budget from low-performing initiatives to proven winners",
    ],
  },
];

const mistakes = [
  {
    mistake: "Starting with technology, not problems",
    fix: "Identify your top 3 business bottlenecks first, then evaluate which AI can solve them.",
  },
  {
    mistake: "Trying to boil the ocean",
    fix: "Pick one high-impact use case and nail it before expanding. Quick wins build momentum.",
  },
  {
    mistake: "Ignoring AI search entirely",
    fix: "40%+ of discovery is shifting to AI. Optimize your presence on ChatGPT, Perplexity, and Gemini now.",
  },
  {
    mistake: "Underestimating change management",
    fix: "Budget 20-30% of your AI investment for training, communication, and organizational readiness.",
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

const AiStrategyGuide = () => {
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
            <BookOpen className="h-3.5 w-3.5" />
            Complete AI Strategy Guide
          </div>

          <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl animate-fade-in font-extrabold" style={{ animationDelay: "0.1s" }}>
            <span className="block bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              The Complete
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AI Strategy Guide
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s", fontWeight: 300 }}>
            A practical, no-fluff framework for building an AI strategy that actually drives business results.
            From vision to execution — everything you need to get AI working for your company.
          </p>

          <p className="text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Updated March 2026 · 12 min read · 6 chapters
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 py-16 md:py-20">
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-xl p-8 md:p-12 shadow-xl shadow-blue-900/5">
              <h2 className="text-xl font-bold mb-6">What's Inside</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {chapters.map((ch) => (
                  <a
                    key={ch.number}
                    href={`#chapter-${ch.number}`}
                    className="flex items-center gap-3 rounded-xl p-3 text-sm text-muted-foreground transition-all hover:bg-secondary/50 hover:text-foreground group"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-500 transition-all group-hover:bg-blue-500 group-hover:text-white">
                      {ch.number}
                    </span>
                    <span style={{ fontWeight: 300 }}>{ch.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Chapters */}
      {chapters.map((ch, i) => (
        <section key={ch.number} id={`chapter-${ch.number}`} className="px-6 py-16 md:py-20">
          <Section>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 dark:border-white/10 bg-card/60 shadow-xl shadow-blue-900/5 backdrop-blur-md">
                  {ch.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-1">Chapter {ch.number}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold">{ch.title}</h2>
                </div>
              </div>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
                {ch.content}
              </p>

              <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-xl p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Key Actions</p>
                <ul className="space-y-3">
                  {ch.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mid-article CTA after chapter 3 */}
              {ch.number === "03" && (
                <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-2">Need help building your AI roadmap?</h3>
                  <p className="text-sm text-muted-foreground mb-6" style={{ fontWeight: 300 }}>
                    Lucato AI's team can help you identify quick wins and build a phased plan for AI search dominance.
                  </p>
                  <Button asChild className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-[1.02] transition-all duration-300">
                    <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
                      Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
            <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold">5 AI Strategy Mistakes to Avoid</h2>
            <p className="mb-12 text-center text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
              We've seen these derail hundreds of AI initiatives. Don't repeat them.
            </p>

            <div className="space-y-4">
              {mistakes.map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-white/10 dark:border-white/5 bg-card/40 backdrop-blur-xl p-6 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="sm:w-1/2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">Mistake #{i + 1}</p>
                    <p className="text-base font-bold text-foreground">{m.mistake}</p>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-500 mb-1">The Fix</p>
                    <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>{m.fix}</p>
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
              Ready to put your AI strategy into action?
            </h2>
            <p className="mb-10 text-base text-muted-foreground" style={{ fontWeight: 300 }}>
              Stop planning. Start executing. Lucato AI deploys 8 specialized agents that make your business the definitive answer on AI search platforms — starting in week one.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02] border border-blue-500/50 transition-all duration-300 h-14">
              <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground/80 font-medium">
              See how AI search visibility works for your business · No commitment required
            </p>
          </div>
        </Section>
      </section>

      <Footer />
    </div>
  );
};

export default AiStrategyGuide;
