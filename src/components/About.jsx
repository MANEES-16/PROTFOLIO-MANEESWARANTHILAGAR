import React from 'react';
import { PERSONAL } from '../data';

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--bg2)', padding: '100px 60px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* Left: code block aesthetic */}
          <div style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            borderRadius: 2, overflow: 'hidden',
          }}>
            {/* Window bar */}
            <div style={{
              background: 'var(--bg4)', padding: '10px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid var(--border)',
            }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--txt2)',
                marginLeft: 8,
              }}>about-me.js</span>
            </div>
            {/* Code content */}
            <div style={{ padding: '28px 32px', fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 2 }}>
              <div><span style={{ color: '#7aa2f7' }}>const</span> <span style={{ color: 'var(--cyan)' }}>developer</span> = {'{'}</div>
              <div style={{ paddingLeft: 24 }}>
                <div><span style={{ color: '#9ece6a' }}>name</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#e0af68' }}>"Manees Thilagar"</span>,</div>
                <div><span style={{ color: '#9ece6a' }}>role</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#e0af68' }}>"Full Stack Developer"</span>,</div>
                <div><span style={{ color: '#9ece6a' }}>stack</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#7aa2f7' }}>["MERN"</span><span style={{ color: 'var(--txt2)' }}>, </span><span style={{ color: '#7aa2f7' }}>"React"</span><span style={{ color: 'var(--txt2)' }}>, </span><span style={{ color: '#7aa2f7' }}>"Node"]</span>,</div>
                <div><span style={{ color: '#9ece6a' }}>passion</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#e0af68' }}>"Building real products"</span>,</div>
                <div><span style={{ color: '#9ece6a' }}>email</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#e0af68' }}>"{PERSONAL.email}"</span>,</div>
                <div><span style={{ color: '#9ece6a' }}>openToWork</span><span style={{ color: 'var(--txt2)' }}>: </span><span style={{ color: '#ff9e64' }}>true</span>,</div>
              </div>
              <div>{'}'}</div>
              <div style={{ marginTop: 12, color: 'var(--txt3)' }}>{'// Always learning, always building'}</div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 4,
              color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12,
            }}>Who I am</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
              About <span style={{ color: 'var(--cyan)' }}>Me</span>
            </h2>
            <div style={{ width: 48, height: 2, background: 'var(--cyan)', marginBottom: 28 }} />
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--txt2)', marginBottom: 20 }}>
              I'm <strong style={{ color: '#fff' }}>Manees Thilagar</strong>, a passionate Full Stack Developer specializing in the MERN stack. I love building scalable, user-friendly web applications that solve real problems.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--txt2)', marginBottom: 32 }}>
              From crafting pixel-perfect UIs with React.js to architecting robust RESTful APIs with Node.js and Express, I bring end-to-end development expertise to every project. I've built 15+ projects ranging from e-commerce platforms to social media apps and gym management systems.
            </p>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '📧', label: 'Email', val: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: '💼', label: 'GitHub', val: 'MANEES-16', href: PERSONAL.github },
                { icon: '🔗', label: 'LinkedIn', val: 'Manees Thilagar', href: PERSONAL.linkedin },
                { icon: '💡', label: 'Focus', val: 'MERN Stack', href: null },
              ].map(({ icon, label, val, href }) => (
                <div key={label} style={{
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 2, color: 'var(--txt2)', textTransform: 'uppercase' }}>{label}</div>
                    {href
                      ? <a href={href} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'var(--cyan)', wordBreak: 'break-all' }}>{val}</a>
                      : <div style={{ fontSize: 13, color: '#fff' }}>{val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #about > div > div { grid-template-columns: 1fr !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
