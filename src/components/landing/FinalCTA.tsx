"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 text-center md:py-32">
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Don't wait for AI to find your competitors first.
        </h2>
        <p className="mb-10 text-base text-muted-foreground leading-relaxed">
          Hundreds of forward-thinking businesses already use Lucato to own
          their AI search presence. The window is closing fast.
        </p>
        <a
          href="https://cal.com/lucato-demo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-10 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
        >
          Start your free trial
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          Talk to our team &middot; See how much traffic AI search can drive to your business
        </p>
      </div>
    </section>
  );
}
