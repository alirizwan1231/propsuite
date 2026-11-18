import Link from "next/link";
import { activities, leads, STAGES, weeklyBars } from "@/data/leads";
import { formatShort, properties } from "@/data/properties";
import DubaiMap from "@/components/DubaiMap";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight, BuildingIcon, CalendarIcon, ChartIcon, EyeIcon, HandshakeIcon, LayoutIcon, TrendIcon, UsersIcon,
} from "@/components/Icons";

export const metadata = { title: "Agent Dashboard — PropSuite" };

const closedValue = leads.filter((l) => l.stage === "Closed").reduce((s, l) => s + l.budget, 0);

const kpis = [
  { icon: BuildingIcon, label: "Active listings", value: String(properties.length), delta: "+2 this week", up: true },
  { icon: UsersIcon, label: "Leads this month", value: "128", delta: "+18.4% vs Oct", up: true },
  { icon: CalendarIcon, label: "Viewings booked", value: "32", delta: "+6 this week", up: true },
  { icon: HandshakeIcon, label: "Closed deals value", value: formatShort(closedValue + 26_000_000), delta: "4 deals in Nov", up: true },
];

const funnelMax = Math.max(...STAGES.map((s) => leads.filter((l) => l.stage === s).length), 5);
const kindIcon: Record<string, typeof EyeIcon> = {
  viewing: EyeIcon,
  offer: TrendIcon,
  lead: UsersIcon,
  closed: HandshakeIcon,
  listing: BuildingIcon,
};

export default function DashboardPage() {
  const maxBar = Math.max(...weeklyBars.map((d) => d.leads));
  const topListings = [...properties].sort((a, b) => b.price - a.price).slice(0, 4);
  return (
    <div className="bg-ink">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">
                <LayoutIcon className="h-4 w-4" /> Agent Dashboard
              </p>
              <h1 className="mt-3 font-serif text-5xl text-ivory sm:text-6xl">Good evening, Layla</h1>
              <p className="mt-3 text-mist">Tuesday, 18 November · Your Palm Jumeirah portfolio is outperforming the market this week.</p>
            </div>
            <Link href="/crm" className="rounded-full bg-gold-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-pine-950 transition hover:bg-gold-400">
              Open pipeline
            </Link>
          </div>
        </Reveal>

        {/* KPI cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <Reveal key={k.label} delay={i * 80}>
              <div className="group rounded-3xl border border-white/10 bg-pine-900 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/40 text-gold-400">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                    <TrendIcon className="h-3.5 w-3.5" /> {k.delta}
                  </span>
                </div>
                <p className="mt-5 font-serif text-[34px] leading-none text-ivory">{k.value}</p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-mist">{k.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* chart */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-pine-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2.5 font-serif text-2xl text-ivory">
                  <ChartIcon className="h-6 w-6 text-gold-400" /> Leads & viewings — this week
                </h2>
                <div className="flex gap-4 text-[12px] text-mist">
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-gold-500" /> Leads</span>
                  <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-pine-700" /> Viewings</span>
                </div>
              </div>
              <div className="mt-8 flex h-52 items-end gap-3 sm:gap-5">
                {weeklyBars.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-[11px] font-semibold text-gold-300">{d.leads}</span>
                    <div className="flex w-full items-end justify-center gap-1.5">
                      <div className="w-4 rounded-t-md bg-gradient-to-t from-gold-600 to-gold-400 transition-all duration-700 sm:w-6" style={{ height: `${(d.leads / maxBar) * 150}px` }} />
                      <div className="w-4 rounded-t-md bg-pine-700 transition-all duration-700 sm:w-6" style={{ height: `${(d.viewings / maxBar) * 150}px` }} />
                    </div>
                    <span className="text-[11px] uppercase tracking-wide text-mist">{d.day}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-mist">
                Saturday is your strongest day — <span className="text-gold-300">14 leads, 8 viewings</span>. Consider adding a second agent to weekend Palm tours.
              </p>
            </div>
          </Reveal>

          {/* funnel */}
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-white/10 bg-pine-900 p-7">
              <h2 className="font-serif text-2xl text-ivory">Pipeline funnel</h2>
              <div className="mt-6 space-y-4">
                {STAGES.map((s) => {
                  const count = leads.filter((l) => l.stage === s).length;
                  const sum = leads.filter((l) => l.stage === s).reduce((a, l) => a + l.budget, 0);
                  return (
                    <div key={s}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-ivory/85">{s}</span>
                        <span className="text-mist">{count} leads · <span className="text-gold-300">{formatShort(sum)}</span></span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-pine-950">
                        <div className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300" style={{ width: `${Math.max(10, (count / funnelMax) * 100)}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-mist">
                Conversion New → Closed is tracking at <span className="text-gold-300">13%</span> this quarter, up from 9%.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          {/* activity */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-pine-900 p-7">
              <h2 className="font-serif text-2xl text-ivory">Recent activity</h2>
              <ul className="mt-6 space-y-5">
                {activities.map((a) => {
                  const Icon = kindIcon[a.kind] ?? EyeIcon;
                  return (
                    <li key={a.id} className="flex gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-500/35 text-gold-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm leading-relaxed text-ivory/85">{a.text}</span>
                        <span className="mt-0.5 block text-xs text-mist">{a.time}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* map + top listings */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-3xl border border-gold-500/20">
                <DubaiMap />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-3xl border border-white/10 bg-pine-900 p-7">
                <h2 className="font-serif text-2xl text-ivory">Highest-value listings</h2>
                <ul className="mt-5 divide-y divide-white/5">
                  {topListings.map((p) => (
                    <li key={p.id}>
                      <Link href={`/properties/${p.id}`} className="group flex items-center justify-between gap-4 py-3.5">
                        <span>
                          <span className="block font-medium text-ivory group-hover:text-gold-300">{p.title}</span>
                          <span className="block text-[13px] text-mist">{p.area} · {p.beds} bd · {p.sqft.toLocaleString()} sq.ft</span>
                        </span>
                        <span className="flex items-center gap-2 font-serif text-lg text-gold-300">
                          {formatShort(p.price)}
                          <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
