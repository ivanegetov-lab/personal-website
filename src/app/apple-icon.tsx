import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            fontSize: 106,
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
            bottom: 26,
            left: "50%",
            transform: "translateX(-50%)",
            width: 64,
            height: 5,
            background: "#F97316",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
