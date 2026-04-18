import { ImageResponse } from "next/og";

export const alt = "Ivan Getov — Built to Last. Built to Lead.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(249,115,22,0.14) 0%, transparent 60%), linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
          position: "relative",
        }}
      >
        {/* Blueprint grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top row: kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#F97316",
            zIndex: 1,
          }}
        >
          <div style={{ width: 56, height: 2, background: "#F97316" }} />
          Manufacturing Leader · Father · Writer
        </div>

        {/* Name + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 160,
              fontWeight: 900,
              color: "#F5F5F5",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              display: "flex",
            }}
          >
            IVAN GETOV
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#A3A3A3",
              letterSpacing: "-0.01em",
              marginTop: 28,
              display: "flex",
            }}
          >
            Built to Last.{" "}
            <span style={{ color: "#F97316", marginLeft: 14 }}>
              Built to Lead.
            </span>
          </div>
        </div>

        {/* Footer: domain + IG mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#F5F5F5",
              letterSpacing: "0.04em",
              display: "flex",
            }}
          >
            getov.xyz
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              background: "#0A0A0A",
              border: "2px solid #222222",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: 44,
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
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 28,
                height: 3,
                background: "#F97316",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
