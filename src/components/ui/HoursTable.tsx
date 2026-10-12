"use client";

import { site } from "@/content/site";
import { to12h } from "@/lib/manila";
import { useManila } from "./LiveStatus";

const ORDER = [1, 2, 3, 4, 5, 6, 0];
const NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function HoursTable() {
  const today = useManila()?.day;
  return (
    <table className="w-full text-sm">
      <caption className="sr-only">Opening hours, Manila time</caption>
      <tbody>
        {ORDER.map((d) => {
          const isToday = d === today;
          const open = site.hours.days.includes(d);
          return (
            <tr
              key={d}
              aria-current={isToday ? "date" : undefined}
              className={`border-b border-white/8 ${isToday ? "bg-white/[0.04] text-chalk" : "text-iron"}`}
            >
              <th scope="row" className="py-2.5 pl-3 text-left font-medium">
                {NAMES[d]}
                {isToday && <span className="ml-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold">Today</span>}
              </th>
              <td className="condensed py-2.5 pr-3 text-right tabular-nums">
                {open ? `${to12h(site.hours.open)} – ${to12h(site.hours.close)}` : "Closed"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
