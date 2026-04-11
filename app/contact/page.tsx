'use client';

import { useState } from 'react';
import { Code2, X, Link2, Mail, Globe, Send, CheckCircle2 } from 'lucide-react';

const socials = [
  { href: 'https://github.com/solomonojox', Icon: Code2, label: 'GitHub', handle: 'solomonojox' },
  { href: 'https://twitter.com/solomonakpas', Icon: X, label: 'X', handle: '@solomonakpas' },
  { href: 'https://linkedin.com/in/solomonakpas', Icon: Link2, label: 'LinkedIn', handle: 'solomonakpas' },
  { href: 'mailto:solomonakpas@gmail.com', Icon: Mail, label: 'Email', handle: 'solomonakpas@gmail.com' },
  { href: 'https://solomonakpas.com', Icon: Globe, label: 'Website', handle: 'solomonakpas.com' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>Get in touch</p>
        <h1 className="display-heading" style={{ fontSize: '3rem', color: 'var(--text)' }}>Contact</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', color: 'var(--text-2)' }}>
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '3rem' }} className="contact-grid">
        {/* Socials */}
        <div>
          <p className="section-label" style={{ marginBottom: '1.25rem' }}>Find me on</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {socials.map(({ href, Icon, label, handle }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="card card-hover"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="icon-badge"><Icon size={16} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>{label}</p>
                  <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <p className="section-label" style={{ marginBottom: '1.25rem' }}>Send a message</p>
          {sent ? (
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center', padding: '3rem 1.5rem' }}>
              <CheckCircle2 size={40} style={{ color: 'var(--accent)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text)' }}>Message sent!</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name"
                  value={form.name} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                  value={form.email} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="What's on your mind?"
                  value={form.message} onChange={handleChange} className="form-input"
                  style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={loading} className="btn-primary"
                style={{ justifyContent: 'center', opacity: loading ? 0.6 : 1 }}>
                {loading ? (
                  <>
                    <span style={{ width: '0.875rem', height: '0.875rem', borderRadius: '50%', border: '2px solid var(--bg)', borderTopColor: 'transparent', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} />
                    Sending…
                  </>
                ) : (
                  <><Send size={14} /> Send message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
