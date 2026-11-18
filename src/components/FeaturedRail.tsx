"use client";
import { useRef } from "react";
import type { Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "./Icons";

export default function FeaturedRail({ items }: { items: Property[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    ref.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  return (
    <div>
      <div
        ref={ref}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 lg:-mx-8 lg:px-8"
      >
        {items.map((p) => (
          <div key={p.id} className="snap-start">
            <PropertyCard p={p} wide />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-3">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/40 text-gold-400 transition hover:bg-gold-500 hover:text-pine-950"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/40 text-gold-400 transition hover:bg-gold-500 hover:text-pine-950"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
