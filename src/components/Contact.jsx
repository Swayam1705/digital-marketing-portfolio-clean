import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const { email, phone, location } = portfolioData.personal;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section" style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "2.8rem", marginBottom: "8px" }}>
          Let's Work Together
        </h2>
        <p style={{ fontSize: "1.05rem", opacity: 0.8, maxWidth: "550px", margin: "0 auto" }}>
          Have a project in mind, an opportunity, or just want to say hi? Send me a message below.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start" }}>
        
        {/* Left Column: Direct Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Contact Info</h3>
          
          {email && (
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mail size={20} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Email</span>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "0.95rem" }}>{email}</p>
              </div>
            </div>
          )}

          {phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Phone size={20} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Phone</span>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "0.95rem" }}>{phone}</p>
              </div>
            </div>
          )}

          {location && (
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin size={20} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Location</span>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "0.95rem" }}>{location}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Clean Contact Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid rgba(20,18,16,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "6px", textTransform: "uppercase", opacity: 0.7 }}>
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. John Doe"
              style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "6px", textTransform: "uppercase", opacity: 0.7 }}>
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. john@example.com"
              style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "6px", textTransform: "uppercase", opacity: 0.7 }}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project or opportunity..."
              style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "0.95rem", resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 24px",
              borderRadius: "8px",
              background: "#1a1714",
              color: "#fff",
              border: "none",
              fontWeight: "700",
              fontSize: "0.95rem",
              cursor: "pointer",
              marginTop: "8px"
            }}
          >
            Send Message <Send size={16} />
          </button>

          {submitted && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#15803d", background: "#f0fdf4", padding: "12px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>
              <CheckCircle size={18} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
