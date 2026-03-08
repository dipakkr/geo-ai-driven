import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Map, Telescope, PenTool, Eye, Radio, Link2, BarChart3, type LucideIcon } from "lucide-react";

interface Agent {
  icon: LucideIcon;
  name: string;
  role: string;
  desc: string;
  gradient: string;
  span?: string;
}

const agents: Agent[] = [
  {
    icon: Brain, name: "Cortex", role: "Business Intelligence",
    desc: "Builds a living profile of your business. The shared memory layer every other agent draws from.",
    gradient: "from-violet-500/10 via-violet-500/5 to-transparent",
    span: "sm:col-span-2",
  },
  {
    icon: Telescope, name: "Scout", role: "Demand Intelligence",
    desc: "Scans Google, ChatGPT, and AI tools in real time for high-intent queries.",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
  },
  {
    icon: Map, name: "Blueprint", role: "Content Strategy",
    desc: "Clusters keywords and maps every page to a real buyer question.",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: PenTool, name: "Forge", role: "Content & Design",
    desc: "Writes pages in your brand voice and designs them with your visual identity.",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
  },
  {
    icon: Eye, name: "Rival", role: "Competitive Intel",
    desc: "Maps who ranks, what they publish, and where the gaps are.",
    gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
  },
  {
    icon: Radio, name: "Signal", role: "Publishing & Indexing",
    desc: "Structures pages with schema, metadata, and llms.txt for AI crawlers.",
    gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    span: "sm:col-span-2",
  },
  {
    icon: Link2, name: "Anchor", role: "Authority & Citation",
    desc: "Creates third-party citations that signal credibility to AI models.",
    gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
  },
  {
    icon: BarChart3, name: "Pulse", role: "Performance",
    desc: "Monitors daily, triggers rewrites and rebuilds based on real data.",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

const Agents = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="agents" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary shadow-sm glass glass-border">
            The 8 Agents
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Meet the team that<br className="hidden sm:block" />
            <span className="text-gradient-blue"> never sleeps.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground leading-relaxed">
            Each agent owns a specific job. Together they compound your AI visibility every week.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className={`group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm glass glass-border card-hover noise ${agent.span || ""} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "600ms" }}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-tight">{agent.name}</h3>
                      <p className="text-[11px] font-medium text-primary/70">{agent.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{agent.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agents;
