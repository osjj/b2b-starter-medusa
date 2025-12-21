"use client"

import { useState, useRef } from "react"
import Image from "next/image"

interface ProductSpec {
  icon: string
  label: string
  value: string
}

interface FeaturedProduct {
  id: string
  name: string
  image: string
  label?: "Best Seller" | "New Arrival"
  specs: ProductSpec[]
  href: string
  minOrder?: string
}

interface FeaturedProductsB2BProps {
  products?: FeaturedProduct[]
  title?: string
}

const defaultProducts: FeaturedProduct[] = [
  {
    id: "1",
    name: "Pro Cut-Resistant Gloves A5",
    image: "/account-block.jpg",
    label: "Best Seller",
    specs: [
      { icon: "🛡️", label: "Cut Level", value: "EN388 4X43D" },
      { icon: "📏", label: "Sizes", value: "S-XXL" },
      { icon: "🎨", label: "Colors", value: "3 Options" },
    ],
    href: "/products/cut-resistant-gloves-a5",
    minOrder: "MOQ: 500 pairs",
  },
  {
    id: "2",
    name: "Steel Toe Safety Boots S3",
    image: "/account-block.jpg",
    label: "Best Seller",
    specs: [
      { icon: "🦶", label: "Protection", value: "S3 SRC" },
      { icon: "💧", label: "Waterproof", value: "Yes" },
      { icon: "📏", label: "Sizes", value: "36-47" },
    ],
    href: "/products/steel-toe-boots-s3",
    minOrder: "MOQ: 200 pairs",
  },
  {
    id: "3",
    name: "Hi-Vis Reflective Vest Class 3",
    image: "/account-block.jpg",
    label: "New Arrival",
    specs: [
      { icon: "✨", label: "Class", value: "EN ISO 20471" },
      { icon: "🔦", label: "Reflective", value: "360°" },
      { icon: "📏", label: "Sizes", value: "M-4XL" },
    ],
    href: "/products/hi-vis-vest-class3",
    minOrder: "MOQ: 1000 pcs",
  },
  {
    id: "4",
    name: "Impact-Resistant Mechanic Gloves",
    image: "/account-block.jpg",
    specs: [
      { icon: "💪", label: "Impact", value: "TPR Protection" },
      { icon: "🛡️", label: "Cut Level", value: "EN388 3X42C" },
      { icon: "🎯", label: "Grip", value: "Sandy Nitrile" },
    ],
    href: "/products/impact-mechanic-gloves",
    minOrder: "MOQ: 500 pairs",
  },
  {
    id: "5",
    name: "Chemical Resistant Nitrile Gloves",
    image: "/account-block.jpg",
    label: "New Arrival",
    specs: [
      { icon: "🧪", label: "Chemical", value: "EN374-1" },
      { icon: "⏱️", label: "Thickness", value: "0.38mm" },
      { icon: "📏", label: "Length", value: "33cm" },
    ],
    href: "/products/chemical-nitrile-gloves",
    minOrder: "MOQ: 1000 pairs",
  },
]

const ProductCard = ({ product }: { product: FeaturedProduct }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-ppe-bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative h-[200px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        
        {/* Label Badge */}
        {product.label && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-heading font-semibold ${
            product.label === "Best Seller"
              ? "bg-ppe-accent-primary text-white"
              : "bg-green-500 text-white"
          }`}>
            {product.label}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <h4 className="font-heading font-semibold text-ppe-text-primary mb-3 line-clamp-2 h-12">
          {product.name}
        </h4>
        
        {/* Specs */}
        <div className="space-y-2 mb-4">
          {product.specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span>{spec.icon}</span>
              <span className="text-ppe-text-muted">{spec.label}:</span>
              <span className="font-medium text-ppe-text-primary">{spec.value}</span>
            </div>
          ))}
        </div>
        
        {/* Min Order */}
        {product.minOrder && (
          <p className="text-xs text-ppe-text-muted mb-4">{product.minOrder}</p>
        )}
        
        {/* CTA Button */}
        <button className="w-full bg-ppe-accent-primary hover:bg-ppe-accent-primary-hover text-white font-heading font-semibold py-3 rounded-full transition-colors duration-200">
          Inquire Now
        </button>
      </div>
    </div>
  )
}

const FeaturedProductsB2B = ({
  products = defaultProducts,
  title = "Featured Products",
}: FeaturedProductsB2BProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <section className="bg-ppe-bg-page py-16">
      <div className="content-container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl small:text-4xl font-bold text-ppe-text-primary mb-2">
              {title}
            </h2>
            <p className="font-body text-ppe-text-secondary">
              Top-rated products trusted by industry professionals
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden small:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-colors duration-200 ${
                canScrollLeft
                  ? "bg-ppe-bg-card hover:bg-ppe-accent-primary hover:text-white text-ppe-text-primary shadow-sm"
                  : "bg-ppe-bg-card/50 text-ppe-text-muted cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-colors duration-200 ${
                canScrollRight
                  ? "bg-ppe-bg-card hover:bg-ppe-accent-primary hover:text-white text-ppe-text-primary shadow-sm"
                  : "bg-ppe-bg-card/50 text-ppe-text-muted cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="/store"
            className="inline-flex items-center gap-2 font-heading font-semibold text-ppe-accent-primary hover:text-ppe-accent-primary-hover transition-colors duration-200"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsB2B
