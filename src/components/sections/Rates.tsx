import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Todo } from "@/components/ui/Todo";

export function Rates() {
  return (
    <section id="rates" data-level="B3" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          level="B3"
          kicker="Rates"
          title={
            <>
              The scoreboard.
              <br />
              Priced for lifters.
            </>
          }
        >
          Pay per session or commit for the month. Students get a break.
        </SectionHead>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {site.rates.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={i * 0.07} className="flex h-full flex-col border border-white/10 bg-[#070708] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/.05)]">
                <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-iron">
                  <span>{r.name}</span>
                  <span aria-hidden>0{i + 1}</span>
                </div>
                <div className="mt-8 flex items-baseline gap-2 border-y border-white/5 bg-black/60 px-4 py-5">
                  {r.price === null ? (
                    <>
                      <span className="led text-4xl">ASK</span>
                      <Todo>price</Todo>
                    </>
                  ) : (
                    <span className="led text-4xl">₱{r.price.toLocaleString("en-PH")}</span>
                  )}
                </div>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-iron">{r.unit}</p>
                <p className="mb-8 mt-6 text-[0.95rem] text-chalk/85">{r.note}</p>
                <a
                  href={site.messengerUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn mt-auto w-full border-white/20"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {r.price === null ? "Get today’s rate" : "Sign up"}
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-iron">Rates may change. Message us to confirm.</p>
      </div>
    </section>
  );
}
