import { business, mapsEmbedSrc, mapsLink } from "@/lib/site";
import { Reveal } from "../Reveal";

export function LocationSection() {
  return (
    <section id="contact" className="mx-auto max-w-(--container-editorial) px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow mb-10">06 — Find us</p>
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="display text-5xl sm:text-6xl">
            Body <span className="text-accent">Craft</span>
          </h2>
          <address className="mt-8 space-y-1 text-lg not-italic">
            <p>{business.street}</p>
            <p>
              {business.city}, {business.region}
            </p>
            <p className="text-muted-foreground">{business.country}</p>
          </address>

          <dl className="mt-12 space-y-6">
            <div className="border-t border-border pt-5">
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2">
                <a href={business.phoneHref} className="link-slide display text-2xl">
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-5">
              <dt className="eyebrow">Hours</dt>
              <dd className="display mt-2 text-2xl">{business.hoursDisplay}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">Open daily</dd>
            </div>
          </dl>

          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="link-slide mt-10 inline-block text-[0.7rem] font-medium tracking-[0.24em] text-accent uppercase"
          >
            Get directions
          </a>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative aspect-4/3 w-full overflow-hidden border border-border grayscale-[0.9] transition-all duration-700 hover:grayscale-0 lg:aspect-16/11">
            <iframe
              src={mapsEmbedSrc}
              title={`Map showing Body Craft gym at ${business.street}, ${business.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 opacity-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
