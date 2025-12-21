import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | PPE Pro",
  description: "Professional PPE Manufacturer for Extreme Environments - Learn about our company, mission, and commitment to safety.",
}

export default function AboutPage() {
  return (
    <div className="bg-ppe-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-ppe-bg-dark">
        <Image
          src="/account-block.jpg"
          alt="About PPE Pro"
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
              Your Trusted Partner in Workplace Safety
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="content-container py-16">
        <div className="grid small:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ppe-text-primary mb-6">
              Who We Are
            </h2>
            <p className="font-body text-ppe-text-secondary mb-4 leading-relaxed">
              PPE Pro is a leading manufacturer of personal protective equipment, 
              dedicated to providing high-quality safety solutions for workers in 
              extreme environments worldwide.
            </p>
            <p className="font-body text-ppe-text-secondary mb-4 leading-relaxed">
              With over 15 years of experience in the industry, we have established 
              ourselves as a trusted partner for businesses across construction, 
              oil & gas, chemical, and manufacturing sectors.
            </p>
            <p className="font-body text-ppe-text-secondary leading-relaxed">
              Our state-of-the-art manufacturing facility produces over 500,000 
              pairs of safety equipment monthly, ensuring we can meet the demands 
              of clients of all sizes.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/account-block.jpg"
              alt="Our Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ppe-bg-card py-16">
        <div className="content-container">
          <div className="grid small:grid-cols-2 gap-12">
            <div className="bg-ppe-bg-page p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-ppe-text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-body text-ppe-text-secondary leading-relaxed">
                To protect workers worldwide by providing innovative, high-quality 
                personal protective equipment that meets the highest safety standards 
                while remaining accessible and affordable.
              </p>
            </div>
            <div className="bg-ppe-bg-page p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-ppe-text-primary mb-4">
                Our Vision
              </h3>
              <p className="font-body text-ppe-text-secondary leading-relaxed">
                To become the global leader in PPE manufacturing, setting new 
                standards for quality, innovation, and customer service in the 
                workplace safety industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="content-container py-16">
        <h2 className="font-heading text-3xl font-bold text-ppe-text-primary text-center mb-12">
          Our Certifications
        </h2>
        <div className="grid grid-cols-2 small:grid-cols-4 gap-8">
          {["CE", "ANSI", "ISO9001", "EN388"].map((cert) => (
            <div 
              key={cert}
              className="bg-ppe-bg-card p-6 rounded-lg text-center shadow-sm"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-ppe-bg-page rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-ppe-accent-primary">
                  {cert}
                </span>
              </div>
              <p className="font-body text-sm text-ppe-text-secondary">
                {cert} Certified
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ppe-bg-dark py-16">
        <div className="content-container text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="font-body text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your PPE requirements and discover 
            how we can help protect your workforce.
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
