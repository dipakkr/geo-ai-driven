import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AiConsultingCostContent from "@/components/pages/AiConsultingCostContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does AI Consulting Cost? (2026 Guide) — Lucato AI",
  description:
    "AI consulting costs $150–$500/hr for freelancers and $10K–$75K+ for projects. Compare pricing models and find the best ROI approach.",
};

export default function AiConsultingCostPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AiConsultingCostContent />
      <Footer />
    </div>
  );
}
