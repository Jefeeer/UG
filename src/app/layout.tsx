import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// The only font on the site. Variable width axis gives wide (headlines) and condensed (numbers).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "Underground Fitness — a serious iron gym on Emilio Aguinaldo Highway, Dasmariñas, Cavite. Power racks, deadlift platforms, plate-loaded machines and a full dumbbell wall at lifter-friendly rates. Open 6AM–11PM.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Underground Fitness | Iron Gym in Dasmariñas, Cavite",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Underground Fitness — Dasmariñas, Cavite",
    description,
    type: "website",
    locale: "en_PH",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  description,
  url: site.url,
  telephone: site.phone.href.replace("tel:", ""),
  image: `${site.url}/photos/led-benches.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Dasmariñas",
    addressRegion: "Cavite",
    postalCode: "4115",
    addressCountry: "PH",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days.map(
        (d) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d],
      ),
      opens: site.hours.open,
      closes: site.hours.close,
    },
  ],
  sameAs: [site.facebookUrl, site.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} antialiased`}>
      <body className="bg-ink text-chalk">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
