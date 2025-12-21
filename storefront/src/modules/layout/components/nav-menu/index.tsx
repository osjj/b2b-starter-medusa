"use client"

import { usePathname } from "next/navigation"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/store" },
  { label: "About", href: "/about" },
]

export default function NavMenu() {
  const pathname = usePathname()
  
  // 获取不带 countryCode 的路径
  const getCleanPath = (path: string) => {
    // 移除 countryCode 前缀，如 /us/about -> /about
    const parts = path.split("/")
    if (parts.length > 2) {
      return "/" + parts.slice(2).join("/")
    }
    return path === "/" ? "/" : path
  }
  
  const cleanPath = getCleanPath(pathname)
  
  const isActive = (href: string) => {
    if (href === "/") {
      return cleanPath === "/" || cleanPath === ""
    }
    return cleanPath.startsWith(href)
  }

  return (
    <nav className="hidden small:block">
      <ul className="flex items-center space-x-6">
        {menuItems.map((item) => (
          <li key={item.href}>
            <LocalizedClientLink
              href={item.href}
              className={`font-heading font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-ppe-accent-primary border-b-2 border-ppe-accent-primary pb-1"
                  : "text-ppe-text-primary hover:text-ppe-accent-primary"
              }`}
            >
              {item.label}
            </LocalizedClientLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
