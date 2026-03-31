import { useScrollReveal } from "@/hooks/useScrollReveal";

const nodes = [
  "Cortex", "Scout", "Blueprint", "Forge", "Rival", "Signal", "Anchor", "Pulse"
];

const Solution = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-[100px]">
      <div className="mx-auto max-w-5xl">
        <span className="section-label mb-6 block w-fit">
          The Solution
        </span>
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-heading text-[#0a0a0a]">
          One platform. Eight agents working while you sleep.
        </h2>
        <p className="mb-14 max-w-3xl text-lg text-[rgba(0,0,0,0.4)] font-medium leading-relaxed">
          Lucato AI deploys a fleet of specialized agents, each one owning a different job. Together they build, optimize, publish, and monitor your AI search presence automatically. Set it up once. Let it compound.
        </p>

        {/* Pipeline diagram */}
        <div
          className={`rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-0 sm:justify-between">
            {nodes.map((node, i) => (
              <div key={node} className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f5f5] border border-black/[0.06] text-xs font-medium text-[#0a0a0a] sm:h-12 sm:w-auto sm:px-4">
                  {node}
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden h-px w-6 bg-black/10 sm:block" />
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
