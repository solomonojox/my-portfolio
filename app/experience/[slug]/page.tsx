'use client';

import { notFound, useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { experiences } from '@/lib/data';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ExperienceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [exp] = useState(() => experiences.find(e => e.slug === slug));

  useEffect(() => {
    if (!exp) {
      notFound();
    }
  }, [exp]);

  if (!exp) {
    return null; // or a loading spinner
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.25rem' }}>
      <button onClick={handleBack} className="back-link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>
        <ArrowLeft size={13} /> Back to experience
      </button>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '2rem' }} className='flex-col md:flex-row'>
        {exp.logo ? (
          <Image
            src={exp.logo}
            alt=''
            width={80}
            height={80}
          />
        ) : (
          <div className="icon-badge" style={{ width: '4rem', height: '4rem', fontSize: '1.5rem' }}>
            {exp.company[0]}
          </div>
        )}

        <div>
          <h1 className="display-heading text-[1.5rem] md:text-[2.5rem]" style={{ color: 'var(--text)', marginBottom: '0.25rem' }}>{exp.role}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{exp.company}</span>
            <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>{exp.period}</span>
            <span className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: 'var(--text-3)' }}>
              <MapPin size={11} /> {exp.workMode}
            </span>
          </div>
        </div>
      </div>

      <div className="divider" />

      <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-2)', marginBottom: '2.5rem' }}>
        {exp.longDescription ?? exp.shortDescription}
      </p>

      {exp.highlights && (
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Highlights</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {exp.highlights.map((h, i) => (
              <li key={i} className="highlight-item">
                <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.125rem' }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {exp.tech && (
        <div>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Tech used</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {exp.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}