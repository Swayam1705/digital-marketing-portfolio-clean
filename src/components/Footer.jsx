import React from "react";
import { portfolioData } from "../data/portfolioData.js";
import SocialIcon from "./SocialIcon.jsx";

export default function Footer() {
  const { name, tagline, location, resume, email } = portfolioData.personal;
  const socials = portfolioData.socials || [];

  // Only active sections
  const exploreLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Timeline", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" style={{ background: "#0d0b18", color: "#f3ede3", padding: "80px 24px 40px" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Main Heading */}
        <div style={{ marginBottom: "60px" }}>
          <p className="eyebrow" style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--color-coral, #c45c26)", textTransform: "uppercase", marginBottom: "12px" }}>
            DIGITAL MARKETING FREELANCER
          </p>
          <h2 style={{ fontFamily: "var(--font-display, 'Fraunces', serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, margin: 0, fontWeight: 700 }}>
            See you on the<br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              next campaign.
            </span>
          </h2>
        </div>

        {/* Footer Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", paddingBottom: "60px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
          
          {/* Col 1: Bio / Resume */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", margin: "0 0 10px 0", color: "#fff" }}>
              {name || "Samruddhi Shukla"}
            </h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              {tagline}
            </p>
            {location && (
              <p style={{ fontSize: "0.85rem", opacity: 0.5, margin: "0 0 20px 0" }}>
                {location}
              </p>
            )}
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--color-coral, #f472b6)", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none" }}
              >
                📄 Download résumé
              </a>
            )}
          </div>

          {/* Col 2: Explore Links (Only Active Sections) */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
              EXPLORE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials & Direct Email */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
              ELSEWHERE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {socials.map((soc, idx) => (
                <li key={idx}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.8)", textDecoration: "none", fontSize: "0.95rem" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  >
                    <SocialIcon platform={soc.platform} size={16} />
                    <span>{soc.platform}</span>
                  </a>
                </li>
              ))}
              {email && (
                <li style={{ marginTop: "8px" }}>
                  <a
                    href={`mailto:${email}`}
                    style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none", fontSize: "0.85rem", wordBreak: "break-all" }}
                  >
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Back to Top Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", paddingTop: "30px", fontSize: "0.85rem", opacity: 0.6 }}>
          <span>© {new Date().getFullYear()} {name || "Samruddhi Shukla"}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            type="button"
            style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontSize: "0.85rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
