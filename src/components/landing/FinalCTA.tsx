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
        <Button asChild size="lg" className="rounded-full px-10 text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02] border border-blue-500/50 transition-all duration-300 h-14">
          <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
            Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground/80 font-medium">
          Talk to our team · Find out how much traffic you are losing to AI search
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
