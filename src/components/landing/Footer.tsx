const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <a href="/" className="text-lg font-bold text-foreground">
              GEO<span className="text-primary">.</span>AI
            </a>
            <p className="mt-1 text-xs text-muted-foreground">Your business, recommended by AI.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2">
              <a href="#how-it-works" className="transition-colors hover:text-foreground">Product</a>
              <a href="#agents" className="transition-colors hover:text-foreground">Agents</a>
              <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-foreground">Blog</a>
              <a href="#" className="transition-colors hover:text-foreground">Contact</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-foreground">Twitter/X</a>
              <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
              <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; 2025 GEO AI -- Built for the AI-first web.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
