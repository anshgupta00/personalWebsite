import ScrollReveal from '../components/ScrollReveal'
import { timeline } from '../data/timeline'

export default function JourneyPage() {
  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container-site">
        {/* Header */}
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>Journey</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '1rem',
              maxWidth: '700px',
            }}
          >
            The road so far.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '520px', marginBottom: '5rem' }}>
            Engineering, teaching, community work, and building. A few chapters in a story
            that started well before the first line of code.
          </p>
        </ScrollReveal>

        <hr className="divider" style={{ marginBottom: '4rem' }} />

        {/* All chapters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {timeline.map((chapter, i) => (
            <ScrollReveal key={chapter.period} delay={i * 60}>
              <div
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '3rem',
                  marginBottom: '3rem',
                }}
              >
                <div className="chapter">
                  <div style={{ paddingTop: '0.25rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-accent)',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {chapter.period}
                    </p>
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {chapter.title}
                    </h2>
                    {chapter.org && (
                      <p
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-text-muted)',
                          marginBottom: '1rem',
                        }}
                      >
                        {chapter.org}
                        {chapter.location && ` · ${chapter.location}`}
                      </p>
                    )}
                    <p
                      className="text-body"
                      style={{ maxWidth: '600px', marginBottom: chapter.tags?.length ? '1.25rem' : 0 }}
                    >
                      {chapter.description}
                    </p>
                    {chapter.tags && chapter.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {chapter.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  )
}
