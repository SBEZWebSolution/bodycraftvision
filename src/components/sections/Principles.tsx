import { Reveal } from "../Reveal";

const principles = [
  { n: "01", t: "Discipline", d: "Show up. Put in the work." },
  { n: "02", t: "Consistency", d: "The session you repeat is the one that counts." },
  { n: "03", t: "Strength", d: "Built slowly, kept for good." },
  { n: "04", t: "Progress", d: "Measured in weeks, not workouts." },
];

export function Principles() {
  return (
    <section className="mx-auto max-w-(--container-editorial) px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow mb-8">04 — Why Body Craft</p>
      </Reveal>

      <ul>
        {principles.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 0.06} className="group border-t border-border last:border-b">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 py-8 transition-colors duration-500 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:py-10">
              <span className="display text-2xl text-accent md:text-3xl">{p.n}</span>
              <h3 className="display text-5xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:text-6xl md:text-7xl">
                {p.t}
              </h3>
              <p className="col-span-2 max-w-xs text-sm leading-relaxed text-muted-foreground md:col-span-1 md:text-right">
                {p.d}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
