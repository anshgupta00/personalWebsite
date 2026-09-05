import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'
import SayapatriSection from '../sections/SayapatriSection'

export default function BuildPage() {
  const personalProjects = projects.filter(p => p.category === 'personal')

  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container-site">
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>Build</p>
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
            Things I've Built
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '560px', marginBottom: '4rem' }}>
            A collection of self-made AI/ML engineering innovations, deep learning computer vision systems, and software applications.
          </p>
        </ScrollReveal>

        <hr className="divider" style={{ marginBottom: '4rem' }} />

        {/* ── Self-Built & Personal Projects ── */}
        <ScrollReveal>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                SELF-BUILT & ENGINEERING PROJECTS
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '540px' }}>
              Independent machine learning forecasting models, computer vision systems, and applications built from scratch.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {personalProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <div
                className="project-row"
                style={{
                  padding: '1.75rem 1.5rem',
                  borderRadius: '6px',
                  background: 'var(--color-paper-dark)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.35rem' }}>
                      {project.subtitle}
                    </p>
                  )}
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.year} · Self-Built
                  </p>
                </div>
                <div>
                  <p className="text-body" style={{ marginBottom: '1rem', lineHeight: 1.65 }}>
                    {project.longDescription || project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {project.stack.map(tech => <span key={tech} className="tag" style={{ fontSize: '0.6875rem' }}>{tech}</span>)}
                  </div>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '0.8125rem', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                      View Code on GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Sayapatri Group Section at Bottom */}
      <div style={{ marginTop: '5rem' }}>
        <SayapatriSection />
      </div>
    </main>
  )
}
