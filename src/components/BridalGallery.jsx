import { Link } from 'react-router-dom'
import styles from './BridalGallery.module.css'

import m1 from '../assets/img/bridal_makeup/makeup_1.jpeg'
import m2 from '../assets/img/bridal_makeup/makeup_2.jpeg'
import m3 from '../assets/img/bridal_makeup/makeup_3.jpeg'
import m4 from '../assets/img/bridal_makeup/makeup_4.jpeg'

const WA_BRIDAL = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Makeup%20for%20my%20wedding.'

const bridalHighlights = [
  'HD & Airbrush Bridal Makeup',
  'Muhurtham, Reception & Haldi Looks',
  'Precision Saree Draping & Box Pleats',
  'Travel to Kalyana Mantapa & Venues',
]

const collection = [
  { img: m1, title: 'Traditional South Indian Muhurtham Bridal Makeup by Pallavi in Chamarajanagar' },
  { img: m2, title: 'Grand Reception Glam Makeup and Hair Styling in Chamarajanagar' },
  { img: m3, title: 'Silk Saree Draping & Box Pleating for Bride in Chamarajanagar' },
  { img: m4, title: 'Haldi and Pre-Wedding Floral Makeup Artistry in Chamarajanagar' },
]

export default function BridalGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.stackContainer}>
        
        {/* ── FULL SECTION LAYER 1: Bridal & Marriage Services ── */}
        <div className={`${styles.layerCard} ${styles.card1}`}>
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              
              {/* Left Content Side */}
              <div className={styles.textContent}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Bridal &amp; Marriage Services
                </div>

                <h2 className={styles.heading}>
                  Bridal Makeup Artist &amp; <span className={styles.headingGold}>Wedding Styling.</span>
                </h2>

                <p className={styles.body}>
                  Experience dedicated one-on-one bridal artistry with flawless HD base, customized hair braids, and authentic silk saree draping by Pallavi in Chamarajanagar.
                </p>

                {/* Concise Highlights */}
                <div className={styles.highlightGrid}>
                  {bridalHighlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightBadge}>
                      <span className={styles.badgeDot}>✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.actionRow}>
                  <Link to="/bridal" className={styles.btnPrimary}>
                    <span>More Information &amp; Packages</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>

                  <a href={WA_BRIDAL} target="_blank" rel="noreferrer" className={styles.btnGhost}>
                    <span>WhatsApp Booking</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Contained Image Frame */}
              <div className={styles.imageCol}>
                <div className={styles.imageCard}>
                  <img src={m1} alt="Bridal Makeup Artist Pallavi at Aayra Makeovers Chamarajanagar" className={styles.coverImg} loading="lazy" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── FULL SECTION LAYER 2: Real Brides Photo Gallery (Layers over Layer 1) ── */}
        <div className={`${styles.layerCard} ${styles.card2}`}>
          <div className={styles.galleryInner}>
            <div className={styles.collectionHeader}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Photo Gallery
                </div>
                <h3 className={styles.collectionTitle}>Our Happy Customers Gallery</h3>
                <p className={styles.collectionSub}>Explore our real brides, traditional draping and glowing wedding makeovers:</p>
              </div>

              <div className={styles.headerActions}>
                <Link to="/bridal" className={styles.viewAll}>
                  <span>View All Bridal Artistry</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.collectionGrid}>
              {collection.map((item, i) => (
                <div key={i} className={styles.collectionItem}>
                  <div className={styles.collectionImgWrap}>
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
