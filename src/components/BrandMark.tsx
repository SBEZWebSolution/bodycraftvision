/**
 * BrandMark — renders the official Body Craft logo when present.
 * Set LOGO_SRC to "/assets/body-craft-logo.svg" after adding the real file.
 * See /public/assets/README-LOGO.txt
 */
const LOGO_SRC: string | null = null;

type Props = {
  className?: string;
  /** stacked = two-line lockup (hero / footer), inline = single line (nav) */
  variant?: "inline" | "stacked";
};

export function BrandMark({ className = "", variant = "inline" }: Props) {
  if (LOGO_SRC) {
    return (
      <img
        src={LOGO_SRC}
        alt="Body Craft gym logo"
        className={`h-full w-auto object-contain ${className}`}
      />
    );
  }

  if (variant === "stacked") {
    return (
      <span className={`display block ${className}`} aria-label="Body Craft">
        <span className="block">Body</span>
        <span className="block text-accent">Craft</span>
      </span>
    );
  }

  return (
    <span
      className={`display flex items-baseline gap-[0.3em] text-xl leading-none tracking-[0.14em] ${className}`}
      aria-label="Body Craft"
    >
      Body<span className="text-accent">Craft</span>
    </span>
  );
}
