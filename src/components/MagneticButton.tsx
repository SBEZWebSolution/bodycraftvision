import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
};

/** Magnetic CTA — directional pull toward the cursor. */
export function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    ref.current.style.transform = `translate3d(${dx * 10}px, ${dy * 7}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.7rem] font-medium tracking-[0.24em] uppercase transition-colors duration-500 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-accent"
      : "border border-border-strong text-foreground hover:border-accent hover:text-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`${base} ${styles} ${className}`}
      style={{ transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), background-color 0.5s, color 0.5s, border-color 0.5s" }}
    >
      {children}
    </motion.a>
  );
}
