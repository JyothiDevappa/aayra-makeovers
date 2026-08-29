import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServicesCarousel from '../components/ServicesCarousel'
import AboutStrip from '../components/AboutStrip'
import BridalGallery from '../components/BridalGallery'
import BoutiqueSection from '../components/BoutiqueSection'
import MapSection from '../components/MapSection'

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BeautySalon',
      '@id': 'https://aayramakeovers.com/#business',
      'name': 'Aayra Makeovers',
      'alternateName': [
        'Aayra Makeovers Chamarajanagar',
        'Aayra Beauty Parlour Chamarajanagar',
        'Aayra Boutique & Tailoring Studio',
      ],
      'url': 'https://aayramakeovers.com',
      'telephone': '+91-9686457628',
      'email': 'aayramakeovers@gmail.com',
      'image': 'https://aayramakeovers.com/assets/img/shop/shop_img_1.jpeg',
      'description':
        'Aayra Makeovers is a premier ladies beauty parlour & custom tailoring studio in Chamarajanagar founded by Pallavi. Providing HD bridal makeup, hair spa, facials, haircuts, and designer blouse stitching & Aari needlework.',
      'priceRange': '₹₹',
      'paymentAccepted': 'Cash, UPI, Google Pay, PhonePe',
      'currenciesAccepted': 'INR',
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
      'founder': {
        '@type': 'Person',
        'name': 'Pallavi',
        'jobTitle': 'Master Makeup Artist & Designer Tailor',
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Chamarajanagar',
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Karnataka',
        },
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Beauty, Bridal & Tailoring Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Bridal Makeup Artistry in Chamarajanagar',
              'description':
                'Flawless HD makeup base, authentic silk saree pleating, traditional floral hairstyles and wedding styling by Pallavi.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Designer Blouse Stitching & Aari Work in Chamarajanagar',
              'description':
                'Princess cut, katori cut, boat neck, lining attachment, padded cups and handcrafted bridal maggam zari needlework.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Hair Spa & Scalp Therapy',
              'description':
                'Deep hair conditioning, hot steam therapy, anti-dandruff treatments and relaxing head massages.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Skin Facials & D-Tan Cleanups',
              'description':
                'Herbal fruit facials, diamond brightening, and clarifying de-tan packs for clear, glowing skin.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Women & Kids Precision Haircuts',
              'description':
                'Layer cut, V-shape cut, U-cut, feather styling, and chic bob haircuts.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aayramakeovers.com/#website',
      'url': 'https://aayramakeovers.com',
      'name': 'Aayra Makeovers',
      'description':
        'Best Beauty Parlour, Bridal Makeup & Tailoring Studio in Chamarajanagar by Pallavi.',
      'publisher': {
        '@id': 'https://aayramakeovers.com/#business',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <SEO
        title="Aayra Makeovers | Best Beauty Parlour & Tailoring Studio in Chamarajanagar"
        description="Aayra Makeovers is a premier ladies beauty parlour & custom tailoring studio in Chamarajanagar by Pallavi. Offering bridal makeup, hair spa, facials & designer blouse stitching."
        canonical="https://aayramakeovers.com/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <ServicesCarousel />
      <AboutStrip />
      <BridalGallery />
      <BoutiqueSection />
      <MapSection />
    </>
  )
}

