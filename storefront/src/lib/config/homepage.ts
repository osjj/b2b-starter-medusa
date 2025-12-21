// Homepage Configuration
// All static data for the PPE B2B homepage

export const homepageConfig = {
  // Hero Section
  hero: {
    title: "Professional PPE Manufacturer for Extreme Environments",
    subtitle: "Protecting workers worldwide with certified safety equipment",
    backgroundImage: "/account-block.jpg",
    primaryCTA: {
      label: "View Catalog",
      href: "/store",
    },
    secondaryCTA: {
      label: "Request A Quote",
    },
  },

  // Trust Bar - Certifications
  certifications: [
    { name: "CE", logo: "/account-block.jpg", alt: "CE Certification" },
    { name: "ANSI", logo: "/account-block.jpg", alt: "ANSI Certification" },
    { name: "ISO9001", logo: "/account-block.jpg", alt: "ISO9001 Certification" },
    { name: "EN388", logo: "/account-block.jpg", alt: "EN388 Certification" },
  ],

  // Trust Bar - Partners
  partners: [
    { name: "DHL", logo: "/account-block.jpg", alt: "DHL Logistics Partner" },
    { name: "Maersk", logo: "/account-block.jpg", alt: "Maersk Shipping Partner" },
    { name: "3M", logo: "/account-block.jpg", alt: "3M Material Supplier" },
    { name: "DuPont", logo: "/account-block.jpg", alt: "DuPont Material Supplier" },
  ],

  // Category Grid
  categories: [
    {
      id: "gloves",
      name: "Safety Gloves",
      image: "/account-block.jpg",
      href: "/store?category=gloves",
      size: "large" as const,
      subcategories: ["Cut Resistant", "Chemical", "Heat Resistant", "Impact"],
      productCount: 120,
    },
    {
      id: "shoes",
      name: "Safety Shoes",
      image: "/account-block.jpg",
      href: "/store?category=shoes",
      size: "medium" as const,
      subcategories: ["Steel Toe", "Anti-Slip", "Waterproof"],
      productCount: 85,
    },
    {
      id: "workwear",
      name: "Workwear",
      image: "/account-block.jpg",
      href: "/store?category=workwear",
      size: "medium" as const,
      subcategories: ["Hi-Vis", "Flame Resistant", "Coveralls"],
      productCount: 65,
    },
    {
      id: "eye",
      name: "Eye Protection",
      image: "/account-block.jpg",
      href: "/store?category=eye-protection",
      size: "small" as const,
      subcategories: ["Safety Glasses", "Goggles"],
      productCount: 40,
    },
    {
      id: "helmets",
      name: "Helmets",
      image: "/account-block.jpg",
      href: "/store?category=helmets",
      size: "small" as const,
      subcategories: ["Hard Hats", "Bump Caps"],
      productCount: 35,
    },
  ],

  // Industry Solutions
  industries: [
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
  ],

  // Featured Products
  featuredProducts: [
    {
      id: "1",
      name: "Pro Cut-Resistant Gloves A5",
      image: "/account-block.jpg",
      label: "Best Seller" as const,
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
      label: "Best Seller" as const,
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
      label: "New Arrival" as const,
      specs: [
        { icon: "✨", label: "Class", value: "EN ISO 20471" },
        { icon: "🔦", label: "Reflective", value: "360°" },
        { icon: "📏", label: "Sizes", value: "M-4XL" },
      ],
      href: "/products/hi-vis-vest-class3",
      minOrder: "MOQ: 1000 pcs",
    },
  ],

  // Factory Info
  factory: {
    images: ["/account-block.jpg", "/account-block.jpg", "/account-block.jpg"],
    capacity: "500,000+ pairs monthly",
    leadTimeStock: "3 days",
    leadTimeCustom: "20 days",
    capabilities: [
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
    ],
  },

  // Case Studies / Testimonials
  caseStudies: [
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
  ],

  // Contact Info
  contact: {
    whatsapp: "+86 138 8888 8888",
    email: "sales@ppepro.com",
    address: "No. 888 Industrial Avenue, Jiangsu Province, China 215000",
  },
}

export type HomepageConfig = typeof homepageConfig
