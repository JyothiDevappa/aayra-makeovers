import { motion } from 'framer-motion'
import styles from './MapSection.module.css'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20book%20an%20appointment.'

export default function MapSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Info Grid */}
        <div className={styles.infoGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.iconCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className={styles.infoLabel}>Studio Location</p>
              <p className={styles.infoValue}>Chamarajanagar, Karnataka</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.iconCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className={styles.infoLabel}>Studio Hours</p>
              <p className={styles.infoValue}>10:00 AM – 7:00 PM · All 7 Days</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.iconCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className={styles.infoLabel}>Direct Stylist Line</p>
              <a href="tel:+919686457628" className={styles.infoLink}>
                +91 96864 57628
              </a>
            </div>
          </motion.div>

          <motion.a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className={styles.bookCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>Book via WhatsApp</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* Map Container */}
        <motion.div
          className={styles.mapContainer}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.mapCard}>
            <div className={styles.mocLabel}>✦ Visit Studio</div>
            <h3 className={styles.mocTitle}>Aayra Makeovers</h3>
            <p className={styles.mocSub}>Near Chamarajanagar Town, Karnataka 571440</p>
            <a
              href="https://maps.google.com/?q=11.9258437,76.9380792"
              target="_blank"
              rel="noreferrer"
              className={styles.mocLink}
            >
              <span>Open in Google Maps</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>

          <iframe
            title="Aayra Makeovers Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d243.98134906013237!2d76.93807916319349!3d11.925843725990712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1787928755254!5m2!1sen!2sin"
            className={styles.iframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>

      </div>
    </section>
  )
}
