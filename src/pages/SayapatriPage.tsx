import ScrollReveal from '../components/ScrollReveal'

const sayapatriMeta = {
  website: 'https://www.sayapatrigroup.com.np',
  websiteDisplay: 'www.sayapatrigroup.com.np',
  email: 'support@sayapatrigroup.com.np',
  gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=support@sayapatrigroup.com.np',
}

export default function SayapatriPage() {
  const sayapatriProducts = [
    {
      id: 'sayapatri-connect',
      title: 'Sayapatri Connect',
      category: 'EVENT SPONSORSHIP & CREATOR MARKETPLACE',
      tagline: 'Connecting Event Organizers, Brand Owners & Content Creators across Nepal',
      description: 'At Sayapatri Connect, we are building Nepal\'s dedicated platform where Event Organizers , hosting hackathons, tech fests, music concerts, sports, charity events, or any other events , can post their events to seek sponsorship from Brand Owners whose values align with the cause. Event Organizers can also hire Content Creators for event coverage and media, or post bid opportunities so creators compete for the best deal, saving organizers both time and money.',
      brandSection: 'Brand Owners discover events that match their brand values and sponsor them to create real social impact and grow their reach. They can also independently run creator campaigns , posting ad and media projects, inviting bids, or directly hiring the perfect creator to get the best deals and maximize ROI.',
      highlights: [
        'For Event Organizers: Post hackathons, tech fests, concerts, sports, and charity events to secure aligned brand sponsorships',
        'Creator Hiring & Bidding: Hire Content Creators for media coverage or invite competitive bids to save time & budget',
        'For Brand Owners: Discover value-aligned events to sponsor, create social impact, and expand brand reach in Nepal',
        'Independent Creator Campaigns: Brand owners can post ad/media projects, invite bids, or directly hire creators to maximize ROI',
      ],
      badge: 'LIVE PLATFORM',
      website: 'https://sayapatriconnect.com',
      websiteDisplay: 'www.sayapatriconnect.com',
    },
    {
      id: 'org-management-system',
      title: 'Organization Management System (OMS)',
      category: 'ENTERPRISE ERP & ADMINISTRATIVE SYSTEM',
      tagline: 'Streamlined Member Management & Operations for Institutions',
      description: 'A comprehensive management portal engineered for organizations, academic clubs, and corporate entities. OMS replaces scattered spreadsheets with a unified dashboard for member registration, role-based access control, financial logs, and digital documentation.',
      highlights: [
        'Multi-tier role management (Admins, Coordinators, Members)',
        'Member registry with filterable profiles and attendance logging',
        'Financial tracking & automated digital receipt generation',
        'Internal communication tools and notice broadcast module',
      ],
      badge: 'ENTERPRISE DEPLOYED',
      website: undefined,
      websiteDisplay: undefined,
    },
    {
      id: 'sayapatri-lms',
      title: 'EduConnect LMS',
      category: 'EDUCATION & E-LEARNING SYSTEM',
      tagline: 'Empowering Schools & Institutes with Next-Gen Digital Classrooms',
      description: 'Custom-built Learning Management System designed specifically for schools, training institutes, and educators in Nepal. EduConnect LMS provides digital course publishing, automated assignment grading, and student progress tracking.',
      highlights: [
        'Digital course creation with video modules, PDFs, and resources',
        'Interactive student quiz portal with instant automated evaluation',
        'Teacher dashboard for assignment reviews and gradebook tracking',
        'Parent/Student portal for attendance and academic reports',
      ],
      badge: 'INSTITUTION PARTNERED',
      website: undefined,
      websiteDisplay: undefined,
    },
    {
      id: 'ai-hiring-platform',
      title: 'AI Hiring & Proctoring Platform',
      category: 'AI & COMPUTER VISION MONITORING',
      tagline: 'Real-Time Remote Interview Proctoring & Candidate Verification — Currently in Development',
      description: 'An advanced AI-powered interview proctoring system currently under active development. Engineered to maintain high integrity during remote technical assessments and hiring evaluations, it uses computer vision models to detect multi-person presence, candidate absence, and suspicious head movements.',
      highlights: [
        'Real-time object detection using YOLOv8n for unauthorized device detection',
        'Facial landmark & head pose estimation via MediaPipe',
        'Low-latency WebSocket streaming for live interviewer monitoring',
        'Automated trust score generation and session audit logs',
      ],
      badge: 'IN DEVELOPMENT',
      website: undefined,
      websiteDisplay: undefined,
    },
  ]

  return (
    <main id="main-content" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container-site">
        {/* Header */}
        <ScrollReveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              SAYAPATRI GROUP · SOFTWARE & AI SOLUTIONS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Software & AI Solutions; built for Nepal, ready for the world.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-body" style={{ maxWidth: '640px', marginBottom: '2rem', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Sayapatri Group is a Software & AI Solutions company building intelligent digital products, enterprise systems, and AI-powered tools , designed to solve real problems for institutions, businesses, and communities across Nepal.
          </p>
        </ScrollReveal>

        {/* Company Links Bar */}
        <ScrollReveal delay={170}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '3.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
            }}
          >
            <a
              href={sayapatriMeta.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                borderBottom: '1px solid var(--color-accent)',
                paddingBottom: '0.1rem',
                fontWeight: 500,
              }}
            >
              🌐 {sayapatriMeta.websiteDisplay} ↗
            </a>

            <a
              href={sayapatriMeta.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '0.1rem',
              }}
            >
              ✉ {sayapatriMeta.email}
            </a>
          </div>
        </ScrollReveal>

        <hr className="divider" style={{ marginBottom: '4rem' }} />

        {/* Overview banner */}
        <ScrollReveal delay={180}>
          <div
            style={{
              padding: '2rem 2.25rem',
              background: 'var(--color-paper-dark)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              marginBottom: '4rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div>
              <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.35rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                WHAT WE DO
              </p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                End-to-End Software & AI Solutions for Businesses & Institutions
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
                We design, develop, and deploy custom software products, enterprise ERP systems, AI-powered platforms, and e-learning solutions , backed by institutional partnerships across Koshi Province and beyond.
              </p>
            </div>

            <a
              href={sayapatriMeta.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.65rem 1.3rem',
                borderRadius: '999px',
                background: '#1A1916',
                color: '#F7F4EF',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s, background 0.2s',
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
              Partner with Us →
            </a>
          </div>
        </ScrollReveal>

        {/* Product Showcase Title */}
        <ScrollReveal>
          <div style={{ marginBottom: '3rem' }}>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>OUR PRODUCTS & SOLUTIONS</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-text)' }}>
              What We Have Built
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.65rem', maxWidth: '580px', lineHeight: 1.65 }}>
              From AI-powered hiring tools to event marketplace platforms and enterprise management systems , each product is built to solve a focused problem at scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {sayapatriProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <div
                id={`sayapatri-${product.id}`}
                style={{
                  background: 'var(--color-paper)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  padding: '2.5rem',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 10px 36px rgba(26,25,22,0.09)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Badge & Category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.08em' }}>
                    {product.category}
                  </span>
                  <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', background: 'var(--color-paper-dark)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.25rem 0.65rem', borderRadius: '999px', letterSpacing: '0.06em' }}>
                    {product.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  "{product.tagline}"
                </p>

                {/* Description Paragraph 1 */}
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: product.brandSection ? '1rem' : '1.75rem' }}>
                  {product.description}
                </p>

                {/* Description Paragraph 2 (for Sayapatri Connect) */}
                {product.brandSection && (
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                    {product.brandSection}
                  </p>
                )}

                {/* Highlights */}
                <div style={{ marginBottom: '2rem', background: 'var(--color-paper-dark)', padding: '1.25rem 1.5rem', borderRadius: '4px', border: '1px dashed var(--color-border)' }}>
                  <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text)', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                    KEY CAPABILITIES & WORKFLOW:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {product.highlights.map((item, hIdx) => (
                      <li key={hIdx} style={{ fontSize: '0.84375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Links */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {product.website && (
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#fff',
                          background: 'var(--color-accent)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          textDecoration: 'none',
                          fontWeight: 500,
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        Visit {product.websiteDisplay} ↗
                      </a>
                    )}

                    <a
                      href={sayapatriMeta.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--color-border)' }}
                    >
                      Inquire ↗
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal delay={200}>
          <div
            style={{
              marginTop: '6rem',
              padding: '3.5rem 2rem',
              background: 'var(--color-paper-dark)',
              borderRadius: '6px',
              border: '1px solid var(--color-border)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              WORK WITH SAYAPATRI GROUP
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--color-text)', maxWidth: '580px', margin: 0, lineHeight: 1.25 }}>
              Looking for a Software & AI partner for your business or institution?
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', maxWidth: '500px', margin: 0, lineHeight: 1.6 }}>
              Whether you need a custom ERP, an AI solution, or a digital platform built from scratch , we'd love to collaborate. Reach us at{' '}
              <a href={sayapatriMeta.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>{sayapatriMeta.websiteDisplay}</a>{' '}or{' '}
              <a href={sayapatriMeta.gmailUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>{sayapatriMeta.email}</a>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
              <a
                href={sayapatriMeta.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  background: '#1A1916',
                  color: '#F7F4EF',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
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
                Visit {sayapatriMeta.websiteDisplay} ↗
              </a>
              <a
                href={sayapatriMeta.gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-paper)',
                  color: 'var(--color-text)',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
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
                Email Support ✉
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
