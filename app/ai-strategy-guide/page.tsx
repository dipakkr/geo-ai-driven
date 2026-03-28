import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AiStrategyGuideContent from "@/components/pages/AiStrategyGuideContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete AI Strategy Guide (2026) — Lucato AI",
  description:
    "A practical framework for building an AI strategy that drives results. From vision to execution in 6 chapters.",
};

export default function AiStrategyGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AiStrategyGuideContent />
      <Footer />
    </div>
  );
}
