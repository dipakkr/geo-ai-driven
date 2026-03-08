import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary animate-fade-in">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          The AI Search Revolution Is Here
        </div>

        {/* H1 */}
        <h1 className="mb-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="block text-muted-foreground font-medium">More inbound leads.</span>
          <span className="block text-foreground">
            From the AI searches your customers are already making.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s", fontWeight: 300 }}>
          GEO AI deploys 8 specialized agents that work 24/7 to make your business the answer on ChatGPT, Perplexity, Gemini, and Google. More visibility, more traffic, more leads&nbsp;-- on autopilot.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="rounded-full px-8 text-base glow-blue">
            <a href="/signup">
              Start for Free <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Animated diagram */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-3xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0 sm:justify-between">
            {[
              { icon: "💬", label: "Buyer asks ChatGPT" },
              { icon: "🤖", label: "AI crawls the web" },
              { icon: "⚡", label: "GEO-optimized page found" },
              { icon: "✅", label: "Your business recommended" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-xl animate-node-light"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {step.icon}
                </div>
                <span className="text-xs text-muted-foreground sm:max-w-[100px]">{step.label}</span>
                {i < 3 && (
                  <div className="hidden h-px w-12 bg-gradient-to-r from-primary/60 to-primary/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
