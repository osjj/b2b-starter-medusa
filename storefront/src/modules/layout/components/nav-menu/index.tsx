"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/store" },
  { label: "About", href: "/about" },
]

export default function NavMenu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // 获取不带 countryCode 的路径
  const getCleanPath = (path: string) => {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="small:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-ppe-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-ppe-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
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

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 small:hidden"
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-[56px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 small:hidden">
            <nav className="content-container py-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <LocalizedClientLink
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg font-heading font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "bg-ppe-accent-primary/10 text-ppe-accent-primary"
                          : "text-ppe-text-primary hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
