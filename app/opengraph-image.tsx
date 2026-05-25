import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Melissa Morales | Project Manager & Construction Coordinator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#fff8f7",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red circle background accent */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "320px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "#b7102a",
          }}
        />

        {/* Hero photo */}
        <img
          src="https://melissa-portfolio-tonigruni.vercel.app/meli%20sideview.png"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0px",
            height: "620px",
            width: "480px",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />

        {/* Left content */}
        <div
          style={{
            position: "absolute",
            left: "72px",
            top: "0",
            bottom: "0",
            width: "620px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#271717",
              marginBottom: "24px",
            }}
          >
            Melissa Morales
          </div>

          {/* Big headline */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: "1",
              textTransform: "uppercase",
              color: "#271717",
              marginBottom: "32px",
            }}
          >
            Project
            <br />
            Manager.
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#b7102a",
              marginBottom: "28px",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#5b403f",
              maxWidth: "480px",
            }}
          >
            Project Manager &amp; Construction Coordinator with 7+ years delivering complex builds on time and on budget. Architectural background, PM mindset — always.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
