import Link from 'next/link';
import { experiences } from '@/lib/data';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>Career</p>
        <h1 className="display-heading" style={{ fontSize: '2rem', color: 'var(--text)' }}>Experience</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', color: 'var(--text-2)' }}>
          Companies I&apos;ve worked with and problems I&apos;ve helped solve.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className=''>
        {experiences.map((exp) => (
          <article key={exp.slug} className="exp-card card-hover">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }} className='flex-col md:flex-row'>
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt=''
                  width={80}
                  height={80}
                />
              ) : (
                <div className="icon-badge" style={{ width: '3rem', height: '3rem', fontSize: '1.125rem' }}>
                  {exp.company[0]}
                </div>
              )}

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text)' }}>
                      {exp.role}
                      <span className="mono" style={{ marginLeft: '0.5rem', fontSize: '0.72rem', fontWeight: 400, color: 'var(--text-3)' }}>
                        {exp.period}
                      </span>
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent)' }}>{exp.company}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)' }}>
                        <MapPin size={11} /> {exp.workMode}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/experience/${exp.slug}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--accent)', flexShrink: 0,
                      padding: '0.375rem 0.75rem', borderRadius: '0.5rem',
                      border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                      background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                    }}
                  >
                    Details <ArrowUpRight size={12} />
                  </Link>
                </div>

                <p style={{ marginTop: '0.625rem', fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--text-2)' }}>
                  {exp.shortDescription}
                </p>

                {exp.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.75rem' }}>
                    {exp.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
