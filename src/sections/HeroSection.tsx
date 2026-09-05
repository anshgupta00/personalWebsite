import ScrollReveal from '../components/ScrollReveal'
import { personal } from '../data/personal'

export default function HeroSection() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`

  return (
    <section
      id="section-home"
      aria-label="Introduction"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background year marker ; purely decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-0.05em',
          bottom: '-0.15em',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(10rem, 22vw, 20rem)',
          fontWeight: 500,
          color: 'var(--color-paper-dark)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        '26
      </div>

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Text */}
          <div>
            <ScrollReveal delay={80}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '2rem', height: '1px', background: 'var(--color-accent)' }} />
                <p className="text-label">
                  {personal.status}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <h1
                className="text-display"
                style={{
                  marginBottom: '2rem',
                  maxWidth: '720px',
                  color: 'var(--color-text)',
                }}
              >
                {personal.tagline}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              {/* Roles as a ruled list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
                {personal.roles.map((role, i) => (
                  <span
                    key={role}
                    style={{
                      fontSize: '0.75rem',
                      color: i === 0 ? 'var(--color-accent)' : 'var(--color-text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-mono)',
                      paddingRight: i < personal.roles.length - 1 ? '0.5rem' : 0,
                      borderRight: i < personal.roles.length - 1 ? '1px solid var(--color-border)' : 'none',
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Primary Hire Me Button */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-hire-me"
                  style={{
                    padding: '0.65rem 1.4rem',
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

                <a
                  href="#section-currently"
                  id="hero-explore"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}>↓</span>
                  Explore
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', transition: 'color 0.2s', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  LinkedIn ↗
                </a>
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', transition: 'color 0.2s', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  GitHub ↗
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Portrait ; clean circle style */}
          <ScrollReveal delay={200}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                id="hero-portrait"
                style={{
                  position: 'relative',
                  width: '340px',
                  height: '340px',
                  flexShrink: 0,
                }}
              >
                {/* Animated outer glow ring */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-6px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-paper-dark), var(--color-accent-light), var(--color-paper-dark), var(--color-accent))',
                    animation: 'spinRing 6s linear infinite',
                    opacity: 0.7,
                  }}
                />
                {/* White gap ring */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '50%',
                    background: 'var(--color-paper)',
                  }}
                />
                {/* Photo circle */}
                <img
                  src={personal.photo}
                  alt="Shyam Krishna Gupta"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    boxShadow: '0 20px 60px rgba(26,25,22,0.18)',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
