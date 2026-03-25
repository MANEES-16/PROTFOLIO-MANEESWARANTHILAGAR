import React, { useState } from 'react';
import { MAJOR_PROJECTS } from '../data';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ background: 'var(--bg2)', padding: '100px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 4,
          color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12,
        }}>What I've built</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
          Major <span style={{ color: 'var(--cyan)' }}>Projects</span>
        </h2>
        <div style={{ width: 48, height: 2, background: 'var(--cyan)', marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: 'var(--txt2)', marginBottom: 56, maxWidth: 560 }}>
          Full-stack MERN applications built with real-world complexity, production-ready features and modern architecture.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {MAJOR_PROJECTS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--bg3)', border: `1px solid ${hovered === i ? 'var(--border2)' : 'var(--border)'}`,
                display: 'grid', gridTemplateColumns: '280px 1fr',
                overflow: 'hidden', transition: '0.3s',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Left visual panel */}
              <div style={{
                background: p.bg, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: 36, gap: 16,
              }}>
                <div style={{ fontSize: 64 }}>{p.emoji}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 2,
                  color: 'rgba(0,229,255,0.7)', textTransform: 'uppercase', textAlign: 'center',
                }}>
                  {i === 0 ? 'Project 01' : i === 1 ? 'Project 02' : 'Project 03'}
                </div>
              </div>

              {/* Right content */}
              <div style={{ padding: '36px 40px' }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 3,
                  color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 10,
                }}>{p.type}</div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 12 }}>{p.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--txt2)', marginBottom: 24 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--mono)', fontSize: 11,
                      padding: '4px 12px',
                      background: 'rgba(41,121,255,0.1)',
                      border: '1px solid rgba(41,121,255,0.25)',
                      color: '#7aa2f7',
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 20, borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 2,
                    textTransform: 'uppercase', color: 'var(--cyan)',
                    display: 'flex', alignItems: 'center', gap: 6, transition: '0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    ⊞ GitHub Repo
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 2,
                    textTransform: 'uppercase', color: 'var(--txt2)', transition: '0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--txt2)'}
                  >
                    ↗ View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #projects { padding: 80px 24px !important; }
          #projects > div > div:last-child > div { grid-template-columns: 1fr !important; }
          #projects > div > div:last-child > div > div:first-child { padding: 32px !important; }
        }
      `}</style>
    </section>
  );
}
