import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, EyeOff, Clock } from "lucide-react";

const cards = [
  {
    icon: Search,
    title: "AI agents can't understand your website",
    body: "Your site was designed for humans. AI agents need structured, direct answers. Most business websites give them nothing usable.",
    accent: "from-rose-500/10 to-transparent",
  },
  {
    icon: EyeOff,
    title: "You're invisible where decisions happen",
    body: "AI picks winners before a human ever clicks. If you're not structured for citation, you're not in the conversation.",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: Clock,
    title: "The rules change faster than you can keep up",
    body: "AI platforms update how they crawl and cite on a near-weekly basis. No SMB team has bandwidth to adapt manually.",
    accent: "from-blue-500/10 to-transparent",
  },
];

const Problem = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary shadow-sm glass glass-border">
            The Problem
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            The web was built for humans.{" "}
            <span className="text-muted-foreground">AI doesn't browse like one.</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 glass glass-border noise">
            <p className="text-base leading-[1.8] text-muted-foreground">
              A small business owner needs liability coverage. She doesn't Google it. She opens ChatGPT and types:
            </p>
            <blockquote className="my-6 border-l-2 border-primary/30 pl-5 text-base font-medium text-foreground italic">
              "What's the best commercial property insurance for a small logistics company in Texas?"
            </blockquote>
            <p className="text-base leading-[1.8] text-muted-foreground">
              An AI agent crawls hundreds of sites and surfaces three providers, all before she opens a single tab.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card p-8 glass glass-border noise">
            <div className="mb-4 text-5xl font-bold text-gradient-blue">4.2%</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              of all web requests are now AI bots, according to Cloudflare. That number is accelerating. The decision happens upstream of the click, and most businesses have no presence there at all.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-2xl bg-card p-6 glass glass-border card-hover noise ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms`, transitionDuration: "600ms" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-bold tracking-tight">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
