import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 text-center md:py-32">
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Stop being invisible to AI. Start being recommended.
        </h2>
        <p className="mb-10 text-base text-muted-foreground" style={{ fontWeight: 300 }}>
          Join 500+ SMBs already building their AI search presence with GEO AI.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 text-base glow-blue">
          <a href="/signup">
            Get Early Access -- It's Free <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          No credit card required · Takes 5 minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
