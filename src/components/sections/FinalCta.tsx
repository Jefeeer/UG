import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta" data-level="B8" className="relative isolate overflow-hidden border-t border-white/10">
      <Photo
        src="/photos/platforms.jpg"
        alt=""
        sizes="100vw"
        className="absolute inset-0 -z-10"
        imgClassName="[filter:grayscale(.7)_contrast(1.2)_brightness(.55)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_50%_50%,rgb(10_10_11/.55),#0a0a0b)]" />
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center sm:py-44">
        <p className="led text-sm tracking-[0.3em]">▼ B8</p>
        <h2 id="final-cta" className="wide mt-6 text-2xl font-black uppercase italic leading-tight text-balance sm:text-4xl">
          Your first set starts here.
        </h2>
        <p className="mt-4 text-iron">Tara, buhat na. Message us and we&rsquo;ll see you on the floor.</p>
        <a href={site.messengerUrl} target="_blank" rel="noopener" className="btn btn-solid mt-9">
          <MessageCircle className="size-4" aria-hidden /> Message us on Messenger
        </a>
      </Reveal>
    </section>
  );
}
