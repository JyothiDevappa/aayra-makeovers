import { motion } from 'framer-motion'
import styles from './PageStyles.module.css'

// Bridal Page
import m1 from '../assets/img/bridal_makeup/makeup_1.jpeg'
import m2 from '../assets/img/bridal_makeup/makeup_2.jpeg'
import m3 from '../assets/img/bridal_makeup/makeup_3.jpeg'
import m4 from '../assets/img/bridal_makeup/makeup_4.jpeg'

export function BridalPage() {
  const images = [m1, m2, m3, m4]
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>✦ Luxury Bridal Makeup</motion.p>
        <motion.h1 className={styles.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>Bridal Artistry</motion.h1>
        <motion.p className={styles.sub} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          HD &amp; Airbrush bridal makeup, traditional saree draping, and customized hairstyles for Muhurtham and Reception.
        </motion.p>
      </section>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((img, i) => (
            <motion.div key={i} className={styles.galleryCard} whileHover={{ y: -8 }}>
              <img src={img} alt="Bridal Look" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

import ServicesCarousel from '../components/ServicesCarousel'

export function ServicesPage() {
  return (
    <div className={styles.pageWrap}>
      <ServicesCarousel />
    </div>
  )
}



// HairStyles Page
import layerCutImg from '../assets/img/parlour/layer_cut.jpg'
import vCutImg from '../assets/img/parlour/v_cut.jpg'
import uCutImg from '../assets/img/parlour/u_cut.jpg'
import bobCutImg from '../assets/img/parlour/bob_cut.jpg'

export function HairStylesPage() {
  const stylesList = [
    { title: "Layer Cut", desc: "Adds volume and bouncy layers to medium and long hair.", img: layerCutImg },
    { title: "V-Shape Cut", desc: "Distinctive sharp V-taper for an elegant silhouette.", img: vCutImg },
    { title: "U-Shape Cut", desc: "Graceful curved U hemline with clean perimeter trimming.", img: uCutImg },
    { title: "Classic Bob Cut", desc: "Modern, chic short & medium length structured cuts.", img: bobCutImg },
    { title: "Hair Spa & Smoothing", desc: "Intense moisture hydration and anti-frizz shine therapy.", img: hairspaImg },
  ]
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>✦ Hair Styling &amp; Care</motion.p>
        <motion.h1 className={styles.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>Hair Cuts &amp; Styling</motion.h1>
        <motion.p className={styles.sub} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          Trending haircut styles tailored to your face shape, plus deep nourishing hair spa treatments.
        </motion.p>
      </section>
      <div className={styles.galleryContainer}>
        <div className={styles.hairGrid}>
          {stylesList.map((item, i) => (
            <div key={i} className={styles.hairCard}>
              <img src={item.img} alt={item.title} />
              <div className={styles.hairInfo}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Boutique & Tailoring Page
import weddingAari from '../assets/img/tailoring/wedding_aari_blouse.jpg'
import designerBack from '../assets/img/tailoring/designer_back_blouse.jpg'
import machineEmbroidery from '../assets/img/tailoring/machine_embroidery.jpg'
import shop2 from '../assets/img/shop/shop_img_2.jpeg'

const tailoringServices = [
  {
    title: "Blouse Stitching",
    desc: "Perfect fitting, princess cut, katori cut, boat neck, lining attachment & cup padding tailored to your body measurements.",
    tag: "Custom Stitching",
    img: designerBack
  },
  {
    title: "Wedding Blouse",
    desc: "Grand bridal blouses with heavy maggam stone embellishments, zardozi work, pearl drops and designer back necklines.",
    tag: "Bridal Special",
    img: weddingAari
  },
  {
    title: "Aari Works",
    desc: "Intricate handcrafted Aari needle embroidery, peacock & floral motifs, stone setting and rich gold zari detailing.",
    tag: "Hand Embroidery",
    img: weddingAari
  },
  {
    title: "Machine Embroidery",
    desc: "Precision computerized and machine thread work, golden cord patterns and designer borders on raw silk & cotton.",
    tag: "Machine Work",
    img: machineEmbroidery
  },
  {
    title: "Dress Stitching",
    desc: "Custom Anarkali gowns, Punjabi salwar suits, party wear lehengas, long frocks and stylish modern kurti stitching.",
    tag: "Dress Tailoring",
    img: shop2
  },
  {
    title: "Zig-Zag & Fall",
    desc: "Flawless saree pico, edge zig-zag stitching, high quality cotton fall attachment and border piping setting.",
    tag: "Saree Finishing",
    img: shop2
  },
  {
    title: "All Types of Kuchu & Tassels",
    desc: "Handmade silk thread Kuchu, crochet tassel work, pearl drops, gold bead hangings & bridal saree pallu embellishments.",
    tag: "Saree Kuchu",
    img: designerBack
  }
]

const blouseNeckPatterns = [
  { name: "Pot Neck with Dori & Tassels", desc: "Classic Indian bridal cutout back with designer latkans" },
  { name: "Deep U-Neck with Gold Beads", desc: "Graceful deep U back with dense stone border work" },
  { name: "Boat Neck & Collar Styles", desc: "Contemporary elegant neckline with subtle thread embroidery" },
  { name: "Sweetheart & Diamond Cut", desc: "Flattering structured back patterns for wedding silk sarees" },
  { name: "Full Bridal Maggam Embroidery", desc: "All-over heavy stone, zari, zardozi and pearl craftsmanship" },
  { name: "Keyhole & Window Cutouts", desc: "Trendy modern cutout neck shapes for party blouses" },
]

export function TailoringPage() {
  const WA_TAILOR = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20customize%20and%20stitch%20a%20blouse%2Fdress%20at%20Aayra%20Boutique.'

  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>✦ Designer Boutique &amp; Stitching</motion.p>
        <motion.h1 className={styles.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>Tailoring &amp; Aari Work</motion.h1>
        <motion.p className={styles.sub} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          Bespoke bridal blouse stitching, handcrafted Aari embroidery, custom neck patterns, stone customization, dress making, zig-zag fall &amp; all types of saree Kuchu.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        {/* Tailoring Services Grid */}
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

// About Page
import AboutStrip from '../components/AboutStrip'
export function AboutPage() {
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>✦ Founder &amp; Stylist</motion.p>
        <motion.h1 className={styles.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>About Aayra Makeovers</motion.h1>
        <motion.p className={styles.sub} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          Founded and managed personally by Pallavi, providing dedicated one-on-one beauty &amp; tailoring services.
        </motion.p>
      </section>
      <AboutStrip />
    </div>
  )
}

// Contact Page
import MapSection from '../components/MapSection'
export function ContactPage() {
  return (
    <div className={styles.pageWrap}>
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>✦ Get In Touch</motion.p>
        <motion.h1 className={styles.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>Contact &amp; Location</motion.h1>
        <motion.p className={styles.sub} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          Visit our studio in Chamarajanagar, call or message on WhatsApp to schedule your appointment.
        </motion.p>
      </section>
      <MapSection />
    </div>
  )
}
