"use client"

import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

interface HeroSectionProps {
  backgroundImage?: string
  title?: string
  subtitle?: string
}

const HeroSection = ({
  backgroundImage = "/account-block.jpg",
  title = "Professional PPE Manufacturer for Extreme Environments",
  subtitle = "Protecting workers worldwide with certified safety equipment",
}: HeroSectionProps) => {
  const handleRequestQuote = () => {
    // Scroll to footer CTA or open quote modal
    const footerCTA = document.getElementById("footer-cta")
    if (footerCTA) {
      footerCTA.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-ppe-bg-dark">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="PPE Manufacturing"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="content-container">
          <div className="max-w-3xl">
            {/* Accent Line */}
            <div className="w-20 h-1 bg-ppe-accent-primary mb-8" />
            
            {/* Title */}
            <h1 className="font-heading text-4xl small:text-5xl medium:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="font-body text-lg small:text-xl text-white/80 mb-10 max-w-2xl">
              {subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col small:flex-row gap-4">
              {/* Primary Button - View Catalog */}
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-lg hover:shadow-xl"
              >
                View Catalog
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </LocalizedClientLink>
              
              {/* Secondary Button - Request A Quote */}
              <button
                onClick={handleRequestQuote}
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-heading font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
              >
                Request A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
