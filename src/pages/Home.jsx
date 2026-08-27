import Hero from '../components/Hero'
import ServicesCarousel from '../components/ServicesCarousel'
import AboutStrip from '../components/AboutStrip'
import BridalGallery from '../components/BridalGallery'
import BoutiqueSection from '../components/BoutiqueSection'
import MapSection from '../components/MapSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <AboutStrip />
      <BridalGallery />
      <BoutiqueSection />
      <MapSection />
    </>
  )
}
