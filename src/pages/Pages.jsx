import { motion } from 'framer-motion'
import styles from './PageStyles.module.css'
import ServicesCarousel from '../components/ServicesCarousel'
import MapSection from '../components/MapSection'

// Bridal Page Assets
import m1 from '../assets/img/bridal_makeup/makeup_1.jpeg'
import m2 from '../assets/img/bridal_makeup/makeup_2.jpeg'
import m3 from '../assets/img/bridal_makeup/makeup_3.jpeg'
import m4 from '../assets/img/bridal_makeup/makeup_4.jpeg'

// HairStyles Page Assets
import layerCutImg from '../assets/img/parlour/layer_cut.jpg'
import vCutImg from '../assets/img/parlour/v_cut.jpg'
import uCutImg from '../assets/img/parlour/u_cut.jpg'
import bobCutImg from '../assets/img/parlour/bob_cut.jpg'
import hairspaImg from '../assets/img/parlour/hairspa.webp'

// Boutique & Tailoring Assets
import weddingAari from '../assets/img/tailoring/wedding_aari_blouse.jpg'
import designerBack from '../assets/img/tailoring/designer_back_blouse.jpg'
import machineEmbroidery from '../assets/img/tailoring/machine_embroidery.jpg'
import shop1 from '../assets/img/shop/shop_img_1.jpeg'
import shop2 from '../assets/img/shop/shop_img_2.jpeg'
import shop3 from '../assets/img/shop/shop_img_3.jpeg'

const WA_MAIN = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aayra%20Makeovers.'
const WA_BRIDAL = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Makeup%20packages%20and%20dates.'
const WA_TAILOR = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20customize%20and%20stitch%20a%20blouse%2Fdress%20at%20Aayra%20Boutique.'

// ── BRIDAL PAGE ──
export function BridalPage() {
  const images = [
    { img: m1, title: 'Traditional Muhurtham Look', desc: 'Flawless HD base, traditional gold jewelry styling & flower veni' },
    { img: m2, title: 'Grand Reception Glam', desc: 'Airbrush finish, soft smokey eyes & contemporary bridal styling' },
    { img: m3, title: 'Royal Silk Saree Drape', desc: 'Precision pleating, box folding & authentic saree styling' },
    { img: m4, title: 'Modern Bridal Silhouette', desc: 'Custom bridal hairstyle, dewy glow & customized accessories' }
  ]

  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Luxury Bridal Makeup
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Bridal Artistry
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          HD &amp; Airbrush bridal makeup, traditional saree draping, and customized hairstyles for Muhurtham, Engagement &amp; Reception.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((item, i) => (
            <motion.div
              key={i}
              className={styles.galleryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className={styles.galleryImgWrap}>
                <img src={item.img} alt={item.title} />
                <div className={styles.galleryOverlay}>
                  <p className={styles.cardTag}>BRIDAL SPECIAL</p>
                  <h3 className={styles.galleryCardTitle}>{item.title}</h3>
                  <p className={styles.galleryCardDesc}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Planning Your Wedding Date?</h3>
            <p>We travel to marriage halls and event venues across Chamarajanagar &amp; Mysore. Book early to reserve your dates with Pallavi.</p>
          </div>
          <a href={WA_BRIDAL} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <span>Enquire Bridal Dates</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── SERVICES PAGE ──
export function ServicesPage() {
  return (
    <div className={styles.pageWrap}>
      <ServicesCarousel />
    </div>
  )
}

// ── HAIR STYLES PAGE ──
export function HairStylesPage() {
  const stylesList = [
    { title: 'Layer Cut', desc: 'Adds volume and bouncy layers to medium and long hair.', tag: 'Trending', img: layerCutImg },
    { title: 'V-Shape Cut', desc: 'Distinctive sharp V-taper for an elegant silhouette.', tag: 'Popular', img: vCutImg },
    { title: 'U-Shape Cut', desc: 'Graceful curved U hemline with clean perimeter trimming.', tag: 'Classic', img: uCutImg },
    { title: 'Classic Bob Cut', desc: 'Modern, chic short & medium length structured cuts.', tag: 'Chic', img: bobCutImg },
    { title: 'Hair Spa & Smoothing', desc: 'Intense moisture hydration and anti-frizz shine therapy.', tag: 'Spa Care', img: hairspaImg },
  ]

  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Hair Styling &amp; Care
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Hair Cuts &amp; Styling
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Trending haircut styles tailored to your face shape, plus deep nourishing hair spa treatments.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        <div className={styles.hairGrid}>
          {stylesList.map((item, i) => (
            <motion.div
              key={i}
              className={styles.hairCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className={styles.tailorImgWrap}>
                <img src={item.img} alt={item.title} />
                <span className={styles.cardTag}>{item.tag}</span>
              </div>
              <div className={styles.hairInfo}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── TAILORING PAGE ──
const tailoringServices = [
  {
    title: 'Blouse Stitching',
    desc: 'Perfect fitting, princess cut, katori cut, boat neck, lining attachment & cup padding tailored to your measurements.',
    tag: 'Custom Stitching',
    img: designerBack
  },
  {
    title: 'Wedding Blouse',
    desc: 'Grand bridal blouses with heavy maggam stone embellishments, zardozi work, pearl drops and designer back necklines.',
    tag: 'Bridal Special',
    img: weddingAari
  },
  {
    title: 'Aari Works',
    desc: 'Intricate handcrafted Aari needle embroidery, peacock & floral motifs, stone setting and rich gold zari detailing.',
    tag: 'Hand Embroidery',
    img: weddingAari
  },
  {
    title: 'Machine Embroidery',
    desc: 'Precision computerized and machine thread work, golden cord patterns and designer borders on raw silk & cotton.',
    tag: 'Machine Work',
    img: machineEmbroidery
  },
  {
    title: 'Dress Stitching',
    desc: 'Custom Anarkali gowns, Punjabi salwar suits, party wear lehengas, long frocks and stylish modern kurti stitching.',
    tag: 'Dress Tailoring',
    img: shop2
  },
  {
    title: 'Zig-Zag & Fall',
    desc: 'Flawless saree pico, edge zig-zag stitching, high quality cotton fall attachment and border piping setting.',
    tag: 'Saree Finishing',
    img: shop2
  },
  {
    title: 'All Types of Kuchu & Tassels',
    desc: 'Handmade silk thread Kuchu, crochet tassel work, pearl drops, gold bead hangings & bridal saree pallu embellishments.',
    tag: 'Saree Kuchu',
    img: designerBack
  }
]

const blouseNeckPatterns = [
  { name: 'Pot Neck with Dori & Tassels', desc: 'Classic Indian bridal cutout back with designer latkans' },
  { name: 'Deep U-Neck with Gold Beads', desc: 'Graceful deep U back with dense stone border work' },
  { name: 'Boat Neck & Collar Styles', desc: 'Contemporary elegant neckline with subtle thread embroidery' },
  { name: 'Sweetheart & Diamond Cut', desc: 'Flattering structured back patterns for wedding silk sarees' },
  { name: 'Full Bridal Maggam Embroidery', desc: 'All-over heavy stone, zari, zardozi and pearl craftsmanship' },
  { name: 'Keyhole & Window Cutouts', desc: 'Trendy modern cutout neck shapes for party blouses' },
]

export function TailoringPage() {
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Designer Boutique &amp; Stitching
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Tailoring &amp; Aari Work
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Bespoke bridal blouse stitching, handcrafted Aari embroidery, custom neck patterns, stone customization, dress making, zig-zag fall &amp; all types of saree Kuchu.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        <div className={styles.boutiqueSectionHeader}>
          <div className={styles.boutiqueTag}>OUR SERVICES</div>
          <h2 className={styles.boutiqueTitle}>Bespoke Tailoring &amp; Embroidery</h2>
        </div>

        <div className={styles.tailorGrid}>
          {tailoringServices.map((service, i) => (
            <motion.div
              key={i}
              className={styles.tailorCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className={styles.tailorImgWrap}>
                <img src={service.img} alt={service.title} />
                <span className={styles.cardTag}>{service.tag}</span>
              </div>
              <div className={styles.hairInfo}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Blouse Neck Designs Showcase */}
        <div className={styles.patternsSection}>
          <div className={styles.boutiqueSectionHeader}>
            <div className={styles.boutiqueTag}>POPULAR BLOUSE STYLES</div>
            <h2 className={styles.boutiqueTitle}>Designer Neck &amp; Back Patterns</h2>
            <p className={styles.patternsSub}>
              Bring your reference photo or choose from our trending boutique catalog:
            </p>
          </div>

          <div className={styles.patternsGrid}>
            {blouseNeckPatterns.map((pattern, idx) => (
              <div key={idx} className={styles.patternCard}>
                <span className={styles.patternBullet}>✦</span>
                <div>
                  <h4 className={styles.patternName}>{pattern.name}</h4>
                  <p className={styles.patternDesc}>{pattern.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customization Call To Action */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Have a Design in Mind?</h3>
            <p>Share your Pinterest or Instagram reference image with Pallavi for custom tailoring, perfect measurements and bridal embroidery.</p>
          </div>
          <a href={WA_TAILOR} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <span>Send Design on WhatsApp</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── ABOUT PAGE (Dedicated Full About Experience with 3-Image Lookbook) ──
const aboutGallery = [
  { img: shop1, title: 'Private Beauty & Facial Suite', desc: 'Sanitized 1-on-1 space for skin treatments, facials and relaxation.' },
  { img: shop2, title: 'Bespoke Tailoring & Stitching Station', desc: 'Master cutting tables, blouse trial mirrors & Aari frame craft.' },
  { img: shop3, title: 'Hair Styling & Bridal Dressing Area', desc: 'Spacious hair wash, blowdry styling and wedding saree draping area.' },
]

export function AboutPage() {
  return (
    <div className={styles.pageWrap}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Founder &amp; Master Stylist
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          About Aayra Makeovers
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Founded and personally curated by Pallavi, creating an exclusive private sanctuary for beauty rituals, bridal artistry, and bespoke tailoring in Chamarajanagar.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        {/* Story Section */}
        <div className={styles.aboutStoryGrid}>
          <motion.div
            className={styles.storyTextCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.storyTag}>THE STORY &amp; VISION</span>
            <h2 className={styles.storyHeading}>
              Crafting Confidence &amp; Elegance for <span className={styles.storyGold}>Every Woman.</span>
            </h2>
            <p className={styles.storyP}>
              Aayra Makeovers was established with a singular mission: to offer women and children a clean, comfortable, and personalized beauty experience without the rush or noise of commercial salons.
            </p>
            <p className={styles.storyP}>
              With over 7 years of specialized expertise in bridal makeup artistry, precision haircuts, skin wellness, and bespoke designer tailoring, Pallavi personally attends to every client to ensure unmatched attention to detail.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>7+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Happy Brides &amp; Clients</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Ladies &amp; Kids Dedicated</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.storyPillarsCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>👑</div>
              <div>
                <h4 className={styles.pillarTitle}>1-on-1 Personal Care</h4>
                <p className={styles.pillarDesc}>Appointments are scheduled with dedicated time so you enjoy undivided attention.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🌸</div>
              <div>
                <h4 className={styles.pillarTitle}>Exclusive Female Sanctuary</h4>
                <p className={styles.pillarDesc}>A safe, comfortable, and hygienic space reserved exclusively for women &amp; kids.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>💄</div>
              <div>
                <h4 className={styles.pillarTitle}>Top International Brands</h4>
                <p className={styles.pillarDesc}>Only verified skin-safe products from MAC, Kryolan, PAC, Matrix and Lotus.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>✂️</div>
              <div>
                <h4 className={styles.pillarTitle}>Bespoke Tailoring &amp; Aari</h4>
                <p className={styles.pillarDesc}>Master pattern cutting, custom blouse fitting and handcrafted zari embroidery.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full 3-Image Studio Lookbook Showcase */}
        <div className={styles.studioLookbookSection}>
          <div className={styles.boutiqueSectionHeader}>
            <div className={styles.boutiqueTag}>INSIDE OUR STUDIO</div>
            <h2 className={styles.boutiqueTitle}>The Studio Lookbook &amp; Workstations</h2>
            <p className={styles.patternsSub}>Explore the ambiance, dedicated styling stations, and tailoring lounge at Aayra Makeovers:</p>
          </div>

          <div className={styles.lookbookGrid}>
            {aboutGallery.map((item, idx) => (
              <motion.div
                key={idx}
                className={styles.lookbookCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.lookbookImgWrap}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.lookbookInfo}>
                  <span className={styles.lookbookNum}>0{idx + 1}</span>
                  <h3 className={styles.lookbookTitle}>{item.title}</h3>
                  <p className={styles.lookbookDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Ready to Experience Aayra Makeovers?</h3>
            <p>Schedule your personalized beauty ritual, haircut, or tailoring consultation with Pallavi today.</p>
          </div>
          <a href={WA_MAIN} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <span>Book With Pallavi</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── CONTACT PAGE ──
export function ContactPage() {
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Get In Touch
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Contact &amp; Location
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Visit our studio in Chamarajanagar, call or message on WhatsApp to schedule your appointment.
        </motion.p>
      </section>
      <MapSection />
    </div>
  )
}
