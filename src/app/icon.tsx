import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Generated favicon: terracotta tile with a cream italic initial. No logo file yet. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: site.palette.brand,
          color: site.palette.rice,
          fontSize: 46,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
        }}
      >
        {site.name.trim().charAt(0) || "C"}
      </div>
    ),
    { ...size },
  );
}
