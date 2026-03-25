import React, { useState } from 'react';
import { PERSONAL } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const inputStyle = (field) => ({
    width: '100%', background: 'var(--bg3)',
    border: `1px solid ${errors[field] ? '#ff5f57' : focused === field ? 'var(--cyan)' : 'var(--border)'}`,
    color: 'var(--txt)', fontFamily: 'var(--sans)', fontSize: 15,
    padding: '13px 16px', outline: 'none', transition: '0.2s',
  });

  const CONTACTS = [
    {
      icon: '✉️', label: 'Email', value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`, display: PERSONAL.email,
    },
    {
      icon: '💻', label: 'GitHub', value: 'MANEES-16',
      href: PERSONAL.github, display: 'github.com/MANEES-16',
    },
    {
      icon: '🔗', label: 'LinkedIn', value: 'Manees Thilagar',
      href: PERSONAL.linkedin, display: 'Manees Thilagar',
    },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg2)', padding: '100px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 4,
          color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 12,
        }}>Get in touch</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
          Let's <span style={{ color: 'var(--cyan)' }}>Connect</span>
        </h2>
        <div style={{ width: 48, height: 2, background: 'var(--cyan)', marginBottom: 56 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>

          {/* Left: contact info */}
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--txt2)', marginBottom: 40 }}>
              I'm currently open to new opportunities — freelance, full-time, or collaboration. Whether you have a project in mind or just want to say hi, my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {CONTACTS.map(({ icon, label, href, display }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  padding: '18px 22px', transition: '0.2s', color: 'inherit',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--cyan-glow)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--txt2)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 14, color: 'var(--cyan)', wordBreak: 'break-all' }}>{display}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: 40 }}>
            <form onSubmit={onSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {['name', 'email'].map(field => (
                  <div key={field}>
                    <label style={{
                      display: 'block', fontFamily: 'var(--mono)', fontSize: 10,
                      letterSpacing: 2, textTransform: 'uppercase', color: 'var(--txt2)', marginBottom: 8,
                    }}>{field}</label>
                    <input
                      name={field} value={form[field]} onChange={onChange}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                      style={inputStyle(field)}
                      onFocus={() => setFocused(field)} onBlur={() => setFocused(null)}
                    />
                    {errors[field] && <div style={{ color: '#ff5f57', fontSize: 11, marginTop: 4 }}>{errors[field]}</div>}
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block', fontFamily: 'var(--mono)', fontSize: 10,
                  letterSpacing: 2, textTransform: 'uppercase', color: 'var(--txt2)', marginBottom: 8,
                }}>Subject</label>
                <input
                  name="subject" value={form.subject} onChange={onChange}
                  placeholder="What's this about?"
                  style={inputStyle('subject')}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block', fontFamily: 'var(--mono)', fontSize: 10,
                  letterSpacing: 2, textTransform: 'uppercase', color: 'var(--txt2)', marginBottom: 8,
                }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={onChange}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle('message'), height: 130, resize: 'vertical' }}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                />
                {errors.message && <div style={{ color: '#ff5f57', fontSize: 11, marginTop: 4 }}>{errors.message}</div>}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', background: 'var(--cyan)', color: '#060b18',
                  fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700,
                  letterSpacing: 2, textTransform: 'uppercase', padding: 16,
                  border: 'none', cursor: 'pointer', transition: '0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#fff'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--cyan)'; }}
              >
                Send Message →
              </button>

              {sent && (
                <div style={{
                  marginTop: 16, background: 'rgba(0,230,118,0.08)',
                  border: '1px solid rgba(0,230,118,0.3)',
                  color: 'var(--green)', padding: '14px 18px',
                  fontFamily: 'var(--mono)', fontSize: 13, textAlign: 'center',
                }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact { padding: 80px 24px !important; }
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
