import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Home from './pages/Home'
import { ServicesPage, BridalPage, HairStylesPage, TailoringPage, AboutPage, ContactPage } from './pages/Pages'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bridal" element={<BridalPage />} />
          <Route path="/hair-styles" element={<HairStylesPage />} />
          <Route path="/tailoring" element={<TailoringPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
