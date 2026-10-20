import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title.trim() || site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const p = site.palette;
  const [first, ...rest] = (site.name.trim() || "Catullo's Italian").split(" ");
  const detail = [site.address.full.trim(), site.phone.display.trim()].filter(Boolean).join("   ·   ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: `radial-gradient(800px 500px at 85% 0%, ${p.brand}55, transparent 70%), ${p.rice}`,
          color: p.ink,
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 8, textTransform: "uppercase", color: p.brand }}>
          Handmade pasta · Jacksonville
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 170, lineHeight: 0.9, fontStyle: "italic", color: p.brandDeep, fontFamily: "Georgia, serif" }}>
            {first}
          </div>
          {rest.length > 0 && (
            <div style={{ display: "flex", marginTop: 16, fontSize: 44, letterSpacing: 18, textTransform: "uppercase" }}>{rest.join(" ")}</div>
          )}
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: p.ink, opacity: 0.8 }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: p.ink, opacity: 0.75 }}>{detail}</div>
      </div>
    ),
    { ...size },
  );
}
