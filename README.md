# PropSuite — Dubai Real Estate Portal & Agent CRM

A boutique, Dribbble-inspired luxury real-estate product for Dubai: a public
property portal plus the private agent CRM and dashboard that power the sales
floor. Built as a **frontend-only demo** with rich demo data — no backend, no
paid APIs, no external photo URLs (all property imagery is generated SVG
architecture panels).

## Design direction

Dark premium theme — deep green-black (`#0B100E` / pine) with champagne gold
accents and ivory type. Cormorant Garamond serif display paired with Manrope.
Inspired by the calm, whitespace-led luxury landings (Nordhive, Caleira,
ALTAIR) and data-dense CRM dashboards (EstateFlow, APEX) found on Dribbble:
KPI cards, pipeline funnel, stylised map panel and elegant tables.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Hero with working search (area / type / budget), stats, area marquee, featured-properties horizontal rail, areas + stylised SVG Dubai map, services, CRM teaser, latest listings |
| `/properties` | Filterable grid of 12 Dubai listings — area, type, budget chips, min beds, text search, sorting |
| `/properties/[id]` | Gallery panels, spec tiles, amenities, interactive mortgage calculator, viewing-booking form (demo success state), WhatsApp enquiry (wa.me link only) |
| `/crm` | Leads pipeline board (New → Contacted → Viewing → Negotiation → Closed) with 15 demo lead cards, WhatsApp/call actions, full leads table |
| `/dashboard` | Agent dashboard — KPI cards, weekly leads/viewings chart, pipeline funnel, recent activity feed, area map, top listings |

## Tech

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3, custom design tokens, scroll-reveal animations
- Demo data in `src/data/properties.ts` and `src/data/leads.ts`
- Zero paid services: no maps API (stylised SVG map instead), no payment
  gateway, no AI API. WhatsApp is a plain `wa.me` link.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start
```

## Notes

Frontend demonstration for portfolio purposes. A production version would
connect the same UI to a database/auth backend (e.g. Supabase) — the demo
data layer in `src/data/` is shaped to be swapped for real queries.
