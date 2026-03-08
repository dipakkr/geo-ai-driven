import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InvestorStrip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="investors"
      ref={ref}
      className={`mx-6 rounded-xl border border-border bg-card px-6 py-16 text-center transition-all duration-700 sm:px-12 md:mx-auto md:max-w-5xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <h3 className="mb-4 text-xl sm:text-2xl">
        The shift from search engines to AI agents is happening right now.
      </h3>
      <p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground" style={{ fontWeight: 300 }}>
        Traditional SEO is an $80B industry built on a model that AI is actively disrupting. GEO AI is infrastructure for the next decade of discoverability, starting with 35 million SMBs in the US alone who have no solution for AI search. We're early and the window is open.
      </p>
      <Button asChild variant="outline" className="rounded-full px-6">
        <a href="/signup">
          Request Investor Deck <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </section>
  );
};

export default InvestorStrip;
