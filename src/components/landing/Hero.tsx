import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, MessageSquare, Bot, Zap, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 bg-[#f5f5f5]">
      {/* Pastel radial gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%]"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,253,180,0.3) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 30% 90%, rgba(180,255,220,0.25) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 70% 90%, rgba(200,220,255,0.25) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 40% 95%, rgba(255,200,240,0.2) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 60% 95%, rgba(230,200,255,0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-normal tracking-[-0.06em] leading-[1.05] animate-fade-in text-[#0a0a0a]" style={{ animationDelay: "0.1s" }}>
          <span className="block pb-2">
            More inbound leads.
          </span>
          <span className="block pb-2">
            From Google and AI search.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[rgba(0,0,0,0.4)] font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Lucato AI deploys 8 specialized AI agents to make your business the definitive answer on ChatGPT, Perplexity, Gemini, and Google. We don't give you a tool. We do the work.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="group rounded-full px-9 h-12 text-[15px] font-medium bg-[#1483F3] hover:bg-[#0F6DD0] text-white btn-shimmer border-0 shadow-none transition-all duration-300 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(20,131,243,0.3)]">
            <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-full text-sm font-medium text-[#6f6f6f] transition-all hover:text-[#0a0a0a]"
          >
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Flow diagram */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] sm:p-12">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-[#6f6f6f]">How it works</p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-0 sm:justify-between px-4 sm:px-0 relative">
            {[
              { icon: <MessageSquare className="h-5 w-5 text-[#1483F3]" />, label: "Buyer asks ChatGPT" },
              { icon: <Bot className="h-5 w-5 text-[#6A60DD]" />, label: "AI crawls the web" },
              { icon: <Zap className="h-5 w-5 text-amber-500" />, label: "Lucato-optimized page found" },
              { icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />, label: "Your business recommended" },
            ].map((step, i) => (
              <div key={step.label} className="flex relative z-10 w-full items-center gap-4 sm:flex-col sm:gap-4 sm:w-1/4 sm:text-center group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f5] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-[#0a0a0a] sm:max-w-[120px] leading-tight">{step.label}</span>
                {i < 3 && (
                  <div className="hidden sm:block absolute top-7 left-[50%] w-[100%] h-px bg-black/10 -z-10" />
                )}
                {i < 3 && (
                  <div className="sm:hidden absolute left-7 top-14 bottom-[-32px] w-px bg-black/10 -z-10" />
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
