import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandMark } from "./BrandMark";

/** Cinematic first-load curtain that animates the wordmark itself. */
export function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 200 : 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="h-8 md:h-10"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.14em" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandMark className="text-2xl md:text-3xl" />
          </motion.div>
          <motion.span
            className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 bg-border-strong"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 1.4, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
