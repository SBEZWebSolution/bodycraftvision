import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/** Clip-path image reveal with subtle scale settle. */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(14% 8% 14% 8%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 1.3, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={reduce ? { scale: 1 } : { scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -6% 0px" }}
        transition={{ duration: 1.6, ease: EASE }}
      />
    </motion.div>
  );
}

/** Word-by-word stagger for display headlines. */
export function StaggerWords({
  lines,
  className = "",
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    // The observer must sit on the un-clipped wrapper: a child translated out
    // of an overflow-hidden parent never intersects the viewport.
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "105%" },
              show: { y: "0%", opacity: 1 },
            }}
            transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
