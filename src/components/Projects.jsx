import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData.js";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projectsList = portfolioData.projects || [];
  const categories = ["All", ...new Set(projectsList.map((p) => p.category).filter(Boolean))];

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section
      className="projects-section"
      style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div className="projects-header" style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "2.8rem", marginBottom: "8px" }}>
          Selected Works & Designs
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.75, maxWidth: "600px", margin: "0 auto" }}>
          A visual collection of social creatives, branding mockups, posters, and campaign assets.
        </p>

        {categories.length > 2 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "24px",
            }}
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border:
                    activeFilter === cat
                      ? "1px solid var(--ember, #c45c26)"
                      : "1px solid rgba(20,18,16,0.15)",
                  background:
                    activeFilter === cat ? "var(--ember, #c45c26)" : "rgba(242, 237, 228, 0.5)",
                  color: activeFilter === cat ? "#fff" : "#1a1714",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid rgba(20,18,16,0.1)",
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(20,18,16,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Thumbnail — always fills box cleanly */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                position: "relative",
                background: "#ece4d8",
              }}
            >
              <img
                src={project.image || "/images/project-placeholder-1.svg"}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "rgba(20, 18, 16, 0.85)",
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: "700",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
            </div>

            <div
              style={{
                padding: "14px 16px 16px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "var(--ember, #c45c26)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {project.client || "Concept Design"}
              </span>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  margin: "4px 0 8px",
                  lineHeight: 1.3,
                  color: "#1a1714",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  opacity: 0.75,
                  margin: "0 0 12px",
                  lineHeight: 1.4,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto" }}>
                {project.tools?.slice(0, 3).map((tool, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "9px",
                      background: "rgba(20, 18, 16, 0.04)",
                      border: "1px solid rgba(20, 18, 16, 0.08)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontWeight: "500",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
