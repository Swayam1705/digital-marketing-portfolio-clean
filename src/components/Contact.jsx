import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const { email, phone, location, web3formsKey } = portfolioData.personal;
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!web3formsKey) { setStatus("success"); e.target.reset(); return; }
    setStatus("sending");
    const formData = new FormData(e.target);
    formData.append("access_key", web3formsKey);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if ((await res.json()).success) { setStatus("success"); e.target.reset(); } 
      else setStatus("error");
    } catch (err) { setStatus("error"); }
  };

  return (
    <section id="contact" style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "80px 20px 100px" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "12px", lineHeight: 1.1, color: "#1a1714" }}>
          Let's Work Together
        </h2>
        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", opacity: 0.75, maxWidth: "550px", margin: "0 auto", lineHeight: 1.5 }}>
          Have a project in mind, an opportunity, or just want to say hi? Send me a message below.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1a1714" }}>Contact Info</h3>
          {email && (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}><Mail size={22} /></div>
              <div><span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Email</span><p style={{ margin: 0, fontWeight: "600", fontSize: "1.05rem", color: "#1a1714" }}>{email}</p></div>
            </div>
          )}
          {phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}><Phone size={22} /></div>
              <div><span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Phone</span><p style={{ margin: 0, fontWeight: "600", fontSize: "1.05rem", color: "#1a1714" }}>{phone}</p></div>
            </div>
          )}
          {location && (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(196, 92, 38, 0.1)", color: "#c45c26", display: "flex", alignItems: "center", justifyContent: "center" }}><MapPin size={22} /></div>
              <div><span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>Location</span><p style={{ margin: 0, fontWeight: "600", fontSize: "1.05rem", color: "#1a1714" }}>{location}</p></div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", background: "#fff", padding: "40px", borderRadius: "20px", border: "1px solid rgba(20,18,16,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}>
          <div><label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", opacity: 0.6 }}>Your Name</label>
          <input type="text" name="name" required placeholder="e.g. John Doe" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "1rem" }} /></div>
          <div><label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", opacity: 0.6 }}>Your Email</label>
          <input type="email" name="email" required placeholder="e.g. john@example.com" style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "1rem" }} /></div>
          <div><label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", opacity: 0.6 }}>Message</label>
          <textarea name="message" required rows={4} placeholder="Tell me about your project..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(20,18,16,0.15)", outline: "none", fontSize: "1rem", resize: "vertical" }} /></div>
          <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px", borderRadius: "10px", background: "#1a1714", color: "#fff", border: "none", fontWeight: "700", fontSize: "1rem", cursor: "pointer", marginTop: "8px" }}>
            {status === "sending" ? "Sending..." : <>Send Message <Send size={18} /></>}
          </button>
          {status === "success" && <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#15803d", background: "#f0fdf4", padding: "14px", borderRadius: "10px", fontSize: "0.95rem" }}><CheckCircle size={18} /><span>Message sent successfully!</span></div>}
        </form>
      </div>
    </section>
  );
}
