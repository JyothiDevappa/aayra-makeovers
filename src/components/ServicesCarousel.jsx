import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServicesCarousel.module.css'

import hairspa  from '../assets/img/parlour/hairspa.webp'
import facial   from '../assets/img/parlour/facial.webp'
import eyebrows from '../assets/img/parlour/eyebrows.webp'
import nailCare from '../assets/img/parlour/nail-care.webp'
import layerCut from '../assets/img/parlour/layer_cut.jpg'
import vCut     from '../assets/img/parlour/v_cut.jpg'
import uCut     from '../assets/img/parlour/u_cut.jpg'
import bobCut   from '../assets/img/parlour/bob_cut.jpg'

const parlourServices = [
  {
    num: 'No. 01',
    title: 'Hair Spa & Scalp Massage',
    desc: 'Deep hair conditioning, hot steam therapy, anti-dandruff treatment and relaxing head massage for silky, soft hair.',
    highlights: ['Deep Conditioning', 'Head Massage', 'Silky & Frizz-Free'],
    price: 'From ₹800',
    tag: 'Hair Spa',
    img: hairspa,
    waMsg: 'Hello Pallavi, I would like to book a Hair Spa & Scalp Massage appointment at Aayra Makeovers.'
  },
  {
    num: 'No. 02',
    title: 'Facials & Skin Glow Care',
    desc: 'Fruit facials, gold facial, skin brightening, de-tan cleanup and herbal face packs for clear, glowing skin.',
    highlights: ['Instant Glow', 'De-Tan Treatment', 'Herbal Face Pack'],
    price: 'From ₹600',
    tag: 'Skin Care',
    img: facial,
    waMsg: 'Hello Pallavi, I would like to book a Facial appointment at Aayra Makeovers.'
  },
  {
    num: 'No. 03',
    title: 'Eyebrow Threading & Waxing',
    desc: 'Clean and neat eyebrow shaping, upper lip, forehead threading, chin and gentle waxing for everyday grooming.',
    highlights: ['Clean Eyebrow Shape', 'Upper Lip Threading', 'Gentle & Painless'],
    price: 'From ₹50',
    tag: 'Threading',
    img: eyebrows,
    waMsg: 'Hello Pallavi, I would like to visit for Eyebrow threading & facial grooming.'
  },
  {
    num: 'No. 04',
    title: 'Manicure, Pedicure & Nail Care',
    desc: 'Foot scrub, dead skin removal, relaxing massage, cuticle cleanup and nail polish shaping for hands & feet.',
    highlights: ['Foot Scrub & Massage', 'Hand Glow Treatment', 'Clean Cuticles'],
    price: 'From ₹500',
    tag: 'Nail Care',
    img: nailCare,
    waMsg: 'Hello Pallavi, I would like to book a Manicure & Pedicure appointment at Aayra Makeovers.'
  }
]

const hairCutServices = [
  {
    num: 'No. 01',
    title: 'Layer Cut & Voluminous Styling',
    desc: 'Adds soft bouncy layers, beautiful volume and face-framing texture tailored to your hair length.',
    highlights: ['Volume & Bounce', 'Face Framing Layers', 'Blowout Setting'],
    price: 'From ₹350',
    tag: 'Trending Cut',
    img: layerCut,
    waMsg: 'Hello Pallavi, I would like to book a Layer Cut appointment at Aayra Makeovers.'
  },
  {
    num: 'No. 02',
    title: 'V-Shape Haircut & Taper',
    desc: 'Sharp pointed V-shaped taper at the back with smooth straight texture for an elegant back silhouette.',
    highlights: ['Sharp V-Shape', 'Silky Straight Finish', 'Clean Silhouette'],
    price: 'From ₹350',
    tag: 'V Cut',
    img: vCut,
    waMsg: 'Hello Pallavi, I would like to book a V-Shape Haircut appointment at Aayra Makeovers.'
  },
  {
    num: 'No. 03',
    title: 'U-Shape Haircut & Curved Hemline',
    desc: 'Graceful curved U hemline with clean perimeter trimming, split-end removal, and healthy glossy shine.',
    highlights: ['Graceful U Curve', 'Split-End Removal', 'Natural Everyday Look'],
    price: 'From ₹250',
    tag: 'U Cut',
    img: uCut,
    waMsg: 'Hello Pallavi, I would like to book a U-Shape Haircut appointment at Aayra Makeovers.'
  },
  {
    num: 'No. 04',
    title: 'Classic Bob Cut & Short Styling',
    desc: 'Chic modern bob cut with crisp jawline level structuring, sleek straight texture, and easy-to-manage style.',
    highlights: ['Chic Bob Cut', 'Structured Edges', 'Modern Style'],
    price: 'From ₹300',
    tag: 'Bob Cut',
    img: bobCut,
    waMsg: 'Hello Pallavi, I would like to book a Bob Cut appointment at Aayra Makeovers.'
  }
]

export default function ServicesCarousel() {
  const [activeTab, setActiveTab] = useState('parlour')

  const isHaircuts = activeTab === 'haircuts'
  const currentServices = isHaircuts ? hairCutServices : parlourServices

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header (Dynamically reflects the selected tab) */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {isHaircuts ? 'Top Haircuts for Women' : 'What We Offer'}
            </div>
            <h2 className={styles.heading}>
              {isHaircuts ? (
                <>Top Trending <span className={styles.headingGold}>Hair Cuts.</span></>
              ) : (
                <>Our Beauty Parlour <span className={styles.headingGold}>Services.</span></>
              )}
            </h2>
            <p className={styles.subheading}>
              {isHaircuts
                ? 'Professional styling, precision layering, and clean finishing tailored to your face shape.'
                : 'Skin care, nourishing hair spa, facials, and grooming for ladies & kids in Chamarajanagar.'}
            </p>
          </div>

          {/* 2 Tabs (Beauty Parlour & Hair Cuts) */}
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${activeTab === 'parlour' ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveTab('parlour')}
              type="button"
            >
              <span className={styles.tabIcon}>✦</span>
              <span>Beauty Parlour</span>
            </button>
            <button
              className={`${styles.filterBtn} ${activeTab === 'haircuts' ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveTab('haircuts')}
              type="button"
            >
              <span className={styles.tabIcon}>❖</span>
              <span>Hair Cuts</span>
            </button>
          </div>
        </div>

        {/* Stacked Luxury Cards with Tab Switch Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.cardsStack}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {currentServices.map((service, index) => {
              const waUrl = `https://wa.me/919686457628?text=${encodeURIComponent(service.waMsg)}`

              return (
                <motion.a
                  key={service.title}
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  {/* Left: Image with Hover Zoom & Tag */}
                  <div className={styles.cardImgWrap}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className={styles.cardImg}
                      loading="lazy"
                    />
                    <span className={styles.imgTag}>{service.tag}</span>
                  </div>

                  {/* Middle: Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardEyebrow}>{service.num}</div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                    
                    {/* Highlight Pills */}
                    <div className={styles.pillList}>
                      {service.highlights.map((h, i) => (
                        <span key={i} className={styles.pillItem}>
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Price & Circular WhatsApp Arrow Action */}
                  <div className={styles.cardAction}>
                    <div className={styles.priceWrap}>
                      <span className={styles.priceLabel}>Price</span>
                      <span className={styles.priceVal}>{service.price}</span>
                    </div>

                    <div className={styles.arrowBtn} aria-label="Book this service on WhatsApp">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.arrowSvg}
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.bottomText}>
            <p className={styles.bottomTitle}>Want to book an appointment or ask about prices?</p>
            <p className={styles.bottomSub}>Directly message Pallavi on WhatsApp for parlour visits, haircuts &amp; combo packages.</p>
          </div>
          <a
            href="https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20prices."
            target="_blank"
            rel="noreferrer"
            className={styles.bottomBtn}
          >
            <span>WhatsApp Booking</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
