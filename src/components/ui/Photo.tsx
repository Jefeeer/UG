import Image from "next/image";

/**
 * Every supplied photo carries a "UG" watermark in its bottom ~20%.
 * The image box is 128% of the frame and pinned to the top, so the watermark always falls outside.
 */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  position = "50%",
  className = "",
  imgClassName = "grade",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
  imgClassName?: string;
}) {
  // Callers may pass `absolute inset-0`; only default to `relative` when they don't, or it would win.
  const pos = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";
  return (
    <div className={`${pos} overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 top-0 h-[128%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          style={{ objectPosition: `${position} 0%` }}
        />
      </div>
    </div>
  );
}
