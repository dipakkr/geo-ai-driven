import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div
        className={`relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-foreground p-12 text-center text-background sm:p-16 noise transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Gradient accents */}
        <div className="pointer-events-none absolute -top-[100px] -right-[100px] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-[100px] -left-[100px] h-[300px] w-[300px] rounded-full bg-violet-500/15 blur-[80px]" />

        <div className="relative z-10">
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05]">
            Stop being invisible to AI.<br />
            <span className="text-gradient-blue">Start being recommended.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base text-background/60">
            Join 500+ SMBs already building their AI search presence with GEO AI.
          </p>
          <Button asChild size="lg" className="group rounded-full bg-background px-10 text-base font-medium text-foreground shadow-xl hover:bg-background/90 transition-all duration-300 hover:scale-[1.03]">
            <a href="/signup">
              Get Early Access <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="mt-5 text-xs text-background/40">
            No credit card required · Takes 5 minutes · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
