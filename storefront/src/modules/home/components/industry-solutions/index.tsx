"use client"

import { useState } from "react"
import Image from "next/image"

interface IndustryProduct {
  name: string
  description: string
  image: string
}

interface Industry {
  id: string
  name: string
  icon: string
  description: string
  products: IndustryProduct[]
}

interface IndustrySolutionsProps {
  title?: string
  industries?: Industry[]
}

const defaultIndustries: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    description: "Heavy-duty protection for construction sites and building projects",
    products: [
      {
        name: "Impact-Resistant Safety Shoes",
        description: "Steel toe protection with anti-puncture soles",
        image: "/account-block.jpg",
      },
      {
        name: "Cut-Resistant Gloves",
        description: "Level 5 cut protection for handling sharp materials",
        image: "/account-block.jpg",
      },
      {
        name: "Hi-Vis Safety Vest",
        description: "High visibility reflective vest for site safety",
        image: "/account-block.jpg",
      },
    ],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "🛢️",
    description: "Specialized equipment for hazardous oil and gas environments",
    products: [
      {
        name: "Impact-Resistant Gloves",
        description: "TPR back-of-hand protection for drilling operations",
        image: "/account-block.jpg",
      },
      {
        name: "Anti-Slip Safety Boots",
        description: "Oil-resistant soles with superior grip",
        image: "/account-block.jpg",
      },
      {
        name: "Flame-Resistant Coveralls",
        description: "FR-rated workwear for flash fire protection",
        image: "/account-block.jpg",
      },
    ],
  },
  {
    id: "chemical",
    name: "Chemical",
    icon: "🧪",
    description: "Chemical-resistant PPE for laboratory and industrial applications",
    products: [
      {
        name: "Nitrile Chemical Gloves",
        description: "Superior chemical resistance for handling hazardous substances",
        image: "/account-block.jpg",
      },
      {
        name: "Chemical Splash Goggles",
        description: "Full seal protection against liquid splashes",
        image: "/account-block.jpg",
      },
      {
        name: "Chemical-Resistant Apron",
        description: "Full-body protection against chemical spills",
        image: "/account-block.jpg",
      },
    ],
  },
]

const IndustrySolutions = ({
  title = "Tailored Protection for Every Industry",
  industries = defaultIndustries,
}: IndustrySolutionsProps) => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  
  const currentIndustry = industries.find((i) => i.id === activeIndustry) || industries[0]

  return (
    <section className="bg-ppe-bg-card py-16">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl small:text-4xl font-bold text-ppe-text-primary mb-4">
            {title}
          </h2>
          <p className="font-body text-ppe-text-secondary max-w-2xl mx-auto">
            Industry-specific PPE solutions designed to meet the unique challenges of your workplace
          </p>
        </div>
        
        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold transition-all duration-200 ${
                activeIndustry === industry.id
                  ? "bg-ppe-accent-primary text-white shadow-lg"
                  : "bg-ppe-bg-page text-ppe-text-primary hover:bg-ppe-bg-page/80"
              }`}
            >
              <span className="text-xl">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>
        
        {/* Industry Content */}
        <div className="bg-ppe-bg-page rounded-2xl p-8">
          {/* Industry Description */}
          <p className="font-body text-ppe-text-secondary text-center mb-8 max-w-2xl mx-auto">
            {currentIndustry.description}
          </p>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 small:grid-cols-3 gap-6">
            {currentIndustry.products.map((product, index) => (
              <div
                key={index}
                className="bg-ppe-bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Product Image */}
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-ppe-text-primary mb-2">
                    {product.name}
                  </h4>
                  <p className="font-body text-sm text-ppe-text-secondary">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              View All {currentIndustry.name} Products
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

export default IndustrySolutions
