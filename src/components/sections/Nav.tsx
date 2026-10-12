"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

const links = [
  { href: "#why", label: "Why Us", level: "B1" },
  { href: "#floor", label: "The Floor", level: "B2" },
  { href: "#rates", label: "Rates", level: "B3" },
  { href: "#first-time", label: "First Timers", level: "B4" },
  { href: "#location", label: "Location", level: "B7" },
];

export function Nav() {
  const [level, setLevel] = useState("G");
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);

  // Elevator readout: whichever [data-level] section is crossing the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setLevel((e.target as HTMLElement).dataset.level!);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-level]").forEach((el) => io.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-500 ${
        scrolled ? "border-b border-white/8 bg-ink/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-4 sm:gap-6 sm:px-8">
        <a href="#top" aria-label="Underground Fitness — back to top" className="text-[15px]">
          <Wordmark />
        </a>

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                  level === l.level ? "text-chalk" : "text-iron"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="ml-auto flex items-center gap-2 border border-white/10 bg-black/60 px-3 py-1.5 lg:ml-0"
          title="Current level"
        >
          <span className="text-[0.55rem] text-led" aria-hidden>
            ▼
          </span>
          <span className="led w-[2ch] text-center text-lg leading-none" aria-hidden>
            {level}
          </span>
        </div>

        <a href={site.messengerUrl} target="_blank" rel="noopener" className="btn btn-solid hidden min-h-10 whitespace-nowrap py-2 md:inline-flex">
          Message us
        </a>

        <button
          type="button"
          onClick={() => menu.current?.showModal()}
          className="grid size-11 place-items-center border border-white/15 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {/* Native <dialog>: focus trap + Escape for free. */}
      <dialog
        ref={menu}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink text-chalk"
        onClick={(e) => e.target instanceof HTMLAnchorElement && menu.current?.close()}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <Wordmark className="text-[15px]" />
          <button
            type="button"
            onClick={() => menu.current?.close()}
            className="grid size-11 place-items-center border border-white/15"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="mt-6 px-5 sm:px-8">
          {links.map((l) => (
            <li key={l.href} className="border-b border-white/10">
              <a href={l.href} className="flex items-baseline gap-5 py-5">
                <span className="led text-sm">{l.level}</span>
                <span className="wide text-xl font-extrabold uppercase italic">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="grid gap-3 px-5 pt-8 sm:px-8">
          <a href={site.messengerUrl} target="_blank" rel="noopener" className="btn btn-solid">
            Message us on Messenger
          </a>
          <a href={site.phone.href} className="btn">
            Call {site.phone.display}
          </a>
        </div>
      </dialog>
    </header>
  );
}
