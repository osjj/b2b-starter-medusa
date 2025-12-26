"use client"

import Image from "next/image"
import { useState } from "react"

// News data
const newsItems = [
  {
    id: "1",
    title: "Company Successfully Passes ISO9001:2015 Quality Management Certification",
    category: "Company News",
    date: "2024-12-20",
    image: "/account-block.jpg",
    excerpt:
      "After rigorous audit and evaluation, our company has successfully passed the ISO9001:2015 quality management system certification, marking a new milestone in our quality management standards.",
  },
  {
    id: "2",
    title: "2024 Industrial Parts Industry Development Trend Report Released",
    category: "Industry News",
    date: "2024-12-15",
    image: "/hero-image.jpg",
    excerpt:
      "According to the latest industry data, the industrial parts market is expected to reach $500 billion in 2024, with smart manufacturing and automation becoming the main growth drivers.",
  },
  {
    id: "3",
    title: "New Product Launch: High-Precision Deep Groove Ball Bearing Series",
    category: "Product News",
    date: "2024-12-10",
    image: "/account-block.jpg",
    excerpt:
      "Our company has launched a new series of high-precision deep groove ball bearings with P5 precision grade, suitable for high-speed and high-precision equipment.",
  },
  {
    id: "4",
    title: "Winter Equipment Maintenance and Care Guide",
    category: "Technical Tips",
    date: "2024-12-05",
    image: "/hero-image.jpg",
    excerpt:
      "As temperatures drop in winter, equipment lubrication and sealing performance can be affected. This article introduces key points and precautions for winter equipment maintenance.",
  },
  {
    id: "5",
    title: "Company Successfully Participates in 25th China International Industry Fair",
    category: "Company News",
    date: "2024-11-28",
    image: "/account-block.jpg",
    excerpt:
      "Our company showcased the latest products and solutions at the Industry Fair, attracting attention from numerous customers and partners.",
  },
  {
    id: "6",
    title: "How to Choose the Right Seal Products",
    category: "Technical Tips",
    date: "2024-11-20",
    image: "/hero-image.jpg",
    excerpt:
      "The selection of seals directly affects equipment sealing performance and service life. This article details the key points for seal selection.",
  },
  {
    id: "7",
    title: "Digital Procurement System Officially Launched",
    category: "Company News",
    date: "2024-11-15",
    image: "/account-block.jpg",
    excerpt:
      "Our company's new digital procurement system is now live, providing customers with a more convenient and efficient procurement experience.",
  },
  {
    id: "8",
    title: "Changes in Industrial Parts Demand Under Smart Manufacturing",
    category: "Industry News",
    date: "2024-11-10",
    image: "/hero-image.jpg",
    excerpt:
      "With the rapid development of smart manufacturing, the industrial parts industry faces new opportunities and challenges, with products moving towards high-precision and intelligent directions.",
  },
]

const categories = ["All", "Company News", "Industry News", "Product News", "Technical Tips"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="bg-ppe-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-ppe-bg-dark">
        <Image
          src="/hero-image.jpg"
          alt="News & Insights"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl small:text-5xl font-bold text-white mb-4">
              News & Insights
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto px-4">
              Stay informed with industry trends and latest updates
            </p>
          </div>
        </div>
      </section>


      {/* Category Filter */}
      <section className="bg-ppe-bg-card py-6 sticky top-[73px] z-40 border-b border-ppe-border-light">
        <div className="content-container">
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors font-body ${
                  selectedCategory === category
                    ? "bg-ppe-accent-primary text-white"
                    : "bg-ppe-bg-page text-ppe-text-secondary hover:bg-ppe-bg-page/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="content-container">
          <div className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-ppe-bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-ppe-bg-page relative group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-ppe-text-muted mb-3">
                    <span className="flex items-center gap-1 bg-ppe-accent-primary/10 text-ppe-accent-primary px-2 py-1 rounded font-body">
                      🏷️ {item.category}
                    </span>
                    <span className="flex items-center gap-1 font-body">
                      📅 {item.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-ppe-text-primary mb-3 line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h3>

                  <p className="font-body text-ppe-text-secondary text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <button className="text-ppe-accent-primary hover:text-ppe-accent-primary-hover text-sm flex items-center gap-2 font-body font-medium">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
