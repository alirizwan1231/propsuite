import Link from "next/link";
import { formatAED, type Property } from "@/data/properties";
import PropertyVisual from "./PropertyVisual";
import { AreaIcon, ArrowUpRight, BathIcon, BedIcon, PinIcon } from "./Icons";

const statusStyle: Record<Property["status"], string> = {
  Exclusive: "bg-gold-500 text-pine-950",
  New: "bg-ivory text-pine-950",
  "Off-Plan": "bg-pine-700 text-ivory",
  "For Sale": "bg-black/45 text-ivory backdrop-blur-sm",
};

export default function PropertyCard({ p, wide = false }: { p: Property; wide?: boolean }) {
  return (
    <Link
      href={`/properties/${p.id}`}
      className={`group block overflow-hidden rounded-2xl border border-white/10 bg-pine-900 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-[0_24px_50px_-20px_rgba(200,161,92,0.35)] ${wide ? "w-[340px] shrink-0 sm:w-[420px]" : ""}`}
    >
      <div className="relative aspect-[10/7] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.06]">
          <PropertyVisual hue={p.hue} title={p.title} />
        </div>
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusStyle[p.status]}`}>
          {p.status}
        </span>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-pine-950/70 text-gold-300 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[21px] leading-snug text-ivory">{p.title}</h3>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-mist">
          <PinIcon className="h-4 w-4 text-gold-500" /> {p.area}, Dubai
        </p>
        <div className="mt-4 flex items-center gap-5 border-t border-white/10 pt-4 text-[13px] text-ivory/80">
          <span className="flex items-center gap-1.5"><BedIcon className="h-[18px] w-[18px] text-gold-400" /> {p.beds} Beds</span>
          <span className="flex items-center gap-1.5"><BathIcon className="h-[18px] w-[18px] text-gold-400" /> {p.baths} Baths</span>
          <span className="flex items-center gap-1.5"><AreaIcon className="h-[18px] w-[18px] text-gold-400" /> {p.sqft.toLocaleString()} sq.ft</span>
        </div>
        <p className="mt-4 font-serif text-[22px] text-gold-400">{formatAED(p.price)}</p>
      </div>
    </Link>
  );
}
