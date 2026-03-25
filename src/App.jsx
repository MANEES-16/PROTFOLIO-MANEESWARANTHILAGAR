import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MiniProjects from './components/MiniProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Subtle grid background */
function GridBg() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: '64px 64px',
    }} />
  );
}

/* Cursor glow */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div style={{
      position: 'fixed', pointerEvents: 'none', zIndex: 0,
      width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
      left: pos.x - 200, top: pos.y - 200,
      transition: 'left 0.1s, top 0.1s',
    }} />
  );
}

/* Back to top button */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 999,
        width: 44, height: 44, borderRadius: '50%',
        background: 'var(--cyan)', color: '#060b18',
        border: 'none', fontSize: 20, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 20px rgba(0,229,255,0.3)',
        transition: '0.2s',
      }}
      title="Back to top"
    >↑</button>
  );
}

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <GridBg />
      <CursorGlow />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MiniProjects />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
