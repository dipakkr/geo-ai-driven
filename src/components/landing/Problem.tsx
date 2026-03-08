import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: "🔍",
    title: "AI agents can't understand your website",
    body: "Your site was designed for human visitors: navigation menus, brand messaging, visual layouts. AI agents need structured, direct answers to specific questions. Most business websites give them nothing usable.",
  },
  {
    icon: "📉",
    title: "You're invisible where decisions are being made",
    body: "When a buyer asks Perplexity or ChatGPT to find an insurance provider, a staffing agency, or a B2B vendor, AI picks winners before a human ever clicks. If you're not structured for citation, you're not in the conversation.",
  },
  {
    icon: "⏱️",
    title: "The rules change faster than you can keep up",
    body: "OpenAI, Google, and Perplexity update how they crawl and cite content on a near-weekly basis. No SMB team has the bandwidth to adapt manually, and falling behind compounds quickly.",
  },
];

const Problem = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          The Problem
        </span>
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl">
          The web was built for humans. AI doesn't browse like one.
        </h2>
        <div className="mb-14 max-w-3xl space-y-4 text-base text-muted-foreground" style={{ fontWeight: 300 }}>
          <p>
            A small business owner needs liability coverage for her new warehouse. She doesn't Google it. She opens ChatGPT and types: "What's the best commercial property insurance for a small logistics company in Texas?"
          </p>
          <p>
            An AI agent takes over from there. It crawls hundreds of websites, reads content, and surfaces three providers, all before she opens a single tab.
          </p>
          <p>
            If your agency isn't structured for how AI reads and cites content, you won't be one of those three. You won't even be considered. The decision happens upstream of the click, and most businesses have no presence there at all.
          </p>
          <p>
            Cloudflare reports AI bots now drive 4.2% of all web requests and that number is accelerating. A new playbook is needed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:glow-blue-sm ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-4 text-3xl">{card.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 300 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
