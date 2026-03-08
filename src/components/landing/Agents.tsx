import { useScrollReveal } from "@/hooks/useScrollReveal";

const agents = [
  {
    num: "01", icon: "🧠", name: "Cortex", role: "Business Intelligence Agent",
    desc: "Builds and maintains a living profile of your business, ingesting everything you share at onboarding and continuously updating a shared memory layer every other agent draws from. Your single source of truth.",
  },
  {
    num: "02", icon: "🗺️", name: "Blueprint", role: "Content Strategy Agent",
    desc: "Turns research into a clear, buildable plan by clustering keywords, choosing page types, and mapping every page to a real buyer question. You get a roadmap, not a guess.",
  },
  {
    num: "03", icon: "🔭", name: "Scout", role: "Demand Intelligence Agent",
    desc: "Finds what buyers are actually searching for by scanning Google, ChatGPT, and AI tools in real time. Surfaces high-intent queries and identifies the fastest opportunities to own.",
  },
  {
    num: "04", icon: "✍️", name: "Forge", role: "Content and Design Agent",
    desc: "Writes landing pages, blogs, and guides in your brand voice then designs them with your colors, fonts, and layout patterns. Everything looks native and is ready to publish.",
  },
  {
    num: "05", icon: "🕵️", name: "Rival", role: "Competitive Intelligence Agent",
    desc: "Maps who ranks in your market, what they publish, and where the gaps are. Feeds a continuously updated competitive layer so you're always a step ahead.",
  },
  {
    num: "06", icon: "📡", name: "Signal", role: "Publishing and Indexing Agent",
    desc: "Publishes directly to your content hub and structures pages with schema markup, metadata, llms.txt, and internal linking so Google and AI crawlers can instantly find, read, and cite you.",
  },
  {
    num: "07", icon: "🔗", name: "Anchor", role: "Authority and Citation Agent",
    desc: "Creates citations and references across third-party sites to signal to search engines and AI models that your content is credible, authoritative, and worth recommending.",
  },
  {
    num: "08", icon: "📊", name: "Pulse", role: "Performance Agent",
    desc: "Monitors rankings, traffic, and lead flow daily then identifies what's climbing and what's stalling, triggering rewrites and rebuilds automatically based on real performance data.",
  },
];

const Agents = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="agents" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          The 8 Agents
        </span>
        <h2 className="mb-14 text-3xl sm:text-4xl md:text-5xl">
          Meet the team that never sleeps.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => (
            <div
              key={agent.name}
              className={`group rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:glow-blue-sm ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl">{agent.icon}</span>
                <span className="text-xs text-muted-foreground">{agent.num}</span>
              </div>
              <h3 className="mb-0.5 text-base font-bold">{agent.name}</h3>
              <p className="mb-3 text-xs text-primary">{agent.role}</p>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
