"use client"

import Image from "next/image"

interface FactoryCapability {
  icon: string
  title: string
  description: string
}

interface FactoryShowcaseProps {
  images?: string[]
  capabilities?: FactoryCapability[]
  capacity?: string
  leadTimeStock?: string
  leadTimeCustom?: string
}

const defaultCapabilities: FactoryCapability[] = [
  {
    icon: "🎨",
    title: "Logo Printing",
    description: "Custom logo printing, embroidery, and heat transfer on all products",
  },
  {
    icon: "📦",
    title: "Custom Packaging",
    description: "Private label packaging with your brand identity",
  },
  {
    icon: "🔬",
    title: "Quality Control",
    description: "100% inspection with international certification standards",
  },
  {
    icon: "🌍",
    title: "Global Shipping",
    description: "Worldwide delivery with DHL, Maersk, and other partners",
  },
]

const FactoryShowcase = ({
  images = ["/account-block.jpg", "/account-block.jpg", "/account-block.jpg"],
  capabilities = defaultCapabilities,
  capacity = "500,000+ pairs monthly",
  leadTimeStock = "3 days",
  leadTimeCustom = "20 days",
}: FactoryShowcaseProps) => {
  return (
    <section className="bg-ppe-bg-card py-16">
      <div className="content-container">
        <div className="grid small:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src={images[0]}
                alt="Factory Production Line"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-ppe-accent-primary text-white px-4 py-2 rounded-full font-heading font-semibold text-sm">
                  Production Line
                </span>
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[150px] rounded-xl overflow-hidden">
                <Image
                  src={images[1]}
                  alt="Warehouse"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 text-ppe-text-primary px-3 py-1 rounded-full font-heading font-medium text-xs">
                    Warehouse
                  </span>
                </div>
              </div>
              <div className="relative h-[150px] rounded-xl overflow-hidden">
                <Image
                  src={images[2]}
                  alt="Quality Control"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 text-ppe-text-primary px-3 py-1 rounded-full font-heading font-medium text-xs">
                    QC Lab
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div>
            <h2 className="font-heading text-3xl small:text-4xl font-bold text-ppe-text-primary mb-4">
              Direct from Factory
            </h2>
            <p className="font-body text-ppe-text-secondary mb-8 leading-relaxed">
              As a source manufacturer with over 15 years of experience, we offer competitive 
              pricing, flexible customization, and reliable quality control for B2B partners worldwide.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-ppe-bg-page p-4 rounded-xl text-center">
                <p className="font-heading text-2xl font-bold text-ppe-accent-primary mb-1">
                  {capacity.split(" ")[0]}
                </p>
                <p className="font-body text-xs text-ppe-text-muted">
                  Monthly Capacity
                </p>
              </div>
              <div className="bg-ppe-bg-page p-4 rounded-xl text-center">
                <p className="font-heading text-2xl font-bold text-ppe-accent-primary mb-1">
                  {leadTimeStock}
                </p>
                <p className="font-body text-xs text-ppe-text-muted">
                  Stock Lead Time
                </p>
              </div>
              <div className="bg-ppe-bg-page p-4 rounded-xl text-center">
                <p className="font-heading text-2xl font-bold text-ppe-accent-primary mb-1">
                  {leadTimeCustom}
                </p>
                <p className="font-body text-xs text-ppe-text-muted">
                  Custom Lead Time
                </p>
              </div>
            </div>
            
            {/* Capabilities */}
            <div className="space-y-4 mb-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ppe-accent-primary/10 rounded-lg flex items-center justify-center text-xl">
                    {cap.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-ppe-text-primary mb-1">
                      {cap.title}
                    </h4>
                    <p className="font-body text-sm text-ppe-text-secondary">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Request Factory Tour
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactoryShowcase
