import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20book%20an%20appointment.'

const NAV = [
  { path: '/',           label: 'Home' },
  { path: '/services',   label: 'Services' },
  { path: '/bridal',     label: 'Bridal' },
  { path: '/tailoring',  label: 'Blouses & Stitching' },
  { path: '/about',      label: 'About' },
  { path: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  const handleNavClick = () => {
    setSidebarOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Top Minimal Info Ribbon */}
        <div className={styles.topBar}>
          <div className={styles.topInner}>
            <div className={styles.topItem}>
              <span className={styles.topDot} />
              <span className={styles.topText}>Everyday Open · 9:30 AM – 8:30 PM</span>
            </div>
            <div className={styles.topItem}>
              <a href="mailto:aayramakeovers@gmail.com" className={styles.topMail}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>aayramakeovers@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.inner}>
          {/* Brand Logo in Maison Auré luxury style */}
          <NavLink to="/" className={styles.logo} onClick={handleNavClick}>
            <span className={styles.logoText}>
              Aayra <span className={styles.logoGold}>Makeovers</span>
            </span>
          </NavLink>

          {/* Desktop nav links */}
          <nav className={styles.desktopNav}>
            {NAV.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                onClick={handleNavClick}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right: WhatsApp CTA + Hamburger */}
          <div className={styles.rightGroup}>
            <a href={WA} target="_blank" rel="noreferrer" className={styles.cta}>
              <span>Book Appointment</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <button
              className={`${styles.hamburger} ${sidebarOpen ? styles.hamOpen : ''}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${sidebarOpen ? styles.backdropVisible : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sideHeader}>
          <div className={styles.sideLogo}>
            Aayra <span className={styles.logoGold}>Makeovers</span>
          </div>
          <button className={styles.sideClose} onClick={() => setSidebarOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <nav className={styles.sideNav}>
          {NAV.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `${styles.sideLink} ${isActive ? styles.sideLinkActive : ''}`}
              onClick={handleNavClick}
            >
              <span>{label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.sideArrow}>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </NavLink>
          ))}
        </nav>

        <div className={styles.sideContact}>
          <p className={styles.sideContactLabel}>✦ Direct Stylist Line</p>
          <a href="tel:+919686457628" className={styles.sidePhone}>+91 96864 57628</a>
          <a href={WA} target="_blank" rel="noreferrer" className={styles.sideWa}>
            💬 WhatsApp Pallavi
          </a>
          <a href="mailto:aayramakeovers@gmail.com" className={styles.sideMail}>
            ✉ aayramakeovers@gmail.com
          </a>
          <div className={styles.sideInfo}>
            <p>📍 Chamarajanagar, Karnataka</p>
            <p>🕐 9:30 AM – 8:30 PM · Open Daily</p>
          </div>
        </div>

        <a href={WA} target="_blank" rel="noreferrer" className={styles.sideBtn}>
          Book Appointment
        </a>
      </aside>
    </>
  )
}
