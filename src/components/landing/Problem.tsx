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
    body: "OpenAI, Google, and Perplexity update how they crawl and cite content on a near-weekly basis. No in-house team has the bandwidth to adapt manually, and falling behind compounds quickly.",
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
        <div className="mb-14 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-card/30 p-8 sm:p-12 shadow-2xl shadow-blue-900/5 backdrop-blur-xl">
          <div className="flex flex-col gap-6 text-base text-muted-foreground/90 leading-relaxed font-light relative">
            <p>
              A small business owner needs liability coverage for her new warehouse. She doesn't Google it. She opens ChatGPT and types:
            </p>
            <div className="relative rounded-2xl bg-secondary/40 p-5 sm:p-6 text-foreground font-medium italic border border-border/50 shadow-inner shadow-black/5">
               <div className="absolute -top-3 -left-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-2 text-white shadow-lg shadow-blue-500/20">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
               </div>
               "What's the best commercial property insurance for a small logistics company in Texas?"
            </div>
            <p>
              An AI agent takes over from there. It crawls hundreds of websites, reads content, and surfaces three providers, all before she opens a single tab.
            </p>
            <p className="font-medium text-foreground py-2 px-4 border-l-2 border-blue-500 bg-blue-500/5 rounded-r-lg">
              If your agency isn't structured for how AI reads and cites content, you won't be one of those three. You won't even be considered. The decision happens upstream of the click, and most businesses have no presence there at all.
            </p>
          </div>
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
