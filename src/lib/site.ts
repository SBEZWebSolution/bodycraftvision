/**
 * BODY CRAFT — single source of truth for verified business data & imagery.
 * Only verified facts live here. Do not add claims that cannot be sourced.
 */

export const business = {
  name: "Body Craft",
  type: "Premium Gym / Fitness Center",
  street: "35 Business Man Colony",
  city: "Rahim Yar Khan",
  region: "Punjab",
  country: "Pakistan",
  phoneDisplay: "+92 327 2849737",
  phoneHref: "tel:+923272849737",
  hoursDisplay: "06:00 AM — 12:00 AM",
  hoursShort: "06:00 — 00:00",
  opens: "06:00",
  closes: "00:00",
  rating: "4.5",
  reviewCount: "21",
  mapsQuery: "Body Craft Gym, 35 Business Man Colony, Rahim Yar Khan, Punjab, Pakistan",
} as const;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  business.mapsQuery,
)}&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.mapsQuery,
)}`;

/**
 * IMAGE SYSTEM — replace these files in /public/images/gym/ to swap in
 * authentic Body Craft photography. Filenames and aspect ratios are all that
 * matter; no component references an image path directly.
 */
export const gymImages = {
  hero: "/images/gym/hero.jpg",
  interior01: "/images/gym/interior-01.jpg",
  interior02: "/images/gym/interior-02.jpg",
  equipment: "/images/gym/equipment.jpg",
  training: "/images/gym/training.jpg",
  detail: "/images/gym/detail.jpg",
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "The Gym", href: "#the-gym" },
  { label: "Training", href: "#training" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Social profiles are intentionally empty: the official Body Craft
 * Rahim Yar Khan Instagram/Facebook URLs were not verifiable. Paste the real
 * URLs here and the footer links activate automatically.
 */
export const socials: { label: string; href: string }[] = [
  { label: "Instagram", href: "" },
  { label: "Facebook", href: "" },
];
