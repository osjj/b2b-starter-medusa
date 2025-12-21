import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import FilePlus from "@/modules/common/icons/file-plus"
import NavMenu from "@/modules/layout/components/nav-menu"
import { RequestQuoteConfirmation } from "@/modules/quotes/components/request-quote-confirmation"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import SkeletonAccountButton from "@/modules/skeletons/components/skeleton-account-button"
import SkeletonCartButton from "@/modules/skeletons/components/skeleton-cart-button"
import Image from "next/image"
import { Suspense } from "react"

export async function NavigationHeader() {
  const customer = await retrieveCustomer().catch(() => null)
  const cart = await retrieveCart()

  return (
    <div className="sticky top-0 inset-x-0 group bg-white text-zinc-900 small:p-4 p-2 text-sm border-b duration-200 border-ui-border-base z-50">
      <header className="flex w-full content-container relative small:mx-auto justify-between">
        <div className="small:mx-auto flex justify-between items-center min-w-full">
          {/* Left side: Logo + Mobile Menu Button + Desktop Menu */}
          <div className="flex items-center small:space-x-8">
            {/* Logo */}
            <LocalizedClientLink
              className="hover:opacity-80 flex items-center w-fit transition-opacity"
              href="/"
            >
              <Image
                src="/yuelaifa.png"
                alt="PPE Pro Logo"
                width={120}
                height={40}
                className="h-8 small:h-10 w-auto"
                priority
              />
            </LocalizedClientLink>

            {/* Navigation Menu (includes mobile button + desktop menu) */}
            <NavMenu />
          </div>

          {/* Right side: Search, Quote, Account, Cart */}
          <div className="flex justify-end items-center gap-2">
            <div className="relative mr-2 hidden small:inline-flex">
              <input
                disabled
                type="text"
                placeholder="Search for products"
                className="bg-gray-100 text-zinc-900 px-4 py-2 rounded-full pr-10 shadow-borders-base hidden small:inline-block hover:cursor-not-allowed"
                title="Install a search provider to enable product search"
              />
            </div>

            <div className="h-4 w-px bg-neutral-300 hidden small:block" />

            {customer && cart?.items && cart.items.length > 0 ? (
              <RequestQuoteConfirmation>
                <button className="flex gap-1.5 items-center rounded-2xl bg-none shadow-none border-none hover:bg-neutral-100 px-2 py-1">
                  <FilePlus />
                  <span className="hidden small:inline-block">Quote</span>
                </button>
              </RequestQuoteConfirmation>
            ) : (
              <RequestQuotePrompt>
                <button className="flex gap-1.5 items-center rounded-2xl bg-none shadow-none border-none hover:bg-neutral-100 px-2 py-1">
                  <FilePlus />
                  <span className="hidden small:inline-block">Quote</span>
                </button>
              </RequestQuotePrompt>
            )}

            <Suspense fallback={<SkeletonAccountButton />}>
              <AccountButton customer={customer} />
            </Suspense>

            <Suspense fallback={<SkeletonCartButton />}>
              <CartButton />
            </Suspense>
          </div>
        </div>
      </header>
    </div>
  )
}
