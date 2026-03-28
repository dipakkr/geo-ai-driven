"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Map, Telescope, PenTool, Eye, Radio, Link2, BarChart3 } from "lucide-react";

const agents = [
  {
    num: "01", icon: Brain, name: "Cortex", role: "Business Intelligence",
    desc: "Creates a living profile of your company and maintains a shared knowledge layer every other agent draws from.",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-500",
  },
  {
    num: "02", icon: Map, name: "Blueprint", role: "Content Architecture",
    desc: "Clusters demand signals, selects page types, and maps every asset to a real buyer question — strategy, not guesswork.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    num: "03", icon: Telescope, name: "Scout", role: "Demand Radar",
    desc: "Monitors Google, ChatGPT, and Perplexity in real-time to surface high-intent queries and fast-moving opportunities.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    num: "04", icon: PenTool, name: "Forge", role: "Content & Design",
    desc: "Drafts landing pages, guides, and articles in your brand voice, then designs them with your colors and layout system.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    num: "05", icon: Eye, name: "Rival", role: "Competitive Lens",
    desc: "Tracks who ranks in your space, what they publish, and where gaps exist. Keeps you one step ahead at all times.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    num: "06", icon: Radio, name: "Signal", role: "Publishing & Indexing",
    desc: "Applies schema markup, metadata, llms.txt, and internal linking so AI crawlers can understand and cite your content.",
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-500",
  },
  {
    num: "07", icon: Link2, name: "Anchor", role: "Authority Building",
    desc: "Places citations across third-party sources so AI engines recognize your content as credible and worth recommending.",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-500",
  },
  {
    num: "08", icon: BarChart3, name: "Pulse", role: "Performance Loop",
    desc: "Tracks rankings and lead flow daily, triggering rewrites and rebuilds automatically when the data says so.",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
  },
];

export default function Agents() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="agents" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            The 8 Agents
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            Your always-on AI growth team.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Each agent owns a specific job. Together they construct, refine,
            distribute, and monitor your AI search presence around the clock.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className={`group relative rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${agent.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${agent.color} ${agent.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider text-muted-foreground/40">{agent.num}</span>
                </div>

                <h3 className="mb-1 text-lg font-semibold tracking-tight">{agent.name}</h3>
                <p className="mb-3 text-xs font-medium text-primary/70">{agent.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{agent.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
