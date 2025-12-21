"use client"

import Image from "next/image"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

interface CategoryItem {
  id: string
  name: string
  image: string
  href: string
  size: "large" | "medium" | "small"
  subcategories?: string[]
  productCount?: number
}

interface CategoryGridProps {
  categories?: CategoryItem[]
}

const defaultCategories: CategoryItem[] = [
  {
    id: "gloves",
    name: "Safety Gloves",
    image: "/account-block.jpg",
    href: "/store?category=gloves",
    size: "large",
    subcategories: ["Cut Resistant", "Chemical", "Heat Resistant", "Impact"],
    productCount: 120,
  },
  {
    id: "shoes",
    name: "Safety Shoes",
    image: "/account-block.jpg",
    href: "/store?category=shoes",
    size: "medium",
    subcategories: ["Steel Toe", "Anti-Slip", "Waterproof"],
    productCount: 85,
  },
  {
    id: "workwear",
    name: "Workwear",
    image: "/account-block.jpg",
    href: "/store?category=workwear",
    size: "medium",
    subcategories: ["Hi-Vis", "Flame Resistant", "Coveralls"],
    productCount: 65,
  },
  {
    id: "eye",
    name: "Eye Protection",
    image: "/account-block.jpg",
    href: "/store?category=eye-protection",
    size: "small",
    subcategories: ["Safety Glasses", "Goggles"],
    productCount: 40,
  },
  {
    id: "helmets",
    name: "Helmets",
    image: "/account-block.jpg",
    href: "/store?category=helmets",
    size: "small",
    subcategories: ["Hard Hats", "Bump Caps"],
    productCount: 35,
  },
]

const CategoryCard = ({ category }: { category: CategoryItem }) => {
  const sizeClasses = {
    large: "small:col-span-2 small:row-span-2",
    medium: "small:col-span-1 small:row-span-2",
    small: "small:col-span-1 small:row-span-1",
  }

  const heightClasses = {
    large: "h-[300px] small:h-full",
    medium: "h-[250px] small:h-full",
    small: "h-[200px] small:h-full",
  }

  return (
    <LocalizedClientLink
      href={category.href}
      className={`group relative overflow-hidden rounded-xl ${sizeClasses[category.size]} ${heightClasses[category.size]}`}
    >
      {/* Background Image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Default Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-ppe-accent-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Default Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-heading text-xl small:text-2xl font-bold text-white mb-2">
          {category.name}
        </h3>
        {category.productCount && (
          <p className="font-body text-sm text-white/80">
            {category.productCount}+ Models
          </p>
        )}
      </div>
      
      {/* Hover Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-xl small:text-2xl font-bold text-white mb-4 text-center">
          {category.name}
        </h3>
        
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {category.subcategories.slice(0, 4).map((sub) => (
              <span
                key={sub}
                className="font-body text-xs bg-white/20 text-white px-3 py-1 rounded-full"
              >
                {sub}
              </span>
            ))}
          </div>
        )}
        
        <span className="font-heading font-semibold text-white flex items-center gap-2">
          View {category.productCount}+ Models
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </LocalizedClientLink>
  )
}

const CategoryGrid = ({ categories = defaultCategories }: CategoryGridProps) => {
  return (
    <section className="bg-ppe-bg-page py-16">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl small:text-4xl font-bold text-ppe-text-primary mb-4">
            Shop by Category
          </h2>
          <p className="font-body text-ppe-text-secondary max-w-2xl mx-auto">
            Explore our comprehensive range of personal protective equipment designed for every industry
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 small:grid-cols-4 small:grid-rows-3 gap-4 small:h-[700px]">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
