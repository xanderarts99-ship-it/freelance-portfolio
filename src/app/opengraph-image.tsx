import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Alexander Olomukoro freelance web developer and AI integration specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 45%, #312e81 100%)",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            color: "#cbd5e1",
          }}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#60a5fa",
              boxShadow: "0 0 36px #60a5fa",
            }}
          />
          Websites, CMS, SaaS landing pages, AI-enabled tools
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: 0,
              maxWidth: 980,
            }}
          >
            Alexander Olomukoro
          </div>
          <div
            style={{
              fontSize: 38,
              lineHeight: 1.25,
              color: "#dbeafe",
              maxWidth: 920,
            }}
          >
            Freelance Web Developer & AI Integration Specialist
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#e2e8f0",
          }}
        >
          <span>Clear scope. Fast delivery. Calm client handoff.</span>
          <span style={{ color: "#93c5fd" }}>olomukoro.uk</span>
        </div>
      </div>
    ),
    size
  );
}
