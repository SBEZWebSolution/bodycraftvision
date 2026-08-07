import { business, navLinks, socials } from "@/lib/site";
import { BrandMark } from "../BrandMark";
import { Reveal } from "../Reveal";

export function SiteFooter() {
  const activeSocials = socials.filter((s) => s.href);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-(--container-editorial) px-6 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandMark variant="stacked" className="text-6xl sm:text-7xl" />
            <p className="eyebrow mt-6">
              {business.city} · {business.country}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-slide text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={business.phoneHref} className="link-slide hover:text-foreground">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                {business.street}, {business.city}
              </li>
              <li>{business.hoursDisplay} — daily</li>
            </ul>

            <p className="eyebrow mt-8 mb-4">Social</p>
            {activeSocials.length > 0 ? (
              <ul className="flex gap-6 text-sm">
                {activeSocials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-slide text-muted-foreground hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                Instagram and Facebook links are pending verification — add the official URLs
                in <code className="text-accent">src/lib/site.ts</code> to activate them.
              </p>
            )}
          </div>
        </div>

        <Reveal className="mt-20 overflow-hidden border-t border-border pt-10">
          <p className="display text-[15vw] leading-[0.85] md:text-[10vw]">
            Build your <span className="text-accent">best.</span>
          </p>
        </Reveal>

        <div className="flex flex-col gap-2 py-8 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Body Craft · Rahim Yar Khan</p>
          <p>Premium gym & fitness centre</p>
        </div>
      </div>
    </footer>
  );
}
