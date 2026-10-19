import { motion } from 'framer-motion'
import styles from './CrystalFacialSection.module.css'
import crystalImg from '../assets/img/hero_images/crystal-facial.jpg'

const WA_ENQUIRY = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20the%20Newly%20Launched%20Crystal%20Facial%20for%20stress%20relief%2C%20skin%20and%20hair%20wellness%20at%20Aayra%20Makeovers.'

const benefits = [
  {
    icon: '🌿',
    title: 'Stress Management & Deep Calm',
    desc: 'Chilled gemstone rolling soothes the central nervous system, helping release mental exhaustion and cortisol-induced facial tightness.',
  },
  {
    icon: '🕊️',
    title: 'Anxiety & Restlessness Relief',
    desc: 'Third-eye and temple crystal acupressure induces meditative stillness, quieting racing thoughts, headaches, and inner tension.',
  },
  {
    icon: '☀️',
    title: 'Depression & Mood Upliftment',
    desc: 'Refreshing botanical aromas combined with gentle sensory touch uplift the senses and dispel heavy, sluggish emotional fatigue.',
  },
  {
    icon: '✨',
    title: 'Skin Issues & Clarifying Care',
    desc: 'Gentle lymphatic drainage aids in reducing puffiness, soothing redness, balancing excess oil, and revitalizing dull or tired skin.',
  },
  {
    icon: '💆‍♀️',
    title: 'Hair & Scalp Tension Relief',
    desc: 'Acupoint stimulation along the hairline and crown improves microcirculation, easing scalp tightness linked to stress-induced hair issues.',
  },
  {
    icon: '💎',
    title: 'Therapeutic Gemstone Energy',
    desc: 'Natural turquoise and mint jade crystals restore balanced temperature and serene mind-body harmony for a luminous natural glow.',
  },
]

export default function CrystalFacialSection() {
  return (
    <section className={styles.section} id="crystal-facial">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left Column: Editorial Content */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Aayra Exclusive Skincare
            </div>

            <p className={styles.subtitle}>Reveal Your Natural Glow</p>

            <h2 className={styles.heading}>
              Newly Launched <span className={styles.headingGold}>Crystal Facial.</span>
            </h2>

            {/* Quick Holistic Highlights Tag Strip */}
            <div className={styles.tagStrip}>
              <span className={styles.tagItem}>✦ Stress Management</span>
              <span className={styles.tagItem}>✦ Anxiety Relief</span>
              <span className={styles.tagItem}>✦ Mood Upliftment</span>
              <span className={styles.tagItem}>✦ Skin Issues</span>
              <span className={styles.tagItem}>✦ Hair &amp; Scalp Care</span>
            </div>

            <p className={styles.description}>
              Experience the restorative synergy of holistic beauty care and therapeutic gemstone energy at Aayra Makeovers. More than traditional skincare, our Crystal Facial is a grounding mind-body ritual designed to aid <strong>stress management</strong>, soothe <strong>anxiety and low mood</strong>, relieve <strong>scalp and hair tension</strong>, and comfort <strong>troubled skin issues</strong>—awakening your inherent vitality from within.
            </p>

            {/* Benefits Grid */}
            <div className={styles.benefitsGrid}>
              {benefits.map((item, idx) => (
                <div key={idx} className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.benefitTitle}>{item.title}</h4>
                    <p className={styles.benefitDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <a
                id="crystal-facial-enquire-btn"
                href={WA_ENQUIRY}
                target="_blank"
                rel="noreferrer"
                className={styles.btnPrimary}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Enquire Now</span>
              </a>

              <a
                id="crystal-facial-call-btn"
                href="tel:+919686457628"
                className={styles.btnSecondary}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Studio</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prominent High-Quality Treatment Image */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.imageCard}>
              <img
                src={crystalImg}
                alt="Crystal Facial at Aayra Makeovers, Chamarajanagar - Holistic Treatment with Facial Gemstones"
                className={styles.facialImg}
                loading="lazy"
              />
              <div className={styles.imgOverlay} />

              {/* Floating Top Badge */}
              <div className={styles.topBadge}>
                <span className={styles.badgeSparkle}>✦</span>
                <span>Therapeutic Gemstone Therapy</span>
              </div>

              {/* Floating Bottom Card */}
              <div className={styles.bottomCard}>
                <p className={styles.bottomTag}>AAYRA MAKEOVERS · CHAMARAJANAGAR</p>
                <h3 className={styles.bottomTitle}>Holistic Crystal Ritual</h3>
                <p className={styles.bottomSub}>Stress relief, mood calm, skin renewal &amp; scalp care by Pallavi</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
