import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20book%20an%20appointment.'

const BEAUTY_SERVICES = [
  { href: '/services', label: 'Nourishing Hair Spa' },
  { href: '/services', label: 'Radiant Skin Facials' },
  { href: '/services', label: 'Eyebrows & Threading' },
  { href: '/hair-styles', label: 'Trending Haircuts' },
  { href: '/services', label: 'Manicure & Pedicure' },
]

const BRIDAL_TAILORING = [
  { href: '/bridal', label: 'HD Bridal Makeovers' },
  { href: '/bridal', label: 'Engagement & Haldi Glam' },
  { href: '/tailoring', label: 'Designer Blouse Stitching' },
  { href: '/tailoring', label: 'Bridal Aari Embroidery' },
  { href: '/tailoring', label: 'Saree Kuchu & Draping' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      {/* Background Watermark Text */}
      <div className={styles.bgWatermark} aria-hidden="true">
        <span>AAYRA MAKEOVERS</span>
      </div>

      {/* Pre-footer Luxury CTA Card */}
      <div className={styles.ctaWrapper}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaLeft}>
            <div className={styles.ctaEyebrow}>
              <span className={styles.ctaEyebrowLine} />
              Personal Styling Experience
            </div>
            <h3 className={styles.ctaHeading}>
              Ready for Your <span className={styles.ctaHeadingGold}>Transformation?</span>
            </h3>
            <p className={styles.ctaSub}>
              Dedicated one-on-one beauty care and bespoke tailoring by Pallavi in Chamarajanagar.
            </p>
          </div>

          <div className={styles.ctaRight}>
            <a href={WA} target="_blank" rel="noreferrer" className={styles.ctaBtnLuxe}>
              <span>WhatsApp Booking</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+919686457628" className={styles.ctaBtnGhost}>
              📞 +91 96864 57628
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Multi-Column Content */}
      <div className={styles.mainContent}>
        <div className={styles.innerGrid}>
          
          {/* Col 1: Brand & Philosophy */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <h2 className={styles.logoText}>
                Aayra <span className={styles.logoGold}>Makeovers</span>
              </h2>
            </div>
            <p className={styles.kannadaTag}>ಹೆಣ್ಣುಮಕ್ಕಳು ಮತ್ತು ಮಕ್ಕಳ ಬ್ಯೂಟಿ ಪಾರ್ಲರ್ &amp; ಟೈಲರಿಂಗ್</p>
            <p className={styles.brandDesc}>
              Chamarajanagar's premier studio for personalized bridal makeup, nourishing head spas, glowing skin facials &amp; handcrafted aari blouse tailoring under one roof.
            </p>
            <div className={styles.badgeRow}>
              <span className={styles.pillBadge}>✦ 100% Personal Attention</span>
              <span className={styles.pillBadge}>✦ Ladies &amp; Kids Only</span>
            </div>
          </div>

          {/* Col 2: Salon & Spa */}
          <div className={styles.navCol}>
            <p className={styles.colHeader}>Salon &amp; Spa</p>
            <ul className={styles.linkList}>
              {BEAUTY_SERVICES.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className={styles.footerLink}>
                    <span className={styles.linkDot}>✦</span> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Bridal & Boutique */}
          <div className={styles.navCol}>
            <p className={styles.colHeader}>Bridal &amp; Boutique</p>
            <ul className={styles.linkList}>
              {BRIDAL_TAILORING.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className={styles.footerLink}>
                    <span className={styles.linkDot}>✦</span> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Info */}
          <div className={styles.infoCol}>
            <p className={styles.colHeader}>Studio Information</p>
            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Aayra Makeovers</strong>
                  <p>Chamarajanagar, Karnataka 571440</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>🕐</span>
                <div>
                  <strong>Studio Hours</strong>
                  <p>9:30 AM – 8:30 PM · All 7 Days</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Stylist Pallavi</strong>
                  <p>+91 96864 57628</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Back to Top */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Aayra Makeovers. All rights reserved. Crafted with elegance for Chamarajanagar.
          </p>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <span className={styles.topArrow}>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
