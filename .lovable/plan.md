

# GEO AI Landing Page Implementation Plan

## Overview
Build a bold, dark-themed SaaS landing page for GEO AI with 12 sections, smooth animations, and a modern tech aesthetic inspired by Vercel/Linear.

## Design System
- **Background**: Deep near-black `#080810`, electric blue accent `#2563EB`, hover `#3B82F6`, off-white text `#F0F0F5`
- **Typography**: Google Fonts — Syne (headings, 800 weight) + DM Sans (body, 300-400 weight), tight letter-spacing on headlines
- **Motion**: Staggered fade-up on scroll (Intersection Observer), glow pulses, hover lifts on cards, infinite ticker scroll

## Sections to Build

1. **Navbar** — Logo with blue accent, center nav links (How it Works, Agents, Pricing, For Investors), "Get Early Access" CTA button

2. **Hero** — Eyebrow pill badge, massive two-line H1 with outlined/stroke text on first line and bold on second, muted subheadline, CTA row (primary button + ghost link), animated diagram showing the AI recommendation flow

3. **Social Proof Ticker** — Infinite horizontal scrolling marquee with stats about AI search growth

4. **The Problem** — Section label, H2, narrative body copy about how AI changes search, 3 problem cards with icons and descriptions

5. **The Solution** — Section label, H2, body copy introducing the 8-agent platform, animated pipeline diagram (SVG nodes lighting up in sequence)

6. **The 8 Agents** — 4x2 grid of cards, each with emoji icon, agent name, role, and description. Staggered entrance animation on scroll

7. **How It Works** — 3-column layout: Connect, Deploy, Compound with step numbers and descriptions

8. **Comparison Table** — Feature comparison between Traditional SEO, DIY Content, and GEO AI with checkmarks/crosses

9. **Pricing** — 3-tier pricing cards (Starter $499, Growth $999 highlighted, Scale $2,499) with feature lists and CTAs

10. **Investor Strip** — Compact section with headline, body copy about market opportunity, and "Request Investor Deck" CTA

11. **Final CTA** — Large centered H2, social proof subtext, primary CTA button with micro-copy

12. **Footer** — Logo, nav links, social links, legal links, copyright line

## Technical Details
- All sections built as separate React components for maintainability
- Intersection Observer hook for scroll-triggered animations
- CSS keyframe animation for the ticker marquee
- All CTAs link to `/signup`
- Fully responsive — grids stack to single column on mobile
- No em dashes anywhere in copy

