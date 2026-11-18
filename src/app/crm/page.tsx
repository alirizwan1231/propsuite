import { leads, STAGES, type LeadStage } from "@/data/leads";
import { formatShort } from "@/data/properties";
import Reveal from "@/components/Reveal";
import { ClockIcon, PhoneIcon, UsersIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata = { title: "Agent CRM — PropSuite" };

const stageAccent: Record<LeadStage, string> = {
  New: "border-sky-300/60 text-sky-200",
  Contacted: "border-violet-300/60 text-violet-200",
  Viewing: "border-gold-400/70 text-gold-300",
  Negotiation: "border-orange-300/60 text-orange-200",
  Closed: "border-emerald-300/60 text-emerald-200",
};
const stageDot: Record<LeadStage, string> = {
  New: "bg-sky-300",
  Contacted: "bg-violet-300",
  Viewing: "bg-gold-400",
  Negotiation: "bg-orange-300",
  Closed: "bg-emerald-300",
};
const sourceStyle: Record<string, string> = {
  Portal: "bg-white/10 text-ivory/85",
  WhatsApp: "bg-[#3ECF6E]/15 text-[#7CE8A3]",
  Referral: "bg-gold-500/15 text-gold-300",
  "Walk-in": "bg-white/10 text-ivory/85",
  Campaign: "bg-violet-400/15 text-violet-200",
};

export default function CrmPage() {
  const totalPipeline = leads.filter((l) => l.stage !== "Closed").reduce((s, l) => s + l.budget, 0);
  return (
    <div className="bg-ink">
      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest2 text-gold-400">
                <UsersIcon className="h-4 w-4" /> Agent CRM
              </p>
              <h1 className="mt-3 font-serif text-5xl text-ivory sm:text-6xl">Leads pipeline</h1>
              <p className="mt-3 max-w-xl text-mist">
                Fifteen live enquiries worth <span className="font-semibold text-gold-300">{formatShort(totalPipeline)}</span> in open pipeline — dragged from first click to closed deal by four senior agents.
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { v: String(leads.filter((l) => l.stage === "New").length), l: "New today" },
                { v: String(leads.filter((l) => l.stage === "Viewing").length), l: "In viewings" },
                { v: String(leads.filter((l) => l.stage === "Closed").length), l: "Closed" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-pine-900 px-5 py-4 text-center">
                  <p className="font-serif text-2xl text-gold-300">{s.v}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-mist">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* pipeline board */}
        <Reveal delay={100}>
          <div className="no-scrollbar mt-12 flex snap-x gap-4 overflow-x-auto pb-4">
            {STAGES.map((stage) => {
              const cards = leads.filter((l) => l.stage === stage);
              const sum = cards.reduce((s, l) => s + l.budget, 0);
              return (
                <div key={stage} className="w-[290px] shrink-0 snap-start rounded-3xl border border-white/10 bg-pine-950/70 p-4">
                  <div className="flex items-center justify-between px-1 pb-3">
                    <h3 className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] ${stageAccent[stage].split(" ")[1]}`}>
                      <span className={`h-2 w-2 rounded-full ${stageDot[stage]}`} />
                      {stage}
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-ivory/80">{cards.length}</span>
                    </h3>
                    <span className="text-[11px] font-semibold text-mist">{formatShort(sum)}</span>
                  </div>
                  <div className="space-y-3">
                    {cards.map((l) => (
                      <article
                        key={l.id}
                        className={`rounded-2xl border border-white/10 border-t-2 bg-pine-900 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-16px_rgba(0,0,0,0.7)] ${stageAccent[stage].split(" ")[0]}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold leading-snug text-ivory">{l.name}</h4>
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${sourceStyle[l.source]}`}>{l.source}</span>
                        </div>
                        <p className="mt-1.5 line-clamp-1 text-[13px] text-mist">{l.interest}</p>
                        <p className="mt-3 font-serif text-lg text-gold-300">{formatShort(l.budget)} <span className="font-sans text-[11px] uppercase tracking-wide text-mist">budget</span></p>
                        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[12px] text-mist">
                          <span>{l.agent}</span>
                          <span className="flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" /> {l.updated}</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <a href={`https://wa.me/${l.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#3ECF6E]/40 py-2 text-[12px] font-semibold text-[#7CE8A3] transition hover:bg-[#3ECF6E]/10">
                            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                          </a>
                          <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 py-2 text-[12px] font-semibold text-ivory/85 transition hover:border-gold-500/50 hover:text-gold-300">
                            <PhoneIcon className="h-4 w-4" /> Call
                          </a>
                        </div>
                      </article>
                    ))}
                    {cards.length === 0 && (
                      <p className="rounded-2xl border border-dashed border-white/10 py-8 text-center text-sm text-mist">No leads here</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* lead table */}
        <Reveal delay={120}>
          <h2 className="mt-16 font-serif text-3xl text-ivory">All leads</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead>
                <tr className="bg-pine-900 text-[11px] uppercase tracking-[0.16em] text-mist">
                  <th className="px-5 py-4 font-semibold">Lead</th>
                  <th className="px-5 py-4 font-semibold">Interested in</th>
                  <th className="px-5 py-4 font-semibold">Source</th>
                  <th className="px-5 py-4 font-semibold">Budget</th>
                  <th className="px-5 py-4 font-semibold">Stage</th>
                  <th className="px-5 py-4 font-semibold">Agent</th>
                  <th className="px-5 py-4 font-semibold">Updated</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l, i) => (
                  <tr key={l.id} className={`border-t border-white/5 transition hover:bg-white/[0.03] ${i % 2 ? "bg-pine-950/40" : "bg-pine-950/10"}`}>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-pine-700 font-serif text-[15px] text-gold-300">
                          {l.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </span>
                        <span>
                          <span className="block font-semibold text-ivory">{l.name}</span>
                          <span className="block text-xs text-mist">{l.phone}</span>
                        </span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-ivory/80">{l.interest}</td>
                    <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${sourceStyle[l.source]}`}>{l.source}</span></td>
                    <td className="px-5 py-4 font-semibold text-gold-300">{formatShort(l.budget)}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border bg-transparent px-2.5 py-1 text-[11px] font-semibold ${stageAccent[l.stage]}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${stageDot[l.stage]}`} /> {l.stage}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-ivory/80">{l.agent}</td>
                    <td className="px-5 py-4 text-mist">{l.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-mist/70">Demo data — in production this board syncs with the live portal, WhatsApp enquiries and viewing calendar.</p>
        </Reveal>
      </section>
    </div>
  );
}
