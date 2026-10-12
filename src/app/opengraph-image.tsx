import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Underground Fitness — iron gym in Dasmariñas, Cavite";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/archivo-800-italic.woff")),
    readFile(join(process.cwd(), "public/photos/led-benches.jpg")),
  ]);
  const bg = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0a0a0b" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg} alt="" width={1200} height={900} style={{ position: "absolute", top: 0, left: 0, opacity: 0.55 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 64,
            background: "linear-gradient(180deg, rgba(10,10,11,0) 30%, rgba(10,10,11,.95) 85%)",
            color: "#eceae4",
            fontFamily: "Archivo",
          }}
        >
          <div style={{ fontSize: 120, letterSpacing: -6, lineHeight: 1 }}>UG</div>
          <div style={{ fontSize: 44, textTransform: "uppercase", marginTop: 12 }}>Underground Fitness</div>
          <div style={{ fontSize: 26, color: "#e2b13c", textTransform: "uppercase", marginTop: 12 }}>
            Iron gym · Dasmariñas, Cavite
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: font, style: "italic", weight: 800 }] },
  );
}
