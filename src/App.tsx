import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import JourneyPage from './pages/JourneyPage'
import BuildPage from './pages/BuildPage'
import JournalPage from './pages/JournalPage'
import MomentsPage from './pages/MomentsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import AchievementsPage from './pages/AchievementsPage'
import SayapatriPage from './pages/SayapatriPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/journey" element={<PageTransition><JourneyPage /></PageTransition>} />
        <Route path="/build" element={<PageTransition><BuildPage /></PageTransition>} />
        <Route path="/sayapatri" element={<PageTransition><SayapatriPage /></PageTransition>} />
        <Route path="/journal" element={<PageTransition><JournalPage /></PageTransition>} />
        <Route path="/moments" element={<PageTransition><MomentsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition><AchievementsPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

function NotFound() {
  return (
    <main style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '60vh' }}>
      <div className="container-site" style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem', letterSpacing: '0.1em' }}>
          404
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          This page doesn't exist.
        </h1>
        <Link
          to="/"
          style={{ fontSize: '0.875rem', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-accent)', paddingBottom: '0.1rem' }}
        >
          Back home →
        </Link>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
