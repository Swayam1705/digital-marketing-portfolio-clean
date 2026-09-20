import React from "react";
import { portfolioData } from "../data/portfolioData.js";
import { Megaphone, PenTool, Palette, Search, Target, BarChart2, ArrowRight } from "lucide-react";
import { scrollToSection } from "../utils/scroll.js";

const iconMap = {
  megaphone: <Megaphone size={22} />,
  pen: <PenTool size={22} />,
  palette: <Palette size={22} />,
  search: <Search size={22} />,
  target: <Target size={22} />,
  chart: <BarChart2 size={22} />,
};

export default function Services() {
  const services = portfolioData.services || [];

  return (
    <section
      id="services"
      style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}
    >
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "12px",
            lineHeight: 1.15,
            color: "#1a1714",
            fontWeight: 700,
          }}
        >
          How I Can Help
        </h2>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            opacity: 0.75,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.5,
          }}
        >
          Combining strategy, creativity, and data to deliver marketing assets that connect with
          audiences.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              border: "1px solid rgba(20,18,16,0.1)",
              borderRadius: "16px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(196, 92, 38, 0.1)",
                color: "#c45c26",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              {iconMap[service.icon] || <Target size={22} />}
            </div>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#1a1714",
                lineHeight: 1.3,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                opacity: 0.75,
                margin: "0 0 20px 0",
                flex: "1 1 auto",
              }}
            >
              {service.description}
            </p>

            {/* Let's talk → Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              style={{
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: "#c45c26",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              Let&apos;s talk <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
