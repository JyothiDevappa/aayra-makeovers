import { motion } from 'framer-motion'
import styles from './AboutStrip.module.css'

import shop1 from '../assets/img/shop/shop_img_1.jpeg'
import shop2 from '../assets/img/shop/shop_img_2.jpeg'
import shop3 from '../assets/img/shop/shop_img_3.jpeg'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20visit%20Aayra%20Makeovers%20Studio.'

const studioGallery = [
  { img: shop1, alt: 'Aayra Makeovers Studio Area' },
  { img: shop2, alt: 'Aayra Makeovers Styling Station' },
  { img: shop3, alt: 'Aayra Makeovers Boutique Studio' },
]

export default function AboutStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header — Clean Editorial Typography */}
        <div className={styles.header}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.eyebrowLine} />
            Inside Aayra Studio
          </motion.div>

          <div className={styles.headerRow}>
            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A Private Sanctuary for <span className={styles.headingGold}>Beauty &amp; Style.</span>
            </motion.h2>

            <motion.p
              className={styles.subheading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exclusively dedicated to ladies and kids in Chamarajanagar. Relax in a clean, welcoming ambiance with personalized 1-on-1 attention for all beauty and tailoring rituals.
            </motion.p>
          </div>
        </div>

        {/* Big, Dramatic High-Fashion Gallery Columns (Zero text/cards inside) */}
        <div className={styles.bigGalleryGrid}>
          {studioGallery.map((item, idx) => (
            <motion.div
              key={idx}
              className={`${styles.bigGalleryCard} ${idx === 1 ? styles.cardCenter : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
            >
              <div className={styles.imageFrame}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className={styles.bigImg}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Features & Direct Actions */}
        <div className={styles.bottomRow}>
          <div className={styles.featurePills}>
            <div className={styles.featurePill}>
              <span className={styles.pillDot}>✦</span>
              <span>1-on-1 Personal Care</span>
            </div>
            <div className={styles.featurePill}>
              <span className={styles.pillDot}>✦</span>
              <span>Ladies &amp; Kids Only</span>
            </div>
            <div className={styles.featurePill}>
              <span className={styles.pillDot}>✦</span>
              <span>7+ Years Experience</span>
            </div>
          </div>

          <div className={styles.actionGroup}>
            <a href={WA} target="_blank" rel="noreferrer" className={styles.btnLuxe}>
              <span>Book Studio Visit</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+919686457628" className={styles.btnGhost}>
              <span>Call +91 96864 57628</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
