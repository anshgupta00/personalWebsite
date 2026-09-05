import ScrollReveal from '../components/ScrollReveal'
import { personal } from '../data/personal'

const statusItems = [
  { key: 'BUILDING', value: personal.currently.building },
  { key: 'EXPLORING', value: personal.currently.exploring },
  { key: 'TEACHING', value: personal.currently.teaching },
  { key: 'WRITING', value: personal.currently.writing },
]

export default function CurrentlySection() {
  return (
    <section
      id="section-currently"
      aria-label="Currently"
      style={{ padding: '5rem 0', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container-site">
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '2.5rem' }}>Currently</p>
        </ScrollReveal>

        {/* Grid via CSS class ; no inline gridTemplateColumns */}
        <div className="currently-grid">
          {statusItems.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 80}>
              <div className="status-item" style={{ paddingRight: '1.5rem', paddingBottom: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--color-accent)',
                    marginBottom: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.key}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {item.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
