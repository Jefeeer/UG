import { Reveal } from "./Reveal";

/** Every section is a floor further down: B1, B2… */
export function SectionHead({
  level,
  kicker,
  title,
  children,
}: {
  level: string;
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-iron">
        <span className="led text-base tracking-[0.1em]">{level}</span>
        <span className="h-px w-10 bg-iron/40" aria-hidden />
        {kicker}
      </p>
      <h2 className="wide mt-5 text-2xl font-extrabold uppercase italic leading-[1.05] tracking-tight text-balance sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-5 max-w-xl text-base leading-relaxed text-iron">{children}</div>}
    </Reveal>
  );
}
