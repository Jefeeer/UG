export type ManilaNow = { day: number; h: number; m: number; s: number };
export type Hours = { open: string; close: string; days: number[] };

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Manila",
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23",
});
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Gym time is Manila time, whatever the visitor's device says. */
export function manilaNow(date = new Date()): ManilaNow {
  const p = Object.fromEntries(fmt.formatToParts(date).map((x) => [x.type, x.value]));
  return { day: DAYS.indexOf(p.weekday), h: +p.hour, m: +p.minute, s: +p.second };
}

const toMin = (hhmm: string) => +hhmm.slice(0, 2) * 60 + +hhmm.slice(3);

export function isOpen(n: ManilaNow, hours: Hours) {
  const t = n.h * 60 + n.m;
  return hours.days.includes(n.day) && t >= toMin(hours.open) && t < toMin(hours.close);
}

/** "06:00" → "6:00 AM" */
export function to12h(hhmm: string) {
  const h = +hhmm.slice(0, 2);
  return `${h % 12 || 12}:${hhmm.slice(3)} ${h < 12 ? "AM" : "PM"}`;
}
