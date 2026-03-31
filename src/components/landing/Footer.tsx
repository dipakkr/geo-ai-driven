const Footer = () => {
  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <a href="/" className="inline-block text-lg font-bold text-[#0a0a0a]">
              <img src="/logo.png" alt="Lucato AI Logo" className="h-5 sm:h-6 w-auto object-contain" />
            </a>
            <p className="mt-1 text-xs text-[#6f6f6f]">Your business, recommended by AI.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#6f6f6f]">
            <div className="flex flex-col gap-2">
              <a href="/#how-it-works" className="transition-colors hover:text-[#0a0a0a]">Product</a>
              <a href="/#agents" className="transition-colors hover:text-[#0a0a0a]">Agents</a>
              <a href="/#pricing" className="transition-colors hover:text-[#0a0a0a]">Pricing</a>
            </div>

            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-[#0a0a0a]">Twitter/X</a>
              <a href="#" className="transition-colors hover:text-[#0a0a0a]">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="transition-colors hover:text-[#0a0a0a]">Privacy</a>
              <a href="#" className="transition-colors hover:text-[#0a0a0a]">Terms</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-6 text-center text-xs text-[#6f6f6f]">
          &copy; 2025 Lucato AI -- Built for the AI-first web.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
