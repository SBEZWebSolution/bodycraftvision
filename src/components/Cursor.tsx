import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/** Refined desktop-only cursor. Elements can set data-cursor="View" etc. */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.35 });

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset["cursor"] ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled || reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-accent/70 bg-accent/10 backdrop-blur-[2px]"
        animate={{
          width: label ? 76 : 14,
          height: label ? 76 : 14,
          opacity: visible ? 1 : 0,
          x: label ? -38 : -7,
          y: label ? -38 : -7,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {label && (
          <span className="eyebrow text-[0.5rem] text-foreground">{label}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
