"use client";
import { useState } from "react";
import { CalendarIcon, CheckIcon, WhatsAppIcon } from "./Icons";

export default function ViewingForm({ propertyTitle, agent }: { propertyTitle: string; agent: string }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const waText = encodeURIComponent(`Hello PropSuite, I am interested in ${propertyTitle}. Please share availability for a viewing.`);
  const input =
    "w-full rounded-xl border border-white/15 bg-pine-950/70 px-4 py-3 text-sm text-ivory outline-none transition placeholder:text-mist/60 focus:border-gold-500/70";

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold-500/40 bg-pine-900 p-7 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-500 text-pine-950">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-serif text-2xl text-ivory">Viewing requested</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""}. {agent} will confirm your slot within one working hour. (Demo — no data leaves your browser.)
        </p>
        <button onClick={() => setSent(false)} className="mt-5 text-sm font-semibold text-gold-300 underline-offset-4 hover:underline">
          Book another slot
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-pine-900 p-7">
      <h3 className="flex items-center gap-2.5 font-serif text-2xl text-ivory">
        <CalendarIcon className="h-6 w-6 text-gold-400" /> Book a viewing
      </h3>
      <p className="mt-1.5 text-[13px] text-mist">Private tours daily, 9:00 — 19:00 GST.</p>
      <form
        className="mt-6 space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className={input} />
        <input required type="tel" placeholder="Phone / WhatsApp number" className={input} />
        <div className="grid grid-cols-2 gap-3.5">
          <input required type="date" className={`${input} [color-scheme:dark]`} />
          <select className={input} defaultValue="11:00">
            {["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"].map((t) => (
              <option key={t} value={t} className="bg-pine-950">{t}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full rounded-full bg-gold-500 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-pine-950 transition hover:bg-gold-400">
          Request viewing
        </button>
      </form>
      <a
        href={`https://wa.me/97148752200?text=${waText}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-full border border-[#3ECF6E]/50 py-3.5 text-sm font-semibold text-[#7CE8A3] transition hover:bg-[#3ECF6E]/10"
      >
        <WhatsAppIcon className="h-5 w-5" /> Enquire on WhatsApp
      </a>
      <p className="mt-4 text-center text-xs text-mist/80">Listing agent: {agent} · Response within 1 working hour</p>
    </div>
  );
}
