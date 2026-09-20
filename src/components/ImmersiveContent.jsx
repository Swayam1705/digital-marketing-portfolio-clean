import React from "react";
import Hero from "./Hero";
import About from "./About";
import Beliefs from "./Beliefs";
import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
import ResumeCTA from "./ResumeCTA";
import Contact from "./Contact";
import Footer from "./Footer";

function Chapter({ id, number, title, children }) {
  return (
    <section id={id} className="chapter">
      <div className="chapter-marker">
        <span className="chapter-num">{number}</span>
        <span className="chapter-line" />
        <span className="chapter-title">{title}</span>
      </div>
      <div className="chapter-body-lock">
        {children}
      </div>
    </section>
  );
}

export default function ImmersiveContent() {
  return (
    <main className="immersive-content">
      <Chapter id="hero" number="00" title="Prologue"><Hero /></Chapter>
      <Chapter id="about" number="01" title="About"><About /></Chapter>
      <Chapter id="beliefs" number="02" title="Beliefs"><Beliefs /></Chapter>
      <Chapter id="projects" number="03" title="Work"><Projects /></Chapter>
      <Chapter id="services" number="04" title="Services"><Services /></Chapter>
      <Chapter id="experience" number="05" title="Timeline"><Experience /></Chapter>
      <Chapter id="resume" number="06" title="Résumé"><ResumeCTA /></Chapter>
      <Chapter id="contact" number="07" title="Contact"><Contact /></Chapter>
      <Footer />
    </main>
  );
}
