import { Link } from 'react-router-dom'
import { personal } from '../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`

  return (
    <footer id="site-footer" role="contentinfo">

      {/* ── Editorial CTA Section ── */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '5rem',
          marginTop: '7rem',
        }}
      >
        <div className="container-site">

          {/* Section label */}
          <p
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Get in touch
          </p>

          {/* Large editorial headline */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              fontWeight: 400,
              color: 'var(--color-text)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              marginBottom: '0',
            }}
          >
            Let's build something{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>meaningful</em>{' '}
            together.
          </h2>

          {/* Thin divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'var(--color-border)',
              margin: '3rem 0',
            }}
          />

          {/* Two-column editorial row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '2rem',
              paddingBottom: '4rem',
            }}
          >
            {/* Left: descriptor */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                maxWidth: '400px',
              }}
            >
              Whether it's an engineering role, a collaboration, or a software & AI
              partnership through Sayapatri Group, I'd love to hear from you.
            </p>

            {/* Right: inline action links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                alignItems: 'flex-end',
              }}
            >
              <InlineActionLink href={gmailUrl} external label="Send an Email" arrow />
              <InlineActionLink href={personal.resumeUrl} external label="View Resume" arrow />
              <InlineActionLink to="/sayapatri" label="Explore Sayapatri Group" arrow />
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom Bar ── */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '1.75rem 0',
        }}
      >
        <div
          className="container-site"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Left: Brand name */}
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-text)',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text)')}
          >
            Shyam Krishna Gupta
          </Link>

          {/* Center: Social Icons */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <SocialLink href={gmailUrl} label="Gmail" external><EmailIcon /></SocialLink>
            <SocialLink href={personal.social.github} label="GitHub" external><GitHubIcon /></SocialLink>
            <SocialLink href={personal.social.linkedin} label="LinkedIn" external><LinkedInIcon /></SocialLink>
            <SocialLink href={personal.social.whatsapp} label="WhatsApp" external><WhatsAppIcon /></SocialLink>
          </div>

          {/* Right: Copyright */}
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {year} · Build. Learn. Share.
          </p>
        </div>
      </div>

    </footer>
  )
}

/* ── Inline editorial action link ── */
function InlineActionLink({
  href,
  to,
  external,
  label,
  arrow,
}: {
  href?: string
  to?: string
  external?: boolean
  label: string
  arrow?: boolean
}) {
  const sharedStyle: React.CSSProperties = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.125rem',
    fontWeight: 400,
    color: 'var(--color-text)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: '0.1rem',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    cursor: 'pointer',
  }

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--color-accent)'
    e.currentTarget.style.borderColor = 'var(--color-accent)'
  }
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--color-text)'
    e.currentTarget.style.borderColor = 'var(--color-border)'
  }

  const inner = (
    <>
      {label}
      {arrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: '0.1rem' }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} style={sharedStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={sharedStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {inner}
    </a>
  )
}

/* ── Social icon link ── */
function SocialLink({ href, label, external, children }: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        color: 'var(--color-text-muted)',
        transition: 'color 0.2s',
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
    >
      {children}
    </a>
  )
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}
