import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhyUs } from "@/components/sections/WhyUs";
import { Floor } from "@/components/sections/Floor";
import { Rates } from "@/components/sections/Rates";
import { FirstTimers } from "@/components/sections/FirstTimers";
import { Culture } from "@/components/sections/Culture";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <WhyUs />
        <Floor />
        <Rates />
        <FirstTimers />
        <Culture />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
