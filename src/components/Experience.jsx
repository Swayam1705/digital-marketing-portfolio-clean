import React from "react";
import { portfolioData } from "../data/portfolioData.js";

export default function Experience() {
  const experienceList = portfolioData.experience || [];
  const educationList = portfolioData.education || [];

  return (
    <section
      id="experience"
      className="timeline-section"
      style={{ width: "100%", maxWidth: "900px", margin: "0 auto", padding: "80px 20px" }}
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
          Timeline
        </h2>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            opacity: 0.75,
            lineHeight: 1.5,
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          My journey in marketing, learning, and academic development.
        </p>
      </div>

      {experienceList.length > 0 && (
        <div style={{ marginBottom: "64px" }}>
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "24px",
              color: "#c45c26",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(20,18,16,0.1)",
              paddingBottom: "12px",
            }}
          >
            Experience & Projects
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experienceList.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "28px",
                  borderRadius: "14px",
                  background: "#fff",
                  border: "1px solid rgba(20,18,16,0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "#1a1714" }}>
                    {item.role || item.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      opacity: 0.8,
                      background: "rgba(20,18,16,0.05)",
                      padding: "6px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#c45c26",
                    display: "block",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.organization || item.company || "Freelance"}
                </span>
                <p style={{ fontSize: "1rem", lineHeight: 1.65, margin: 0, opacity: 0.8 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {educationList.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "24px",
              color: "#c45c26",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(20,18,16,0.1)",
              paddingBottom: "12px",
            }}
          >
            Education & Learning
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {educationList.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "28px",
                  borderRadius: "14px",
                  background: "#fff",
                  border: "1px solid rgba(20,18,16,0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "#1a1714" }}>
                    {item.program}
                  </h4>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      opacity: 0.8,
                      background: "rgba(20,18,16,0.05)",
                      padding: "6px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#c45c26",
                    display: "block",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.institution}
                </span>
                <p style={{ fontSize: "1rem", lineHeight: 1.65, margin: 0, opacity: 0.8 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
