import { gymImages } from "@/lib/site";
import { Reveal, RevealImage, StaggerWords } from "../Reveal";

const pillars = ["Discipline", "Consistency", "Strength", "Community"];

export function Intro() {
  return (
    <section id="about" className="relative mx-auto max-w-(--container-editorial) px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-8">01 — About</p>
          </Reveal>
          <h2 className="display text-6xl sm:text-7xl lg:text-8xl">
            <StaggerWords lines={["More than", "a gym."]} />
          </h2>
          <Reveal delay={0.1} className="mt-10 max-w-md space-y-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              Body Craft is a training floor in Business Man Colony, Rahim Yar Khan — built
              for people who come back. No spectacle, no shortcuts. Weights, space, and the
              hours you need.
            </p>
            <p>
              Doors open at six in the morning and stay open until midnight, because progress
              rarely fits a schedule.
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 gap-x-6">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p} delay={0.12 + i * 0.07} className="border-t border-border py-5">
                <span className="display text-2xl md:text-3xl">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-8">
          <RevealImage
            src={gymImages.interior01}
            alt="PUSH YOUR LIMITS mural on the Body Craft gym floor"
            width={1200}
            height={1500}
            className="aspect-3/4 w-full"
            imgClassName="img-zoom"
          />
          <Reveal delay={0.2} className="mt-6 flex items-start justify-between gap-6 border-t border-border pt-5">
            <p className="eyebrow max-w-[16rem] leading-relaxed">
              The floor, as it is — no staging
            </p>
            <p className="eyebrow">RYK / PK</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
