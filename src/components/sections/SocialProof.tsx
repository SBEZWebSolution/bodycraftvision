import { Star } from "lucide-react";
import { business, mapsLink } from "@/lib/site";
import { Reveal } from "../Reveal";

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-(--container-editorial) gap-12 px-6 py-24 md:grid-cols-2 md:items-end md:px-10 md:py-32">
        <div>
          <Reveal>
            <p className="eyebrow mb-8">Members' experience</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="display flex items-baseline gap-4 text-[22vw] leading-none md:text-[12vw]">
              {business.rating}
              <span className="text-3xl text-muted-foreground md:text-5xl">/ 5</span>
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-6 flex items-center gap-3">
            <span className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < 4 ? "fill-accent text-accent" : "text-border-strong"}`}
                />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              {business.reviewCount}+ Google reviews
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:pb-6">
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Rated by the people who actually train here. Individual reviews aren't reproduced
            on this page — read them in full, first-hand, on Google.
          </p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="link-slide mt-8 inline-block text-[0.7rem] font-medium tracking-[0.24em] text-accent uppercase"
          >
            Read the reviews on Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
