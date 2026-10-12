import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { BarLoader } from "@/components/ui/BarLoader";

const groups = [
  {
    title: "Bring",
    items: ["Training shoes", "A towel", "Water", "School ID if you’re taking the student rate"],
  },
  {
    title: "When you walk in",
    items: [
      "Tell the front desk it’s your first time. Pay a walk-in or sign up.",
      "Lost on the floor? Ask a coach. Nobody was born knowing where the hack squat is.",
      "Start light. The plates will still be here tomorrow.",
    ],
  },
  {
    title: "House rules",
    items: [
      "Re-rack your plates. Every time.",
      "Wipe down your bench.",
      "Share the rack between sets.",
      "Don’t curl in the squat rack.",
    ],
  },
];

const tape = "Caution · Beginners welcome · ";

export function FirstTimers() {
  return (
    <>
      <div aria-hidden className="relative z-10 -my-3 overflow-hidden py-3">
        <div className="-rotate-2 scale-105 border-y-4 border-ink bg-gold py-2.5 text-ink">
          <div className="marquee flex w-max [animation-direction:reverse] [animation-duration:40s]">
            {Array.from({ length: 2 }, (_, k) => (
              <span key={k} className="wide whitespace-nowrap text-sm font-black uppercase italic tracking-wide">
                {tape.repeat(8)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="first-time" data-level="B4" className="relative bg-concrete px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-20">
          <div>
            <SectionHead
              level="B4"
              kicker="First time here?"
              title={
                <>
                  Everyone started
                  <br />
                  with the bar.
                </>
              }
            >
              Heard we&rsquo;re hardcore? We are, about the training, not about you. Here&rsquo;s everything you need
              for day one.
            </SectionHead>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              {groups.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.08} className={i === 2 ? "sm:col-span-2" : ""}>
                  <h3 className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold">
                    <span className="h-[3px] w-6 bg-gold" aria-hidden />
                    {g.title}
                  </h3>
                  <ul className={`mt-4 grid gap-3 ${i === 2 ? "sm:grid-cols-2" : ""}`}>
                    {g.items.map((it) => (
                      <li key={it} className="border-l border-white/15 pl-4 text-[0.95rem] leading-relaxed text-chalk/85">
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <BarLoader />
          </Reveal>
        </div>
      </section>
    </>
  );
}
