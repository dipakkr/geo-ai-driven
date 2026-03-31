import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 text-center md:py-[100px] bg-[#f5f5f5]">
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-[#0a0a0a]">
          Stop being invisible to AI. Start being recommended.
        </h2>
        <p className="mb-10 text-lg text-[rgba(0,0,0,0.4)] font-medium">
          Join 500+ forward-thinking businesses already building their AI search presence with Lucato AI.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 text-[15px] font-medium bg-[#1483F3] hover:bg-[#0F6DD0] text-white btn-shimmer border-0 shadow-none transition-all duration-300 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(20,131,243,0.3)] h-14">
          <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">
            Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <p className="mt-4 text-xs text-[#6f6f6f] font-medium">
          Talk to our team · Find out how much traffic you are losing to AI search
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
