"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AREAS } from "@/data/properties";
import { SearchIcon } from "./Icons";

const budgets = [
  { label: "Any budget", value: "0" },
  { label: "Up to AED 5M", value: "5000000" },
  { label: "Up to AED 15M", value: "15000000" },
  { label: "Up to AED 40M", value: "40000000" },
  { label: "AED 40M +", value: "40000001" },
];

export default function HeroSearch() {
  const router = useRouter();
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("0");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (area) q.set("area", area);
    if (type) q.set("type", type);
    if (budget !== "0") q.set("budget", budget);
    router.push(`/properties${q.toString() ? `?${q}` : ""}`);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-pine-950/70 px-4 py-3.5 text-sm text-ivory outline-none backdrop-blur transition focus:border-gold-500/70";
  const label = "mb-2 block text-[10px] font-semibold uppercase tracking-widest2 text-gold-400";

  return (
    <form
      onSubmit={submit}
      className="rise rise-4 mt-10 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:rounded-full lg:py-2 lg:pl-8"
    >
      <div className="px-2 pt-1 lg:pt-0">
        <label className={label}>Area</label>
        <select value={area} onChange={(e) => setArea(e.target.value)} className={`${field} lg:border-0 lg:bg-transparent lg:p-0 lg:py-1`}>
          <option value="" className="bg-pine-950">All of Dubai</option>
          {AREAS.map((a) => (
            <option key={a} value={a} className="bg-pine-950">{a}</option>
          ))}
        </select>
      </div>
      <div className="px-2 pt-1 lg:pt-0">
        <label className={label}>Property type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className={`${field} lg:border-0 lg:bg-transparent lg:p-0 lg:py-1`}>
          <option value="" className="bg-pine-950">Villas, penthouses, apartments</option>
          {["Villa", "Penthouse", "Apartment", "Townhouse"].map((t) => (
            <option key={t} value={t} className="bg-pine-950">{t}</option>
          ))}
        </select>
      </div>
      <div className="px-2 pt-1 lg:pt-0">
        <label className={label}>Budget</label>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className={`${field} lg:border-0 lg:bg-transparent lg:p-0 lg:py-1`}>
          {budgets.map((b) => (
            <option key={b.label} value={b.value} className="bg-pine-950">{b.label}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-pine-950 transition hover:bg-gold-400 sm:col-span-2 lg:col-span-1"
      >
        <SearchIcon className="h-[18px] w-[18px]" /> Search
      </button>
    </form>
  );
}
