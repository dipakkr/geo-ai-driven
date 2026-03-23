import { useScrollReveal } from "@/hooks/useScrollReveal";

const Brands = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-t border-border/50 bg-secondary/30 py-12 text-center">
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by forward-thinking brands
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20 opacity-70 grayscale transition-all hover:grayscale-0">
          
          {/* AtoZ */}
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-foreground transition-all hover:text-blue-500 duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m3 3 18 18"/><path d="m21 3-18 18"/></svg>
            AtoZ
          </div>

          {/* ToolJunction.io */}
          <div className="flex items-center gap-2 font-black text-xl font-mono text-foreground transition-all hover:text-indigo-500 duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            ToolJunction<span className="text-indigo-500">.io</span>
          </div>

          {/* Spyne */}
          <div className="flex items-baseline gap-1 font-bold text-2xl tracking-wider text-foreground transition-all hover:text-emerald-500 duration-300">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-y-1 text-emerald-500"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            SPYNE
          </div>

          {/* Nexus */}
          <div className="flex items-center gap-2 font-semibold text-2xl uppercase tracking-[0.2em] text-foreground transition-all hover:text-rose-500 duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M2 12h20"/><path d="m12 2 10 10-10 10L2 12z"/></svg>
            NEXUS
          </div>

          {/* Vertex */}
          <div className="flex items-center gap-[6px] font-bold text-2xl text-foreground transition-all hover:text-orange-500 duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>
            Vertex
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;
