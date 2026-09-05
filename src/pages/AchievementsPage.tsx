import { useState } from 'react'
import { ExternalLink, Award, ImageOff } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { certificates, type CertCategory } from '../data/certificates'
import { personal } from '../data/personal'

// ─── Filter config ──────────────────────────────────────────────────────────
const FILTERS: { label: string; value: CertCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Web', value: 'web' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Other', value: 'other' },
]

const CATEGORY_COLOR: Record<CertCategory, string> = {
  'ai-ml':        '#C4622D',
  'cybersecurity':'#2D7DC4',
  'web':          '#2DC47A',
  'leadership':   '#9C2DC4',
  'other':        '#9E9993',
}

const CATEGORY_LABEL: Record<CertCategory, string> = {
  'ai-ml':        'AI / ML',
  'cybersecurity':'Cybersecurity',
  'web':          'Web',
  'leadership':   'Leadership',
  'other':        'Other',
}

// Format 'YYYY-MM' → 'Mar 2025' or 'YYYY' → '2025'
function formatDate(d: string) {
  if (!d) return ''
  const parts = d.split('-')
  if (parts.length === 1) return parts[0]
  const [y, m] = parts
  const monthIdx = parseInt(m, 10) - 1
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  if (isNaN(monthIdx) || !months[monthIdx]) return y
  return `${months[monthIdx]} ${y}`
}

// ─── Certificate Card ───────────────────────────────────────────────────────
function CertCard({ cert }: { cert: (typeof certificates)[number] }) {
  const [imgError, setImgError] = useState(false)
  const accent = CATEGORY_COLOR[cert.category]

  return (
    <div
      id={`cert-${cert.id}`}
      style={{
        background: 'var(--color-paper)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        cursor: cert.link ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,25,22,0.12)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onClick={() => cert.link && window.open(cert.link, '_blank', 'noopener noreferrer')}
    >
      {/* Image area */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'var(--color-paper-dark)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cert.image && !imgError ? (
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          /* Elegant placeholder when no image */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: `linear-gradient(135deg, ${accent}12 0%, var(--color-paper-dark) 100%)`,
            }}
          >
            <Award size={36} strokeWidth={1.2} color={accent} style={{ opacity: 0.6 }} />
            {imgError && (
              <span style={{ fontSize: '0.625rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                <ImageOff size={10} style={{ marginRight: '0.25rem', verticalAlign: 'middle' }} />
                image not found
              </span>
            )}
          </div>
        )}

        {/* Category pill */}
        <span
          style={{
            position: 'absolute',
            top: '0.6rem',
            left: '0.6rem',
            background: accent,
            color: '#fff',
            fontSize: '0.5625rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            padding: '0.2rem 0.55rem',
            borderRadius: '999px',
            textTransform: 'uppercase',
          }}
        >
          {CATEGORY_LABEL[cert.category]}
        </span>

        {/* External link indicator */}
        {cert.link && (
          <span
            style={{
              position: 'absolute',
              top: '0.6rem',
              right: '0.6rem',
              background: 'rgba(26,25,22,0.5)',
              color: '#fff',
              borderRadius: '50%',
              width: '1.5rem',
              height: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}
          >
            <ExternalLink size={12} />
          </span>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '1rem 1.1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
        <p
          style={{
            fontSize: '0.625rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          {formatDate(cert.date)}
        </p>

        <h3
          style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--color-text)',
            lineHeight: 1.3,
          }}
        >
          {cert.title}
        </h3>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {cert.issuer}
        </p>

        {cert.description && (
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.55,
              marginTop: '0.25rem',
            }}
          >
            {cert.description}
          </p>
        )}

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              marginTop: 'auto',
              paddingTop: '0.75rem',
              fontSize: '0.75rem',
              color: accent,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              borderBottom: `1px solid ${accent}40`,
              width: 'fit-content',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Verify credential <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function AchievementsPage() {
  const [activeFilter, setActiveFilter] = useState<CertCategory | 'all'>('all')
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`

  const filtered = activeFilter === 'all'
    ? certificates
    : certificates.filter(c => c.category === activeFilter)

  // Only show filter tabs that have entries
  const activeTabs = FILTERS.filter(
    f => f.value === 'all' || certificates.some(c => c.category === f.value)
  )

  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container-site">

        {/* Header */}
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>Achievements</p>
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
            Certificates & Credentials
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Training programs, fellowships, and certifications that shaped my technical and leadership skills.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        {activeTabs.length > 2 && (
          <ScrollReveal delay={180}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
              {activeTabs.map(f => {
                const isActive = activeFilter === f.value
                return (
                  <button
                    key={f.value}
                    id={`cert-filter-${f.value}`}
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
                      background: isActive ? '#1A1916' : 'transparent',
                      color: isActive ? '#F7F4EF' : 'var(--color-text-secondary)',
                      borderColor: isActive ? '#1A1916' : 'var(--color-border)',
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        )}

        <hr className="divider" style={{ marginBottom: '3rem' }} />

        {/* Grid */}
        {filtered.length === 0 ? (
          <ScrollReveal>
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 2rem',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
              }}
            >
              No certificates in this category yet.
            </div>
          </ScrollReveal>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 60}>
                <CertCard cert={cert} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Hire Me Callout Banner */}
        <ScrollReveal delay={200}>
          <div
            style={{
              marginTop: '5rem',
              padding: '3.5rem 2rem',
              background: 'var(--color-paper-dark)',
              borderRadius: '4px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Available for Hire & Collaboration
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: 'var(--color-text)',
                margin: 0,
                maxWidth: '540px',
                lineHeight: 1.25,
              }}
            >
              Looking for an engineer to build your next project?
            </h2>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', maxWidth: '460px', margin: 0, lineHeight: 1.6 }}>
              I'm open to technical roles, software development, and AI/ML project collaborations.
            </p>

            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="achievements-hire-me"
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '999px',
                background: '#1A1916',
                color: '#F7F4EF',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(26,25,22,0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.background = 'var(--color-accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = '#1A1916'
              }}
            >
              Hire Me →
            </a>
          </div>
        </ScrollReveal>

      </div>
    </main>
  )
}
