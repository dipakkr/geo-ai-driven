import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, MessageSquare, Bot, Zap, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-500/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 rounded-full bg-indigo-500/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-x-1/4 rounded-full bg-blue-400/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
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
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 animate-fade-in backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.15)]">
          <Sparkles className="h-3.5 w-3.5" />
          The AI Search Revolution Is Here
        </div>

        <h1 className="mb-6 text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] animate-fade-in font-extrabold" style={{ animationDelay: "0.1s" }}>
          <span className="block bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
            More inbound leads.
          </span>
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm pb-2">
            From Google and AI search.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Lucato AI deploys 8 specialized AI agents to make your business the definitive answer on ChatGPT, Perplexity, Gemini, and Google. We don't give you a tool. We do the work.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="group rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02] border border-blue-500/50">
            <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-full text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border"
          >
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Flow diagram */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="rounded-2xl border border-border bg-card/40 p-8 shadow-2xl shadow-blue-900/5 backdrop-blur-xl sm:p-12">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">How it works</p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-0 sm:justify-between px-4 sm:px-0 relative">
            {[
              { icon: <MessageSquare className="h-5 w-5 text-blue-500" />, label: "Buyer asks ChatGPT" },
              { icon: <Bot className="h-5 w-5 text-indigo-500" />, label: "AI crawls the web" },
              { icon: <Zap className="h-5 w-5 text-amber-500" />, label: "Lucato-optimized page found" },
              { icon: <CheckCircle2 className="h-5 w-5 text-green-500" />, label: "Your business recommended" },
            ].map((step, i) => (
              <div key={step.label} className="flex relative z-10 w-full items-center gap-4 sm:flex-col sm:gap-4 sm:w-1/4 sm:text-center group">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-blue-500/30"
                >
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-foreground sm:max-w-[120px] leading-tight transition-colors duration-300 group-hover:text-blue-500">{step.label}</span>

                {/* Desktop Connectors */}
                {i < 3 && (
                  <div className="hidden sm:block absolute top-7 left-[50%] w-[100%] h-px bg-border -z-10" />
                )}

                {/* Mobile Connectors */}
                {i < 3 && (
                  <div className="sm:hidden absolute left-7 top-14 bottom-[-32px] w-px bg-border -z-10" />
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
