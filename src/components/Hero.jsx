import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import styles from './Hero.module.css'

import hero1 from '../assets/img/hero_images/hero-slider-1.webp'
import hero2 from '../assets/img/hero_images/hero-slider-2.webp'
import hero3 from '../assets/img/hero_images/hero-slider-3.webp'

const slides = [
  { img: hero1, alt: 'Aayra Makeovers Bridal Styling' },
  { img: hero2, alt: 'Aayra Makeovers Hair Spa & Facials' },
  { img: hero3, alt: 'Aayra Makeovers Designer Aari Blouse' },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section className={styles.hero}>
      {/* Background parlour image with luxury overlay */}
      <div className={styles.bgOverlay} />



      <div className={styles.container}>
        {/* Left — Text (Spacing & structure preserved exactly) */}
        <div className={styles.left}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className={styles.eyebrowLine} />
            Open Daily · 9:30 AM – 8:30 PM
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to our <br className={styles.desktopBr} />
            <span className={styles.titleGold}>Beauty Parlour &amp;</span> <br className={styles.desktopBr} />
            <span className={styles.italic}>Tailoring Studio.</span>
          </motion.h1>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="tel:+919686457628" className={styles.btnLuxe}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 96864 57628</span>
            </a>
            <a
              href="https://maps.google.com/?q=11.9258437,76.9380792"
              target="_blank"
              rel="noreferrer"
              className={styles.btnGhost}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Google Maps</span>
            </a>
          </motion.div>
        </div>

        {/* Right — 3-Slide Carousel with Expanding Pill Dot Indicators */}
        <div className={styles.right}>
          <div className={styles.sliderWrap}>
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={900}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className={styles.swiper}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className={styles.slideImg}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className={styles.slideGradient} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Expanding Pill Dots */}
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  aria-label={`Slide ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
