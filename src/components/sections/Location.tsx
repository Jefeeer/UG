import { Navigation, Phone } from "lucide-react";
import { site } from "@/content/site";
import { HoursTable } from "@/components/ui/HoursTable";
import { LiveStatus } from "@/components/ui/LiveStatus";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Location() {
  const { lat, lng } = site.geo;
  return (
    <section id="location" data-level="B7" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <p aria-hidden className="outline-word absolute -left-[3vw] bottom-0 text-[30vw] lg:text-[20vw]">
        DASMA
      </p>
      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-concrete lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <iframe
              title="Map to Underground Fitness, Dasmariñas"
              src={`https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(.92)_contrast(.9)]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHead level="B7" kicker="Find us" title="Volet’s Building, Aguinaldo Highway.">
            <address className="not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
          </SectionHead>

          <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={site.directionsUrl} target="_blank" rel="noopener" className="btn btn-solid">
              <Navigation className="size-4" aria-hidden /> Google Maps
            </a>
            <a href={site.wazeUrl} target="_blank" rel="noopener" className="btn">
              Open in Waze
            </a>
            <a href={site.phone.href} className="btn sm:col-span-2">
              <Phone className="size-4" aria-hidden /> {site.phone.display}
            </a>
          </Reveal>

          <Reveal className="mt-10 border border-white/10 bg-ink/80 p-5">
            <LiveStatus />
            <div className="mt-5 border-t border-white/10">
              <HoursTable />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
