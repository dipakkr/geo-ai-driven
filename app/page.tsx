import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Brands from "@/components/landing/Brands";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Agents from "@/components/landing/Agents";
import HowItWorks from "@/components/landing/HowItWorks";
import Comparison from "@/components/landing/Comparison";
import Pricing from "@/components/landing/Pricing";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Ticker />
      <Brands />
      <Problem />
      <Solution />
      <Agents />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
