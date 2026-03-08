import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-x-1/4 rounded-full bg-primary/4 blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary animate-fade-in backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          The AI Search Revolution Is Here
        </div>

        {/* H1 */}
        <h1 className="mb-6 text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="block text-muted-foreground/70 font-medium">More inbound leads.</span>
          <span className="block bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            From the AI searches your
          </span>
          <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            customers are already making.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          GEO AI deploys 8 specialized agents that work 24/7 to make your business
          the answer on ChatGPT, Perplexity, Gemini, and Google.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="group rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]">
            <a href="/signup">
              Start for Free <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Flow diagram */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-3xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="rounded-2xl border border-border/80 bg-card/60 p-8 shadow-xl shadow-primary/5 backdrop-blur-md sm:p-12">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">How it works</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0 sm:justify-between">
            {[
              { icon: "💬", label: "Buyer asks ChatGPT" },
              { icon: "🤖", label: "AI crawls the web" },
              { icon: "⚡", label: "GEO-optimized page found" },
              { icon: "✅", label: "Your business recommended" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:flex-col sm:gap-3 sm:text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent text-xl shadow-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
                >
                  {step.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground sm:max-w-[100px]">{step.label}</span>
                {i < 3 && (
                  <div className="hidden items-center sm:flex">
                    <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-primary/10 md:w-12" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                  </div>
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
