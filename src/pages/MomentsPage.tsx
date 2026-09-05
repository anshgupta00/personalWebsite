import { useRef, useEffect, useState, useCallback } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Lightbox from '../components/Lightbox'
import { moments, type MomentCategory } from '../data/moments'

// Varying aspect ratios for visual interest
const aspectRatios = ['75%', '100%', '66%', '85%', '75%', '80%', '95%', '75%', '90%']

const FILTERS: { label: string; value: MomentCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Tech & Training', value: 'tech' },
  { label: 'Events & Leadership', value: 'events' },
  { label: 'Community', value: 'community' },
]

const SECTION_META: Record<MomentCategory, { title: string; description: string }> = {
  tech: {
    title: 'Tech & Training',
    description: 'AI/ML fellowships, cybersecurity workshops, and online learning.',
  },
  events: {
    title: 'Events & Leadership',
    description: 'Conferences, campus events, and hosting milestones.',
  },
  community: {
    title: 'Community & Advocacy',
    description: 'Grassroots campaigns, children\'s rights work, and cultural moments.',
  },
}

function MomentCard({
  moment,
  globalIndex,
  onClick,
}: {
  moment: (typeof moments)[number]
  globalIndex: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const ratio = aspectRatios[globalIndex % aspectRatios.length]

  return (
    <div
      ref={ref}
      className="moment-item"
      id={`moment-${moment.id}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View: ${moment.caption}`}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div style={{ position: 'relative', width: '100%', paddingBottom: ratio, overflow: 'hidden' }}>
        <div
          className="img-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: loaded ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        />
        {inView && (
          <img
            src={moment.src}
            alt={moment.alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        )}
      </div>

      <div className="moment-caption">
        <p style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 500, marginBottom: '0.2rem' }}>
          {moment.caption}
        </p>
        <p style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
          {moment.date} · {moment.context}
        </p>
      </div>
    </div>
  )
}

export default function MomentsPage() {
  const [activeFilter, setActiveFilter] = useState<MomentCategory | 'all'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filtered list used for lightbox indexing
  const filtered = activeFilter === 'all'
    ? moments
    : moments.filter(m => m.category === activeFilter)

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () => setLightboxIndex(i => (i === null || i === 0) ? filtered.length - 1 : i - 1),
    [filtered.length]
  )
  const next = useCallback(
    () => setLightboxIndex(i => (i === null || i === filtered.length - 1) ? 0 : i + 1),
    [filtered.length]
  )

  // Close lightbox when filter changes
  useEffect(() => { setLightboxIndex(null) }, [activeFilter])

  // Group filtered list by category (maintaining order: tech → events → community)
  const ORDER: MomentCategory[] = ['tech', 'events', 'community']
  const grouped = ORDER.reduce<Record<MomentCategory, typeof moments>>((acc, cat) => {
    acc[cat] = filtered.filter(m => m.category === cat)
    return acc
  }, { tech: [], events: [], community: [] })

  const showSections = activeFilter === 'all'

  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container-site">
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>Moments</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Moments that made the journey.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Workshops, events, training sessions, community work, and occasional milestones.
            A personal archive rather than a highlight reel.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={180}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem',
            }}
          >
            {FILTERS.map(f => (
              <button
                key={f.value}
                id={`filter-${f.value}`}
                onClick={() => setActiveFilter(f.value)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeFilter === f.value ? '#1A1916' : 'transparent',
                  color: activeFilter === f.value ? '#F7F4EF' : 'var(--color-text-secondary)',
                  borderColor: activeFilter === f.value ? '#1A1916' : 'var(--color-border)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <hr className="divider" style={{ marginBottom: '3rem' }} />

        {showSections ? (
          // Sectioned view (All filter)
          ORDER.map(cat => {
            const items = grouped[cat]
            if (items.length === 0) return null
            const meta = SECTION_META[cat]
            // offset for global lightbox index
            const sectionOffset = filtered.indexOf(items[0])
            return (
              <div key={cat} style={{ marginBottom: '5rem' }}>
                {/* Section header */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <p
                    className="text-label"
                    style={{ marginBottom: '0.35rem', color: 'var(--color-accent)' }}
                  >
                    {cat.toUpperCase()}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                      color: 'var(--color-text)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {meta.title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', maxWidth: '480px' }}>
                    {meta.description}
                  </p>
                </div>

                <div className="moments-grid">
                  {items.map((moment, i) => (
                    <MomentCard
                      key={moment.id}
                      moment={moment}
                      globalIndex={i}
                      onClick={() => openLightbox(sectionOffset + i)}
                    />
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          // Flat grid (single category filter)
          <div className="moments-grid">
            {filtered.map((moment, i) => (
              <MomentCard
                key={moment.id}
                moment={moment}
                globalIndex={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          moments={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </main>
  )
}
