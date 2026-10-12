const words = ["Push", "Pull", "Squat", "Deadlift", "Repeat", "Tara, buhat na"];

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((w) => (
        <li key={w} className="wide flex items-center whitespace-nowrap text-lg font-extrabold uppercase italic sm:text-2xl">
          <span className={w.includes(",") ? "text-gold" : ""}>{w}</span>
          <span className="mx-7 inline-block size-2 rotate-45 bg-chalk/30" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-white/10 bg-concrete py-5" aria-label="Push, pull, squat, deadlift, repeat">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
