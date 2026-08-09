import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { galleryImages } from "@/lib/site";
import { Reveal } from "../Reveal";

const slides = [
  { n: "01", label: "Train", src: galleryImages[0], alt: "Dumbbell and weight plate racks on the Body Craft gym floor" },
  { n: "02", label: "Focus", src: galleryImages[1], alt: "Benches and resistance machines at Body Craft" },
  { n: "03", label: "Push", src: galleryImages[2], alt: "Bench press station and machines at Body Craft" },
  { n: "04", label: "Progress", src: galleryImages[3], alt: "Member locker wall at Body Craft" },
];


/** Pinned cinematic gallery: vertical scroll drives horizontal movement. */
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-74%"]);

  return (
    <section id="the-gym" className="relative">
      <div className="mx-auto max-w-(--container-editorial) px-6 pt-24 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">02 — The Gym</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            The Body Craft <span className="text-accent">experience</span>
          </h2>
        </Reveal>
      </div>

      {/* Desktop: pinned horizontal track */}
      <div ref={ref} className="hidden h-[320vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            className="flex gap-8 pl-10"
            style={reduce ? {} : { x }}
          >
            {slides.map((s) => (
              <figure key={s.n} className="group relative h-[68vh] w-[46vw] shrink-0 overflow-hidden">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="img-zoom h-full w-full object-cover"
                  data-cursor="View"
                />
                <div className="absolute inset-0 bg-background/25" />
                <figcaption className="absolute bottom-0 left-0 flex w-full items-end justify-between p-7">
                  <span className="display text-4xl">
                    <span className="text-accent">{s.n}</span> / {s.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: touch-friendly snap rail */}
      <div className="md:hidden">
        <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
          {slides.map((s) => (
            <li key={s.n} className="relative h-[62vh] w-[78vw] shrink-0 snap-center overflow-hidden">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/25" />
              <span className="display absolute bottom-5 left-5 text-3xl">
                <span className="text-accent">{s.n}</span> / {s.label}
              </span>
            </li>
          ))}
        </ul>
        <p className="eyebrow px-6">Swipe →</p>
      </div>
    </section>
  );
}
