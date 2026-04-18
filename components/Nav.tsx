'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme, Theme } from './ThemeProvider';
import { Sun, Moon, Zap, FileText, Sparkles, Monitor, Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  // { href: '/contributions', label: 'Contributions' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

const themes: { value: Theme; label: string; Icon: React.ElementType }[] = [
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'retro', label: 'Retro', Icon: Zap },
  { value: 'paper', label: 'Paper', Icon: FileText },
  { value: 'aurora', label: 'Aurora', Icon: Sparkles },
  { value: 'system', label: 'System', Icon: Monitor },
];

function isActive(href: string, pathname: string): boolean {
  if (href === '/') {
    return pathname === '/' || pathname === '/projects' || pathname.startsWith('/projects/');
  }
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const current = themes.find(t => t.value === theme) ?? themes[0];

  return (
    <header style={{
      background: 'var(--nav-bg)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    }}>
      <nav style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'var(--bg)' }}>
            <Code2 size={14} strokeWidth={2.5} />
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)' }}>
            Solomon<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'none', alignItems: 'center', listStyle: 'none', gap: 0 }} className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`nav-link${isActive(href, pathname) ? ' active' : ''}`}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Theme picker */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setThemeOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.375rem 0.75rem', borderRadius: '0.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                border: '1px solid var(--border)', color: 'var(--text-2)',
                background: 'var(--bg-2)', cursor: 'pointer',
              }}
            >
              <current.Icon size={12} />
              <span style={{ display: 'none' }} className="theme-label">{current.label}</span>
            </button>

            {themeOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setThemeOpen(false)} />
                <div style={{
                  position: 'absolute', right: 0, top: '2.25rem',
                  background: 'var(--bg-2)', border: '1px solid var(--border)',
                  borderRadius: '0.625rem', overflow: 'hidden', zIndex: 50,
                  width: '9rem', padding: '0.25rem 0',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}>
                  {themes.map(({ value, label, Icon }) => (
                    <button
                      key={value}
                      onClick={() => { setTheme(value); setThemeOpen(false); }}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        color: theme === value ? 'var(--accent)' : 'var(--text-2)',
                        background: theme === value ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : 'transparent',
                        border: 'none', cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      <Icon size={12} /> {label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ padding: '0.375rem', color: 'var(--text-2)', background: 'none', border: 'none', cursor: 'pointer' }}
            className="hamburger"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }} className="mobile-menu">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.875rem 1.25rem',
                borderBottom: '1px solid var(--border)',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: isActive(href, pathname) ? 'var(--accent)' : 'var(--text-2)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
          .theme-label { display: inline !important; }
        }
      `}</style>
    </header>
  );
}