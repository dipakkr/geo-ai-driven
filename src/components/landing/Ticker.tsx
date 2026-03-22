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
    <div className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="animate-ticker flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground/80 lowercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
