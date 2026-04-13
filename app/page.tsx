import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="page-wrap">
      <section style={{ marginBottom: '5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'start',
          gap: '2rem',
          flexWrap: 'wrap',
        }} className='justify-center md:justify-between'>
          {/* Text */}
          <div style={{ flex: '1 1 20rem', minWidth: 0 }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Available for work</p>
            <h1 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: 'var(--text)', marginBottom: '1.25rem' }}>
              I build things<br />
              <span style={{ color: 'var(--accent)' }}>for the web.</span>
            </h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '36rem', color: 'var(--text-2)' }}>
              Fullstack developer with a bias for shipping. I care deeply about
              developer experience, performance, and interfaces that feel alive.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link href="/projects" className="btn-primary">
                View projects <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>

          {/* Avatar */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'min(18rem, 100%)' }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
              {/* Accent ring */}
              <div style={{
                position: 'absolute', inset: '-3px',
                borderRadius: '50%',
                background: 'conic-gradient(var(--accent) 0deg, transparent 200deg)',
                zIndex: 0,
              }} />
              {/* Image */}
              <div style={{
                position: 'absolute', inset: '3px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg-2)',
                zIndex: 1,
              }}>
                <Image
                  src="/avatar.png"
                  alt="Solomon Akpa"
                  sizes='24'
                  loading="eager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Available dot */}
              <div style={{
                position: 'absolute', bottom: '0.6rem', right: '0.6rem',
                width: '0.875rem', height: '0.875rem',
                borderRadius: '50%',
                background: '#22c55e',
                border: '2px solid var(--bg)',
                zIndex: 2,
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '0.25rem' }}>Selected work</p>
            <h2 className="display-heading" style={{ fontSize: '1.875rem', color: 'var(--text)' }}>Projects</h2>
          </div>
          <Link href="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
            View all <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="card-grid-2">
          {projects.map((p) => (
            <article key={p.slug} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.featured && <span className="tag">featured</span>}
                  {p.year && <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>{p.year}</span>}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                  {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><Code2 size={15} /></a>}
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><ExternalLink size={15} /></a>}
                </div>
              </div>
              <h3 className="display-heading" style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: '1.7', marginBottom: '1rem', flex: 1 }}>{p.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {p.tags.slice(0, 3).map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <Link href={`/projects/${p.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', flexShrink: 0, marginLeft: '0.5rem' }}>
                  Read more <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
