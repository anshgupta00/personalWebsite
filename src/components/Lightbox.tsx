import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Moment } from '../data/moments'

interface LightboxProps {
  moments: Moment[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ moments, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = moments[currentIndex]

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    // Lock body scroll while lightbox is open
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [handleKey])

  return createPortal((
    <div
      id="lightbox"
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      {/* Close */}
      <button
        id="lightbox-close"
        aria-label="Close photo"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          padding: '0.5rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        id="lightbox-prev"
        aria-label="Previous photo"
        onClick={e => { e.stopPropagation(); onPrev() }}
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          padding: '0.75rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        id="lightbox-next"
        aria-label="Next photo"
        onClick={e => { e.stopPropagation(); onNext() }}
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          padding: '0.75rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <ChevronRight size={22} />
      </button>

      {/* Image container */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {current.src ? (
          <img
            src={current.src}
            alt={current.alt}
            style={{
              maxHeight: '78vh',
              width: '100%',
              objectFit: 'contain',
              borderRadius: '6px',
              filter: 'contrast(1.05) brightness(1.04) saturate(1.05)',
              WebkitFilter: 'contrast(1.05) brightness(1.04) saturate(1.05)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '400px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Photo coming soon
          </div>
        )}

        {/* Caption */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <p style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: 500 }}>{current.caption}</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            {current.date} · {current.context}
          </p>
        </div>

        {/* Counter */}
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          {currentIndex + 1} / {moments.length}
        </p>
      </div>
    </div>
  ), document.body)
}
