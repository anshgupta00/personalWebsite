import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { timeline } from '../data/timeline'

export default function JourneySection() {
  // Show first 2 chapters on home page for a clean, concise section
  const preview = timeline.slice(0, 2)

  return (
    <section
      id="section-journey"
      aria-label="Journey preview"
      style={{ padding: '3.5rem 0', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container-site">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <ScrollReveal>
            <h2 className="text-headline" style={{ fontFamily: 'var(--font-serif)' }}>
              The road so far.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link
              to="/journey"
              id="journey-view-all"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '0.1rem',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-accent)'
                e.currentTarget.style.borderColor = 'var(--color-accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
            >
              Full journey →
            </Link>
          </ScrollReveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {preview.map((chapter, i) => (
            <ScrollReveal key={chapter.period} delay={i * 80}>
              <div className="chapter">
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      fontWeight: 400,
                      paddingTop: '0.35rem',
                    }}
                  >
                    {chapter.period}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    {chapter.title}
                  </p>
                  {chapter.org && (
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      {chapter.org} {chapter.location && `· ${chapter.location}`}
                    </p>
                  )}
                  <p className="text-body" style={{ maxWidth: '600px' }}>
                    {chapter.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
