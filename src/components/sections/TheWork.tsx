import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useReducedMotion } from "motion/react";
import { gymImages } from "@/lib/site";

const steps = [
  { word: "Show up.", src: gymImages.interior02 },
  { word: "Push harder.", src: gymImages.training },
  { word: "Stay consistent.", src: gymImages.interior01 },
  { word: "Get stronger.", src: gymImages.detail },
];

/** "THE WORK" — typography and photography change together as you scroll. */
export function TheWork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive(i);
  });

  return (
    <section aria-label="The Work" ref={ref} className="relative h-[400vh]">
      <div className="grain sticky top-0 flex h-[100svh] items-end overflow-hidden">
        {steps.map((s, i) => (
          <motion.img
            key={s.word}
            src={s.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            animate={{
              opacity: active === i ? 1 : 0,
              scale: reduce ? 1 : active === i ? 1 : 1.08,
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 cine-veil" />

        <div className="relative mx-auto w-full max-w-(--container-editorial) px-6 pb-20 md:px-10 md:pb-28">
          <p className="eyebrow mb-10">The Work</p>

          <ul className="space-y-1 md:space-y-2">
            {steps.map((s, i) => (
              <li key={s.word} className="overflow-hidden">
                <motion.span
                  className="display block text-[13vw] leading-[0.88] md:text-[8.5vw]"
                  animate={{
                    opacity: active === i ? 1 : 0.16,
                    x: reduce ? 0 : active === i ? 0 : -14,
                    color:
                      active === i
                        ? "var(--accent)"
                        : "var(--foreground)",
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s.word}
                </motion.span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex gap-2" aria-hidden="true">
            {steps.map((s, i) => (
              <span
                key={s.word}
                className={`h-px flex-1 transition-colors duration-700 ${
                  active >= i ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
