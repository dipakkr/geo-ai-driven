const items = [
  "AI bots now account for 1 in 24 page loads",
  "ChatGPT has 400M weekly users",
  "Perplexity growing 300% YoY",
  "60% of software spend via AI agents by 2030 (Goldman Sachs)",
  "GEO is the new SEO",
];

const Ticker = () => {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border/50 bg-card/50 py-4 glass">
      <div className="animate-ticker flex w-max gap-10">
        {tripled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-muted-foreground/70"
          >
            {item}
            <span className="inline-block h-1 w-1 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
