import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Map, Telescope, PenTool, Eye, Radio, Link2, BarChart3 } from "lucide-react";

const pastelColors = ["bg-[#DBF6FF]", "bg-[#E0FFD4]", "bg-[#FFE7F8]", "bg-[#F1F1F1]"];

const agents = [
  {
    num: "01", icon: Brain, name: "Cortex", role: "Business Intelligence",
    desc: "Builds a living profile of your business and continuously updates a shared memory layer every agent draws from.",
    iconColor: "text-violet-600",
  },
  {
    num: "02", icon: Map, name: "Blueprint", role: "Content Strategy",
    desc: "Clusters keywords, chooses page types, and maps every page to a real buyer question. A roadmap, not a guess.",
    iconColor: "text-blue-600",
  },
  {
    num: "03", icon: Telescope, name: "Scout", role: "Demand Intelligence",
    desc: "Scans Google, ChatGPT, and AI tools in real time to surface high-intent queries and the fastest opportunities.",
    iconColor: "text-emerald-600",
  },
  {
    num: "04", icon: PenTool, name: "Forge", role: "Content & Design",
    desc: "Writes landing pages, blogs, and guides in your brand voice then designs them with your colors and layout patterns.",
    iconColor: "text-amber-600",
  },
  {
    num: "05", icon: Eye, name: "Rival", role: "Competitive Intel",
    desc: "Maps who ranks in your market, what they publish, and where the gaps are. Always a step ahead.",
    iconColor: "text-rose-600",
  },
  {
    num: "06", icon: Radio, name: "Signal", role: "Publishing & Indexing",
    desc: "Structures pages with schema markup, metadata, llms.txt, and internal linking so AI crawlers can cite you.",
    iconColor: "text-cyan-600",
  },
  {
    num: "07", icon: Link2, name: "Anchor", role: "Authority & Citation",
    desc: "Creates citations across third-party sites to signal your content is credible and worth recommending.",
    iconColor: "text-indigo-600",
  },
  {
    num: "08", icon: BarChart3, name: "Pulse", role: "Performance",
    desc: "Monitors rankings and lead flow daily, triggering rewrites and rebuilds automatically based on real data.",
    iconColor: "text-orange-600",
  },
];

const Agents = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="agents" ref={ref} className="px-6 py-24 md:py-[100px]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="section-label mb-4 inline-block">
            The 8 Agents
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-heading text-[#0a0a0a]">
            Meet the team that never sleeps.
          </h2>
          <p className="mt-4 text-lg text-[rgba(0,0,0,0.4)] font-medium leading-relaxed">
            Each agent owns a specific job. Together they build, optimize, publish, and monitor your AI search presence automatically.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className={`group relative rounded-3xl ${pastelColors[i % 4]} p-7 card-hover overflow-hidden transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 ${agent.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider text-black/30">{agent.num}</span>
                </div>

                <h3 className="mb-1 text-lg font-medium tracking-tight text-[#0a0a0a]">{agent.name}</h3>
                <p className="mb-3 text-xs font-medium text-[#1483F3]">{agent.role}</p>
                <p className="text-sm leading-relaxed text-[#6f6f6f]">{agent.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agents;
