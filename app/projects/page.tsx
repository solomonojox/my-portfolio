import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>Portfolio</p>
        <h1 className="display-heading" style={{ fontSize: '3rem', color: 'var(--text)' }}>Projects</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', color: 'var(--text-2)' }}>
          A collection of things I&apos;ve built — side projects, client work, and experiments.
        </p>
      </div>

      <div className="card-grid-2">
        {projects.map((p) => (
          <article key={p.slug} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.featured && <span className="tag">featured</span>}
                {p.year && <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>{p.year}</span>}
              </div>
              {/* <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><Code2 size={15} /></a>}
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><ExternalLink size={15} /></a>}
              </div> */}
            </div>
            <h2 className="display-heading" style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{p.title}</h2>
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
    </div>
  );
}
