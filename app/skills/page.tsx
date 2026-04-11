import { skills } from '@/lib/data';
import { Star } from 'lucide-react';
import Image from 'next/image';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-row">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={11} fill={i <= rating ? 'var(--accent)' : 'transparent'}
          style={{ color: i <= rating ? 'var(--accent)' : 'var(--text-3)' }} />
      ))}
    </div>
  );
}

const categories = ['Frontend', 'Backend', 'Language', 'Database', 'DevOps', 'Design', 'Other'];

export default function SkillsPage() {
  const grouped = categories
    .map(cat => ({ cat, items: skills.filter(s => s.category === cat) }))
    .filter(g => g.items.length > 0);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>Toolkit</p>
        <h1 className="display-heading" style={{ fontSize: '3rem', color: 'var(--text)' }}>Skills</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', color: 'var(--text-2)' }}>
          Technologies I work with day-to-day and the depth I&apos;ve reached with each.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {grouped.map(({ cat, items }) => (
          <section key={cat}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="section-label">{cat}</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>
            <div className="card-grid-3">
              {items.map(skill => (
                <article key={skill.name} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                  {/* <div className="icon-badge">{skill.name.slice(0, 2)}</div> */}
                  <Image src={skill.logo || `/icons/${skill.name.toLowerCase()}.svg`} alt={skill.name} width={32} height={32} style={{ borderRadius: '4px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.375rem', width: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>
                      {skill.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--text-2)' }}>
                      {skill.shortDescription}
                    </p>
                    <StarRating rating={skill.proficiency} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
