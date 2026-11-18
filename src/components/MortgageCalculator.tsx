"use client";
import { useMemo, useState } from "react";
import { CalcIcon } from "./Icons";

export default function MortgageCalculator({ price }: { price: number }) {
  const [downPct, setDownPct] = useState(25);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(4.5);

  const { loan, monthly, totalInterest } = useMemo(() => {
    const loanAmt = price * (1 - downPct / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    const m = r > 0 ? (loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmt / n;
    return { loan: loanAmt, monthly: m, totalInterest: m * n - loanAmt };
  }, [price, downPct, years, rate]);

  const fmt = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");
  const fill = (v: number, min: number, max: number) => ({ "--fill": `${((v - min) / (max - min)) * 100}%` } as React.CSSProperties);
  const row = "flex items-center justify-between text-sm";
  const val = "font-semibold text-gold-300";

  return (
    <div className="rounded-3xl border border-gold-500/25 bg-pine-900 p-7">
      <h3 className="flex items-center gap-2.5 font-serif text-2xl text-ivory">
        <CalcIcon className="h-6 w-6 text-gold-400" /> Mortgage calculator
      </h3>
      <p className="mt-1.5 text-[13px] text-mist">Indicative only — pure front-end maths on this listing's price.</p>

      <div className="mt-7 space-y-6">
        <div>
          <div className={row}><span className="text-ivory/75">Down payment</span><span className={val}>{downPct}% · {fmt((price * downPct) / 100)}</span></div>
          <input type="range" min={15} max={60} step={5} value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} className="mt-3 w-full" style={fill(downPct, 15, 60)} />
        </div>
        <div>
          <div className={row}><span className="text-ivory/75">Term</span><span className={val}>{years} years</span></div>
          <input type="range" min={5} max={30} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-3 w-full" style={fill(years, 5, 30)} />
        </div>
        <div>
          <div className={row}><span className="text-ivory/75">Interest rate</span><span className={val}>{rate.toFixed(2)}%</span></div>
          <input type="range" min={2} max={8} step={0.25} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-3 w-full" style={fill(rate, 2, 8)} />
        </div>
      </div>

      <div className="mt-7 space-y-2.5 rounded-2xl bg-pine-950/70 p-5 text-sm">
        <div className={row}><span className="text-mist">Loan amount</span><span className="text-ivory">{fmt(loan)}</span></div>
        <div className={row}><span className="text-mist">Total interest</span><span className="text-ivory">{fmt(totalInterest)}</span></div>
        <div className="border-t border-white/10 pt-3">
          <div className={row}>
            <span className="font-semibold text-ivory">Monthly payment</span>
            <span className="font-serif text-[26px] leading-none text-gold-300">{fmt(monthly)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
