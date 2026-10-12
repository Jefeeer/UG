/** Type-only stand-in for the UG logo until the owner supplies the SVG. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 leading-none ${className}`}>
      <span className="wide text-[1.6em] font-black italic tracking-[-0.06em] [text-shadow:2px_2px_0_#55555b]">
        UG
      </span>
      <span className="wide flex flex-col text-[0.62em] font-extrabold uppercase italic tracking-tight">
        <span>Underground</span>
        <span>Fitness</span>
      </span>
    </span>
  );
}
