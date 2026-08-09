import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { business, gymImages } from "@/lib/site";
import { MagneticButton } from "../MagneticButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY, scale: imgScale }}
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, delay: 1.1, ease: EASE }}
      >
        <video
          src={heroVideo}
          poster={gymImages.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Training floor footage at Body Craft gym in Rahim Yar Khan"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 cine-veil" />
      </motion.div>


      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-(--container-editorial) px-6 pb-16 md:px-10 md:pb-20"
      >
        <motion.p
          className="eyebrow mb-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="inline-block h-px w-10 bg-accent" aria-hidden="true" />
          Rahim Yar Khan · Pakistan
        </motion.p>

        <h1 className="display text-[19vw] leading-[0.82] sm:text-[16vw] lg:text-[13vw]">
          {["Build your", "strongest self."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? "text-accent" : ""}`}
                initial={reduce ? { opacity: 0 } : { y: "108%" }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.3, delay: 1.25 + i * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-10 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: EASE }}
        >
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="#membership">Join Body Craft</MagneticButton>
            <MagneticButton href="#the-gym" variant="ghost">
              Explore the Gym
            </MagneticButton>
          </div>

          <dl className="flex gap-10">
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd className="display mt-2 text-2xl">{business.hoursShort}</dd>
            </div>
            <div>
              <dt className="eyebrow">Open</dt>
              <dd className="display mt-2 text-2xl">Daily</dd>
            </div>
          </dl>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-6 bottom-6 hidden items-center gap-3 md:right-10 md:flex"
        style={{ opacity: fade }}
        aria-hidden="true"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-accent" />
        </motion.span>
      </motion.div>
    </section>
  );
}
