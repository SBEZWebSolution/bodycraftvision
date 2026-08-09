import { brandLogo } from "@/lib/site";

type Props = {
  className?: string;
  /** stacked = two-line lockup (hero / footer), inline = single line (nav) */
  variant?: "inline" | "stacked";
  /** show the circular logo mark next to the wordmark */
  mark?: boolean;
};

/** Wordmark styling mirrors the official logo: heavy, wide, uppercase sans. */
export function BrandMark({ className = "", variant = "inline", mark = true }: Props) {
  const word = (
    <span
      className={
        variant === "stacked"
          ? "block font-sans font-extrabold uppercase leading-[0.95] tracking-[0.06em]"
          : "font-sans font-extrabold uppercase leading-none tracking-[0.18em]"
      }
    >
      Body <span className="text-accent">Craft</span>
    </span>
  );

  return (
    <span
      className={`flex items-center gap-3 ${variant === "stacked" ? "flex-col items-start gap-4" : ""} ${className}`}
      aria-label="Body Craft"
    >
      {mark && (
        <img
          src={brandLogo}
          alt="Body Craft gym logo"
          className={`shrink-0 rounded-full object-contain ${
            variant === "stacked" ? "size-20" : "size-9 md:size-10"
          }`}
          loading="eager"
          decoding="async"
        />
      )}
      {word}
    </span>
  );
}
