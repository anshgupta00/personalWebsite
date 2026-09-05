import { useState, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Lightbox from '../components/Lightbox'
import { moments, type Moment } from '../data/moments'

// Curated selection requested for homepage preview (PABSON Biratnagar 1st, Fusemachines 2nd)
const FEATURED_IDS = ['m12', 'm10', 'm5', 'm1', 'm15', 'm22']

const CATEGORY_LABELS: Record<string, string> = {
  tech: 'TECH & FELLOWSHIP',
  events: 'EVENTS & LEADERSHIP',
  community: 'COMMUNITY CAMPAIGN',
}

export default function MomentsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Map the featured IDs to actual moment items
  const featuredMoments: Moment[] = FEATURED_IDS.map(
    id => moments.find(m => m.id === id) || moments[0]
  ).filter(Boolean)

  const total = featuredMoments.length

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + total) % total)
  }, [total])

  // Auto-play interval (swaps card every 4.5 seconds unless paused)
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return
    timerRef.current = setInterval(() => {
      handleNext()
    }, 4500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, lightboxIndex, handleNext])

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const lightboxPrev = useCallback(
    () =>
      setLightboxIndex(i => (i === null || i === 0 ? total - 1 : i - 1)),
    [total]
  )

  const lightboxNext = useCallback(
    () =>
      setLightboxIndex(i => (i === null || i === total - 1 ? 0 : i + 1)),
    [total]
  )

  return (
    <section
      id="section-moments"
      aria-label="Featured Moments Showcase"
      style={{ padding: '6rem 0 7rem', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}
    >
      <div className="container-site">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <ScrollReveal>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)' }} />
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  INTERACTIVE VISUAL ARCHIVE
                </p>
              </div>
              <h2
                className="text-headline"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Moments that made the journey.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              to="/moments"
              id="moments-view-all"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-paper-dark)',
                color: 'var(--color-text)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.color = 'var(--color-accent)'
                e.currentTarget.style.transform = 'translateX(2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              Explore Full Gallery
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* ── 3D Circular / Stacked Carousel Stage ── */}
        <ScrollReveal delay={150}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '1200px',
              padding: '1rem 0',
            }}
          >
            {/* Card Stack Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '680px',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transformStyle: 'preserve-3d',
              }}
            >
              {featuredMoments.map((moment, idx) => {
                // Calculate position relative to active index (-2, -1, 0, 1, 2)
                let diff = (idx - activeIndex + total) % total
                if (diff > total / 2) diff -= total

                const isActive = diff === 0
                const categoryLabel = CATEGORY_LABELS[moment.category] || moment.category.toUpperCase()

                // Calculate 3D transforms based on diff
                let translateX = diff * 220
                let scale = 1 - Math.abs(diff) * 0.15
                let opacity = 1 - Math.abs(diff) * 0.35
                let rotateY = diff * -18
                let zIndex = 10 - Math.abs(diff) * 2

                if (Math.abs(diff) > 2) {
                  opacity = 0
                  scale = 0.5
                  translateX = diff > 0 ? 450 : -450
                  zIndex = 0
                }

                return (
                  <div
                    key={moment.id}
                    onClick={() => {
                      if (isActive) {
                        openLightbox(idx)
                      } else {
                        setActiveIndex(idx)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && (isActive ? openLightbox(idx) : setActiveIndex(idx))}
                    aria-label={`Moment: ${moment.caption}`}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      maxWidth: '480px',
                      height: '350px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: isActive
                        ? '1px solid var(--color-accent)'
                        : '1px solid rgba(255,255,255,0.1)',
                      background: 'var(--color-paper-dark)',
                      cursor: 'pointer',
                      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: 'all 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
                      boxShadow: isActive
                        ? '0 20px 48px -10px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.12)'
                        : '0 8px 24px rgba(0, 0, 0, 0.08)',
                      userSelect: 'none',
                    }}
                  >
                    {/* Background Image — Crisp & Sharp */}
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                      <img
                        src={moment.src}
                        alt={moment.alt}
                        loading="eager"
                        decoding="sync"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease, filter 0.4s ease',
                          transform: isActive ? 'scale(1)' : 'scale(1.05)',
                          filter: 'contrast(1.06) brightness(1.05) saturate(1.06)',
                          WebkitFilter: 'contrast(1.06) brightness(1.05) saturate(1.06)',
                        }}
                      />

                      {/* Clean bottom gradient overlay — top remains 100% crisp & clear */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '50%',
                          background:
                            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,12,10,0.88) 100%)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Glassmorphism Category Badge Top Left */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          padding: '0.35rem 0.75rem',
                          background: 'rgba(20, 20, 18, 0.75)',
                          color: '#F7F4EF',
                          fontSize: '0.625rem',
                          fontFamily: 'var(--font-mono)',
                          borderRadius: '999px',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          letterSpacing: '0.08em',
                          border: '1px solid rgba(255,255,255,0.18)',
                          fontWeight: 600,
                        }}
                      >
                        {categoryLabel}
                      </div>

                      {/* Year Pill Top Right */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          padding: '0.35rem 0.65rem',
                          background: 'rgba(0, 0, 0, 0.6)',
                          color: 'var(--color-accent)',
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-mono)',
                          borderRadius: '4px',
                          backdropFilter: 'blur(4px)',
                          fontWeight: 600,
                        }}
                      >
                        {moment.date}
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '1.25rem 1.5rem',
                          color: '#F7F4EF',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: isActive ? '1.35rem' : '1.1rem',
                            fontWeight: 500,
                            margin: 0,
                            color: '#ffffff',
                            lineHeight: 1.25,
                            transition: 'font-size 0.3s ease',
                          }}
                        >
                          {moment.caption}
                        </h3>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                          <span style={{ fontSize: '0.8125rem', color: 'rgba(247,244,239,0.75)' }}>
                            {moment.context}
                          </span>

                          {isActive && (
                            <span
                              style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-accent)',
                                fontFamily: 'var(--font-mono)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                              }}
                            >
                              Expand ↗
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ── Carousel Navigation Controls ── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '2.5rem',
                zIndex: 20,
              }}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Moment"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-paper-dark)',
                  color: 'var(--color-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-text)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              {/* Slide Indicators Dots */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {featuredMoments.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      height: '8px',
                      width: activeIndex === i ? '28px' : '8px',
                      borderRadius: '999px',
                      background: activeIndex === i ? 'var(--color-accent)' : 'var(--color-border)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next Moment"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-paper-dark)',
                  color: 'var(--color-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-text)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox popup */}
      {lightboxIndex !== null && (
        <Lightbox
          moments={featuredMoments}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </section>
  )
}
