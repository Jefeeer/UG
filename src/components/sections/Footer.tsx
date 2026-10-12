"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";
import { Todo } from "@/components/ui/Todo";

const noop = () => () => {};

export function Footer() {
  // Client-only year: avoids reading the clock during static prerender.
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);
  const links = [
    { href: site.facebookUrl, label: "Facebook" },
    { href: site.instagramUrl, label: "Instagram" },
    { href: site.messengerUrl, label: "Messenger" },
  ];
  return (
    <footer className="border-t border-white/10 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark className="text-base" />
          <p className="mt-5 max-w-xs text-sm text-iron">{site.tagline}.</p>
        </div>
        <div className="text-sm leading-relaxed text-iron">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-chalk">Visit</p>
          <address className="not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <a href={site.phone.href} className="mt-2 inline-block hover:text-chalk">
            {site.phone.display}
          </a>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-chalk">Follow</p>
          <ul className="grid gap-2 text-iron">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener" className="hover:text-gold">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-2 border-t border-white/10 pt-6 text-[0.7rem] uppercase tracking-[0.18em] text-iron sm:flex-row sm:justify-between">
        <p>
          © {year ?? ""} {site.name}
        </p>
        <p>{site.credit ?? <Todo>website credit</Todo>}</p>
      </div>
    </footer>
  );
}
