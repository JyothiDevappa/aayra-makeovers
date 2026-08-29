import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://aayramakeovers.in'
const DEFAULT_IMAGE = 'https://aayramakeovers.in/assets/hero-slider-1-CaJm1hd0.webp'

function setMetaTag(attrName, attrValue, content) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attrName, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

export default function SEO({
  title = 'Aayra Makeovers | Best Beauty Parlour & Tailoring Studio in Chamarajanagar',
  description = 'Aayra Makeovers is a premier ladies beauty parlour & custom tailoring studio in Chamarajanagar by Pallavi. Offering bridal makeup, hair spa, facials & designer blouse stitching.',
  canonical,
  ogType = 'business.business',
  ogImage = DEFAULT_IMAGE,
  structuredData = null,
  breadcrumbs = null,
}) {
  const location = useLocation()
  const canonicalUrl = canonical || `${BASE_URL}${location.pathname === '/' ? '' : location.pathname}`

  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMetaTag('name', 'geo.region', 'IN-KA')
    setMetaTag('name', 'geo.placename', 'Chamarajanagar')
    setMetaTag('name', 'geo.position', '11.925844;76.938079')
    setMetaTag('name', 'ICBM', '11.925844, 76.938079')

    // 3. Canonical Link
    setCanonical(canonicalUrl)

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:site_name', 'Aayra Makeovers')
    setMetaTag('property', 'og:locale', 'en_IN')

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    // 6. JSON-LD Structured Data
    const scriptId = 'structured-data-jsonld'
    let scriptTag = document.getElementById(scriptId)
    
    if (structuredData || breadcrumbs) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = scriptId
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }

      let payload = structuredData
      if (breadcrumbs && structuredData) {
        // If structuredData is an object or graph, include BreadcrumbList
        if (Array.isArray(structuredData)) {
          payload = [...structuredData, breadcrumbs]
        } else if (structuredData['@graph']) {
          payload = {
            ...structuredData,
            '@graph': [...structuredData['@graph'], breadcrumbs],
          }
        } else {
          payload = {
            '@context': 'https://schema.org',
            '@graph': [structuredData, breadcrumbs],
          }
        }
      } else if (breadcrumbs && !structuredData) {
        payload = breadcrumbs
      }

      scriptTag.textContent = JSON.stringify(payload, null, 2)
    } else if (scriptTag) {
      scriptTag.remove()
    }

    return () => {
      // Optional cleanup if needed
    }
  }, [title, description, canonicalUrl, ogType, ogImage, structuredData, breadcrumbs])

  return null
}
