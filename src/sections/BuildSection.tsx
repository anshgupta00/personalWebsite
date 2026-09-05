import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

export default function BuildSection() {
  const personalProjects = projects.filter(p => p.category === 'personal')
  const featuredProject = personalProjects.find(p => p.id === 'ai-hiring-platform') || personalProjects[0]
  const otherProjects = personalProjects.filter(p => p.id !== featuredProject.id)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="section-build"
      aria-label="Things I've Built"
      style={{ padding: '6rem 0', borderTop: '1px solid var(--color-border)' }}
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
                  ENGINEERING & AI PROJECTS
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
                Things I've Built.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              to="/build"
              id="build-view-all"
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
              View All Self-Built Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* ── Featured Flagship Project Card ── */}
        {featuredProject && (
          <ScrollReveal delay={120}>
            <div
              onMouseEnter={() => setHoveredId(featuredProject.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderRadius: '12px',
                border: hoveredId === featuredProject.id
                  ? '1px solid var(--color-accent)'
                  : '1px solid var(--color-border)',
                background: 'var(--color-paper-dark)',
                padding: '2.25rem 2.5rem',
                marginBottom: '2.5rem',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: hoveredId === featuredProject.id ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: hoveredId === featuredProject.id
                  ? '0 16px 36px -10px rgba(0,0,0,0.12)'
                  : '0 4px 16px rgba(0,0,0,0.03)',
                position: 'relative',
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.65rem',
                        background: 'var(--color-accent)',
                        color: '#ffffff',
                        fontSize: '0.625rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        borderRadius: '4px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      FEATURED AI PROJECT
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {featuredProject.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {featuredProject.title}
                  </h3>
                </div>

                {featuredProject.links.github && (
                  <a
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.6rem 1.15rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-accent)',
                      color: 'var(--color-accent)',
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      background: 'transparent',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-accent)'
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--color-accent)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View Source Code ↗
                  </a>
                )}
              </div>

              {/* Subtitle / Tagline */}
              {featuredProject.subtitle && (
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {featuredProject.subtitle}
                </p>
              )}

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '850px',
                  marginBottom: '1.5rem',
                }}
              >
                {featuredProject.longDescription || featuredProject.description}
              </p>

              {/* Stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-muted)',
                    marginRight: '0.5rem',
                  }}
                >
                  TECH STACK:
                </span>
                {featuredProject.stack.map(tech => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.7rem',
                      background: 'var(--color-paper)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text)',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ── Grid for Other Self-Built Projects ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {otherProjects.map((project, idx) => {
            const isHovered = hoveredId === project.id

            return (
              <ScrollReveal key={project.id} delay={idx * 80}>
                <div
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    padding: '1.75rem 1.6rem',
                    borderRadius: '10px',
                    background: 'var(--color-paper-dark)',
                    border: isHovered
                      ? '1px solid var(--color-accent)'
                      : '1px solid var(--color-border)',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? '0 12px 28px -6px rgba(0,0,0,0.1)'
                      : '0 2px 8px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <div>
                    {/* Year & Category */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.65rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-accent)',
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.subtitle || 'PERSONAL BUILD'}
                      </span>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          color: 'var(--color-text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '0.65rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.84375rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.2rem 0.55rem',
                            background: 'var(--color-paper)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '4px',
                            fontSize: '0.6875rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-text-muted)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Source Code Link */}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-accent)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(3px)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                      >
                        View Code
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
