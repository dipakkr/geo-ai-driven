const items = [
  "1 in 24 page loads now comes from AI bots",
  "400M people use ChatGPT every week",
  "Perplexity search volume up 300% year-over-year",
  "Goldman Sachs: 60% of software spend via AI agents by 2030",
  "AI search is the new front door to your business",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-3.5">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="animate-ticker flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
