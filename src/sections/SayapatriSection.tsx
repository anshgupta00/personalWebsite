import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function SayapatriSection() {
  const sayapatriProducts = [
    {
      title: 'SAYAPATRI CONNECT',
      subtitle: 'Event & Sponsorship Collaboration Platform',
      text: 'A digital platform linking event organizers, sponsors, and institutions ; streamlining proposal submissions, sponsorship tracking, and event discovery across Nepal.',
    },
    {
      title: 'ORGANIZATION MANAGEMENT SYSTEM (OMS)',
      subtitle: 'Enterprise Administrative ERP',
      text: 'Comprehensive organization management system built for institutions and enterprises to manage member roles, financial records, operations, and digital workflows.',
    },
    {
      title: 'EDUCONNECT LMS',
      subtitle: 'Learning Management System',
      text: 'Custom e-learning management system empowering schools and training institutions with course delivery, student performance tracking, and digital assessments.',
    },
    {
      title: 'AI HIRING PLATFORM',
      subtitle: 'Real-Time AI Interview Monitoring',
      text: 'Real-time interview proctoring system combining computer vision (YOLOv8n + MediaPipe) and WebSockets for automated candidate integrity monitoring during remote interviews.',
    },
  ]

  return (
    <section
      id="section-sayapatri"
      aria-label="Sayapatri Group"
      style={{
        padding: '5rem 0',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-paper-dark)',
      }}
    >
      <div className="container-site">
        <div className="sayapatri-grid">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-label" style={{ marginBottom: '1.5rem' }}>Sayapatri Group</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text)',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem',
                }}
              >
                Building enterprise systems & software for Nepal.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-body" style={{ marginBottom: '2rem' }}>
                At Sayapatri Group, we build software solutions, AI systems, and digital platforms that empower schools, organizations, and businesses across Nepal.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link
                to="/sayapatri"
                id="sayapatri-view-more"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  background: '#1A1916',
                  color: '#F7F4EF',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'transform 0.2s ease, background 0.2s ease',
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
                View More About Sayapatri Group →
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — Product Showcase */}
          <div>
            {sayapatriProducts.map((item, i) => (
              <ScrollReveal key={item.title} delay={180 + i * 70}>
                <div style={{ borderTop: i === 0 ? 'none' : '1px solid var(--color-border)', paddingTop: i === 0 ? 0 : '1.5rem', paddingBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.title}
                    </p>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                      {item.subtitle}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
