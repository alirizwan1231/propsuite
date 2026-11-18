import Link from "next/link";
import { properties } from "@/data/properties";
import PropertyVisual from "@/components/PropertyVisual";
import PropertyCard from "@/components/PropertyCard";
import HeroSearch from "@/components/HeroSearch";
import FeaturedRail from "@/components/FeaturedRail";
import DubaiMap from "@/components/DubaiMap";
import Reveal from "@/components/Reveal";
import {
  ArrowRight, ArrowUpRight, BuildingIcon, ChartIcon, EyeIcon, GlobeIcon,
  HandshakeIcon, KeyIcon, PinIcon, ShieldIcon, SparkleIcon,
} from "@/components/Icons";

const areaCards = [
  { name: "Palm Jumeirah", blurb: "Signature villas on the fronds, private beaches and skyline sunsets.", from: "AED 18M", hue: 168 },
  { name: "Downtown Dubai", blurb: "Penthouses in the shadow of the Burj, fountain-side living.", from: "AED 6.5M", hue: 42 },
  { name: "Dubai Marina", blurb: "Sky residences above the yachts — the city's waterline lifestyle.", from: "AED 2.1M", hue: 205 },
  { name: "Emirates Hills", blurb: "Gated golf-community mansions behind mature green fairways.", from: "AED 24M", hue: 130 },
];

const services = [
  { icon: KeyIcon, title: "Private Acquisitions", text: "Off-market villas and penthouses sourced quietly through our network of owners and family offices." },
  { icon: ChartIcon, title: "Investment Advisory", text: "Yield, capital growth and off-plan payment-plan analysis for every shortlist — numbers before emotion." },
  { icon: GlobeIcon, title: "International Buyers", text: "Golden Visa guidance, remote viewings and end-to-end conveyancing for overseas purchasers." },
  { icon: ShieldIcon, title: "Portfolio Management", text: "Leasing, maintenance and resale handled by one accountable team, reported monthly in your dashboard." },
];

const stats = [
  { value: "AED 4.2B+", label: "Career sales volume" },
  { value: "640+", label: "Families placed in Dubai" },
  { value: "18 days", label: "Median time to offer" },
  { value: "97%", label: "Of asking price achieved" },
];

export default function Home() {
  const featured = properties.filter((p) => p.featured);
  const heroProp = properties[0];
  return (
    <div className="bg-ink">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PropertyVisual hue={heroProp.hue} title={heroProp.title} tall />
          <div className="absolute inset-0 bg-gradient-to-b from-pine-950/80 via-pine-950/45 to-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-950/70 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-40 lg:px-8 lg:pt-48">
          <p className="rise rise-1 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-gold-400" />
            Dubai · Palm Jumeirah — Downtown — Marina
          </p>
          <h1 className="rise rise-2 mt-6 max-w-3xl font-serif text-[52px] font-medium leading-[1.02] text-ivory sm:text-7xl lg:text-[86px]">
            Homes that are
            <span className="italic text-gold-300"> landmarks</span>,
            <br /> not listings.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/75">
            PropSuite is a boutique portal for Dubai's signature villas and penthouses — and the private CRM our agents use to move every enquiry to a signed deal.
          </p>
          <HeroSearch />
          <div className="rise rise-4 mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-[26px] text-gold-300">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ivory/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="overflow-hidden border-y border-gold-500/15 bg-pine-950 py-4">
        <div className="marquee-track flex w-max gap-0 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex items-center text-[12px] font-semibold uppercase tracking-widest2 text-mist">
              {["Palm Jumeirah", "Emirates Hills", "Downtown Dubai", "Jumeirah Bay Island", "Dubai Marina", "Business Bay", "DIFC", "JBR"].map((a) => (
                <span key={a} className="flex items-center">
                  <span className="px-6">{a}</span>
                  <SparkleIcon className="h-4 w-4 text-gold-500" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- FEATURED RAIL ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">The Collection</p>
              <h2 className="mt-3 font-serif text-4xl text-ivory sm:text-5xl">Featured residences</h2>
            </div>
            <Link href="/properties" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-300 hover:text-gold-400">
              View all properties <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <FeaturedRail items={featured} />
        </Reveal>
      </section>

      {/* ---------- AREAS + MAP ---------- */}
      <section className="border-y border-white/5 bg-pine-950/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">Where we operate</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ivory sm:text-5xl">Eight neighbourhoods, one standard: exceptional.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-mist">
              We list only where we would buy ourselves. Every area on the map is walked weekly by our agents — schools, shoreline, traffic, light — so the advice is lived, not scraped.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-gold-500/20">
              <DubaiMap />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {areaCards.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <Link href={`/properties?area=${encodeURIComponent(a.name)}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-pine-900 transition hover:border-gold-500/50">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                      <PropertyVisual hue={a.hue} title={a.name} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center justify-between font-serif text-xl text-ivory">
                      {a.name}
                      <ArrowUpRight className="h-5 w-5 text-gold-400 opacity-0 transition group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{a.blurb}</p>
                    <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-400">From {a.from}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">Advisory Services</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            More than a portal — a private office for your property life
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-white/10 bg-pine-900 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold-500/40 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-pine-950">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-[22px] text-ivory">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CRM TEASER ---------- */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-gold-500/25 bg-gradient-to-br from-pine-800 via-pine-900 to-pine-950 px-7 py-12 sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
                  <HandshakeIcon className="h-4 w-4" /> For Agents
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory sm:text-[44px]">
                  Every lead, viewing and offer — one elegant pipeline.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-ivory/70">
                  The same product your buyers browse powers our sales floor: a CRM board from first enquiry to closed deal, with a live performance dashboard.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/crm" className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-pine-950 transition hover:bg-gold-400">
                    Open the CRM
                  </Link>
                  <Link href="/dashboard" className="flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ivory transition hover:border-gold-400 hover:text-gold-300">
                    <EyeIcon className="h-5 w-5" /> View dashboard
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "128", l: "Active leads" },
                  { v: "32", l: "Viewings / mo" },
                  { v: "AED 67M", l: "Closed this quarter" },
                  { v: "5", l: "Pipeline stages" },
                  { v: "4", l: "Senior agents" },
                  { v: "24h", l: "Response promise" },
                ].map((x) => (
                  <div key={x.l} className="rounded-2xl border border-white/10 bg-pine-950/60 px-2 py-5">
                    <p className="font-serif text-[22px] text-gold-300">{x.v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-mist">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- BROWSE STRIP ---------- */}
      <section className="border-t border-white/5 bg-pine-950/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="flex items-center gap-3 font-serif text-3xl text-ivory sm:text-4xl">
                <BuildingIcon className="h-8 w-8 text-gold-400" /> Latest additions
              </h2>
              <p className="flex items-center gap-2 text-sm text-mist">
                <PinIcon className="h-4 w-4 text-gold-500" /> Updated weekly by our agents
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(2, 5).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
