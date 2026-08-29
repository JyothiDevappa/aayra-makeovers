import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Home from './pages/Home'
import { ServicesPage, BridalPage, TailoringPage, AboutPage, ContactPage } from './pages/Pages'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bridal" element={<BridalPage />} />
          <Route path="/hair-styles" element={<Navigate to="/services" replace />} />
          <Route path="/tailoring" element={<TailoringPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

