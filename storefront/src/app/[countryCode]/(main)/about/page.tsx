import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | PPE Pro",
  description: "Professional B2B Industrial Parts Procurement Platform - Learn about our company, mission, and commitment to quality.",
}

// Core values data
const values = [
  {
    icon: "🎯",
    title: "Professional Focus",
    description: "Specialized in industrial parts, providing professional products and services",
  },
  {
    icon: "🏆",
    title: "Quality Assurance",
    description: "Strict quality management system ensuring product excellence",
  },
  {
    icon: "👥",
    title: "Customer First",
    description: "Customer-oriented approach delivering premium service",
  },
  {
    icon: "🌍",
    title: "Innovation Driven",
    description: "Continuous innovation leading industry development",
  },
]

// Statistics data
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "10,000+", label: "Enterprise Clients" },
  { value: "50,000+", label: "Product Types" },
  { value: "98%", label: "Customer Satisfaction" },
]

// Company history
const history = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Established industrial parts procurement platform, began serving enterprise clients",
  },
  {
    year: "2017",
    title: "Business Expansion",
    description: "Product line expanded to 6 major categories, client base exceeded 1,000",
  },
  {
    year: "2019",
    title: "Platform Upgrade",
    description: "Launched online procurement platform, achieved full-process digitalization",
  },
  {
    year: "2022",
    title: "Industry Leader",
    description: "Client base exceeded 10,000, became industry-leading B2B procurement platform",
  },
  {
    year: "2024",
    title: "Continuous Innovation",
    description: "Launched intelligent procurement system, continuing to lead industry development",
  },
]


export default function AboutPage() {
  return (
    <div className="bg-ppe-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-ppe-bg-dark">
        <Image
          src="/hero-image.jpg"
          alt="About Us"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl small:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto px-4">
              Professional B2B Industrial Parts Procurement Platform
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="content-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-ppe-text-primary mb-6 text-center">
            Company Profile
          </h2>
          <p className="font-body text-ppe-text-secondary mb-4 leading-relaxed">
            We are a professional platform focused on B2B industrial parts procurement, established in 2015. 
            After years of development, we have become a leading industrial parts supplier in the industry, 
            providing quality products and services to over 10,000 enterprise clients.
          </p>
          <p className="font-body text-ppe-text-secondary mb-4 leading-relaxed">
            Our products cover bearings, seals, fasteners, transmission parts, hydraulic components, 
            pneumatic elements and many other categories. We have a complete supply chain system and 
            quality management system, committed to providing customers with high-quality products, 
            competitive prices and professional technical support.
          </p>
          <p className="font-body text-ppe-text-secondary leading-relaxed">
            Adhering to the service philosophy of &quot;Quality First, Customer Supreme&quot;, we continuously 
            optimize procurement processes, improve service quality, and create greater value for customers.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-ppe-bg-card py-16">
        <div className="content-container">
          <h2 className="font-heading text-3xl font-bold text-ppe-text-primary text-center mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-ppe-accent-primary/10 text-ppe-accent-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-ppe-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-ppe-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Company Stats */}
      <section className="content-container py-16">
        <div className="grid grid-cols-2 small:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-ppe-bg-card rounded-lg p-8 text-center shadow-sm">
              <div className="font-heading text-4xl font-bold text-ppe-accent-primary mb-2">
                {stat.value}
              </div>
              <div className="font-body text-ppe-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company History */}
      <section className="bg-ppe-bg-card py-16">
        <div className="content-container">
          <h2 className="font-heading text-3xl font-bold text-ppe-text-primary text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-24 flex-shrink-0 text-right">
                    <div className="inline-block bg-ppe-accent-primary text-white px-3 py-1 rounded font-heading font-semibold">
                      {item.year}
                    </div>
                  </div>
                  <div className={`flex-1 ${index < history.length - 1 ? 'pb-8 border-l-2 border-ppe-accent-primary/30' : ''} pl-6 relative`}>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-ppe-accent-primary rounded-full"></div>
                    <h3 className="font-heading text-lg font-semibold text-ppe-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-ppe-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ppe-bg-dark py-16">
        <div className="content-container text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Join Us, Create the Future Together
          </h2>
          <p className="font-body text-white/80 mb-8 max-w-2xl mx-auto">
            We look forward to partnering with you, providing quality products and services
          </p>
          <a
            href="mailto:sales@ppepro.com"
            className="inline-block bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
