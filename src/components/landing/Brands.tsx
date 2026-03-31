import { useScrollReveal } from "@/hooks/useScrollReveal";

const Brands = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-white py-16 text-center">
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <p className="mb-8 text-xs font-medium text-[#999] uppercase tracking-[1px]">
          Trusted by Brands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">

          {/* AtoZ */}
          <div className="flex items-center transition-opacity duration-300 opacity-60 hover:opacity-100">
            <img src="/atoz.webp" alt="AtoZ" className="h-6 md:h-7 w-auto object-contain" />
          </div>

          {/* ToolJunction */}
          <div className="flex items-center transition-opacity duration-300 opacity-60 hover:opacity-100">
            <img src="/tooljunction-logo.png" alt="ToolJunction" className="h-6 md:h-7 w-auto object-contain" />
          </div>

          {/* Resinoid Engineering */}
          <div className="flex items-center transition-opacity duration-300 opacity-60 hover:opacity-100">
            <img src="/resinoid-engineering.jpg" alt="Resinoid Engineering Corporation" className="h-6 md:h-7 w-auto object-contain" />
          </div>

          {/* DDU Magnetics */}
          <div className="flex items-center transition-opacity duration-300 opacity-60 hover:opacity-100">
            <img src="/ddu-magnetics.jpg" alt="DDU Magnetics" className="h-6 md:h-7 w-auto object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;
