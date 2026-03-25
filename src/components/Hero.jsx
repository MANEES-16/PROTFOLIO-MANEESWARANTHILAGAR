import React, { useEffect, useState } from 'react';
import { PERSONAL } from '../data';

const TYPED_ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React.js Developer',
  'Node.js Developer',
];

function TypedText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = TYPED_ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % TYPED_ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span style={{ color: 'var(--cyan)' }}>
      {displayed}
      <span style={{ animation: 'blink 1s infinite', color: 'var(--cyan)' }}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 60px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%', width: 320, height: 320,
        borderRadius: '50%', border: '1px solid rgba(0,229,255,0.07)',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '13%', width: 200, height: 200,
        borderRadius: '50%', border: '1px solid rgba(0,229,255,0.1)',
        animation: 'float 4s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div>
            {/* Greeting */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: 3,
              color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 20,
              animation: 'fadeUp 0.6s ease both',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{
                display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
                background: 'var(--green)', animation: 'pulse 2s infinite',
              }} />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(44px, 7vw, 84px)', fontWeight: 900,
              lineHeight: 1.0, color: '#fff', marginBottom: 12,
              animation: 'fadeUp 0.6s 0.1s ease both',
            }}>
              {PERSONAL.name.split(' ')[0]}<br />
              <span style={{
                WebkitTextStroke: '1px var(--cyan)',
                color: 'transparent',
              }}>
                {PERSONAL.name.split(' ')[1]}.
              </span>
            </h1>

            {/* Typed role */}
            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 26px)', fontFamily: 'var(--mono)',
              fontWeight: 400, marginBottom: 28, minHeight: 36,
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              <TypedText />
            </p>

            {/* Bio */}
            <p style={{
              fontSize: 16, lineHeight: 1.9, color: 'var(--txt2)',
              maxWidth: 560, marginBottom: 44,
              animation: 'fadeUp 0.6s 0.3s ease both',
            }}>
              {PERSONAL.bio}
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap',
              animation: 'fadeUp 0.6s 0.4s ease both',
            }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'var(--cyan)', color: '#060b18',
                  fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700,
                  letterSpacing: 2, textTransform: 'uppercase',
                  padding: '14px 36px', border: 'none', cursor: 'pointer', transition: '0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#fff'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--cyan)'; e.target.style.transform = 'none'; }}
              >
                View Projects
              </button>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'transparent', color: 'var(--cyan)',
                  fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700,
                  letterSpacing: 2, textTransform: 'uppercase',
                  padding: '14px 36px', border: '1px solid var(--cyan)', transition: '0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cyan-glow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
              >
                GitHub Profile ↗
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: 48, marginTop: 64, paddingTop: 48,
              borderTop: '1px solid var(--border)',
              animation: 'fadeUp 0.6s 0.5s ease both',
            }}>
              {[
                { n: '15+', label: 'Projects Built' },
                { n: '3', label: 'Major MERN Apps' },
                { n: '100%', label: 'Open Source' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                    <span style={{ color: 'var(--cyan)' }}>{n}</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 2,
                    textTransform: 'uppercase', color: 'var(--txt2)', marginTop: 6,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
            animation: 'fadeUp 0.6s 0.3s ease both',
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 180, height: 180, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cyan), var(--blue))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 64, fontWeight: 900, color: '#060b18',
                border: '3px solid var(--cyan)',
                boxShadow: '0 0 40px rgba(0,229,255,0.2)',
                animation: 'float 5s ease-in-out infinite',
              }}>
                {PERSONAL.avatar}
              </div>
              {/* Status badge */}
              <div style={{
                position: 'absolute', bottom: 12, right: 0,
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '4px 12px',
                fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)',
                display: 'flex', alignItems: 'center', gap: 6,
                whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
                Open to work
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'GH', href: PERSONAL.github, title: 'GitHub' },
                { label: 'IN', href: PERSONAL.linkedin, title: 'LinkedIn' },
                { label: '✉', href: `mailto:${PERSONAL.email}`, title: 'Email' },
              ].map(({ label, href, title }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={title} style={{
                  width: 42, height: 42, borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--txt2)',
                  transition: '0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--txt2)'; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #home > div > div { grid-template-columns: 1fr !important; }
          #home > div > div > div:last-child { display: none !important; }
          #home { padding: 120px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
