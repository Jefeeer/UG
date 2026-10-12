"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { isOpen, manilaNow, to12h, type ManilaNow } from "@/lib/manila";

const pad = (n: number) => String(n).padStart(2, "0");

/** Ticks once a second; renders blank until mounted so server and client agree. */
export function useManila() {
  const [now, setNow] = useState<ManilaNow | null>(null);
  useEffect(() => {
    const tick = () => setNow(manilaNow());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function LiveStatus({ className = "" }: { className?: string }) {
  const now = useManila();
  const open = now ? isOpen(now, site.hours) : null;
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-6 text-[0.65rem] uppercase tracking-[0.2em] text-iron">
        <span>Manila time</span>
        <span className="led text-2xl tracking-[0.08em]" aria-hidden>
          {now ? `${pad(now.h)}:${pad(now.m)}:${pad(now.s)}` : "--:--:--"}
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em]" aria-live="polite">
        <span
          className={`size-2 rounded-full ${open ? "shadow-[0_0_10px_var(--plate-10)]" : "bg-led"}`}
          style={{ background: open ? "var(--plate-10)" : undefined }}
          aria-hidden
        />
        {open === null
          ? "Checking the doors…"
          : open
            ? `Open now · closes ${to12h(site.hours.close)}`
            : `Closed · opens ${to12h(site.hours.open)}`}
      </p>
    </div>
  );
}
