import { ArrowDown, MessageCircle, Navigation, Star } from "lucide-react";
import { site } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { LiveStatus } from "@/components/ui/LiveStatus";

const Corner = ({ className }: { className: string }) => (
  <span aria-hidden className={`absolute size-5 border-chalk/50 ${className}`} />
);

export function Hero() {
  return (
    <section id="top" data-level="G" className="relative isolate flex min-h-[640px] h-[100svh] flex-col overflow-hidden">
      {/* The room is dark until the tubes catch. */}
      <div className="lights-on absolute inset-0 -z-10">
        <Photo
          src="/photos/led-benches.jpg"
          alt="Underground Fitness at night: rows of adjustable benches and a dumbbell rack under rectangular LED ceiling lights"
          sizes="100vw"
          priority
          position="58%"
          className="h-full w-full"
          imgClassName="[filter:grayscale(.55)_contrast(1.12)_brightness(.9)]"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_10_11/.55)_0%,transparent_28%,transparent_45%,rgb(10_10_11/.92)_82%,#0a0a0b_100%),radial-gradient(120%_80%_at_70%_20%,transparent_40%,rgb(10_10_11/.6)_100%)]"
      />

      {/* Viewfinder */}
      <div aria-hidden className="pointer-events-none absolute inset-x-4 top-20 bottom-4 sm:inset-x-8 sm:bottom-8">
        <Corner className="left-0 top-0 border-l border-t" />
        <Corner className="right-0 top-0 border-r border-t" />
        <Corner className="bottom-0 left-0 border-b border-l" />
        <Corner className="bottom-0 right-0 border-b border-r" />
        <p className="condensed absolute right-4 top-3 hidden text-[0.68rem] uppercase tracking-[0.25em] text-chalk/60 sm:block">
          {site.geo.lat.toFixed(4)}° N · {site.geo.lng.toFixed(4)}° E
        </p>
      </div>

      <div className="relative mx-auto mt-auto grid w-full max-w-[1600px] gap-10 px-7 pb-14 sm:px-12 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
        <div className="max-w-xl">
          <p className="rise flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-chalk/70 [animation-delay:1.2s]">
            <span className="h-px w-8 bg-gold" aria-hidden />
            Iron gym · Dasmariñas, Cavite
          </p>
          <h1 className="rise wide mt-5 text-xl font-extrabold uppercase italic leading-[1.15] tracking-tight text-balance [animation-delay:1.35s] sm:text-2xl lg:text-[1.75rem]">
            The first world&#8209;class <span className="text-gold">iron gym</span> in the Philippines.
          </h1>
          <p className="rise mt-4 max-w-md text-[0.95rem] leading-relaxed text-chalk/75 [animation-delay:1.5s]">
            {site.years} years on Aguinaldo Highway. Racks, platforms, plate-loaded steel and a
            dumbbell wall that doesn&rsquo;t end — at a price that makes sense.
          </p>
          <div className="rise mt-7 flex flex-col gap-3 [animation-delay:1.65s] sm:flex-row">
            <a href={site.messengerUrl} target="_blank" rel="noopener" className="btn btn-solid">
              <MessageCircle className="size-4" aria-hidden /> Message us on Messenger
            </a>
            <a href={site.directionsUrl} target="_blank" rel="noopener" className="btn">
              <Navigation className="size-4" aria-hidden /> Get directions
            </a>
          </div>
        </div>

        <aside
          aria-label="Status"
          className="rise border border-white/10 bg-ink/55 p-5 backdrop-blur-md [animation-delay:1.8s]"
        >
          <LiveStatus />
          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener"
            className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-iron transition-colors hover:text-chalk"
          >
            <span className="flex items-center gap-2">
              <Star className="size-3.5 fill-gold text-gold" aria-hidden />
              <span>
                <b className="text-chalk">{site.rating.value}</b> on Google
              </span>
            </span>
            <span>{site.rating.count} reviews →</span>
          </a>
        </aside>
      </div>

      <a
        href="#why"
        className="rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-chalk/60 [animation-delay:2.2s] lg:flex"
      >
        Descend
        <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
