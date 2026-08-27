import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './BoutiqueSection.module.css'
import designerBack from '../assets/img/tailoring/designer_back_blouse.jpg'

const WA_BOUTIQUE = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20custom%20blouse%20stitching%20and%20Aari%20embroidery.'

const boutiqueOfferings = [
  {
    icon: '✦',
    title: 'Custom Blouse Stitching',
    desc: 'Perfect fitting princess cut, katori cut, boat neck & padded cups'
  },
  {
    icon: '❖',
    title: 'Bridal Aari & Maggam Work',
    desc: 'Handcrafted zari needlework, stone setting, pearls & designer backs'
  },
  {
    icon: '◈',
    title: 'Dress & Suit Tailoring',
    desc: 'Bespoke Anarkali gowns, Punjabi salwar suits & lehengas'
  },
  {
    icon: '◇',
    title: 'Saree Kuchu & Fall Pico',
    desc: 'Handmade silk thread tassels, bead hangings & cotton fall stitching'
  },
]

export default function BoutiqueSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left: Designer Back Blouse Image */}
          <div className={styles.imageCol}>
              <div className={styles.imageCard}>
                <img
                  src={designerBack}
                  alt="Designer Back Blouse & Aari Embroidery by Aayra Makeovers"
                  className={styles.boutiqueImg}
                  loading="lazy"
                />
                <div className={styles.imgOverlay} />
                
                {/* Floating Luxury Badge */}
                <div className={styles.floatingBadge}>
                  <span className={styles.badgeStar}>✦</span>
                  <div>
                    <strong className={styles.badgeTitle}>Master Fitting &amp; Aari Work</strong>
                    <p className={styles.badgeSub}>Tailored exclusively by Pallavi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content & Highlights */}
            <div className={styles.textCol}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Aayra Designer Boutique
              </div>

              <h2 className={styles.heading}>
                Bespoke Bridal Blouses &amp; <span className={styles.headingGold}>Handcrafted Aari.</span>
              </h2>

              <p className={styles.body}>
                From royal bridal maggam embroidery to everyday comfort fits, we deliver precision tailoring and handcrafted detailing for ladies and kids in Chamarajanagar.
              </p>

              {/* Offerings Grid */}
              <div className={styles.offeringsGrid}>
                {boutiqueOfferings.map((item, idx) => (
                  <div key={idx} className={styles.offeringCard}>
                    <span className={styles.offeringIcon}>{item.icon}</span>
                    <div className={styles.offeringContent}>
                      <h4 className={styles.offeringTitle}>{item.title}</h4>
                      <p className={styles.offeringDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={styles.actionRow}>
                <a href={WA_BOUTIQUE} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                  <span>WhatsApp Boutique</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>

                <Link to="/tailoring" className={styles.btnSecondary}>
                  <span>Explore Blouse Designs</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>
      </div>
    </section>
  )
}
