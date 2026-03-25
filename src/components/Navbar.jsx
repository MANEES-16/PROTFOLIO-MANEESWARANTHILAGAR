import React, { useState, useEffect } from 'react';

const LINKS = ['Home', 'About', 'Skills', 'Projects', 'Mini Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 60px', height: 68,
        background: scrolled ? 'rgba(6,11,24,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,229,255,0.1)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 18, fontWeight: 700, color: 'var(--cyan)',
          letterSpacing: 1,
        }}>
          &lt;<span style={{ color: '#fff' }}>MT</span> /&gt;
        </div>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0 }}>
          {LINKS.map(link => (
            <li key={link} style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
              <button
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
                  color: active === link ? 'var(--cyan)' : 'var(--txt2)',
                  cursor: 'pointer', transition: '0.2s', padding: '4px 0',
                  borderBottom: active === link ? '1px solid var(--cyan)' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (active !== link) e.target.style.color = '#fff'; }}
                onMouseLeave={e => { if (active !== link) e.target.style.color = 'var(--txt2)'; }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: '1px solid var(--border)',
            color: 'var(--cyan)', padding: '6px 12px', fontSize: 18, cursor: 'pointer',
          }}
          aria-label="menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 199,
          background: 'rgba(6,11,24,0.98)', borderBottom: '1px solid var(--border)',
          padding: '16px 0',
        }}>
          {LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', padding: '12px 32px',
              fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
              color: active === link ? 'var(--cyan)' : 'var(--txt)', cursor: 'pointer',
            }}>
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          nav ul { display: none !important; }
          nav button[aria-label="menu"] { display: block !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
