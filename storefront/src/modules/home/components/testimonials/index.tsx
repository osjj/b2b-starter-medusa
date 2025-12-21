"use client"

import Image from "next/image"

interface CaseStudy {
  id: string
  image: string
  title: string
  quantity: string
  location: string
  year: string
  industry: string
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  cases?: CaseStudy[]
}

const defaultCases: CaseStudy[] = [
  {
    id: "1",
    image: "/account-block.jpg",
    title: "Dubai Construction Project",
    quantity: "5,000 vests",
    location: "Dubai, UAE",
    year: "2024",
    industry: "Construction",
  },
  {
    id: "2",
    image: "/account-block.jpg",
    title: "Saudi Aramco Oil Field",
    quantity: "10,000 pairs gloves",
    location: "Dhahran, Saudi Arabia",
    year: "2024",
    industry: "Oil & Gas",
  },
  {
    id: "3",
    image: "/account-block.jpg",
    title: "German Chemical Plant",
    quantity: "3,000 pairs boots",
    location: "Frankfurt, Germany",
    year: "2023",
    industry: "Chemical",
  },
  {
    id: "4",
    image: "/account-block.jpg",
    title: "Australian Mining Operation",
    quantity: "8,000 helmets",
    location: "Perth, Australia",
    year: "2024",
    industry: "Mining",
  },
]

const CaseCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-ppe-bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-[250px]">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-ppe-accent-primary text-white px-3 py-1 rounded-full font-heading font-semibold text-xs">
            {caseStudy.industry}
          </span>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-ppe-text-primary px-3 py-1 rounded-full font-heading font-medium text-xs">
            {caseStudy.year}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h4 className="font-heading font-semibold text-lg text-ppe-text-primary mb-3">
          {caseStudy.title}
        </h4>
        
        <div className="space-y-2">
          {/* Quantity */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-ppe-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="font-body text-sm text-ppe-text-secondary">
              Supplied: <span className="font-semibold text-ppe-text-primary">{caseStudy.quantity}</span>
            </span>
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-ppe-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body text-sm text-ppe-text-secondary">
              Location: <span className="font-semibold text-ppe-text-primary">{caseStudy.location}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = ({
  title = "Project Gallery",
  subtitle = "Real projects, real protection. See how we've equipped workforces around the world.",
  cases = defaultCases,
}: TestimonialsProps) => {
  return (
    <section className="bg-ppe-bg-page py-16">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl small:text-4xl font-bold text-ppe-text-primary mb-4">
            {title}
          </h2>
          <p className="font-body text-ppe-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Cases Grid */}
        <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-6">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        {/* Stats Bar */}
        <div className="mt-12 bg-ppe-bg-card rounded-2xl p-8">
          <div className="grid grid-cols-2 small:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-3xl font-bold text-ppe-accent-primary mb-2">50+</p>
              <p className="font-body text-sm text-ppe-text-secondary">Countries Served</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-ppe-accent-primary mb-2">500+</p>
              <p className="font-body text-sm text-ppe-text-secondary">B2B Partners</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-ppe-accent-primary mb-2">10M+</p>
              <p className="font-body text-sm text-ppe-text-secondary">Products Delivered</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-ppe-accent-primary mb-2">15+</p>
              <p className="font-body text-sm text-ppe-text-secondary">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
