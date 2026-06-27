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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #06b6d4 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          TK
        </div>
      </div>
    ),
    { ...size }
  );
}
