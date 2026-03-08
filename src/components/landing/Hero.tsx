import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/12 via-primary/4 to-transparent blur-[100px]" />
        <div className="absolute -bottom-[100px] -right-[200px] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-violet-400/8 via-primary/4 to-transparent blur-[80px]" />
        <div className="absolute top-1/3 -left-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-400/6 to-transparent blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-card px-5 py-2.5 text-sm font-medium text-primary shadow-sm animate-fade-in glass glass-border">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <Zap className="h-3 w-3" />
          </div>
          The AI Search Revolution Is Here
        </div>

        {/* H1 - large, impactful */}
        <h1 className="mb-8 text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="block text-foreground">
            More inbound leads.
          </span>
          <span className="block text-gradient-blue mt-1">
            From AI searches.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
          8 AI agents work around the clock to make your business the answer
          on ChatGPT, Perplexity, Gemini, and Google.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="group relative rounded-full px-8 text-base font-medium shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.03] overflow-hidden">
            <a href="/signup">
              <span className="relative z-10 flex items-center">
                Start for Free <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:text-foreground hover:border-primary/20 hover:shadow-md"
          >
            See how it works <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Social proof mini */}
        <div className="mt-14 flex items-center justify-center gap-3 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex -space-x-2">
            {[
              "bg-gradient-to-br from-blue-400 to-blue-600",
              "bg-gradient-to-br from-emerald-400 to-emerald-600",
              "bg-gradient-to-br from-amber-400 to-amber-600",
              "bg-gradient-to-br from-violet-400 to-violet-600",
            ].map((color, i) => (
              <div key={i} className={`h-8 w-8 rounded-full ${color} border-2 border-background flex items-center justify-center text-[10px] font-bold text-white`}>
                {["A", "M", "S", "K"][i]}
              </div>
            ))}
          </div>
          <span>Join 500+ SMBs already using GEO AI</span>
        </div>
      </div>

      {/* Flow diagram - floating glass card */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-3xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="rounded-2xl bg-card p-8 shadow-2xl shadow-foreground/5 glass glass-border sm:p-10 noise">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0 sm:justify-between">
            {[
              { num: "01", label: "Buyer asks ChatGPT", accent: "from-blue-500 to-cyan-500" },
              { num: "02", label: "AI crawls the web", accent: "from-violet-500 to-purple-500" },
              { num: "03", label: "GEO page surfaces", accent: "from-amber-500 to-orange-500" },
              { num: "04", label: "You get recommended", accent: "from-emerald-500 to-green-500" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-sm font-bold text-white shadow-lg animate-float`} style={{ animationDelay: `${i * 0.8}s` }}>
                  {step.num}
                </div>
                <span className="text-xs font-medium text-muted-foreground sm:max-w-[90px]">{step.label}</span>
                {i < 3 && (
                  <div className="hidden items-center sm:flex">
                    <div className="h-px w-10 bg-gradient-to-r from-border to-transparent md:w-14" />
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
