"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator, DollarSign, Percent, Calendar } from "lucide-react";

function fmt(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CalculatorPage() {
  const [balance, setBalance] = useState(20000);
  const [currentRate, setCurrentRate] = useState(9.5);
  const [newRate, setNewRate] = useState(5.49);
  const [term, setTerm] = useState(48);

  const monthlyRateCurrent = currentRate / 100 / 12;
  const monthlyRateNew = newRate / 100 / 12;

  const currentPayment =
    monthlyRateCurrent > 0
      ? (balance * monthlyRateCurrent) / (1 - Math.pow(1 + monthlyRateCurrent, -term))
      : balance / term;

  const newPayment =
    monthlyRateNew > 0
      ? (balance * monthlyRateNew) / (1 - Math.pow(1 + monthlyRateNew, -term))
      : balance / term;

  const monthlySavings = currentPayment - newPayment;
  const totalSavings = monthlySavings * term;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/clients/ilending" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> iLending Hub
          </Link>
          <a
            href="https://ilendingcarloanrefinancing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm hover:brightness-110 transition-all"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Calculator className="h-4 w-4" />
            Interactive Tool
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Auto Refinance Savings Calculator
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            Estimate how much you could save by refinancing your auto loan with iLending. Adjust the sliders below to match your current loan details and see your potential savings instantly.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Your Current Loan</h2>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" /> Remaining Balance
                  </label>
                  <span className="text-sm font-semibold text-primary">${balance.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={1000}
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Percent className="h-4 w-4 text-muted-foreground" /> Current APR
                  </label>
                  <span className="text-sm font-semibold text-primary">{currentRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={25}
                  step={0.1}
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>3%</span>
                  <span>25%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Percent className="h-4 w-4 text-muted-foreground" /> New APR (estimated)
                  </label>
                  <span className="text-sm font-semibold text-emerald-600">{newRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={20}
                  step={0.1}
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>3%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" /> Remaining Term
                  </label>
                  <span className="text-sm font-semibold text-primary">{term} months</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={84}
                  step={6}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>12 mo</span>
                  <span>84 mo</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Your Estimated Savings</h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Current Monthly Payment</p>
                  <p className="text-3xl font-bold text-foreground">${fmt(currentPayment)}</p>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-1">New Monthly Payment</p>
                  <p className="text-3xl font-bold text-emerald-600">${fmt(newPayment)}</p>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Monthly Savings</p>
                  <p className="text-3xl font-bold text-primary">${fmt(Math.max(0, monthlySavings))}</p>
                </div>

                <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Total Savings Over Loan</p>
                  <p className="text-4xl font-extrabold text-primary">${fmt(Math.max(0, totalSavings))}</p>
                </div>
              </div>

              <a
                href="https://ilendingcarloanrefinancing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:brightness-110 transition-all"
              >
                Get Your Real Rate — No Credit Impact
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-[11px] text-muted-foreground text-center">
                This calculator provides estimates only. Actual rates and savings depend on your credit profile, vehicle, and lender offers. Apply with iLending for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">How to Use This Calculator</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Remaining Balance:</strong> The amount you still owe on your current auto loan. Check your most recent statement or call your lender for the exact payoff amount.
            </p>
            <p>
              <strong className="text-foreground">Current APR:</strong> Your current annual percentage rate. This is on your loan agreement or monthly statement. If you financed through a dealership, this may be higher than what you'd qualify for today.
            </p>
            <p>
              <strong className="text-foreground">New APR:</strong> The estimated rate you'd get after refinancing. iLending's network offers APRs from 5.49% to 19.24% depending on your credit, vehicle, and loan details. Set this to a rate you think you'd qualify for.
            </p>
            <p>
              <strong className="text-foreground">Remaining Term:</strong> How many months are left on your current loan — or the new term length you'd prefer. Shorter terms mean higher payments but less total interest.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} iLending. AI-optimized hub powered by Lucato AI.</p>
          <Link href="/" className="text-primary hover:underline">Powered by Lucato AI</Link>
        </div>
      </footer>
    </div>
  );
}
