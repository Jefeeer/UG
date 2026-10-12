"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { RotateCcw } from "lucide-react";

const BAR = 20;
const SLEEVE = 120; // usable sleeve length in SVG units
// IWF colours; bumpers 25–10 share one diameter, change plates are smaller.
const PLATES: Record<number, { color: string; h: number; w: number }> = {
  25: { color: "var(--plate-25)", h: 150, w: 20 },
  20: { color: "var(--plate-20)", h: 150, w: 17 },
  15: { color: "var(--plate-15)", h: 150, w: 14 },
  10: { color: "var(--plate-10)", h: 150, w: 11 },
  5: { color: "#e9e7e1", h: 92, w: 10 },
  2.5: { color: "#9b2420", h: 72, w: 8 },
};
const KGS = [25, 20, 15, 10, 5, 2.5];

export const barTotal = (side: number[]) => BAR + 2 * side.reduce((a, b) => a + b, 0);

function verdict(t: number) {
  if (t >= 220) return "Okay, save some for the meet.";
  if (t >= 140) return "Now we’re lifting.";
  if (t >= 100) return "Triple digits. Respect.";
  if (t > BAR) return "Good. Add one more.";
  return "Everyone started with the bar.";
}

export function BarLoader() {
  const [side, setSide] = useState<number[]>([]);
  const reduce = useReducedMotion();
  const total = barTotal(side);
  // Heaviest plates load first, closest to the collar.
  const loaded = [...side].sort((a, b) => b - a);

  const placed = loaded.reduce<{ kg: number; i: number; x: number; color: string; h: number; w: number }[]>(
    (acc, kg, i) => {
      const prev = acc[acc.length - 1];
      return [...acc, { kg, i, x: prev ? prev.x + prev.w + 2 : 0, ...PLATES[kg] }];
    },
    [],
  );
  const last = placed[placed.length - 1];
  const used = last ? last.x + last.w + 2 : 0;
  const fits = (kg: number) => used + PLATES[kg].w <= SLEEVE;
  const full = !fits(2.5);

  const plate = (pl: (typeof placed)[number], dir: 1 | -1) => (
    <motion.rect
      key={`${dir}-${pl.i}-${pl.kg}`}
      initial={reduce ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.7, 0, 0.15, 1] }}
      x={dir === 1 ? 459 + pl.x : 141 - pl.x - pl.w}
      y={90 - pl.h / 2}
      width={pl.w}
      height={pl.h}
      rx={2}
      fill={pl.color}
      stroke="rgb(0 0 0 / .45)"
    />
  );

  return (
    <div className="border border-white/10 bg-concrete p-5 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-iron">Load the bar</p>
        <button
          type="button"
          onClick={() => setSide([])}
          className="flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-iron transition-colors hover:text-chalk disabled:opacity-40"
          disabled={!side.length}
        >
          <RotateCcw className="size-3.5" aria-hidden /> Strip it
        </button>
      </div>

      <div className="mt-4 flex items-end gap-3" aria-live="polite">
        <span className="led text-5xl leading-none sm:text-6xl">{total % 1 ? total.toFixed(1) : total}</span>
        <span className="pb-1 text-xs uppercase tracking-[0.2em] text-iron">kg on the bar</span>
      </div>
      <p className="mt-2 min-h-6 text-sm text-chalk/80">{verdict(total)}</p>

      <svg viewBox="0 0 600 180" className="mt-4 w-full" role="img" aria-label={`Barbell loaded to ${total} kilograms`}>
        {/* shaft, collars, sleeves */}
        <rect x="150" y="86" width="300" height="8" fill="#b9b9be" />
        <rect x="142" y="78" width="10" height="24" rx="1" fill="#8b8b90" />
        <rect x="448" y="78" width="10" height="24" rx="1" fill="#8b8b90" />
        <rect x="20" y="82" width="124" height="16" fill="#cfcfd3" />
        <rect x="456" y="82" width="124" height="16" fill="#cfcfd3" />
        {placed.map((p) => plate(p, 1))}
        {placed.map((p) => plate(p, -1))}
      </svg>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {KGS.map((kg) => (
          <button
            key={kg}
            type="button"
            disabled={!fits(kg)}
            onClick={() => setSide((s) => [...s, kg])}
            aria-label={`Add a ${kg} kilogram plate to each side`}
            className="group flex flex-col items-center gap-1.5 border border-white/10 py-3 transition-colors hover:border-gold active:translate-y-px disabled:opacity-40"
          >
            <span
              aria-hidden
              className="size-6 rounded-full shadow-[inset_0_0_0_6px_rgb(0_0_0/.25)]"
              style={{ background: PLATES[kg].color }}
            />
            <span className="condensed text-sm font-bold">{kg}</span>
          </button>
        ))}
      </div>
      {full && <p className="mt-3 text-xs text-iron">Sleeve’s full. Strip it and go again.</p>}
    </div>
  );
}
