import ScrollReveal from '../components/ScrollReveal'
import { personal } from '../data/personal'

interface ContactMethod {
  id: string
  label: string
  value: string
  href: string
  external?: boolean
  icon: React.ReactNode
}

const contactMethods: ContactMethod[] = [
  {
    id: 'contact-email',
    label: 'Email',
    value: personal.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
    external: true,
    icon: <EmailIcon />,
  },
  {
    id: 'contact-whatsapp',
    label: 'WhatsApp',
    value: '+977 984 098 5166',
    href: personal.social.whatsapp,
    external: true,
    icon: <WhatsAppIcon />,
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'Shyam Krishna Gupta',
    href: personal.social.linkedin,
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'anshgupta00',
    href: personal.social.github,
    external: true,
    icon: <GitHubIcon />,
  },
  {
    id: 'contact-facebook',
    label: 'Facebook',
    value: 'Shyam Krishna Gupta',
    href: personal.social.facebook,
    external: true,
    icon: <FacebookIcon />,
  },
  {
    id: 'contact-instagram',
    label: 'Instagram',
    value: personal.social.instagram === '#' ? 'Instagram' : personal.social.instagram,
    href: personal.social.instagram,
    external: true,
    icon: <InstagramIcon />,
  },
  {
    id: 'contact-phone',
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: <PhoneIcon />,
  },
]

export default function ContactPage() {
  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container-site">
        {/* Header ; confident ending */}
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '2rem' }}>Contact</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Have something worth building?
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              marginBottom: '4rem',
            }}
          >
            Let's talk.
          </p>
        </ScrollReveal>

        <hr className="divider" style={{ marginBottom: '3.5rem' }} />

        {/* Contact methods */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0',
            maxWidth: '640px',
          }}
        >
          {contactMethods.map((method, i) => (
            <ScrollReveal key={method.id} delay={i * 60}>
              <a
                id={method.id}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '0.5rem'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
              >
                {/* Icon */}
                <span style={{ color: 'var(--color-text-muted)', flexShrink: 0, transition: 'color 0.2s' }}>
                  {method.icon}
                </span>

                {/* Label + value */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>
                    {method.label}
                  </p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                    {method.value}
                  </p>
                </div>

                {/* Arrow */}
                <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem', transition: 'transform 0.2s, color 0.2s' }}>
                  ↗
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Location note */}
        <ScrollReveal delay={500}>
          <p style={{ marginTop: '3rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            {personal.location} · Nepal
          </p>
        </ScrollReveal>
      </div>
    </main>
  )
}

// ── Icons ───────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
