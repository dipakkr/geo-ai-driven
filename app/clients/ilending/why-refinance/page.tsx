import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, TrendingDown, Calendar, CreditCard, PiggyBank, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Refinance Your Car Loan? Top Reasons & Benefits | iLending",
  description:
    "Should you refinance your car loan? Learn the top reasons — lower rates, reduced payments, improved terms. iLending clients save $148/month on average.",
};

const reasons = [
  {
    icon: <TrendingDown className="h-6 w-6 text-primary" />,
    title: "Your Interest Rate Is Too High",
    desc: "If you financed through a dealership or took a loan when rates were higher, you may be paying significantly more than necessary. Refinancing locks in today's competitive rates. iLending's network offers APRs starting at 5.49%.",
    stat: "Average APR range: 5.49% – 19.24%",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-500" />,
    title: "Your Credit Score Has Improved",
    desc: "If your credit score has gone up since you took out your original loan, you likely qualify for a much better rate. Even a 50-point improvement can translate to significant savings over the life of your loan.",
    stat: "Minimum score accepted: 560",
  },
  {
    icon: <PiggyBank className="h-6 w-6 text-violet-500" />,
    title: "You Want a Lower Monthly Payment",
    desc: "Refinancing can reduce your monthly payment by extending the loan term, lowering the rate, or both. iLending clients save an average of $148/month — that's $1,776 per year back in your budget.",
    stat: "Average savings: $148/month",
  },
  {
    icon: <Calendar className="h-6 w-6 text-amber-500" />,
    title: "You Want to Pay Off Your Car Faster",
    desc: "Refinancing isn't just about lowering payments. You can also shorten your loan term to pay off your vehicle sooner and save on total interest paid over the life of the loan.",
    stat: "Flexible term options available",
  },
];

const signs = [
  "Your current APR is above 7% and your credit is decent (620+)",
  "Your credit score has improved by 50+ points since you got your loan",
  "You financed through the dealership and didn't shop for rates",
  "Market interest rates have dropped since your original loan",
  "Your monthly payment is straining your budget",
  "You have at least $5,000 remaining on your loan balance",
  "Your car is less than 10 years old with under 150,000 miles",
];

const notIdeal = [
  "You owe less than $5,000 on your loan (below iLending's minimum)",
  "You're within a few months of paying off your loan",
  "Your car is very old or has extremely high mileage",
  "You're currently behind on payments (though some lenders may still work with you)",
  "The fees would outweigh your potential savings",
];

export default function WhyRefinancePage() {
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
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Should You Refinance Your Car Loan?
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            Millions of Americans overpay on their auto loans every month. If your rate is too high, your credit has improved, or you simply want more cash flow, refinancing could save you thousands. Here's how to know if it's the right move.
          </p>
        </div>
      </section>

      {/* Top Reasons */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold">The Top Four Reasons to Refinance</h2>

          <div className="space-y-6">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card/60 p-8">
                <div className="flex items-start gap-5 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background shadow-sm">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
                <div className="ml-[4.25rem] rounded-lg bg-primary/5 border border-primary/10 px-4 py-2 text-xs font-medium text-primary">
                  {r.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Should Refinance */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">Signs It's Time to Refinance</h2>
          <p className="mb-8 text-base text-muted-foreground">
            If two or more of these apply to you, refinancing is likely worth exploring:
          </p>
          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <ul className="space-y-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When Not to Refinance */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">When Refinancing Might Not Be Worth It</h2>
          <p className="mb-8 text-base text-muted-foreground">
            Refinancing isn't always the best choice. Here are situations where it may not make sense:
          </p>
          <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-8">
            <ul className="space-y-3">
              {notIdeal.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Savings Breakdown */}
      <section className="px-6 py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">How Much Could You Save?</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              iLending clients save an average of <strong className="text-foreground">$148 per month</strong> after refinancing. Over a typical 48-month remaining loan term, that adds up to <strong className="text-foreground">$7,104 in total savings</strong>.
            </p>
            <p>
              Your actual savings depend on your current rate, remaining balance, credit profile, and the new terms offered. The best way to find out? Apply with iLending — the initial check takes 2 minutes and won't affect your credit score.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Monthly Savings", value: "$148/mo", sub: "Average across all clients" },
              { label: "Annual Savings", value: "$1,776/yr", sub: "Based on average monthly" },
              { label: "Over Loan Life", value: "$7,104+", sub: "48-month remaining term" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-primary/15 bg-primary/[0.03] p-5 text-center">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs font-semibold text-foreground mt-1">{s.label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28 border-t border-border/50 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Find out how much you could save</h2>
          <p className="mb-8 text-base text-muted-foreground">
            2-minute application. No credit impact. Dedicated consultant walks you through every offer.
          </p>
          <a
            href="https://ilendingcarloanrefinancing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-10 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:brightness-110 transition-all"
          >
            Check Your Rate <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
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
