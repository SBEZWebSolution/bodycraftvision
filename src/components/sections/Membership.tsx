import { business, gymImages } from "@/lib/site";
import { Reveal, StaggerWords } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

export function Membership() {
  return (
    <section id="membership" className="grain relative overflow-hidden">
      <img
        src={gymImages.detail}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 cine-veil" />

      <div className="relative mx-auto max-w-(--container-editorial) px-6 py-32 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow mb-10">05 — Membership</p>
        </Reveal>

        <h2 className="display max-w-4xl text-[12vw] leading-[0.88] md:text-[7.5vw]">
          <StaggerWords lines={["Ready to put", "in the work?"]} />
        </h2>

        <Reveal delay={0.15} className="mt-10 max-w-lg">
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            Your next level starts with showing up. Membership options and current rates are
            confirmed at the gym — call or walk in and the team will talk you through it.
          </p>
        </Reveal>

        <Reveal delay={0.22} className="mt-12 flex flex-wrap gap-3">
          <MagneticButton href={business.phoneHref}>Join Body Craft</MagneticButton>
          <MagneticButton href={business.phoneHref} variant="ghost">
            Call {business.phoneDisplay}
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.28} className="mt-16 border-t border-border pt-6">
          <p className="eyebrow">Contact for membership · No online sign-up required</p>
        </Reveal>
      </div>
    </section>
  );
}
