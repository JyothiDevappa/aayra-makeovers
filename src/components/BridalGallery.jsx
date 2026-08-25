import { motion } from 'framer-motion'
import styles from './BridalGallery.module.css'

import m1 from '../assets/img/bridal_makeup/makeup_1.jpeg'
import m2 from '../assets/img/bridal_makeup/makeup_2.jpeg'
import m3 from '../assets/img/bridal_makeup/makeup_3.jpeg'
import m4 from '../assets/img/bridal_makeup/makeup_4.jpeg'

const WA = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Makeup%20for%20my%20wedding.'

const bridalServicesList = [
  { name: 'Bridal Makeup', desc: 'Full wedding day makeup with long-lasting finish' },
  { name: 'Pre-Wedding Makeup', desc: 'Glow makeup for photo shoots & pre-wedding events' },
  { name: 'Engagement Makeup', desc: 'Elegant shimmer & natural glow for engagement ceremony' },
  { name: 'Non-Bridal Makeup', desc: 'Special looks for bridesmaids, mother, sisters & family' },
  { name: 'Haldi Ceremony Makeup', desc: 'Fresh, radiant dewy makeup with floral styling' },
  { name: 'Reception Makeup', desc: 'Glamorous evening look with airbrush HD glow' },
  { name: 'HD Makeup', desc: 'Sweat-resistant, high-definition camera-ready finish' },
  { name: 'Party Makeup', desc: 'Subtle & stylish makeup for all family events' },
  { name: 'Bridal Hair Styles', desc: 'All types of traditional braids, buns, curls & flower setting' },
  { name: 'Saree Draping', desc: 'Neat box pleats, silk saree draping & pin-up setting' },
]

const collection = [
  { img: m1, title: 'Traditional Muhurtham', tag: 'Wedding Look' },
  { img: m2, title: 'Royal Reception', tag: 'HD Airbrush' },
  { img: m3, title: 'Engagement Glam', tag: 'Soft Glow' },
  { img: m4, title: 'Haldi & Mehndi Art', tag: 'Dewy Finish' },
]

export default function BridalGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Top: Split Hero Block */}
        <div className={styles.heroRow}>
          {/* Left: Beautiful Bride Photo */}
          <motion.div
            className={styles.mainImgWrap}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imgBox}>
              <img src={m1} alt="Bridal Makeup by Pallavi" className={styles.mainImg} />
              <div className={styles.mainBadge}>✦ Professional Bridal Artist</div>
            </div>
          </motion.div>

          {/* Right: Detailed Service Offerings & Travel Highlights */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Bridal &amp; Marriage Services
            </div>

            <h2 className={styles.heading}>
              Complete Bridal Makeup &amp; <span className={styles.headingGold}>Wedding Styling.</span>
            </h2>

            <p className={styles.body}>
              Complete bridal dressing, HD makeup, hairstyle and saree pleating for all wedding ceremonies.
            </p>

            {/* Travel to Wedding Halls Highlight Card */}
            <div className={styles.travelCard}>
              <div className={styles.travelIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 11 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div className={styles.travelText}>
                <strong>We Travel to Your Wedding Venue &amp; Marriage Hall</strong>
                <p>Available for on-location bridal makeup, saree draping &amp; hair setting across Chamarajanagar, Mysore &amp; nearby towns.</p>
              </div>
            </div>

            {/* Structured Bridal Services Grid */}
            <div className={styles.serviceSectionTitle}>
              ✦ Our Bridal &amp; Event Services
            </div>

            <div className={styles.servicesGrid}>
              {bridalServicesList.map((item, idx) => (
                <div key={idx} className={styles.serviceCardItem}>
                  <div className={styles.serviceBullet}>✦</div>
                  <div className={styles.serviceDetails}>
                    <span className={styles.serviceName}>{item.name}</span>
                    <span className={styles.serviceDesc}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Actions */}
            <div className={styles.actionRow}>
              <a href={WA} target="_blank" rel="noreferrer" className={styles.btnLuxe}>
                <span>Book Wedding Makeup</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="tel:+919686457628" className={styles.btnGhost}>
                <span>Call +91 96864 57628</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Real Brides Gallery */}
        <div className={styles.collectionWrap}>
          <div className={styles.collectionHeader}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Photo Gallery
              </div>
              <h3 className={styles.collectionTitle}>Our Happy Customers Gallery</h3>
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className={styles.viewAll}>
              <span>Enquire for Marriage Dates</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={styles.collectionGrid}>
            {collection.map((item, i) => (
              <motion.div
                key={i}
                className={styles.collectionItem}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.collectionImgWrap}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className={styles.collectionOverlay}>
                    <span className={styles.itemTag}>{item.tag}</span>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
