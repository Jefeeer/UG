import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const tiles = [
  { src: "/photos/ug-sign.jpg", alt: "The lit UG sign on a black concrete wall above stacked plyo boxes", span: "md:col-span-7 aspect-[4/3]", pos: "30%" },
  { src: "/photos/bench-row.jpg", alt: "Flat benches lined up in front of a mirrored wall, dumbbells to the left", span: "md:col-span-5 aspect-[4/5] md:aspect-auto", pos: "45%" },
  { src: "/photos/turf.jpg", alt: "Artificial turf lane under spotlights with bumper plates and a heavy bag", span: "md:col-span-5 aspect-[4/3]", pos: "50%" },
  { src: "/photos/racks.jpg", alt: "Squat stands and a deadlift platform with a landmine attachment", span: "md:col-span-7 aspect-[16/10] md:aspect-auto", pos: "50%" },
];

export function Culture() {
  return (
    <section id="culture" data-level="B5" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHead
            level="B5"
            kicker="The culture"
            title={
              <>
                {site.years} years.
                <br />
                Still underground.
              </>
            }
          >
            Squat comps, deadlift comps, powerlifting and boxing. The UG Champs wall keeps growing.
          </SectionHead>
          <Reveal>
            <a href={site.instagramUrl} target="_blank" rel="noopener" className="btn shrink-0">
              Follow {site.instagramHandle} <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="From their Instagram highlights">
          {site.culture.map((c) => (
            <li key={c} className="border border-white/15 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-chalk/80">
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-3 md:grid-cols-12 md:grid-rows-[auto_auto]">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={(i % 2) * 0.08} className={`group relative ${t.span}`}>
              <Photo
                src={t.src}
                alt={t.alt}
                sizes="(min-width: 768px) 58vw, 100vw"
                position={t.pos}
                className="absolute inset-0"
                imgClassName="grade group-hover:scale-[1.03]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
