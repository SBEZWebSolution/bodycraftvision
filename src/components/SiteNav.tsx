import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { business, navLinks, gymImages } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto grid max-w-(--container-editorial) grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-10"
        >
          <a
            href="#top"
            className={`flex min-w-0 items-center transition-all duration-700 ${scrolled ? "py-4" : "py-6"}`}
          >
            <BrandMark className={scrolled ? "text-lg" : "text-xl"} />
            <span className="sr-only">Body Craft — home</span>
          </a>

          <div className="flex shrink-0 items-center gap-8">
            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-slide text-[0.68rem] font-medium tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#membership"
              className="hidden border border-border-strong px-6 py-3 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors duration-500 hover:border-accent hover:text-accent md:inline-block"
            >
              Join Now
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex items-center gap-3 py-4 text-[0.65rem] tracking-[0.24em] uppercase lg:hidden"
            >
              Menu <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 bg-background lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1] }}
          >
            <img
              src={gymImages.interior01}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 cine-veil" />

            <div className="relative flex h-full flex-col justify-between px-6 py-6">
              <div className="flex items-center justify-between">
                <BrandMark className="text-lg" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center gap-3 text-[0.65rem] tracking-[0.24em] uppercase"
                >
                  Close <X className="size-4" aria-hidden="true" />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {navLinks.map((l, i) => (
                  <li key={l.href} className="overflow-hidden">
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="display block text-5xl sm:text-6xl"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.25 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-sm tracking-[0.1em]"
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
                <p className="eyebrow">
                  {business.city} · {business.country} — {business.hoursShort}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
