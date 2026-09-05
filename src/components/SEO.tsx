import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}

export default function SEO({
  title = 'Shyam Krishna Gupta — Tech Entrepreneur, AI/ML Engineer & Founder of Sayapatri Group',
  description = 'Shyam Krishna Gupta is a tech entrepreneur, Computer Engineer, AI/ML practitioner, and Co-Founder of Sayapatri Group building tech startups in Nepal.',
  keywords = 'Shyam Krishna Gupta, Tech Entrepreneur Nepal, Startup Founder Nepal, Tech Startup Nepal, Business Technology Nepal, Best Developer in Nepal, AI ML Engineer Nepal, Sayapatri Group Founder',
  canonical = 'https://anshgupta.com.np/',
}: SEOProps) {
  useEffect(() => {
    document.title = title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      metaKeywords.setAttribute('content', keywords)
      document.head.appendChild(metaKeywords)
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      canonicalLink.setAttribute('href', canonical)
      document.head.appendChild(canonicalLink)
    }
  }, [title, description, keywords, canonical])

  return null
}
