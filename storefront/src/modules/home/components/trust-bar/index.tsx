"use client"

import Image from "next/image"

interface TrustItem {
  name: string
  logo: string
  alt: string
}

interface TrustBarProps {
  certifications?: TrustItem[]
  partners?: TrustItem[]
}

const defaultCertifications: TrustItem[] = [
  { name: "CE", logo: "/account-block.jpg", alt: "CE Certification" },
  { name: "ANSI", logo: "/account-block.jpg", alt: "ANSI Certification" },
  { name: "ISO9001", logo: "/account-block.jpg", alt: "ISO9001 Certification" },
  { name: "EN388", logo: "/account-block.jpg", alt: "EN388 Certification" },
]

const defaultPartners: TrustItem[] = [
  { name: "DHL", logo: "/account-block.jpg", alt: "DHL Logistics Partner" },
  { name: "Maersk", logo: "/account-block.jpg", alt: "Maersk Shipping Partner" },
  { name: "3M", logo: "/account-block.jpg", alt: "3M Material Supplier" },
  { name: "DuPont", logo: "/account-block.jpg", alt: "DuPont Material Supplier" },
]

const TrustBar = ({
  certifications = defaultCertifications,
  partners = defaultPartners,
}: TrustBarProps) => {
  // Duplicate items for seamless infinite scroll
  const allItems = [...certifications, ...partners]
  const duplicatedItems = [...allItems, ...allItems]

  return (
    <section className="bg-ppe-bg-card py-8 border-y border-ppe-border-light overflow-hidden">
      <div className="content-container mb-6">
        <p className="font-body text-sm text-ppe-text-muted text-center uppercase tracking-wider">
          Certified & Trusted by Industry Leaders
        </p>
      </div>
      
      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="flex items-center gap-3 bg-ppe-bg-page px-6 py-3 rounded-lg">
                <div className="relative w-10 h-10 rounded overflow-hidden">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-heading font-semibold text-ppe-text-primary whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certification Badges Row */}
      <div className="content-container mt-8">
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 bg-ppe-accent-primary/10 px-4 py-2 rounded-full"
            >
              <svg 
                className="w-5 h-5 text-ppe-accent-primary" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="font-heading font-semibold text-sm text-ppe-accent-primary">
                {cert.name} Certified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
