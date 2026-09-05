import ScrollReveal from '../components/ScrollReveal'

export default function PeopleSection() {
  const stats = [
    { figure: '3,000+', label: 'Students trained', note: 'across AI, cybersecurity and technology programs' },
    { figure: '100+', label: 'Teachers', note: 'trained in technology and digital tools' },
    { figure: '25+', label: 'Institutions', note: 'schools, colleges and organizations across Nepal' },
    { figure: '450+', label: 'Grade 9–10 students', note: 'cybersecurity and ethical hacking, Koshi Province' },
  ]

  return (
    <section
      id="section-people"
      aria-label="Teaching and Impact"
      style={{ padding: '5rem 0', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container-site">
        {/* Two-column layout via CSS class */}
        <div className="people-grid">
          {/* Left ; editorial text */}
          <div>
            <ScrollReveal>
              <p className="text-label" style={{ marginBottom: '1.5rem' }}>Teaching & Community</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  lineHeight: 1.4,
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}
              >
                Technology makes more sense when it reaches people.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                Much of my work has been about bringing technology closer to students and educators ;
                not through polished decks, but through actual workshops, hands-on sessions, and being
                in the room.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-body">
                I've trained students in AI and cybersecurity across Koshi Province, worked with teachers
                to build confidence with technology, and helped schools and institutions adopt digital tools
                that make a real difference. The work spans 25+ institutions, with thousands of students
                and hundreds of teachers.
              </p>
            </ScrollReveal>
          </div>

          {/* Right ; stats as prose */}
          <div>
            {stats.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.25rem',
                    paddingBottom: '1.25rem',
                    display: 'grid',
                    gridTemplateColumns: '5rem 1fr',
                    gap: '1rem',
                    alignItems: 'start',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-accent)', lineHeight: 1 }}>
                    {item.figure}
                  </p>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.2rem' }}>{item.label}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{item.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
