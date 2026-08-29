import { motion } from 'framer-motion'
import styles from './AboutStrip.module.css'
import shopImg from '../assets/img/shop/shop_img_1.jpeg'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20visit%20Aayra%20Makeovers%20Studio.'
const MAPS_URL = 'https://maps.google.com/?q=11.9258437,76.9380792'

export default function AboutStrip() {
  return (
    <section className={styles.section} id="visit-shop">
      <div className={styles.container}>
        
        <div className={styles.visitWrapper}>
          
          {/* Left Column: Premium Studio Showcase Image */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageCard}>
              <img
                src={shopImg}
                alt="Inside Aayra Makeovers Beauty Parlour and Tailoring Studio in Chamarajanagar, Karnataka"
                className={styles.studioImg}
                loading="lazy"
              />
              <div className={styles.imgOverlay} />
              
              {/* Floating Badges */}
              <div className={styles.topBadge}>
                <span className={styles.badgeDot}>●</span>
                <span>Open Daily · 10:00 AM – 7:00 PM</span>
              </div>
              
              <div className={styles.bottomCard}>
                <p className={styles.bottomTag}>CHAMARAJANAGAR</p>
                <p className={styles.bottomTitle}>Aayra Beauty &amp; Boutique Studio</p>
                <p className={styles.bottomSub}>Private 1-on-1 Sanctuary for Ladies &amp; Kids</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Invitation & Details */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Boutique &amp; Studio Invitation
            </div>

            <h2 className={styles.heading}>
              Visit Our <span className={styles.headingGold}>Studio in Chamarajanagar.</span>
            </h2>

            <p className={styles.description}>
              Step into a warm, hygienic, and completely private environment curated exclusively for women and children. From specialized bridal trials and hair styling to bespoke blouse stitching, we provide dedicated personalized care for your complete beauty transformation.
            </p>

            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <div className={styles.iconBox}>✨</div>
                <div>
                  <h4 className={styles.highlightTitle}>1-on-1 Personal Attention</h4>
                  <p className={styles.highlightDesc}>Undivided time &amp; tailored beauty consultations by Pallavi.</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}>👗</div>
                <div>
                  <h4 className={styles.highlightTitle}>Custom Tailoring &amp; Aari</h4>
                  <p className={styles.highlightDesc}>Trial fittings, bridal blouse stitching, and custom neck embroidery.</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}>🌿</div>
                <div>
                  <h4 className={styles.highlightTitle}>Safe &amp; Clean Ambiance</h4>
                  <p className={styles.highlightDesc}>100% sanitized tools, top cosmetics, and private space.</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}>📍</div>
                <div>
                  <h4 className={styles.highlightTitle}>Easy to Reach Location</h4>
                  <p className={styles.highlightDesc}>Centrally located in Chamarajanagar with easy parking &amp; access.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <a href={WA} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                <span>Book Studio Visit</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Get Directions</span>
              </a>

              <a href="tel:+919686457628" className={styles.btnPhone}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Us</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
