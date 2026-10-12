import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Most iron in Dasma",
    body: "Members call it one of the largest equipment selections in the area. Racks, platforms, plate-loaded machines, cable stacks and a dumbbell wall.",
  },
  {
    title: "Lifter-friendly prices",
    body: "“Affordable” is the word that keeps coming up in reviews. Serious equipment shouldn’t need a serious budget.",
  },
  {
    title: "A real training culture",
    body: "Squat and deadlift comps, powerlifting, boxing. People come here to train, and it shows on the floor.",
  },
  {
    title: "Right on Aguinaldo",
    body: `${site.address.line1}. Open early, open late: 6AM to 11PM.`,
  },
];

export function WhyUs() {
  return (
    <section id="why" data-level="B1" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <p aria-hidden className="outline-word absolute -right-[4vw] top-10 text-[28vw] lg:text-[22vw]">
        IRON
      </p>
      <div className="relative mx-auto max-w-[1400px]">
        <SectionHead
          level="B1"
          kicker="Why Underground"
          title={
            <>
              No smoothie bar.
              <br />
              Just iron.
            </>
          }
        >
          A no-frills strength gym built for people who train. {site.years} years in, still loading plates.
        </SectionHead>

        <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li key={r.title} className="bg-ink">
              <Reveal delay={i * 0.08} className="group relative flex h-full flex-col p-7 sm:p-8">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[var(--ease-plate)] group-hover:scale-x-100"
                />
                <span className="led text-3xl" aria-hidden>
                  0{i + 1}
                </span>
                <h3 className="wide mt-10 text-lg font-extrabold uppercase italic leading-tight">{r.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-iron">{r.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
