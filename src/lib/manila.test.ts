// Self-check: `node --experimental-strip-types src/lib/manila.test.ts` (run from site/)
import assert from "node:assert/strict";
import { manilaNow, isOpen, to12h } from "./manila.ts";

const H = { open: "06:00", close: "23:00", days: [0, 1, 2, 3, 4, 5, 6] };

// 2026-10-12T21:30:00Z = Tue 05:30 Manila (UTC+8) → closed
const early = manilaNow(new Date("2026-10-12T21:30:00Z"));
assert.deepEqual(early, { day: 2, h: 5, m: 30, s: 0 });
assert.equal(isOpen(early, H), false);
assert.equal(isOpen({ day: 2, h: 6, m: 0, s: 0 }, H), true);
assert.equal(isOpen({ day: 2, h: 22, m: 59, s: 0 }, H), true);
assert.equal(isOpen({ day: 2, h: 23, m: 0, s: 0 }, H), false);
assert.equal(isOpen({ day: 0, h: 12, m: 0, s: 0 }, { ...H, days: [1] }), false);
assert.equal(to12h("06:00"), "6:00 AM");
assert.equal(to12h("23:00"), "11:00 PM");
assert.equal(to12h("12:00"), "12:00 PM");
console.log("manila ok");
