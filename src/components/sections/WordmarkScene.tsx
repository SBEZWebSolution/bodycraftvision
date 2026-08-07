import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { gymImages } from "@/lib/site";

const frames = [gymImages.interior01, gymImages.equipment, gymImages.training];

/** Signature moment: giant wordmark behind a sliding sequence of gym images. */
export function WordmarkScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });

  const wordX = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const railX = useTransform(scrollYProgress, [0, 1], ["28%", "-34%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const veil = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.35, 0.85]);

  return (
    <section aria-hidden="true" ref={ref} className="relative h-[300vh]">
      <div className="grain sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-surface">
        <motion.span
          className="display absolute text-[26vw] whitespace-nowrap text-foreground/8 select-none"
          style={reduce ? {} : { x: wordX }}
        >
          Body Craft
        </motion.span>

        <motion.div
          className="relative flex gap-6 md:gap-10"
          style={reduce ? {} : { x: railX, scale }}
        >
          {frames.map((src, i) => (
            <div
              key={src}
              className={`h-[46vh] w-[62vw] shrink-0 overflow-hidden md:h-[56vh] md:w-[30vw] ${
                i === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-background"
          style={{ opacity: reduce ? 0.4 : veil }}
        />
      </div>
    </section>
  );
}
