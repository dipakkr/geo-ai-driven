import { useScrollReveal } from "@/hooks/useScrollReveal";

const nodes = [
  { name: "Cortex", color: "from-violet-500 to-purple-600" },
  { name: "Scout", color: "from-emerald-500 to-green-600" },
  { name: "Blueprint", color: "from-blue-500 to-cyan-600" },
  { name: "Forge", color: "from-amber-500 to-orange-600" },
  { name: "Rival", color: "from-rose-500 to-red-600" },
  { name: "Signal", color: "from-cyan-500 to-teal-600" },
  { name: "Anchor", color: "from-indigo-500 to-blue-600" },
  { name: "Pulse", color: "from-orange-500 to-amber-600" },
];

const Solution = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary shadow-sm glass glass-border">
            The Solution
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            One platform. <span className="text-gradient-blue">Eight agents.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
            Together they build, optimize, publish, and monitor your AI search presence. Set it up once. Let it compound.
          </p>
        </div>

        {/* Pipeline */}
        <div
          className={`rounded-2xl bg-card p-8 sm:p-12 glass glass-border noise transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {nodes.map((node, i) => (
              <div key={node.name} className="flex items-center gap-3">
                <div
                  className={`flex h-11 items-center justify-center rounded-full bg-gradient-to-r ${node.color} px-5 text-xs font-bold text-white shadow-md transition-transform duration-300 hover:scale-105 animate-float`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {node.name}
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden h-px w-4 bg-border sm:block" />
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
