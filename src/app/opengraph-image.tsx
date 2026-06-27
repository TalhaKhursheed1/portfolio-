import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Talha Khursheed — React Native Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#050508",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Ambient glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.35)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -40,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.25)",
            filter: "blur(90px)",
          }}
        />

        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 1 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
              boxShadow: "0 0 12px rgba(52, 211, 153, 0.8)",
            }}
          />
          <span
            style={{
              fontSize: 18,
              color: "#a1a1aa",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: "#fafafa",
                  letterSpacing: "-0.03em",
                }}
              >
                Talha
              </span>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #818cf8, #06b6d4)",
                  backgroundClip: "text",
                  color: "transparent",
                  letterSpacing: "-0.03em",
                }}
              >
                {" Khursheed"}
              </span>
            </div>

            <p
              style={{
                fontSize: 36,
                fontWeight: 600,
                background: "linear-gradient(90deg, #ffffff, #818cf8, #06b6d4)",
                backgroundClip: "text",
                color: "transparent",
                margin: "0 0 20px 0",
              }}
            >
              React Native Developer
            </p>

            <p
              style={{
                fontSize: 22,
                color: "#a1a1aa",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: 580,
              }}
            >
              Cross-platform mobile apps with React Native, Expo & Firebase — deployed on App Store & Play Store.
            </p>
          </div>

          {/* Phone mockup */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 24,
            }}
          >
            <div
              style={{
                width: 220,
                height: 420,
                borderRadius: 36,
                border: "3px solid rgba(99, 102, 241, 0.5)",
                background: "linear-gradient(180deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.08) 100%)",
                boxShadow: "0 0 60px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 16px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 8,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.15)",
                  marginBottom: 24,
                }}
              />
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  borderRadius: 20,
                  background: "rgba(99, 102, 241, 0.12)",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  padding: 16,
                  gap: 10,
                }}
              >
                <div style={{ width: "70%", height: 12, borderRadius: 6, background: "rgba(129, 140, 248, 0.6)" }} />
                <div style={{ width: "50%", height: 10, borderRadius: 5, background: "rgba(129, 140, 248, 0.35)" }} />
                <div style={{ flex: 1, borderRadius: 12, background: "rgba(6, 182, 212, 0.15)", marginTop: 8 }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, height: 28, borderRadius: 8, background: "rgba(99, 102, 241, 0.45)" }} />
                  <div style={{ flex: 1, height: 28, borderRadius: 8, background: "rgba(6, 182, 212, 0.35)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: 12, zIndex: 1, flexWrap: "wrap" }}>
          {["React Native", "Expo", "Firebase", "iOS", "Android", "10K+ Downloads"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(99, 102, 241, 0.35)",
                  background: "rgba(99, 102, 241, 0.12)",
                  color: "#818cf8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
