import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  const modalUI = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        width: "100vw",
        height: "100vh",
        background: "rgba(18, 16, 14, 0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pm-panel"
        style={{
          width: "min(1100px, 100%)",
          height: "min(860px, 90vh)",
          background: "#fcfaf7",
          borderRadius: "18px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
        }}
      >
        {/* LEFT — full-fit image */}
        <div
          className="pm-image"
          style={{
            flex: "1.15 1 0",
            minWidth: 0,
            height: "100%",
            background: "#141210",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={project.image || "/images/project-placeholder-1.svg"}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* RIGHT — white details + Back button lower */}
        <div
          className="pm-details"
          style={{
            flex: "0.95 1 0",
            minWidth: 0,
            height: "100%",
            overflowY: "auto",
            padding: "40px 36px 28px",
            display: "flex",
            flexDirection: "column",
            background: "#fcfaf7",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1 1 auto" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "#c45c26",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {project.client || "Concept Design"}
              {project.category ? `  ·  ${project.category}` : ""}
            </span>

            <h2
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
                lineHeight: 1.15,
                margin: "12px 0 28px",
                color: "#1a1714",
              }}
            >
              {project.title}
            </h2>

            {project.description && (
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    margin: "0 0 8px",
                  }}
                >
                  Project Overview
                </h4>
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.7,
                    margin: 0,
                    color: "#2c2825",
                  }}
                >
                  {project.description}
                </p>
              </div>
            )}

            {project.impact && (
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    margin: "0 0 8px",
                  }}
                >
                  Design Purpose
                </h4>
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.7,
                    margin: 0,
                    color: "#2c2825",
                  }}
                >
                  {project.impact}
                </p>
              </div>
            )}

            {project.tools?.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.45,
                    margin: "0 0 12px",
                  }}
                >
                  Tools Used
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "7px 12px",
                        borderRadius: "8px",
                        background: "rgba(20,18,16,0.06)",
                        border: "1px solid rgba(20,18,16,0.1)",
                        color: "#1a1714",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back button — bottom of white side */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: "16px",
              borderTop: "1px solid rgba(20,18,16,0.08)",
            }}
          >
            <button
              onClick={onClose}
              type="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1a1714",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "12px 20px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
            >
              ← Back to Work
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pm-panel {
            flex-direction: column !important;
            height: auto !important;
            max-height: 94vh !important;
            overflow-y: auto !important;
          }
          .pm-image {
            flex: none !important;
            width: 100% !important;
            height: 48vh !important;
            min-height: 260px !important;
            padding: 16px !important;
          }
          .pm-details {
            flex: none !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            padding: 24px 20px 20px !important;
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalUI, document.body);
}
