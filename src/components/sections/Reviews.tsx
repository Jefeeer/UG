import { ArrowUpRight, Star } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";

export function Reviews() {
  const { value, count } = site.rating;
  return (
    <section id="reviews" data-level="B6" className="border-y border-white/10 bg-concrete px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
        <div>
          <SectionHead level="B6" kicker="Word on the floor" title="What Dasma says." />
          <Reveal className="mt-10 border border-white/10 bg-ink p-6">
            <div className="flex items-end gap-4">
              <span className="led text-6xl leading-none">{value.toFixed(1)}</span>
              <span className="pb-1 text-xs uppercase tracking-[0.2em] text-iron">out of 5 on Google</span>
            </div>
            <div className="mt-4 flex gap-1" role="img" aria-label={`${value} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  aria-hidden
                  className={`size-5 ${i < Math.round(value) ? "fill-gold text-gold" : "text-iron"}`}
                />
              ))}
            </div>
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-chalk underline-offset-4 hover:text-gold hover:underline"
            >
              Read all {count} reviews <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Reveal>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-iron">
            What members keep saying <span className="normal-case tracking-normal">(paraphrased from Google reviews)</span>
            {site.testimonials.length === 0 && <Todo>real quotes with permission</Todo>}
          </p>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {site.reviewThemes.map((t, i) => (
              <li key={t}>
                <Reveal delay={i * 0.08} className="flex gap-6 py-7">
                  <span className="wide text-3xl font-black italic leading-none text-gold" aria-hidden>
                    “
                  </span>
                  <p className="wide text-lg font-bold uppercase italic leading-snug sm:text-xl">{t}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Owning the one complaint that matters. */}
          <Reveal className="mt-8 flex flex-col gap-4 border border-dashed border-white/20 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.95rem] text-chalk/85">
              <span className="font-bold text-chalk">&ldquo;Not beginner-friendly.&rdquo;</span> We heard that one too.
            </p>
            <a href="#first-time" className="btn shrink-0 min-h-10 py-2">
              Read the first-timer guide
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
