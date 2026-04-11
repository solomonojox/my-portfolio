'use client';
import { Code2, X, Link2, Mail, Globe } from 'lucide-react';

const socials = [
  { href: 'https://github.com/solomonojox', Icon: Code2, label: 'GitHub' },
  { href: 'https://twitter.com/solomonakpas', Icon: X, label: 'X' },
  { href: 'https://linkedin.com/in/solomonakpas', Icon: Link2, label: 'LinkedIn' },
  { href: 'mailto:solomonakpas@gmail.com', Icon: Mail, label: 'Email' },
  { href: 'https://solomonakpas.com', Icon: Globe, label: 'Website' },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-24 p-4"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}
    >
      <style>{`
        .footer-link { color: var(--text-3); transition: all 0.2s ease; }
        .footer-link:hover { color: var(--accent); transform: translateY(-2px); }
      `}</style>

      <div className="mx-auto px-5 py-10 flex flex-col items-center gap-6" style={{ padding: 20 }}>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer-link"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs text-center"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}
        >
          © {new Date().getFullYear()} solomon — built with Next.js
        </p>

      </div>
    </footer>
  );
}