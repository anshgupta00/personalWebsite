import { useState, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'
import { journalPosts, journalCategories, type JournalCategory } from '../data/journal'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<JournalCategory | 'All'>('All')
  const [animating, setAnimating] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All'
    ? journalPosts
    : journalPosts.filter(p => p.category === activeCategory)

  const handleFilter = (cat: JournalCategory | 'All') => {
    if (cat === activeCategory) return
    setAnimating(true)
    setTimeout(() => {
      setActiveCategory(cat)
      setAnimating(false)
    }, 150)
  }

  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <SEO
        title="Journal & Tech Articles — Shyam Krishna Gupta | AI & Software Insights"
        description="Technical essays, AI tutorials, deep learning guides, software architecture principles, and technology commentary by Shyam Krishna Gupta in Nepal."
        keywords="Shyam Krishna Gupta Blog, AI Articles Nepal, Software Engineering Essays Nepal, Deep Learning Tutorials Nepal"
        canonical="https://anshgupta.com.np/journal"
      />
      <div className="container-site">
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>Journal</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '0.75rem',
            }}
          >
            Things I've learned, built,<br />questioned and discovered.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '480px', marginBottom: '3.5rem' }}>
            Thoughts, technical notes, and essays on AI, software engineering, and technology.
          </p>
        </ScrollReveal>

        {/* Category filter */}
        {journalCategories.length > 0 && journalPosts.length > 0 && (
          <ScrollReveal delay={200}>
            <div
              role="group"
              aria-label="Filter by category"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}
            >
              {(['All', ...journalCategories] as const).map(cat => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    id={`journal-filter-${String(cat).toLowerCase().replace(/[^a-z]/g, '-')}`}
                    onClick={() => handleFilter(cat as JournalCategory | 'All')}
                    style={{
                      padding: '0.3rem 0.85rem',
                      border: '1px solid',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-sans)',
                      background: isActive ? 'var(--color-accent)' : 'transparent',
                      borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                      color: isActive ? '#fff' : 'var(--color-text-secondary)',
                      transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        )}

        <hr className="divider" style={{ marginBottom: '3rem' }} />

        {/* Posts list / Publishing soon state */}
        <div
          ref={listRef}
          style={{
            transition: 'opacity 0.22s ease, transform 0.22s ease',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(6px)' : 'translateY(0)',
          }}
        >
          {filtered.length === 0 ? (
            <ScrollReveal delay={200}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '5rem 2rem',
                  background: 'var(--color-paper-dark)',
                  borderRadius: '4px',
                  border: '1px solid var(--color-border)',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  Will be publishing soon.
                </h2>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.6,
                  }}
                >
                  Articles, technical breakdowns, and reflections are currently in draft and will be posted soon.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            filtered.map((post, i) => (
              <article
                key={post.id}
                id={`journal-post-${post.slug}`}
                className="journal-card"
                aria-label={post.title}
                style={{
                  animationDelay: `${i * 40}ms`,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {formatDate(post.date)}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {post.readingTime} min
                      </span>
                    </div>
                    <h2 className="journal-title" style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.5rem', lineHeight: 1.4, transition: 'color 0.2s' }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      color: post.published ? 'var(--color-accent)' : 'var(--color-text-muted)',
                      border: `1px solid ${post.published ? 'var(--color-accent)' : 'var(--color-border)'}`,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '999px',
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                      marginTop: '0.15rem',
                    }}
                  >
                    {post.published ? 'Published' : 'Soon'}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
