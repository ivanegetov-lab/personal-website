import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 300,
            fontWeight: 900,
            color: "#F5F5F5",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            display: "flex",
          }}
        >
          IG
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 72,
            left: "50%",
            transform: "translateX(-50%)",
            width: 180,
            height: 14,
            background: "#F97316",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
