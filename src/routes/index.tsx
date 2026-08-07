import { createFileRoute } from "@tanstack/react-router";
import { business, mapsLink } from "@/lib/site";
import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Experience } from "@/components/sections/Experience";
import { TheWork } from "@/components/sections/TheWork";
import { Training } from "@/components/sections/Training";
import { WordmarkScene } from "@/components/sections/WordmarkScene";
import { Principles } from "@/components/sections/Principles";
import { SocialProof } from "@/components/sections/SocialProof";
import { Membership } from "@/components/sections/Membership";
import { LocationSection } from "@/components/sections/LocationSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

const TITLE = "Body Craft Gym Rahim Yar Khan | Premium Fitness Centre";
const DESCRIPTION =
  "Body Craft is a premium gym in Business Man Colony, Rahim Yar Khan — open 6:00 AM to 12:00 AM daily. Rated 4.5/5. Call +92 327 2849737 for membership.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Body Craft Gym Rahim Yar Khan, gym in Rahim Yar Khan, fitness gym Rahim Yar Khan, Body Craft RYK, gym near Business Man Colony, fitness center Rahim Yar Khan",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          additionalType: "https://schema.org/ExerciseGym",
          name: business.name,
          description: DESCRIPTION,
          telephone: business.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.street,
            addressLocality: business.city,
            addressRegion: business.region,
            addressCountry: "PK",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: business.opens,
            closes: business.closes,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            reviewCount: business.reviewCount,
            bestRating: "5",
          },
          hasMap: mapsLink,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="no-cursor relative">
      <Loader />
      <Cursor />
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <TheWork />
        <Training />
        <WordmarkScene />
        <Principles />
        <SocialProof />
        <Membership />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
