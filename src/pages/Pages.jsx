import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import styles from './PageStyles.module.css'
import MapSection from '../components/MapSection'

// Bridal Page Assets
import m1 from '../assets/img/bridal_makeup/makeup_1.jpeg'
import m2 from '../assets/img/bridal_makeup/makeup_2.jpeg'
import m3 from '../assets/img/bridal_makeup/makeup_3.jpeg'
import m4 from '../assets/img/bridal_makeup/makeup_4.jpeg'

// Boutique & Tailoring Assets
import b1 from '../assets/img/tailoring/b1.webp'
import b2 from '../assets/img/tailoring/b2.webp'
import b3 from '../assets/img/tailoring/b3.webp'
import b4 from '../assets/img/tailoring/b4.webp'
import b5 from '../assets/img/tailoring/b5.webp'
import b6 from '../assets/img/tailoring/b6.webp'
import b7 from '../assets/img/tailoring/b7.webp'
import b8 from '../assets/img/tailoring/b8.webp'
import shop1 from '../assets/img/shop/shop_img_1.jpeg'
import shop2 from '../assets/img/shop/shop_img_2.jpeg'
import shop3 from '../assets/img/shop/shop_img_3.jpeg'

const WA_MAIN = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aayra%20Makeovers.'
const WA_BRIDAL = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Makeup%20packages%20and%20dates.'
const WA_TAILOR = 'https://wa.me/919686457628?text=Hello%20Pallavi%2C%20I%20would%20like%20to%20customize%20and%20stitch%20a%20blouse%2Fdress%20at%20Aayra%20Boutique.'

// ── BRIDAL PAGE ──
const bridalDetailedServices = [
  { title: 'Muhurtham Bridal Makeup', desc: 'Flawless HD makeup base, waterproof & sweat-resistant finish tailored for traditional gold jewellery, flower veni and wedding rituals.' },
  { title: 'Grand Reception & Evening Glam', desc: 'Airbrush finish with soft smokey eyes, illuminated highlights, and contemporary bridal styling for photography and stage lighting.' },
  { title: 'Engagement & Pre-Wedding Glam', desc: 'Soft shimmer, natural dewy glow, lightweight makeup, and photogenic finish for engagement ceremonies and photo shoots.' },
  { title: 'Haldi & Mehndi Ritual Looks', desc: 'Vibrant, fresh, radiant floral makeup with natural glow and customized lightweight flower hairstyle.' },
  { title: 'Authentic Saree Draping', desc: 'Precision silk saree box pleating, neat shoulder pinning, authentic traditional draping and iron-fold finish that stays secure all day.' },
  { title: 'Customized Bridal Hairstyles', desc: 'Traditional South Indian poola jada braids, floral buns, soft romantic curls, and designer hair accessories attachment.' },
  { title: 'Family & Bridesmaids Styling', desc: 'Dedicated elegant makeup and saree draping for the mother of the bride, sisters, and wedding guests.' },
  { title: 'On-Location Venue Travel', desc: 'We travel directly to marriage halls, convention centres, and event venues across Chamarajanagar, Mysore and nearby regions.' }
]

const bridalStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Bridal Makeup Artist & Wedding Styling in Chamarajanagar',
  'serviceType': 'Bridal Makeup',
  'provider': {
    '@type': 'BeautySalon',
    'name': 'Aayra Makeovers',
    'telephone': '+91-9686457628',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Chamarajanagar',
      'addressRegion': 'Karnataka',
      'postalCode': '571440',
      'addressCountry': 'IN',
    },
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Chamarajanagar',
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Bridal Artistry Packages',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Muhurtham HD Bridal Makeup' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Reception Airbrush Makeup' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Authentic Silk Saree Draping & Box Pleating' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Traditional South Indian Poola Jada Hairstyling' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'On-Location Venue Travel in Chamarajanagar' } },
    ],
  },
}

const bridalBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://aayramakeovers.in/' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Bridal Makeup Artist', 'item': 'https://aayramakeovers.in/bridal' },
  ],
}

export function BridalPage() {
  const images = [
    { img: m1, title: 'Traditional South Indian Muhurtham Bridal Makeup by Pallavi in Chamarajanagar' },
    { img: m2, title: 'Grand Reception Evening Glam Makeup & Hair Styling in Chamarajanagar' },
    { img: m3, title: 'Authentic Royal Silk Saree Box Pleating & Draping in Chamarajanagar' },
    { img: m4, title: 'Modern Bridal Silhouette & Pre-Wedding Artistry in Chamarajanagar' },
  ]

  return (
    <div className={styles.pageWrap}>
      <SEO
        title="Bridal Makeup Artist in Chamarajanagar | Wedding Packages | Aayra Makeovers"
        description="Looking for the best bridal makeup artist in Chamarajanagar? Aayra Makeovers by Pallavi offers HD & airbrush bridal makeup, saree pleating & wedding styling."
        canonical="https://aayramakeovers.in/bridal"
        structuredData={bridalStructuredData}
        breadcrumbs={bridalBreadcrumbs}
      />

      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Luxury Bridal Makeup in Chamarajanagar
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Bridal Makeup Artist &amp; Packages in Chamarajanagar
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Complete HD &amp; Airbrush bridal makeup, authentic silk saree pleating, traditional hair styling and on-venue marriage hall services by Pallavi in Chamarajanagar.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        {/* Visual Gallery - Clean images without text */}
        <div className={styles.boutiqueSectionHeader}>
          <div className={styles.boutiqueTag}>BRIDAL SHOWCASE</div>
          <h2 className={styles.boutiqueTitle}>Signature Bridal Looks in Chamarajanagar</h2>
          <p className={styles.patternsSub}>Explore our recent real brides, traditional jewellery styling and muhurtham transformations:</p>
        </div>

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
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comprehensive Bridal Services & Explanations */}
        <div className={styles.patternsSection}>
          <div className={styles.boutiqueSectionHeader}>
            <div className={styles.boutiqueTag}>SERVICES &amp; DETAILS</div>
            <h2 className={styles.boutiqueTitle}>Complete Wedding Packages Explained</h2>
            <p className={styles.patternsSub}>Everything included in our personalized bridal experience:</p>
          </div>

          <div className={styles.boutiqueFeaturesGrid}>
            {bridalDetailedServices.map((serv, idx) => (
              <div key={idx} className={styles.boutiqueFeatureCard}>
                <span className={styles.boutiqueFeatureIcon}>✦</span>
                <div>
                  <h4 className={styles.boutiqueFeatureTitle}>{serv.title}</h4>
                  <p className={styles.boutiqueFeatureDesc}>{serv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Products & Safety Assurance */}
        <div className={styles.patternsSection}>
          <div className={styles.boutiqueSectionHeader}>
            <div className={styles.boutiqueTag}>QUALITY ASSURANCE</div>
            <h2 className={styles.boutiqueTitle}>Premium Products &amp; Hygiene Standards</h2>
          </div>

          <div className={styles.storyPillarsCol}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>✦</div>
              <div>
                <h4 className={styles.pillarTitle}>Top International Brands</h4>
                <p className={styles.pillarDesc}>Only verified skin-safe products from MAC, Kryolan, PAC, Huda Beauty &amp; Forever52.</p>
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>❖</div>
              <div>
                <h4 className={styles.pillarTitle}>Long-Lasting &amp; Waterproof</h4>
                <p className={styles.pillarDesc}>Sweat-resistant, camera-ready finish that stays fresh through 12+ hours of wedding rituals.</p>
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>◈</div>
              <div>
                <h4 className={styles.pillarTitle}>On-Venue Destination Travel</h4>
                <p className={styles.pillarDesc}>We reach your kalyana mantapa or venue on time with complete professional equipment.</p>
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>◇</div>
              <div>
                <h4 className={styles.pillarTitle}>1-on-1 Personal Attention</h4>
                <p className={styles.pillarDesc}>Stylist Pallavi personally takes care of your looks from trial to final saree draping.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Planning Your Wedding Date in Chamarajanagar?</h3>
            <p>We travel to marriage halls and event venues across Chamarajanagar &amp; Mysore. Book early to reserve your dates with Pallavi.</p>
          </div>
          <a href={WA_BRIDAL} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <span>Enquire Bridal Dates on WhatsApp</span>
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

// ── SALON MENU SPREADS (NOTEBOOK MENU CARD - NO TABS, NO IMAGES, NO PRICES) ──
const menuSpreads = [
  {
    spreadTitle: 'Hair Artistry & Scalp Therapy',
    pageLeft: {
      category: 'Hair Cuts & Styling',
      icon: '✦',
      pageNum: 'Page 01',
      tagline: 'Precision cutting and volume styling tailored to your face contour',
      items: [
        { name: 'Layer Cut & Cascade Styling', desc: 'Dimensional multi-tier layers adding bouncy natural volume, texture and movement.' },
        { name: 'Step Cut & Volume Blowout', desc: 'Defined graduation steps providing texture, lightness and body for thick or fine hair.' },
        { name: 'Feather Cut & Face Framing', desc: 'Soft wispy layers contouring the jawline and collarbone with weightless flow.' },
        { name: 'Deep U-Cut & Curved Hemline', desc: 'Graceful curved perimeter trimming maintaining length with healthy, clean ends.' },
        { name: 'Sharp V-Cut Precision Taper', desc: 'Dramatic pointed V-silhouette tapering downwards for elegant open-hair looks.' },
        { name: 'Classic & Chic Bob Cut', desc: 'Modern structured short and medium blunt cuts for sophisticated everyday chic.' },
        { name: 'Straight Blunt Cut & Split Ends Trim', desc: 'Clean perimeter finish removing damaged ends while preserving full hair density.' },
        { name: 'Baby & Kids Cute Haircut', desc: 'Gentle, patient, and quick haircutting for little girls and boys with neat finish.' },
        { name: 'Hair Wash, Conditioning & Heat Setting', desc: 'Deep purifying scalp cleanse followed by nourishing conditioner and salon blowout.' }
      ]
    },
    pageRight: {
      category: 'Hair Spa & Scalp Care',
      icon: '❖',
      pageNum: 'Page 02',
      tagline: 'Deep restorative moisture therapy and relaxing scalp treatments',
      items: [
        { name: 'Luxury Nourishing Hair Spa', desc: 'Deep hydrating cream infusion, warm steam therapy, and intense cuticle sealing for silky softness.' },
        { name: 'Hot Herbal Oil Scalp Massage', desc: 'Traditional Ayurvedic warm oil infusion stimulating follicles, boosting roots and melting stress.' },
        { name: 'Anti-Dandruff Clarifying Treatment', desc: 'Targeted exfoliating scalp cleanse with tea tree actives to eliminate flakes and calm itchiness.' },
        { name: 'Intense Protein Repair Mask', desc: 'Restorative keratin & ceramide complex rebuilding elasticity in chemically treated hair.' },
        { name: 'Frizz-Control Steam Hydration', desc: 'Micro-mist hydration locking moisture into dry hair shafts for all-day humidity resistance.' }
      ]
    }
  },
  {
    spreadTitle: 'Skin Care, Luxury Facials & D-Tan',
    pageLeft: {
      category: 'Skin Care & Luxury Facials',
      icon: '◈',
      pageNum: 'Page 03',
      tagline: 'Botanical and gold glow rituals for clear, radiant skin',
      items: [
        { name: 'Herbal Fruit Glow & Hydration Facial', desc: 'Natural papaya, orange, and berry fruit enzymes to gently exfoliate and deeply nourish skin.' },
        { name: 'Diamond Brightening Complex Facial', desc: 'Advanced micro-resurfacing facial for spotless clarity, even skin tone, and luminous finish.' },
        { name: 'Anti-Tan Sun Defense Facial', desc: 'Targeted botanical melanin-reducing cleanup for sun-damaged and pigmented skin.' },
        { name: 'Activated Charcoal Deep Pore Detox', desc: 'High-absorption charcoal therapy extracting impurities, excess oil, and stubborn blackheads.' },
        { name: 'Pearl Radiance Illuminating Facial', desc: 'Mineral-rich pearl extracts restoring moisture barrier and youthful dewy brightness.' }
      ]
    },
    pageRight: {
      category: 'Bleach, D-Tan & Cleanups',
      icon: '◇',
      pageNum: 'Page 04',
      tagline: 'Instant tan removal, skin brightening and express hygiene packs',
      items: [
        { name: 'Herbal Glow Face & Neck Bleach', desc: 'Ammonia-free gentle herbal bleach to camouflage facial hair and enhance natural fairness.' },
        { name: 'Oxy-Rich Deep Pore Cleanup', desc: 'Express facial hygiene with blackhead steam extraction, scrub, and soothing clay mask.' },
        { name: 'Back & Deep Neck D-Tan Therapy', desc: 'Specialized clarifying treatment for spotless back when wearing designer blouses and sarees.' },
        { name: 'Full Arms & Legs D-Tan Brightening Pack', desc: 'Comprehensive sun-tan reversal pack restoring uniform radiance across arms and legs.' }
      ]
    }
  },
  {
    spreadTitle: 'Threading, Grooming & Waxing',
    pageLeft: {
      category: 'Threading & Facial Grooming',
      icon: '✦',
      pageNum: 'Page 05',
      tagline: 'Clean, gentle shaping and precision hair removal',
      items: [
        { name: 'Eyebrow Precision Arch Shaping', desc: 'Symmetrical brow mapping and painless cotton thread shaping suited to your facial features.' },
        { name: 'Upper Lip & Chin Fine Threading', desc: 'Delicate hair removal for a smooth, velvety base under lipsticks and foundations.' },
        { name: 'Forehead & Sideburns Threading', desc: 'Neat hairline cleanup creating a fresh, polished, and open facial canvas.' },
        { name: 'Full Face Complete Threading', desc: 'All-inclusive gentle facial threading for smooth, fuzz-free skin.' }
      ]
    },
    pageRight: {
      category: 'Waxing & Body Smoothening',
      icon: '❖',
      pageNum: 'Page 06',
      tagline: 'Gentle, hygienic hair removal with post-wax skin soothing',
      items: [
        { name: 'Full Arms & Full Legs Honey / Rica Wax', desc: 'Gentle depilatory waxing removing hair from the root, leaving skin feather-soft and smooth.' },
        { name: 'Underarms Delicate Waxing', desc: 'Quick, hygienic, and painless hair removal with calming post-wax aloe vera treatment.' },
        { name: 'Half Arms & Half Legs Waxing', desc: 'Essential everyday smooth waxing for arms and calves.' },
        { name: 'Full Body Luxury Waxing Experience', desc: 'Complete head-to-toe smoothing package for brides, festive occasions, and holiday prep.' }
      ]
    }
  },
  {
    spreadTitle: 'Spa Care & Event Styling',
    pageLeft: {
      category: 'Hands & Feet Spa Care',
      icon: '◈',
      pageNum: 'Page 07',
      tagline: 'Relaxing foot scrubs, cuticle therapy and nail grooming',
      items: [
        { name: 'Luxury Spa Pedicure with Foot Scrub', desc: 'Warm herbal foot soak, dead skin scrubbing, heel buffing, and relaxing calf massage.' },
        { name: 'Spa Manicure & Cuticle Treatment', desc: 'Moisturizing hand soak, nail shaping, cuticle refinement, and nourishing hand cream massage.' },
        { name: 'Intensive Heel Crack Smoothing Therapy', desc: 'Deep paraffin and herbal balm repair to heal cracked heels and restore baby-soft soles.' },
        { name: 'Nail Shaping, Buffing & French Polish', desc: 'Precision filing, natural shine buffing, and elegant long-lasting enamel coating.' }
      ]
    },
    pageRight: {
      category: 'Saree Draping & Event Styling',
      icon: '◇',
      pageNum: 'Page 08',
      tagline: 'Traditional ceremonial styling and professional draping services',
      items: [
        { name: 'Silk Saree Precision Box Pleating', desc: 'Wrinkle-free iron box pleating and firm pin-up setting that stays flawless for 12+ hours.' },
        { name: 'Traditional South Indian Muhurtham Draping', desc: 'Authentic temple saree draping with neat pallu folds and waist belt setting.' },
        { name: 'Traditional Poola Jada & Flower Veni Setting', desc: 'Artistic South Indian floral braid setting, veni attachment, and jewelry pinning.' },
        { name: 'Party & Celebration Glam Makeup', desc: 'Dewy HD skin, soft eye makeup, and matching hairstyle for family functions and events.' }
      ]
    }
  }
]

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Beauty Parlour & Salon Services in Chamarajanagar',
  'serviceType': 'Beauty Parlour & Hair Salon Treatments',
  'provider': {
    '@type': 'BeautySalon',
    'name': 'Aayra Makeovers',
    'telephone': '+91-9686457628',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Chamarajanagar',
      'addressRegion': 'Karnataka',
      'postalCode': '571440',
      'addressCountry': 'IN',
    },
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Chamarajanagar',
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Beauty Parlour Service Booklet',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Haircuts (Layer Cut, Step Cut, Feather Cut, Bob Cut, U/V Cut)' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Luxury Nourishing Hair Spa & Scalp Therapy' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Skin Care, Glow Facials & De-Tan Cleanups' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Eyebrow Arch Shaping & Facial Grooming' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Hygienic Depilatory Waxing' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Spa Pedicure, Manicure & Nail Care' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Silk Saree Box Pleating & Party Makeup' } },
    ],
  },
}

const servicesBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://aayramakeovers.in/' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://aayramakeovers.in/services' },
  ],
}

export function ServicesPage() {
  return (
    <div className={styles.pageWrap}>
      <SEO
        title="Beauty Parlour Services & Salon Menu in Chamarajanagar | Aayra Makeovers"
        description="Explore beauty parlour and salon services in Chamarajanagar at Aayra Makeovers. Precision haircuts, herbal facials, hair spa, gentle threading, waxing & nail care by Pallavi."
        canonical="https://aayramakeovers.in/services"
        structuredData={servicesStructuredData}
        breadcrumbs={servicesBreadcrumbs}
      />

      {/* Editorial Menu Header */}
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Aayra Makeovers · Beauty Parlour Chamarajanagar
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Beauty Parlour &amp; Salon Services in Chamarajanagar
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Browse our complete salon booklet featuring precision haircutting, nourishing hair spas, herbal skin facials, gentle waxing and party styling by Pallavi in Chamarajanagar.
        </motion.p>
      </section>

      <div className={styles.menuBookContainer}>
        
        {/* ── REALISTIC DUAL-PAGE NOTEBOOK SPREADS ── */}
        <div className={styles.notebookBooklet}>
          
          {/* Notebook Top Leather Binding Bar */}
          <div className={styles.notebookHeaderBanner}>
            <span className={styles.notebookGoldEmblem}>❖</span>
            <span className={styles.notebookTitle}>Aayra Makeovers · Salon Service Booklet</span>
            <span className={styles.notebookGoldEmblem}>❖</span>
          </div>

          {/* Spreads Rendered Continuously Like an Open Menu Book */}
          <div className={styles.spreadsFlow}>
            {menuSpreads.map((spread, idx) => (
              <div key={idx} className={styles.notebookSpread}>
                
                {/* Spread Section Ribbon */}
                <div className={styles.spreadRibbon}>
                  <span className={styles.ribbonLine} />
                  <span className={styles.ribbonText}>{spread.spreadTitle}</span>
                  <span className={styles.ribbonLine} />
                </div>

                {/* Open Book Spread (Left Page & Right Page) */}
                <div className={styles.openBookPages}>
                  
                  {/* LEFT PAGE */}
                  <div className={`${styles.menuPage} ${styles.pageLeft}`}>
                    <div className={styles.pageCornerTL}>╔</div>
                    <div className={styles.pageCornerTR}>╗</div>
                    <div className={styles.pageCornerBL}>╚</div>
                    <div className={styles.pageCornerBR}>╝</div>

                    <div className={styles.pageHeader}>
                      <div className={styles.pageCatHeader}>
                        <span className={styles.catIcon}>{spread.pageLeft.icon}</span>
                        <div>
                          <h3 className={styles.pageCatTitle}>{spread.pageLeft.category}</h3>
                          <p className={styles.pageCatTagline}>{spread.pageLeft.tagline}</p>
                        </div>
                      </div>
                      <span className={styles.pageNum}>{spread.pageLeft.pageNum}</span>
                    </div>

                    <div className={styles.pageDividerLine} />

                    <div className={styles.pageItemsList}>
                      {spread.pageLeft.items.map((item, i) => (
                        <div key={i} className={styles.pageItemRow}>
                          <div className={styles.pageItemHeader}>
                            <span className={styles.pageItemDot}>✦</span>
                            <span className={styles.pageItemName}>{item.name}</span>
                            <span className={styles.pageItemDots} />
                          </div>
                          <p className={styles.pageItemDesc}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CENTER BOOK CREASE / SPINE */}
                  <div className={styles.bookSpine}>
                    <span className={styles.spineGutter} />
                    <span className={styles.spineShadow} />
                  </div>

                  {/* RIGHT PAGE */}
                  <div className={`${styles.menuPage} ${styles.pageRight}`}>
                    <div className={styles.pageCornerTL}>╔</div>
                    <div className={styles.pageCornerTR}>╗</div>
                    <div className={styles.pageCornerBL}>╚</div>
                    <div className={styles.pageCornerBR}>╝</div>

                    <div className={styles.pageHeader}>
                      <div className={styles.pageCatHeader}>
                        <span className={styles.catIcon}>{spread.pageRight.icon}</span>
                        <div>
                          <h3 className={styles.pageCatTitle}>{spread.pageRight.category}</h3>
                          <p className={styles.pageCatTagline}>{spread.pageRight.tagline}</p>
                        </div>
                      </div>
                      <span className={styles.pageNum}>{spread.pageRight.pageNum}</span>
                    </div>

                    <div className={styles.pageDividerLine} />

                    <div className={styles.pageItemsList}>
                      {spread.pageRight.items.map((item, i) => (
                        <div key={i} className={styles.pageItemRow}>
                          <div className={styles.pageItemHeader}>
                            <span className={styles.pageItemDot}>✦</span>
                            <span className={styles.pageItemName}>{item.name}</span>
                            <span className={styles.pageItemDots} />
                          </div>
                          <p className={styles.pageItemDesc}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Notebook Bottom Quality Seal */}
          <div className={styles.notebookFooterSeal}>
            <span className={styles.sealIcon}>✦</span>
            <p className={styles.sealText}>
              <strong>Aayra Quality &amp; Hygiene Standards:</strong> All treatments are conducted in a clean, sanitized environment using 100% sterilized instruments, disposable protective sheets, and verified professional cosmetic products. Personal styling and consultations by Pallavi.
            </p>
          </div>

        </div>

        {/* Appointment Booking Action Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Ready to Book Your Salon Session?</h3>
            <p>Walk-ins and advance bookings welcome daily from 10:00 AM to 7:00 PM. Message Pallavi directly on WhatsApp to check slot availability.</p>
          </div>
          <div className={styles.ctaBtnGroup}>
            <a href={WA_MAIN} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              <span>Book Appointment on WhatsApp</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+919686457628" className={styles.ctaBtnGhost}>
              <span>Call +91 96864 57628</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── TAILORING PAGE ──
const blouseDesigns = [
  { img: b1, id: 1, title: 'Handcrafted Bridal Aari Needlework Blouse in Chamarajanagar' },
  { img: b2, id: 2, title: 'Princess Cut Designer Blouse Stitching in Chamarajanagar' },
  { img: b3, id: 3, title: 'Intricate Maggam Stone & Zari Work Blouse by Pallavi' },
  { img: b4, id: 4, title: 'Custom Deep U-Neck Silk Saree Blouse Tailoring in Chamarajanagar' },
  { img: b5, id: 5, title: 'Designer Bridal Zardozi Embroidery Blouse Pattern' },
  { img: b6, id: 6, title: 'Boat Neck Wedding Saree Blouse Stitching in Chamarajanagar' },
  { img: b7, id: 7, title: 'Cutout Back Blouse with Handmade Dori Tassels' },
  { img: b8, id: 8, title: 'Grand Bridal Heavy Maggam Embroidery Blouse Stitching in Chamarajanagar' },
]

const boutiqueServicesHighlights = [
  { icon: '✦', title: 'Designer Blouse Stitching', desc: 'Princess cut, katori cut, boat neck, lining attachment & cup padding tailored to your exact fit.' },
  { icon: '❖', title: 'Handcrafted Aari Needlework', desc: 'Intricate bridal maggam stone embellishments, zardozi work, pearl drops & rich gold zari detailing.' },
  { icon: '◈', title: 'Custom Dress & Suit Stitching', desc: 'Custom Anarkali gowns, Punjabi salwar suits, party wear lehengas, long frocks & modern kurtis.' },
  { icon: '◇', title: 'Saree Kuchu, Fall & Zig-Zag', desc: 'Handmade silk thread Kuchu tassels, gold bead hangings, neat pico edge & high quality cotton fall.' },
]

const blouseNeckPatterns = [
  { name: 'Pot Neck with Dori & Tassels', desc: 'Classic Indian bridal cutout back with designer latkans' },
  { name: 'Deep U-Neck with Gold Beads', desc: 'Graceful deep U back with dense stone border work' },
  { name: 'Boat Neck & Collar Styles', desc: 'Contemporary elegant neckline with subtle thread embroidery' },
  { name: 'Sweetheart & Diamond Cut', desc: 'Flattering structured back patterns for wedding silk sarees' },
  { name: 'Full Bridal Maggam Embroidery', desc: 'All-over heavy stone, zari, zardozi and pearl craftsmanship' },
  { name: 'Keyhole & Window Cutouts', desc: 'Trendy modern cutout neck shapes for party blouses' },
]

const tailoringStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Designer Blouse Stitching & Ladies Tailoring in Chamarajanagar',
  'serviceType': 'Ladies Tailoring & Custom Blouse Stitching',
  'provider': {
    '@type': 'BeautySalon',
    'name': 'Aayra Makeovers',
    'telephone': '+91-9686457628',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Chamarajanagar',
      'addressRegion': 'Karnataka',
      'postalCode': '571440',
      'addressCountry': 'IN',
    },
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Chamarajanagar',
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Custom Tailoring Services',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Designer Blouse Stitching (Princess Cut, Katori Cut, Boat Neck, Padded)' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Handcrafted Bridal Aari & Maggam Embroidery' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Custom Salwar Suits, Kurtis & Anarkali Stitching' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Saree Kuchu Tassels & Fall Pico' } },
    ],
  },
}

const tailoringBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://aayramakeovers.in/' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Blouses & Tailoring', 'item': 'https://aayramakeovers.in/tailoring' },
  ],
}

export function TailoringPage() {
  return (
    <div className={styles.pageWrap}>
      <SEO
        title="Designer Blouse Stitching & Ladies Tailoring in Chamarajanagar | Aayra Makeovers"
        description="Custom blouse stitching & designer ladies tailoring in Chamarajanagar. Handcrafted bridal Aari maggam work, princess cut blouse fitting & dress stitching by Pallavi."
        canonical="https://aayramakeovers.in/tailoring"
        structuredData={tailoringStructuredData}
        breadcrumbs={tailoringBreadcrumbs}
      />

      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Designer Boutique &amp; Stitching in Chamarajanagar
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Designer Blouse Stitching &amp; Ladies Tailoring in Chamarajanagar
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Explore our exclusive collection of handcrafted blouse designs, bridal Aari embroidery, custom neck patterns &amp; bespoke boutique tailoring by Pallavi in Chamarajanagar.
        </motion.p>
      </section>

      <div className={styles.galleryContainer}>
        {/* Blouse Designs Gallery - Pure visual showcase without individual image text */}
        <div className={styles.boutiqueSectionHeader}>
          <div className={styles.boutiqueTag}>DESIGN CATALOG</div>
          <h2 className={styles.boutiqueTitle}>Blouse &amp; Embroidery Designs in Chamarajanagar</h2>
          <p className={styles.patternsSub}>Browse through our latest handcrafted patterns and bridal blouse creations:</p>
        </div>

        <div className={styles.blouseGalleryGrid}>
          {blouseDesigns.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.blouseDesignCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            >
              <div className={styles.blouseImgFrame}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className={styles.blouseOverlay} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services & Specializations */}
        <div className={styles.patternsSection}>
          <div className={styles.boutiqueSectionHeader}>
            <div className={styles.boutiqueTag}>SERVICES &amp; SPECIALIZATIONS</div>
            <h2 className={styles.boutiqueTitle}>Bespoke Boutique Services in Chamarajanagar</h2>
          </div>

          <div className={styles.boutiqueFeaturesGrid}>
            {boutiqueServicesHighlights.map((serv, idx) => (
              <div key={idx} className={styles.boutiqueFeatureCard}>
                <span className={styles.boutiqueFeatureIcon}>{serv.icon}</span>
                <div>
                  <h4 className={styles.boutiqueFeatureTitle}>{serv.title}</h4>
                  <p className={styles.boutiqueFeatureDesc}>{serv.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
            <p>Share your Pinterest or Instagram reference image with Pallavi for custom tailoring, perfect measurements and bridal embroidery in Chamarajanagar.</p>
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
  { img: shop1, title: 'Private Beauty & Facial Suite in Chamarajanagar', desc: 'Sanitized 1-on-1 space for skin treatments, facials and relaxation.' },
  { img: shop2, title: 'Bespoke Tailoring & Blouse Cutting Station', desc: 'Master cutting tables, blouse trial mirrors & Aari frame craft in Chamarajanagar.' },
  { img: shop3, title: 'Hair Styling & Bridal Dressing Lounge', desc: 'Spacious hair wash, blowdry styling and wedding saree draping area.' },
]

const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Aayra Makeovers & Stylist Pallavi in Chamarajanagar',
  'description': 'Founded and personally curated by Pallavi, creating an exclusive private sanctuary for beauty rituals, bridal artistry, and bespoke tailoring in Chamarajanagar.',
  'mainEntity': {
    '@type': 'Person',
    'name': 'Pallavi',
    'jobTitle': 'Master Makeup Artist & Tailor',
    'worksFor': {
      '@type': 'BeautySalon',
      'name': 'Aayra Makeovers',
      'telephone': '+91-9686457628',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Chamarajanagar',
        'addressRegion': 'Karnataka',
        'postalCode': '571440',
        'addressCountry': 'IN',
      },
    },
  },
}

const aboutBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://aayramakeovers.in/' },
    { '@type': 'ListItem', 'position': 2, 'name': 'About Pallavi & Studio', 'item': 'https://aayramakeovers.in/about' },
  ],
}

export function AboutPage() {
  return (
    <div className={styles.pageWrap}>
      <SEO
        title="About Aayra Makeovers | Master Stylist & Tailor Pallavi | Chamarajanagar"
        description="Learn about Aayra Makeovers in Chamarajanagar, founded by stylist & tailor Pallavi. A private 1-on-1 beauty parlour and bespoke tailoring boutique for women & kids."
        canonical="https://aayramakeovers.in/about"
        structuredData={aboutStructuredData}
        breadcrumbs={aboutBreadcrumbs}
      />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Founder &amp; Master Stylist
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          About Aayra Makeovers &amp; Stylist Pallavi in Chamarajanagar
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
              <div className={styles.pillarIcon}>✦</div>
              <div>
                <h4 className={styles.pillarTitle}>1-on-1 Personal Care</h4>
                <p className={styles.pillarDesc}>Appointments are scheduled with dedicated time so you enjoy undivided attention.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>❖</div>
              <div>
                <h4 className={styles.pillarTitle}>Exclusive Female Sanctuary</h4>
                <p className={styles.pillarDesc}>A safe, comfortable, and hygienic space reserved exclusively for women &amp; kids in Chamarajanagar.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>◈</div>
              <div>
                <h4 className={styles.pillarTitle}>Top International Brands</h4>
                <p className={styles.pillarDesc}>Only verified skin-safe products from MAC, Kryolan, PAC, Matrix and Lotus.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>◇</div>
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
                  <img src={item.img} alt={item.title} loading="lazy" />
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
            <p>Schedule your personalized beauty ritual, haircut, or tailoring consultation with Pallavi in Chamarajanagar today.</p>
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
const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact Aayra Makeovers in Chamarajanagar',
  'description': 'Visit or contact Aayra Makeovers in Chamarajanagar, Karnataka for beauty parlour appointments, bridal bookings, and blouse tailoring.',
  'mainEntity': {
    '@type': 'BeautySalon',
    'name': 'Aayra Makeovers',
    'telephone': '+91-9686457628',
    'email': 'aayramakeovers@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Near Chamarajanagar Town',
      'addressLocality': 'Chamarajanagar',
      'addressRegion': 'Karnataka',
      'postalCode': '571440',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 11.9258437,
      'longitude': 76.9380792,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '10:00',
        'closes': '19:00',
      },
    ],
  },
}

const contactBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://aayramakeovers.in/' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Contact & Location', 'item': 'https://aayramakeovers.in/contact' },
  ],
}

export function ContactPage() {
  return (
    <div className={styles.pageWrap}>
      <SEO
        title="Contact Aayra Makeovers | Beauty Parlour & Studio in Chamarajanagar"
        description="Visit or contact Aayra Makeovers in Chamarajanagar, Karnataka. Open daily 10 AM - 7 PM for beauty parlour appointments, bridal bookings & tailoring consultations."
        canonical="https://aayramakeovers.in/contact"
        structuredData={contactStructuredData}
        breadcrumbs={contactBreadcrumbs}
      />

      <section className={styles.pageHeader}>
        <motion.p className={styles.tag} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          ✦ Get In Touch · Chamarajanagar
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Visit &amp; Contact Aayra Makeovers in Chamarajanagar
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Visit our studio in Chamarajanagar, call or message on WhatsApp to schedule your beauty parlour session, bridal trial, or blouse tailoring appointment.
        </motion.p>
      </section>
      <MapSection />
    </div>
  )
}

