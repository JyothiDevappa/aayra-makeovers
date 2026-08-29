import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.pageWrap}>
      <SEO
        title="Page Not Found (404) | Aayra Makeovers Chamarajanagar"
        description="The page you are looking for does not exist. Explore our beauty parlour services, bridal makeup packages, or designer blouse stitching in Chamarajanagar."
        canonical="https://aayramakeovers.com/404"
      />

      <section className={styles.container}>
        <span className={styles.badge}>✦ Error 404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          The page you requested could not be found. Please navigate through our main services or return to the homepage.
        </p>

        <div className={styles.linksGrid}>
          <Link to="/" className={styles.card}>
            <span className={styles.cardIcon}>🏠</span>
            <strong className={styles.cardTitle}>Home</strong>
            <p className={styles.cardSub}>Return to main studio overview</p>
          </Link>

          <Link to="/services" className={styles.card}>
            <span className={styles.cardIcon}>✦</span>
            <strong className={styles.cardTitle}>Beauty Services</strong>
            <p className={styles.cardSub}>Haircuts, hair spa, facials & grooming</p>
          </Link>

          <Link to="/bridal" className={styles.card}>
            <span className={styles.cardIcon}>👰</span>
            <strong className={styles.cardTitle}>Bridal Makeovers</strong>
            <p className={styles.cardSub}>Muhurtham, reception & wedding packages</p>
          </Link>

          <Link to="/tailoring" className={styles.card}>
            <span className={styles.cardIcon}>👗</span>
            <strong className={styles.cardTitle}>Blouses & Tailoring</strong>
            <p className={styles.cardSub}>Custom stitching & bridal Aari needlework</p>
          </Link>
        </div>

        <div className={styles.btnRow}>
          <Link to="/" className={styles.btnPrimary}>
            <span>Back to Homepage</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20have%20an%20enquiry."
            target="_blank"
            rel="noreferrer"
            className={styles.btnGhost}
          >
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  )
}
