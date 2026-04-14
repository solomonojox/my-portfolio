import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeft, Code2, ExternalLink, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  console.log(project.type)

  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.25rem' }}>
      <Link href="/projects" className="back-link">
        <ArrowLeft size={13} /> Back to projects
      </Link>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {project.featured && <span className="tag">featured</span>}
          {project.year && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-3)' }}>
              <Calendar size={11} /> {project.year}
            </span>
          )}
        </div>
        <h1 className="display-heading" style={{ fontSize: '3rem', color: 'var(--text)', marginBottom: '1rem' }}>{project.title}</h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-2)' }}>{project.description}</p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Code2 size={14} /> View Source
          </a>
        )}
      </div>

      <div className="divider" />

      {(project.images?.length ?? 0) > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>
            Screenshots
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {project.images?.map((img, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'var(--card-bg)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                }}
              >
                {/* <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                /> */}

                {project.type === 'web' ? (
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    loading="eager"
                    height={300}
                    width={200}
                  />
                ) : (
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    loading="eager"
                    height={700}
                    width={200}
                  />

                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          fontSize: '1rem',
          lineHeight: '1.9',
          color: 'var(--text-2)',
          marginBottom: '2.5rem',
        }}
      >
        {(project.longDescription ?? project.description)
          .split('\n\n')
          .map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.75rem' }}>
          <Tag size={13} style={{ color: 'var(--text-3)' }} />
          <span className="section-label">Tech stack</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
