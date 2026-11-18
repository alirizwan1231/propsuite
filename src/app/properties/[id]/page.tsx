import Link from "next/link";
import { notFound } from "next/navigation";
import { formatAED, properties } from "@/data/properties";
import PropertyVisual from "@/components/PropertyVisual";
import PropertyCard from "@/components/PropertyCard";
import MortgageCalculator from "@/components/MortgageCalculator";
import ViewingForm from "@/components/ViewingForm";
import Reveal from "@/components/Reveal";
import {
  AreaIcon, ArrowRight, BathIcon, BedIcon, BuildingIcon, CheckIcon, PinIcon, StarIcon,
} from "@/components/Icons";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = properties.find((x) => x.id === id);
  if (!p) notFound();
  const similar = properties.filter((x) => x.id !== p.id && (x.area === p.area || x.type === p.type)).slice(0, 3);
  const galleryHues = [p.hue, (p.hue + 40) % 360, (p.hue + 300) % 360, (p.hue + 120) % 360];
  const perSqft = Math.round(p.price / p.sqft);

  const specs = [
    { icon: BedIcon, label: "Bedrooms", value: String(p.beds) },
    { icon: BathIcon, label: "Bathrooms", value: String(p.baths) },
    { icon: AreaIcon, label: "Built-up area", value: `${p.sqft.toLocaleString()} sq.ft` },
    { icon: BuildingIcon, label: "Type", value: p.type },
    { icon: StarIcon, label: "Price / sq.ft", value: `AED ${perSqft.toLocaleString()}` },
    { icon: CheckIcon, label: "Tenure · Built", value: `${p.tenure} · ${p.yearBuilt}` },
  ];

  return (
    <div className="bg-ink">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-8">
        <Link href="/properties" className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-mist transition hover:text-gold-300">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> All properties
        </Link>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl">{p.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-mist">
              <PinIcon className="h-5 w-5 text-gold-500" /> {p.area}, Dubai, UAE
              <span className="ml-2 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-pine-950">{p.status}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="font-serif text-4xl text-gold-400">{formatAED(p.price)}</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-mist">AED {perSqft.toLocaleString()} per sq.ft</p>
          </div>
        </div>

        {/* gallery */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-2 lg:row-span-2">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
              <PropertyVisual hue={galleryHues[0]} title={p.title} tall />
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-pine-950/70 px-4 py-1.5 text-xs text-ivory backdrop-blur">Exterior · Golden hour</span>
          </div>
          {[
            { h: galleryHues[1], cap: "Living pavilion" },
            { h: galleryHues[2], cap: "Pool & terrace" },
            { h: galleryHues[3], cap: "Skyline view" },
          ].map((g) => (
            <div key={g.cap} className="relative hidden overflow-hidden rounded-3xl border border-white/10 lg:block">
              <div className="aspect-[16/8]">
                <PropertyVisual hue={g.h} title={`${p.title} — ${g.cap}`} />
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-pine-950/70 px-3 py-1 text-[11px] text-ivory backdrop-blur">{g.cap}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 font-serif text-[26px] italic leading-snug text-gold-300">“{p.tagline}”</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.55fr_1fr]">
          {/* left column */}
          <div>
            <Reveal>
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-pine-900 p-5">
                    <s.icon className="h-6 w-6 text-gold-400" />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-mist">{s.label}</p>
                    <p className="mt-1 font-semibold text-ivory">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-12 font-serif text-3xl text-ivory">About this residence</h2>
              <p className="mt-4 leading-[1.85] text-ivory/75">{p.description}</p>
              <p className="mt-4 leading-[1.85] text-ivory/75">
                Presented exclusively by PropSuite. Service charge history, title deed and recent comparable sales in {p.area} are available on request — our agents share the full data room before any viewing is confirmed.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-12 font-serif text-3xl text-ivory">Amenities & features</h2>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {p.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-[15px] text-ivory/80">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold-500/50 text-gold-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* right column */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <ViewingForm propertyTitle={p.title} agent={p.agent} />
            <MortgageCalculator price={p.price} />
          </div>
        </div>

        {/* similar */}
        {similar.length > 0 && (
          <div className="mt-24">
            <Reveal>
              <h2 className="font-serif text-4xl text-ivory">You may also consider</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((s, i) => (
                <Reveal key={s.id} delay={i * 90}>
                  <PropertyCard p={s} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
