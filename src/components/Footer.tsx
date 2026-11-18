import Link from "next/link";
import { KeyIcon, PinIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-pine-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/70 text-gold-400">
              <KeyIcon className="h-5 w-5" />
            </span>
            <span className="font-serif text-2xl text-ivory">
              Prop<span className="text-gold-400">Suite</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            Dubai's boutique portal for signature villas, penthouses and investment residences — paired with a private CRM that keeps every enquiry, viewing and offer in one place.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
            <li><Link className="hover:text-gold-300" href="/properties">All Properties</Link></li>
            <li><Link className="hover:text-gold-300" href="/crm">Agent CRM</Link></li>
            <li><Link className="hover:text-gold-300" href="/dashboard">Agent Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">Visit</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
            <li className="flex gap-2"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> Level 14, Emirates Towers, Sheikh Zayed Road, Dubai</li>
            <li className="flex gap-2"><PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> +971 4 875 2200</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs tracking-wide text-mist/70">
        PropSuite — portfolio demonstration with demo data. No real listings.
      </div>
    </footer>
  );
}
