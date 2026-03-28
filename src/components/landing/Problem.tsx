"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: "🤖",
    title: "AI can't parse your site",
    body: "Your website is built for humans — menus, hero images, brand storytelling. AI crawlers need structured, direct answers. Most sites give them nothing to cite.",
  },
  {
    icon: "👻",
    title: "You're a ghost in AI results",
    body: "When a prospect asks ChatGPT or Perplexity for a recommendation, AI selects winners before anyone clicks a link. If you're not structured for citation, you're not in the running.",
  },
  {
    icon: "🔄",
    title: "The playbook rewrites itself weekly",
    body: "OpenAI, Google, and Perplexity change how they crawl and cite content constantly. No team can keep pace manually — and every missed update costs you visibility.",
  },
];

export default function Problem() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-primary">
          The Shift
        </span>
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
          Buyers are asking AI instead of clicking Google.
        </h2>

        <div className="mb-14 max-w-4xl mx-auto rounded-2xl border border-border bg-card/60 p-8 sm:p-10 backdrop-blur-sm">
          <div className="flex flex-col gap-5 text-base text-muted-foreground leading-relaxed">
            <p>
              A logistics company needs warehouse liability coverage. The
              founder doesn't open Google — she types into ChatGPT:
            </p>
            <div className="relative rounded-xl bg-secondary/60 p-5 text-foreground font-medium italic border border-border/50">
              <div className="absolute -top-3 -left-3 rounded-full bg-primary p-2 text-white shadow-lg shadow-primary/25">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </div>
              &ldquo;Best commercial property insurance for a small logistics company in Texas?&rdquo;
            </div>
            <p>
              AI scans hundreds of pages and surfaces three providers — all
              before she opens a browser tab.
            </p>
            <p className="font-medium text-foreground py-3 px-4 border-l-2 border-primary bg-primary/5 rounded-r-lg">
              The decision happens upstream of the click. If your business
              isn't structured for how AI reads and recommends, you won't be
              one of those three.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 text-3xl">{card.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
