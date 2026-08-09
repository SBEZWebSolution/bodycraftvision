import { gymImages } from "@/lib/site";
import { Reveal, RevealImage } from "../Reveal";

export function Training() {
  return (
    <section id="training" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-(--container-editorial) px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">03 — Training</p>
        </Reveal>

        <div className="relative">
          <RevealImage
            src={gymImages.equipment}
            alt="PUSH YOUR LIMITS mural on the Body Craft gym floor"
            width={1400}
            height={1000}
            className="aspect-16/10 w-full md:aspect-21/9"
            imgClassName="brightness-90"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="display px-6 text-center text-[11vw] leading-[0.85] md:text-[8vw]">
              Train with
              <br />
              <span className="text-accent">purpose.</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-14">
          {[
            {
              t: "Built for focused training",
              d: "Free weights, benches and machines arranged so a session moves without waiting around.",
            },
            {
              t: "Designed for consistency",
              d: "Eighteen hours a day, every day. Early shift or late shift, the floor is open.",
            },
            {
              t: "Guidance on request",
              d: "Ask the team on the floor about training support — details available at the gym.",
            },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 0.08}>
              <h3 className="display text-2xl md:text-3xl">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
