import React, { useState } from 'react';
import { SKILLS, TECH_BARS } from '../data';

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ padding: '100px 60px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 4,
        color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12,
      }}>What I know</div>
      <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
        Skills & <span style={{ color: 'var(--cyan)' }}>Tech Stack</span>
      </h2>
      <div style={{ width: 48, height: 2, background: 'var(--cyan)', marginBottom: 56 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginBottom: 72 }}>
        {SKILLS.map((skill, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--bg2)', border: `1px solid ${hovered === i ? 'var(--border2)' : 'var(--border)'}`,
              padding: '28px 28px 24px', position: 'relative', overflow: 'hidden',
              transform: hovered === i ? 'translateY(-6px)' : 'none',
              transition: '0.3s', cursor: 'default',
            }}
          >
            {/* top accent */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, var(--cyan), var(--blue))',
              opacity: hovered === i ? 1 : 0.5, transition: '0.3s',
            }} />
            <div style={{ fontSize: 30, marginBottom: 14 }}>{skill.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: 0.5 }}>
              {skill.category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skill.items.map(item => (
                <span key={item} style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 0.5,
                  padding: '4px 10px',
                  background: 'rgba(0,229,255,0.06)',
                  border: '1px solid rgba(0,229,255,0.18)',
                  color: 'var(--cyan)',
                }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency bars */}
      <div style={{
        background: 'var(--bg2)', border: '1px solid var(--border)',
        padding: '40px 48px',
      }}>
        <h3 style={{
          fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 36,
          fontFamily: 'var(--mono)',
        }}>
          // Proficiency Level
        </h3>
        {TECH_BARS.map(({ label, pct }) => (
          <div key={label} style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 14, color: 'var(--txt)' }}>{label}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--cyan)' }}>{pct}%</span>
            </div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
              <div style={{
                height: '100%', width: `${pct}%`,
                background: 'linear-gradient(90deg, var(--cyan), var(--blue))',
                borderRadius: 2, transition: '1s ease',
              }} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #skills { padding-left: 60px; padding-right: 60px; }
        @media(max-width:768px){ #skills { padding: 80px 24px !important; } }
      `}</style>
    </section>
  );
}
