/**
 * BODY CRAFT — single source of truth for verified business data & imagery.
 * Only verified facts live here. Do not add claims that cannot be sourced.
 */

/* Media is served from the deployed site's own /public directory. */

export const business = {
  name: "Body Craft",
  type: "Premium Gym / Fitness Center",
  street: "35 Business Man Colony",
  city: "Rahim Yar Khan",
  region: "Punjab",
  country: "Pakistan",
  phoneDisplay: "+92 327 2849737",
  phoneHref: "tel:+923272849737",
  hoursDisplay: "Fajr — 12:00 AM",
  hoursShort: "Fajr — 00:00",
  opens: "05:00",
  closes: "00:00",
  rating: "4.5",
  reviewCount: "21",
  mapsQuery: "Body Craft Gym, 35 Business Man Colony, Rahim Yar Khan, Punjab, Pakistan",
} as const;

/** Daily timing split by session — verified gym schedule. */
export const schedule = [
  { window: "Fajr — 10:00 AM", audience: "Males" },
  { window: "10:00 AM — 5:00 PM", audience: "Females" },
  { window: "5:00 PM — 12:00 AM", audience: "Males" },
] as const;

export const admissionFee = {
  amount: "PKR 10,000",
  note: "One-time admission fee, mandatory for all new members and separate from the membership plans.",
} as const;

export const lockers = [
  {
    title: "Free locker",
    price: "Included",
    detail: "Available for all members. Return the key after use.",
  },
  {
    title: "Private locker",
    price: "PKR 700 / month",
    detail: "Exclusive, personal use for storing personal items securely.",
  },
] as const;

export const perks = [
  { title: "Free parking", detail: "Available for all members." },
  {
    title: "Access to all equipment",
    detail: "Use all gym equipment during operational hours.",
  },
  {
    title: "Complimentary fitness assessment",
    detail: "Available for new members.",
  },
] as const;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  business.mapsQuery,
)}&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.mapsQuery,
)}`;

/** Official brand assets (served from this site). */
export const brandLogo = "/images/logo.jpeg";
export const heroVideo = "/video/hero.mp4";

/** Authentic Body Craft photography. */
export const gymImages = {
  hero: "/images/gym/hero.jpg",
  interior01: "/images/gym/interior-01.jpg",
  interior02: "/images/gym/interior-02.jpg",
  equipment: "/images/gym/equipment.jpg",
  training: "/images/gym/training.jpg",
  detail: "/images/gym/detail.jpg",
} as const;

/** Gym experience gallery — authentic photography, in order. */
export const galleryImages = [
  "/images/gym/hero.jpg",
  "/images/gym/training.jpg",
  "/images/gym/interior-01.jpg",
  "/images/gym/equipment.jpg",
] as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "The Gym", href: "#the-gym" },
  { label: "Training", href: "#training" },
  { label: "Membership", href: "#membership" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials: { label: string; href: string }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bodycraftgymryk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  { label: "Facebook", href: "https://www.facebook.com/bodycraftgymryk/" },
  { label: "TikTok", href: "https://www.tiktok.com/@bodycraftgymryk" },
  { label: "YouTube", href: "https://www.youtube.com/@bodycraftgymryk" },
];
