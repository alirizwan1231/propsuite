type P = { className?: string };
const base = (path: React.ReactNode) =>
  function Icon({ className = "h-5 w-5" }: P) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
        {path}
      </svg>
    );
  };

export const BedIcon = base(<><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M2 17h20" /></>);
export const BathIcon = base(<><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" /><path d="M6 12V5a2 2 0 0 1 4 0" /><path d="M7 21l-1 1M17 21l1 1" /></>);
export const AreaIcon = base(<><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 9h5V4M20 15h-5v5" /></>);
export const PinIcon = base(<><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.6" /></>);
export const SearchIcon = base(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.8-3.8" /></>);
export const ArrowRight = base(<><path d="M4 12h16m-6-6 6 6-6 6" /></>);
export const ArrowUpRight = base(<><path d="M6 18 18 6M9 6h9v9" /></>);
export const PhoneIcon = base(<><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" /></>);
export const CalendarIcon = base(<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>);
export const CheckIcon = base(<><path d="m4 12.5 5 5L20 6.5" /></>);
export const KeyIcon = base(<><circle cx="8" cy="15" r="4.5" /><path d="m11.5 11.5 8-8M17 5l2.5 2.5M14.5 7.5 17 10" /></>);
export const ChartIcon = base(<><path d="M4 20V10M10 20V4M16 20v-8M21 20H3" /></>);
export const UsersIcon = base(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5a3.5 3.5 0 0 1 0 7M17.5 14.5a6.5 6.5 0 0 1 4 5.5" /></>);
export const EyeIcon = base(<><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>);
export const HandshakeIcon = base(<><path d="m11 8 3.5-3.5a2.1 2.1 0 0 1 3 3L14 11" /><path d="M3 13.5 7.5 9a2 2 0 0 1 2.8 0L15 13.7a2 2 0 1 1-2.8 2.8l-1-1" /><path d="M3 13.5V18a2 2 0 0 0 2 2h1M21 13.5V18a2 2 0 0 1-2 2h-1" /></>);
export const BuildingIcon = base(<><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M3 21h18" /></>);
export const SparkleIcon = base(<><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>);
export const ShieldIcon = base(<><path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>);
export const GlobeIcon = base(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" /></>);
export const MenuIcon = base(<><path d="M4 7h16M4 12h16M4 17h10" /></>);
export const XIcon = base(<><path d="M6 6l12 12M18 6 6 18" /></>);
export const LayoutIcon = base(<><rect x="3" y="3" width="7.5" height="9" rx="1" /><rect x="13.5" y="3" width="7.5" height="5.5" rx="1" /><rect x="13.5" y="11.5" width="7.5" height="9.5" rx="1" /><rect x="3" y="15" width="7.5" height="6" rx="1" /></>);
export const ListIcon = base(<><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" /></>);
export const TrendIcon = base(<><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>);
export const ClockIcon = base(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>);
export const CalcIcon = base(<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" /></>);
export const StarIcon = base(<><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" /></>);
export const WhatsAppIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2.1 22l4.9-1.5A10 10 0 1 0 12.04 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .9 1-2.9-.2-.3a8.2 8.2 0 0 1 6.7-12.7Zm-3.1 4c-.2 0-.5.1-.7.3-.6.6-1.2 1.5-1.2 3 0 1.6.9 3.2 1 3.4.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-2-.9c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-3.7-3.3c-.3-.5.3-.4.8-1.4.1-.2.1-.4 0-.5L9.6 8.6c-.2-.5-.4-.8-.7-.8Z" />
  </svg>
);
