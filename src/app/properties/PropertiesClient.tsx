"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AREAS, properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { SearchIcon } from "@/components/Icons";

const TYPES = ["Villa", "Penthouse", "Apartment", "Townhouse"];
const BUDGETS = [
  { label: "Any budget", test: (_: number) => true },
  { label: "Under AED 5M", test: (p: number) => p < 5_000_000 },
  { label: "AED 5M – 20M", test: (p: number) => p >= 5_000_000 && p <= 20_000_000 },
  { label: "AED 20M – 50M", test: (p: number) => p > 20_000_000 && p <= 50_000_000 },
  { label: "AED 50M +", test: (p: number) => p > 50_000_000 },
];
const SORTS = [
  { label: "Featured first", fn: (a: typeof properties[0], b: typeof properties[0]) => Number(b.featured ?? false) - Number(a.featured ?? false) },
  { label: "Price: low to high", fn: (a: typeof properties[0], b: typeof properties[0]) => a.price - b.price },
  { label: "Price: high to low", fn: (a: typeof properties[0], b: typeof properties[0]) => b.price - a.price },
  { label: "Largest first", fn: (a: typeof properties[0], b: typeof properties[0]) => b.sqft - a.sqft },
];

export default function PropertiesClient() {
  const sp = useSearchParams();
  const initBudget = sp.get("budget");
  const [area, setArea] = useState(sp.get("area") ?? "");
  const [type, setType] = useState(sp.get("type") ?? "");
  const [budgetIdx, setBudgetIdx] = useState(() => {
    if (!initBudget) return 0;
    const b = Number(initBudget);
    if (b === 40_000_001) return 4;
    const i = BUDGETS.findIndex((x, ix) => ix > 0 && x.test(b === 40_000_001 ? 60_000_000 : b));
    return i === -1 ? 0 : i;
  });
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState(0);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const list = properties.filter(
      (p) =>
        (!area || p.area === area) &&
        (!type || p.type === type) &&
        BUDGETS[budgetIdx].test(p.price) &&
        p.beds >= minBeds &&
        (!query || `${p.title} ${p.area}`.toLowerCase().includes(query.toLowerCase()))
    );
    return [...list].sort(SORTS[sort].fn);
  }, [area, type, budgetIdx, minBeds, sort, query]);

  const sel =
    "rounded-full border border-white/15 bg-pine-900 px-4 py-2.5 text-sm text-ivory outline-none transition focus:border-gold-500/70";
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-[13px] font-medium transition ${
      active ? "border-gold-500 bg-gold-500 text-pine-950" : "border-white/15 text-ivory/75 hover:border-gold-500/50 hover:text-ivory"
    }`;

  return (
    <div>
      {/* filter bar */}
      <div className="rounded-3xl border border-white/10 bg-pine-950/70 p-5 backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-mist" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or area…"
              className="w-full rounded-full border border-white/15 bg-pine-900 py-3 pl-11 pr-4 text-sm text-ivory outline-none transition placeholder:text-mist/70 focus:border-gold-500/70"
            />
          </div>
          <select value={area} onChange={(e) => setArea(e.target.value)} className={sel}>
            <option value="">All areas</option>
            {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className={sel}>
            <option value="">All types</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(Number(e.target.value))} className={sel}>
            {SORTS.map((s, i) => <option key={s.label} value={i}>{s.label}</option>)}
          </select>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">Budget</span>
          {BUDGETS.map((b, i) => (
            <button key={b.label} onClick={() => setBudgetIdx(i)} className={chip(budgetIdx === i)}>{b.label}</button>
          ))}
          <span className="mx-2 hidden h-5 w-px bg-white/10 sm:block" />
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">Beds</span>
          {[0, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setMinBeds(n)} className={chip(minBeds === n)}>{n === 0 ? "Any" : `${n}+`}</button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-mist">
        Showing <span className="font-semibold text-gold-300">{results.length}</span> of {properties.length} residences
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-gold-500/30 bg-pine-950/50 px-6 py-20 text-center">
          <p className="font-serif text-3xl text-ivory">Nothing matches — yet.</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-mist">
            Our agents hold off-market stock in every area. Loosen a filter, or ask us and we will search privately for you.
          </p>
          <button
            onClick={() => { setArea(""); setType(""); setBudgetIdx(0); setMinBeds(0); setQuery(""); }}
            className="mt-6 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-pine-950 transition hover:bg-gold-400"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
