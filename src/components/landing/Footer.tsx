import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="Lucato AI" className="h-5 sm:h-6 w-auto object-contain dark:invert" />
            </Link>
            <p className="mt-2 text-xs text-muted-foreground">Your business, recommended by AI.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2">
              <Link href="/#how-it-works" className="transition-colors hover:text-foreground">Product</Link>
              <Link href="/#agents" className="transition-colors hover:text-foreground">Agents</Link>
              <Link href="/#pricing" className="transition-colors hover:text-foreground">Pricing</Link>
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
          &copy; {new Date().getFullYear()} Lucato AI. Built for the AI-first web.
        </div>
      </div>
    </footer>
  );
}
