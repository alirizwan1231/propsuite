export type LeadStage = "New" | "Contacted" | "Viewing" | "Negotiation" | "Closed";

export type Lead = {
  id: number;
  name: string;
  source: "Portal" | "WhatsApp" | "Referral" | "Walk-in" | "Campaign";
  interest: string;
  budget: number;
  stage: LeadStage;
  agent: string;
  updated: string;
  phone: string;
};

export const STAGES: LeadStage[] = ["New", "Contacted", "Viewing", "Negotiation", "Closed"];

export const leads: Lead[] = [
  { id: 1, name: "Ahmed Al Mansoori", source: "Portal", interest: "Frond N Signature Villa", budget: 90000000, stage: "Negotiation", agent: "Layla Haddad", updated: "12 min ago", phone: "+971 50 214 8890" },
  { id: 2, name: "Elena Petrova", source: "WhatsApp", interest: "The Crown Penthouse", budget: 44000000, stage: "Viewing", agent: "Omar Al Farsi", updated: "38 min ago", phone: "+971 55 902 3317" },
  { id: 3, name: "Rajesh Menon", source: "Referral", interest: "Marina Gate Sky Residence", budget: 3800000, stage: "Contacted", agent: "Sara Iqbal", updated: "1 hr ago", phone: "+971 52 611 2044" },
  { id: 4, name: "Charlotte Webb", source: "Portal", interest: "Fairways Court Villa", budget: 40000000, stage: "New", agent: "Karim Nasser", updated: "2 hrs ago", phone: "+971 58 340 7712" },
  { id: 5, name: "Li Wei", source: "Campaign", interest: "Bay Central Penthouse", budget: 16500000, stage: "Viewing", agent: "Karim Nasser", updated: "3 hrs ago", phone: "+971 50 778 9012" },
  { id: 6, name: "Fatima Al Suwaidi", source: "Walk-in", interest: "Bay Island Mansion", budget: 150000000, stage: "Negotiation", agent: "Layla Haddad", updated: "5 hrs ago", phone: "+971 50 109 6654" },
  { id: 7, name: "Dmitry Sokolov", source: "Portal", interest: "Opera District Duplex", budget: 11500000, stage: "Contacted", agent: "Omar Al Farsi", updated: "Yesterday", phone: "+971 56 220 8819" },
  { id: 8, name: "Priya Nair", source: "WhatsApp", interest: "Canal Loft at Bayz Tower", budget: 2000000, stage: "New", agent: "Omar Al Farsi", updated: "Yesterday", phone: "+971 54 903 1176" },
  { id: 9, name: "James O'Connell", source: "Referral", interest: "Shoreline Duplex", budget: 7600000, stage: "Closed", agent: "Karim Nasser", updated: "Yesterday", phone: "+971 58 664 2098" },
  { id: 10, name: "Yuki Tanaka", source: "Portal", interest: "Limestone Atelier Residence", budget: 6100000, stage: "Viewing", agent: "Sara Iqbal", updated: "2 days ago", phone: "+971 52 481 7730" },
  { id: 11, name: "Mohammed Bin Rashid", source: "Campaign", interest: "Quayside Townhouse", budget: 9200000, stage: "Contacted", agent: "Sara Iqbal", updated: "2 days ago", phone: "+971 50 315 9921" },
  { id: 12, name: "Anna Kowalski", source: "WhatsApp", interest: "County Garden Villa", budget: 34000000, stage: "Closed", agent: "Layla Haddad", updated: "3 days ago", phone: "+971 55 730 4418" },
  { id: 13, name: "Omar Haddad", source: "Portal", interest: "Marina Gate Sky Residence", budget: 3500000, stage: "New", agent: "Sara Iqbal", updated: "3 days ago", phone: "+971 56 118 3357" },
  { id: 14, name: "Grace Adeyemi", source: "Referral", interest: "Bay Central Penthouse", budget: 15800000, stage: "Negotiation", agent: "Karim Nasser", updated: "4 days ago", phone: "+971 54 227 6603" },
  { id: 15, name: "Viktor Lindqvist", source: "Walk-in", interest: "The Crown Penthouse", budget: 43000000, stage: "New", agent: "Omar Al Farsi", updated: "4 days ago", phone: "+971 58 992 1145" },
];

export const activities = [
  { id: 1, text: "Viewing confirmed — Elena Petrova at The Crown Penthouse, Sat 11:00", time: "20 min ago", kind: "viewing" },
  { id: 2, text: "Offer received AED 86M on Frond N Signature Villa (asking 88M)", time: "1 hr ago", kind: "offer" },
  { id: 3, text: "New WhatsApp lead: Priya Nair — Canal Loft at Bayz Tower", time: "2 hrs ago", kind: "lead" },
  { id: 4, text: "Deal closed — County Garden Villa, AED 33.5M (Layla Haddad)", time: "Yesterday", kind: "closed" },
  { id: 5, text: "Price aligned — Bay Central Penthouse now AED 15.9M", time: "Yesterday", kind: "listing" },
  { id: 6, text: "Viewing completed — Li Wei at Bay Central Penthouse, feedback: very positive", time: "2 days ago", kind: "viewing" },
  { id: 7, text: "New portal lead: Viktor Lindqvist — budget AED 43M, Downtown", time: "2 days ago", kind: "lead" },
];

export const weeklyBars = [
  { day: "Mon", leads: 6, viewings: 2 },
  { day: "Tue", leads: 9, viewings: 4 },
  { day: "Wed", leads: 7, viewings: 3 },
  { day: "Thu", leads: 12, viewings: 5 },
  { day: "Fri", leads: 10, viewings: 6 },
  { day: "Sat", leads: 14, viewings: 8 },
  { day: "Sun", leads: 8, viewings: 4 },
];
