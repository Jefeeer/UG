/** Visible only in development: marks content the gym owner still needs to supply. */
export function Todo({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="ml-2 inline-block border border-dashed border-gold px-1.5 py-0.5 align-middle text-[0.6rem] font-bold uppercase tracking-widest text-gold">
      TODO: {children}
    </span>
  );
}
