/** An Olympic bumper plate in miniature, IWF colours by weight. */
export function PlateBadge({ kg, className = "" }: { kg: number; className?: string }) {
  return (
    <span
      className={`grid size-16 shrink-0 place-items-center rounded-full shadow-[inset_0_0_0_3px_rgb(0_0_0/.35),inset_0_0_0_9px_rgb(255_255_255/.12)] ${className}`}
      style={{ background: `var(--plate-${kg})` }}
      role="img"
      aria-label={`${kg} kg plate`}
    >
      <span className="absolute size-4 rounded-full bg-ink shadow-[0_0_0_3px_rgb(200_200_200/.5)]" aria-hidden />
      <span className="condensed absolute top-1.5 text-[0.62rem] font-black text-white" aria-hidden>{kg}</span>
      <span className="condensed absolute bottom-1.5 text-[0.56rem] font-bold uppercase text-white/80" aria-hidden>kg</span>
    </span>
  );
}
