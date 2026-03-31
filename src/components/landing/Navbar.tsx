import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Agents", href: "/#agents" },
  { label: "Pricing", href: "/#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4 pointer-events-none">
      <div className="w-full max-w-3xl pointer-events-auto">
        <div className="flex items-center justify-between rounded-full bg-white/60 backdrop-blur-[24px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] px-6 py-3">
          <a href="/" className="flex items-center gap-1 text-xl font-bold tracking-tight text-[#0a0a0a]">
            <img src="/logo.png" alt="Lucato AI Logo" className="h-5 sm:h-6 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#888] transition-colors hover:text-[#0a0a0a]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="rounded-full px-6 bg-[#1483F3] hover:bg-[#0F6DD0] text-white shadow-[0_4px_16px_rgba(20,131,243,0.25)] border border-white/25 btn-shimmer transition-all hover:-translate-y-px">
              <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>

          <button
            className="text-[#0a0a0a] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-white/90 backdrop-blur-[24px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#888] transition-colors hover:text-[#0a0a0a]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full rounded-full bg-[#1483F3] hover:bg-[#0F6DD0] text-white shadow-[0_4px_16px_rgba(20,131,243,0.25)]">
                <a href="https://cal.com/lucato-demo/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
