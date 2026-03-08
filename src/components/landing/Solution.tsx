import { useScrollReveal } from "@/hooks/useScrollReveal";

const nodes = [
  "Cortex", "Scout", "Blueprint", "Forge", "Rival", "Signal", "Anchor", "Pulse"
];

const Solution = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          The Solution
        </span>
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl">
          One platform. Eight agents working while you sleep.
        </h2>
        <p className="mb-14 max-w-3xl text-base text-muted-foreground" style={{ fontWeight: 300 }}>
          GEO AI deploys a fleet of specialized agents, each one owning a different job. Together they build, optimize, publish, and monitor your AI search presence automatically. Set it up once. Let it compound.
        </p>

        {/* Pipeline diagram */}
        <div
          className={`rounded-xl border border-border bg-card p-6 sm:p-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-0 sm:justify-between">
            {nodes.map((node, i) => (
              <div key={node} className="flex items-center gap-2 sm:gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-xs font-medium text-primary sm:h-12 sm:w-auto sm:px-4"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {node}
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden h-px w-6 bg-gradient-to-r from-primary/50 to-primary/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
