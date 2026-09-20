import React from "react";
import { portfolioData } from "../data/portfolioData.js";
import { Megaphone, PenTool, Palette, Search, Target, BarChart2 } from "lucide-react";

const iconMap = {
  megaphone: <Megaphone size={24} />,
  pen: <PenTool size={24} />,
  palette: <Palette size={24} />,
  search: <Search size={24} />,
  target: <Target size={24} />,
  chart: <BarChart2 size={24} />,
};

export default function Services() {
  const services = portfolioData.services || [];

  return (
    <section id="services" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "12px", lineHeight: 1.1, color: "#1a1714" }}>
          How I Can Help
        </h2>
        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", opacity: 0.75, maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}>
          Combining strategy, creativity, and data to deliver marketing assets that connect with audiences.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {services.map((service, idx) => (
          <div key={idx} style={{ background: "#fff", border: "1px solid rgba(20,18,16,0.1)", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
               onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.06)"; }}
               onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            
            <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              {iconMap[service.icon] || <Target size={24} />}
            </div>
            
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#1a1714" }}>
              {service.title}
            </h3>
            
            <p style={{ fontSize: "1rem", lineHeight: 1.6, opacity: 0.75, margin: 0 }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
