import React from 'react';
import { PERSONAL } from '../data';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)', borderTop: '1px solid var(--border)',
      padding: '40px 60px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 700, color: 'var(--cyan)', marginBottom: 4,
          }}>&lt;MT /&gt;</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--txt2)' }}>
            Manees Thilagar · Full Stack Developer
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'GitHub', href: PERSONAL.github },
            { label: 'LinkedIn', href: PERSONAL.linkedin },
            { label: 'Email', href: `mailto:${PERSONAL.email}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 1.5,
              textTransform: 'uppercase', color: 'var(--txt2)', transition: '0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--txt2)'}
            >{label}</a>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--txt3)',
        }}>
          © {new Date().getFullYear()} Manees Thilagar. Built with React.
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer { padding: 32px 24px !important; }
          footer > div { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
