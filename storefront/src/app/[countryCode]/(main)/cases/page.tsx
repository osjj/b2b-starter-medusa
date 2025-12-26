import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Success Cases | PPE Pro",
  description: "Witness our professional services and share our clients' success stories",
}

// Case studies data
const cases = [
  {
    id: "1",
    title: "Supply Chain Optimization for Major Auto Manufacturer",
    company: "Leading Automotive Group",
    industry: "Automotive",
    location: "Shanghai",
    date: "2024-06",
    image: "/account-block.jpg",
    description: "Provided full range of bearings and fasteners for this automotive manufacturer, optimizing supply chain management and reducing procurement costs by 15%.",
    products: ["Deep Groove Ball Bearings", "Tapered Roller Bearings", "Stainless Steel Bolts"],
    results: ["15% cost reduction", "30% faster delivery", "99.5% quality rate"],
  },
  {
    id: "2",
    title: "Hydraulic System Upgrade for Construction Equipment",
    company: "Major Construction Machinery Co.",
    industry: "Construction",
    location: "Xuzhou",
    date: "2024-05",
    image: "/hero-image.jpg",
    description: "Supplied high-quality hydraulic cylinders and seals, helping client complete product line upgrade and improve equipment performance and reliability.",
    products: ["Hydraulic Cylinders", "O-Ring Seals", "Hydraulic Pumps"],
    results: ["20% stability improvement", "25% maintenance cost reduction", "98% satisfaction rate"],
  },
  {
    id: "3",
    title: "Automation Upgrade for Food Processing Plant",
    company: "Leading Food Processing Enterprise",
    industry: "Food Processing",
    location: "Hangzhou",
    date: "2024-04",
    image: "/account-block.jpg",
    description: "Provided transmission parts and pneumatic components for automated production lines, achieving significant production efficiency improvements.",
    products: ["Timing Belts", "Pneumatic FRL Units", "Cylinders"],
    results: ["35% efficiency increase", "18% energy savings", "40% fewer failures"],
  },
  {
    id: "4",
    title: "Precision Manufacturing for Electronics Company",
    company: "Electronics Manufacturing Enterprise",
    industry: "Electronics",
    location: "Shenzhen",
    date: "2024-03",
    image: "/hero-image.jpg",
    description: "Supplied high-precision bearings and fasteners to meet precision manufacturing requirements and improve product quality.",
    products: ["Precision Bearings", "Micro Fasteners", "Linear Guides"],
    results: ["50% precision improvement", "60% scrap reduction", "20% faster production"],
  },
  {
    id: "5",
    title: "Equipment Maintenance Optimization for Textile Mill",
    company: "Major Textile Group",
    industry: "Textile",
    location: "Shaoxing",
    date: "2024-02",
    image: "/account-block.jpg",
    description: "Established spare parts inventory management system, providing full range of components to reduce equipment downtime.",
    products: ["Bearings", "Belts", "Seals"],
    results: ["45% less downtime", "30% maintenance savings", "15% capacity increase"],
  },
  {
    id: "6",
    title: "Safety Production Upgrade for Chemical Plant",
    company: "Chemical Industry Group",
    industry: "Chemical",
    location: "Ningbo",
    date: "2024-01",
    image: "/hero-image.jpg",
    description: "Provided corrosion-resistant seals and explosion-proof electrical components to improve production safety.",
    products: ["Corrosion-Resistant Seals", "Stainless Steel Fittings", "Explosion-Proof Valves"],
    results: ["Zero safety incidents", "40% longer equipment life", "Safety certification passed"],
  },
]

// Statistics data
const stats = [
  { value: "10,000+", label: "Enterprises Served" },
  { value: "500+", label: "Success Cases" },
  { value: "15+", label: "Industries Covered" },
  { value: "98%", label: "Customer Satisfaction" },
]

export default function CasesPage() {
  return (
    <div className="bg-ppe-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-ppe-bg-dark">
        <Image
          src="/hero-image.jpg"
          alt="Success Cases"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl small:text-5xl font-bold text-white mb-4">
              Success Cases
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto px-4">
              Witness our professional services and share our clients&apos; success stories
            </p>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-12 bg-ppe-bg-card">
        <div className="content-container">
          <div className="grid grid-cols-2 small:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl font-bold text-ppe-accent-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-ppe-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="content-container">
          <div className="grid grid-cols-1 small:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-ppe-bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-ppe-bg-page relative">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-ppe-text-muted mb-3">
                    <span className="bg-ppe-accent-primary/10 text-ppe-accent-primary px-2 py-1 rounded font-body">
                      {caseItem.industry}
                    </span>
                    <span className="flex items-center gap-1 font-body">
                      📅 {caseItem.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-ppe-text-primary mb-2">
                    {caseItem.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-ppe-text-secondary mb-3 font-body">
                    <span className="flex items-center gap-1">
                      🏢 {caseItem.company}
                    </span>
                    <span className="flex items-center gap-1">
                      📍 {caseItem.location}
                    </span>
                  </div>

                  <p className="font-body text-ppe-text-secondary mb-4">
                    {caseItem.description}
                  </p>

                  <div className="mb-4">
                    <div className="font-body text-sm text-ppe-text-secondary mb-2">
                      Products Supplied:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.products.map((product, index) => (
                        <span
                          key={index}
                          className="text-xs bg-ppe-bg-page px-2 py-1 rounded font-body text-ppe-text-secondary"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-body text-sm text-ppe-text-secondary mb-2">
                      Project Results:
                    </div>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, index) => (
                        <li
                          key={index}
                          className="text-sm text-green-600 flex items-start gap-2 font-body"
                        >
                          <span className="mt-0.5">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ppe-bg-dark py-16">
        <div className="content-container text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Looking Forward to Partnering With You
          </h2>
          <p className="font-body text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s create the next success story together
          </p>
          <a
            href="mailto:sales@ppepro.com"
            className="inline-block bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
