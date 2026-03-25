import React, { useState } from 'react';
import { MINI_PROJECTS } from '../data';

export default function MiniProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="mini-projects" style={{ padding: '100px 60px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 4,
        color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12,
      }}>Side works</div>
      <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
        Mini <span style={{ color: 'var(--cyan)' }}>Projects</span>
      </h2>
      <div style={{ width: 48, height: 2, background: 'var(--cyan)', marginBottom: 16 }} />
      <p style={{ fontSize: 15, color: 'var(--txt2)', marginBottom: 56, maxWidth: 560 }}>
        {MINI_PROJECTS.length} mini projects built while learning and experimenting — each one a step in the journey.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {MINI_PROJECTS.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--bg2)',
              border: `1px solid ${hovered === i ? 'var(--border2)' : 'var(--border)'}`,
              padding: '24px 24px 20px', position: 'relative', overflow: 'hidden',
              transform: hovered === i ? 'translateY(-5px)' : 'none',
              transition: '0.25s', display: 'flex', flexDirection: 'column',
            }}
          >
            {/* Number badge */}
            <div style={{
              position: 'absolute', top: 16, right: 18,
              fontFamily: 'var(--mono)', fontSize: 11,
              color: 'var(--txt3)',
            }}>
              #{String(i + 1).padStart(2, '0')}
            </div>

            {/* Top accent bar on hover */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, var(--cyan), var(--blue))',
              opacity: hovered === i ? 1 : 0, transition: '0.3s',
            }} />

            <div style={{ fontSize: 28, marginBottom: 12 }}>{p.emoji}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{p.name}</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--txt2)', marginBottom: 16, flex: 1 }}>{p.desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
              {p.stack.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--mono)', fontSize: 10, padding: '2px 8px',
                  background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)',
                  color: 'var(--cyan)',
                }}>{t}</span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1.5,
                textTransform: 'uppercase', color: hovered === i ? 'var(--cyan)' : 'var(--txt2)',
                borderTop: '1px solid var(--border)', paddingTop: 12, transition: '0.2s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              View on GitHub ↗
            </a>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){ #mini-projects { padding: 80px 24px !important; } }
      `}</style>
    </section>
  );
}
