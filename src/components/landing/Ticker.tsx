const items = [
  "AI bots now account for 1 in 24 page loads",
  "ChatGPT has 400M weekly users",
  "Perplexity growing 300% YoY",
  "60% of software spend via AI agents by 2030 (Goldman Sachs)",
  "GEO is the new SEO",
];

const Ticker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border/50 bg-secondary/30 py-4">
      <div className="animate-ticker flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm text-muted-foreground"
          >
            {item}
            <span className="ml-12 text-primary/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
