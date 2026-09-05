import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { personal } from '../data/personal'
import nepalImg from '../assets/pictures/nepal.png'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/build', label: 'Build' },
  { to: '/journal', label: 'Journal' },
  { to: '/moments', label: 'Moments' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        id="site-nav"
        role="banner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: 'background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(247,244,239,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        }}
      >
        <div
          className="container-site"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}
        >
          {/* Logo / Brand Image */}
          <Link
            to="/"
            id="nav-logo"
            aria-label="Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src={nepalImg}
              alt="Nepal"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{
              gap: '1.75rem',
              alignItems: 'center',
            }}
            className="nav-desktop"
          >
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Hire Me CTA Button */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-hire-me"
              style={{
                padding: '0.4rem 0.95rem',
                borderRadius: '999px',
                background: '#1A1916',
                color: '#F7F4EF',
                fontSize: '0.78125rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                boxShadow: '0 2px 10px rgba(26,25,22,0.12)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.background = 'var(--color-accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = '#1A1916'
              }}
            >
              Hire Me →
            </a>

            {/* Hamburger */}
            <button
              id="nav-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
                padding: '0.25rem',
                lineHeight: 0,
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
        >
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              lineHeight: 0,
            }}
          >
            <X size={22} />
          </button>

          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className="animate-slide-up"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                letterSpacing: '-0.01em',
                animationDelay: `${i * 60}ms`,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text)')}
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="animate-slide-up"
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '999px',
              background: 'var(--color-accent)',
              color: '#fff',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              textDecoration: 'none',
              animationDelay: `${navLinks.length * 60}ms`,
            }}
          >
            Hire Me →
          </a>
        </div>
      )}
    </>
  )
}
