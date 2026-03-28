import { ArrowRight, ChevronDown, MessageSquare, Bot, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/8 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 rounded-full bg-violet-500/8 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          The AI Search Revolution Is Here
        </div>

        <h1
          className="mb-6 text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent pb-2">
            More inbound leads.
          </span>
          <span className="block text-foreground">
            From Google and AI search.
          </span>
        </h1>

        <p
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Lucato AI deploys 8 specialized AI agents to make your business the definitive answer on ChatGPT, Perplexity, Gemini, and Google. We don&apos;t give you a tool. We do the work.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://cal.com/lucato-demo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
          >
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Flow diagram */}
      <div
        className="relative z-10 mx-auto mt-20 w-full max-w-3xl animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="rounded-2xl border border-border bg-card/60 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The AI discovery flow
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0 sm:justify-between relative">
            {[
              { icon: <MessageSquare className="h-5 w-5 text-primary" />, label: "Buyer asks ChatGPT" },
              { icon: <Bot className="h-5 w-5 text-violet-500" />, label: "AI crawls the web" },
              { icon: <Zap className="h-5 w-5 text-amber-500" />, label: "Lucato-optimized page found" },
              { icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />, label: "Your business recommended" },
            ].map((step, i) => (
              <div
                key={step.label}
                className="flex relative z-10 w-full items-center gap-4 sm:flex-col sm:gap-3 sm:w-1/4 sm:text-center group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background shadow-sm transition-all group-hover:border-primary/30 group-hover:shadow-md">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-foreground sm:max-w-[110px] leading-tight">
                  {step.label}
                </span>
                {i < 3 && (
                  <div className="hidden sm:block absolute top-6 left-[50%] w-[100%] h-px bg-border -z-10" />
                )}
                {i < 3 && (
                  <div className="sm:hidden absolute left-6 top-12 bottom-[-24px] w-px bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
