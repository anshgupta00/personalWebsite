import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { personal } from '../data/personal'
import { skillGroups, interests } from '../data/skills'
import { communityRoles } from '../data/community'

const roleBlocks = [
  {
    index: '01',
    role: 'Engineer',
    description:
      'Computer Engineer from IOE Purwanchal Campus. Hands-on with AI/ML, deep learning, computer vision, and full-stack software development.',
  },
  {
    index: '02',
    role: 'Builder',
    description:
      'Co-founder of Sayapatri Group , building enterprise ERP, AI hiring platforms, and e-learning systems for Nepal\'s institutions and businesses.',
  },
  {
    index: '03',
    role: 'Educator',
    description:
      'Trained 3,000+ students and 100+ teachers in AI, cybersecurity, and digital tools across 25+ institutions in Koshi Province.',
  },
  {
    index: '04',
    role: 'Community',
    description:
      'Active in campus clubs, national tech events, and youth advocacy since 2017. From BCMN (UNICEF-backed) to ACES to Sayapatri Group.',
  },
]

export default function AboutPage() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`

  return (
    <main id="main-content" style={{ paddingBottom: '0' }}>

      {/* ── HERO SECTION ── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          borderBottom: '1px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative BG text */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.05em',
            top: '50%',
            transform: 'translateY(-55%)',
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
          about
        </div>

        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-hero-grid">
            {/* Left */}
            <div>
              <ScrollReveal>
                <p className="text-label" style={{ marginBottom: '2rem' }}>About</p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text)',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                  }}
                >
                  Engineer. Builder.{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                    Educator.
                  </em>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <p
                  className="text-body"
                  style={{ maxWidth: '520px', marginBottom: '2.5rem', lineHeight: 1.8 }}
                >
                  I'm Shyam Krishna Gupta, a Computer Engineer, co-founder of Sayapatri Group,
                  and someone who believes technology is most powerful when it reaches people who need it.
                  I build AI systems, enterprise software, and teach technology to students and educators across Nepal.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      e.currentTarget.style.background = 'var(--color-accent)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#1A1916'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Get in Touch →
                  </a>
                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                  >
                    View Resume ↗
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Portrait */}
            <ScrollReveal delay={160}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '280px', height: '340px', flexShrink: 0 }}>
                  {/* Offset decorative frame */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '-12px',
                      bottom: '-12px',
                      border: '1px solid var(--color-accent)',
                      borderRadius: '4px',
                      opacity: 0.35,
                    }}
                  />
                  <img
                    src={personal.photo}
                    alt="Shyam Krishna Gupta"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      borderRadius: '4px',
                      display: 'block',
                      boxShadow: '0 20px 60px rgba(26,25,22,0.15)',
                      filter: 'contrast(1.05) saturate(0.95)',
                    }}
                  />
                  {/* Name card overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: '-1px',
                      right: '-1px',
                      background: 'rgba(247,244,239,0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.75rem 1rem',
                      borderRadius: '0 0 4px 4px',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>
                      Shyam Krishna Gupta
                    </p>
                    <p style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>
                      Engineer · Builder · Educator
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ROLE BLOCKS ── */}
      <section
        style={{
          padding: '5rem 0',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container-site">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '3rem' }}>What I do</p>
          </ScrollReveal>

          <div className="role-blocks-grid">
            {roleBlocks.map((block, i) => (
              <ScrollReveal key={block.role} delay={i * 80}>
                <div
                  style={{
                    background: 'var(--color-paper)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    padding: '2rem 1.75rem',
                    transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--color-accent)'
                    el.style.boxShadow = '0 8px 32px rgba(196,98,45,0.08)'
                    el.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--color-border)'
                    el.style.boxShadow = 'none'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--color-accent)',
                      letterSpacing: '0.12em',
                      marginBottom: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {block.index}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {block.role}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {block.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        style={{
          padding: '5rem 0',
          background: 'var(--color-paper-dark)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container-site">
          <div className="about-skills-grid">
            {/* Left: label + intro */}
            <div style={{ paddingRight: '2rem' }}>
              <ScrollReveal>
                <p className="text-label" style={{ marginBottom: '1.5rem' }}>Skills</p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    lineHeight: 1.35,
                    color: 'var(--color-text)',
                    fontStyle: 'italic',
                    marginBottom: '1.25rem',
                  }}
                >
                  What I work with, day to day.
                </p>
                <p className="text-body">
                  From training deep learning models to shipping full-stack products , these are the tools and languages I reach for.
                </p>
              </ScrollReveal>

              {/* Interests */}
              <ScrollReveal delay={120}>
                <div style={{ marginTop: '3rem' }}>
                  <p className="text-label" style={{ marginBottom: '1.25rem' }}>Curious About</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {interests.map(interest => (
                      <span
                        key={interest}
                        className="tag"
                        style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: skill groups */}
            <div>
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.label} delay={i * 60}>
                  <div
                    style={{
                      borderTop: '1px solid var(--color-border)',
                      paddingTop: '1.25rem',
                      paddingBottom: '1.25rem',
                      display: 'grid',
                      gridTemplateColumns: '90px 1fr',
                      gap: '1.5rem',
                      alignItems: 'start',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-accent)',
                        letterSpacing: '0.1em',
                        fontWeight: 600,
                        paddingTop: '0.1rem',
                      }}
                    >
                      {group.label.toUpperCase()}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {group.skills.map(skill => (
                        <span
                          key={skill}
                          className="tag"
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY & LEADERSHIP ── */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-site">
          <div className="about-community-grid">
            {/* Left: sticky label */}
            <div>
              <ScrollReveal>
                <p className="text-label" style={{ marginBottom: '1.5rem' }}>Community & Leadership</p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    lineHeight: 1.35,
                    color: 'var(--color-text)',
                    fontStyle: 'italic',
                    marginBottom: '1.25rem',
                    maxWidth: '300px',
                  }}
                >
                  I don't just build software , I participate in communities.
                </p>
                <p className="text-body" style={{ maxWidth: '300px' }}>
                  From children's rights advocacy with UNICEF Nepal, to hackathons and AI workshops across Koshi Province.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: timeline */}
            <div>
              {communityRoles.map((role, i) => (
                <ScrollReveal key={`${role.org}-${role.period}`} delay={i * 60}>
                  <div
                    style={{
                      borderTop: '1px solid var(--color-border)',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem',
                      display: 'grid',
                      gridTemplateColumns: '70px 1fr',
                      gap: '1.5rem',
                      alignItems: 'start',
                    }}
                  >
                    {/* Period */}
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--color-accent)',
                        paddingTop: '0.2rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {role.period}
                    </p>
                    {/* Content */}
                    <div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {role.org}
                      </p>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--color-text-muted)',
                          marginBottom: '0.6rem',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {role.role} · {role.location}
                      </p>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.7,
                          maxWidth: '520px',
                        }}
                      >
                        {role.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER STRIP ── */}
      <section
        style={{
          padding: '5rem 0',
          background: 'var(--color-paper-dark)',
        }}
      >
        <div className="container-site">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <ScrollReveal>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Want to work together?
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)' }}>
                  Open to engineering roles, AI collaborations, and Sayapatri partnerships.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.7rem 1.5rem',
                    borderRadius: '999px',
                    background: '#1A1916',
                    color: '#F7F4EF',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--color-accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1A1916'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Send an Email →
                </a>
                <Link
                  to="/contact"
                  style={{
                    padding: '0.7rem 1.5rem',
                    borderRadius: '999px',
                    background: 'transparent',
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-text)'
                  }}
                >
                  View Contact Page
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  )
}
