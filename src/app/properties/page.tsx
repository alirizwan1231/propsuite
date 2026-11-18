import { Suspense } from "react";
import PropertiesClient from "./PropertiesClient";

export const metadata = { title: "Properties — PropSuite" };

export default function PropertiesPage() {
  return (
    <div className="bg-ink">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">The Portfolio</p>
        <h1 className="mt-3 font-serif text-5xl text-ivory sm:text-6xl">Dubai residences, curated</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-mist">
          Twelve signature listings across the Palm, Downtown, the Marina and beyond. Filter by area, type and budget — every price in AED, every home visited by our team.
        </p>
        <div className="mt-10">
          <Suspense fallback={<div className="py-20 text-center text-mist">Loading residences…</div>}>
            <PropertiesClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
