"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site, type Zone } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { PlateBadge } from "@/components/ui/PlateBadge";
import { SectionHead } from "@/components/ui/SectionHead";

function ZoneCard({ zone, index, wide }: { zone: Zone; index: number; wide: boolean }) {
  // Flashlight: the cursor lights the photo in colour; the rest of the room stays dark.
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <article
      onPointerMove={onMove}
      className={`group relative w-full shrink-0 ${wide ? "!w-[min(56vw,860px,calc((100vh-260px)*1.6))]" : ""}`}
    >
      <div className="relative">
        <Photo src={zone.photo} alt={zone.alt} sizes="(min-width: 1024px) 56vw, 100vw" className="aspect-[16/10] w-full" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-ink/75 opacity-0 transition-opacity duration-500 [mask-image:radial-gradient(circle_220px_at_var(--x,50%)_var(--y,50%),transparent_0,#000_100%)] [@media(hover:hover)]:group-hover:opacity-100"
        />
        <PlateBadge kg={zone.plate} className="absolute right-4 top-4 sm:right-6 sm:top-6" />
        <span className="condensed absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.3em] text-chalk/70">
          Zone {String(index + 1).padStart(2, "0")} / {String(site.zones.length).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
        <h3 className="wide text-xl font-extrabold uppercase italic leading-tight sm:text-2xl">{zone.name}</h3>
        <div>
          <p className="text-[0.95rem] leading-relaxed text-iron">{zone.body}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {zone.tags.map((t) => (
              <li key={t} className="border border-white/15 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-chalk/80">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Floor() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false); // horizontal layout: big screens, motion allowed
  const [dist, setDist] = useState(0);

  useEffect(() => {
    // Pin only where a full card fits on screen: wide and tall enough.
    const mq = matchMedia("(min-width: 1024px) and (min-height: 640px)");
    const update = () => setWide(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useEffect(() => {
    const el = track.current!;
    const measure = () => setDist(wide ? Math.max(0, el.scrollWidth - window.innerWidth) : 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [wide]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const pinned = wide && dist > 0;

  return (
    <section
      id="floor"
      data-level="B2"
      ref={section}
      className="relative border-t border-white/10 bg-concrete"
      style={pinned ? { height: `calc(100vh + ${dist}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-screen items-center overflow-hidden" : ""}>
        <motion.div
          ref={track}
          style={pinned ? { x } : undefined}
          className={`flex flex-col gap-16 px-5 py-24 sm:px-8 sm:py-32 ${
            wide ? "!w-max !flex-row !items-center !gap-[4vw] !px-[6vw] !py-0" : ""
          }`}
        >
          <div className={wide ? "w-[30rem] shrink-0" : ""}>
            <SectionHead
              level="B2"
              kicker="The Floor"
              title={
                <>
                  Four zones.
                  <br />
                  All iron.
                </>
              }
            >
              Walk the floor before you walk in.{" "}
              <span className="[@media(hover:none)]:hidden">Move your cursor over a photo to light it up.</span>
            </SectionHead>
            {pinned && (
              <p className="condensed mt-10 text-xs uppercase tracking-[0.3em] text-iron" aria-hidden>
                Keep scrolling →
              </p>
            )}
          </div>
          {site.zones.map((z, i) => (
            <ZoneCard key={z.name} zone={z} index={i} wide={wide} />
          ))}
        </motion.div>

        {pinned && (
          <motion.div aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gold" style={{ scaleX: scrollYProgress }} />
        )}
      </div>
    </section>
  );
}
