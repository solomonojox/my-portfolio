import { contributions } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

const typeColor: Record<string, string> = {
  'Bug Fix': '#f59e0b',
  'Feature': '#10b981',
  'Docs':    '#6366f1',
  'Design':  '#ec4899',
  'Other':   '#64748b',
};

export default function ContributionsPage() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>Open source</p>
        <h1 className="display-heading" style={{ fontSize: '3rem', color: 'var(--text)' }}>Contributions</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', color: 'var(--text-2)' }}>
          Giving back to the tools that power my work.
        </p>
      </div>

      <div className="card-grid-2">
        {contributions.map((c) => {
          const color = typeColor[c.type] ?? '#64748b';
          return (
            <article key={c.slug} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '2px 10px', borderRadius: '999px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    background: color + '18', color, border: '1px solid ' + color + '33',
                  }}>
                    {c.type}
                  </span>
                  {c.year && <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>{c.year}</span>}
                </div>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ flexShrink: 0 }}>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                  {c.project}
                </h2>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--text-2)' }}>{c.description}</p>
              </div>

              {c.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto' }}>
                  {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
