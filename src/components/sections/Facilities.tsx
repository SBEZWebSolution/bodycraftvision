import {
  admissionFee,
  lockers,
  perks,
  schedule,
  business,
  gymImages,
} from "@/lib/site";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

export function Facilities() {
  return (
    <section id="facilities" className="grain relative overflow-hidden border-t border-border">
      <img
        src={gymImages.detail}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="absolute inset-0 cine-veil" />

      <div className="relative mx-auto max-w-(--container-editorial) px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-8">06 — Fees & Facilities</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            What you get, <span className="text-accent">clearly stated.</span>
          </h2>
        </Reveal>

        {/* Admission fee */}
        <Reveal delay={0.1} className="mt-16">
          <div className="border border-border-strong bg-surface/60 p-8 backdrop-blur-sm md:p-12">
            <p className="eyebrow">Admission Fee</p>
            <p className="display mt-5 text-6xl md:text-7xl">
              <span className="text-accent">{admissionFee.amount}</span>
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {admissionFee.note}
            </p>
          </div>
        </Reveal>

        {/* Lockers */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow mb-8">Locker Facility</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {lockers.map((l, i) => (
              <Reveal key={l.title} delay={0.05 * i}>
                <div className="h-full bg-background p-8 md:p-10">
                  <h3 className="display text-3xl">{l.title}</h3>
                  <p className="eyebrow mt-3 text-accent">{l.price}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{l.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow mb-8">Benefits & Perks</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full bg-background p-8 md:p-10">
                  <span className="display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-4 text-2xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timings */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow mb-8">Daily Timings</p>
          </Reveal>
          <ul className="border-t border-border">
            {schedule.map((s, i) => (
              <Reveal key={s.window} delay={0.05 * i}>
                <li className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6">
                  <span className="display text-3xl md:text-4xl">{s.window}</span>
                  <span className="eyebrow text-accent">{s.audience}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-3">
          <MagneticButton href={business.phoneHref}>Call {business.phoneDisplay}</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
