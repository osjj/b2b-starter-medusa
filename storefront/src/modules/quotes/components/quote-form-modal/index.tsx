"use client"

import { useCart } from "@/lib/context/cart-context"
import { submitSimpleQuote, CartItemDTO } from "@/lib/data/simple-quotes"
import Button from "@/modules/common/components/button"
import { XCircle } from "@medusajs/icons"
import { Input, Label, Textarea, toast } from "@medusajs/ui"
import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const QuoteFormModal = ({
  isOpen,
  onClose,
  onSuccess,
}: QuoteFormModalProps) => {
  const { cart, handleEmptyCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {}

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const contactInfo = formData.get("contact_info") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required"
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format"
    }

    if (!contactInfo || contactInfo.trim() === "") {
      newErrors.contact_info = "WhatsApp/WeChat is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    if (!validateForm(formData)) {
      return
    }

    if (!cart?.items || cart.items.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    setIsSubmitting(true)

    try {
      // Transform cart items to the expected format
      const cartItems: CartItemDTO[] = cart.items.map((item) => ({
        variant_id: item.variant?.id || "",
        product_id: item.product?.id || "",
        product_title: item.product?.title || item.title || "",
        variant_title: item.variant?.title || "",
        variant_sku: item.variant?.sku || undefined,
        quantity: item.quantity,
        unit_price: item.unit_price,
        thumbnail: item.thumbnail || undefined,
      }))

      // Add cart_items as JSON string to formData
      formData.set("cart_items", JSON.stringify(cartItems))

      const result = await submitSimpleQuote(formData)

      if (result.success) {
        toast.success("Quote request submitted successfully!")
        await handleEmptyCart()
        onSuccess()
        onClose()
      } else {
        toast.error(result.error || "Failed to submit quote request")
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-[75]" />
        <Dialog.Content className="z-[100] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl focus:outline-none overflow-y-auto">
          <Dialog.Title className="flex justify-between items-center font-sans font-medium text-xl text-ui-fg-base mb-4">
            Request a Quote
            <Dialog.Close asChild>
              <button className="text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer">
                <XCircle className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>

            {/* WhatsApp/WeChat */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="contact_info" className="text-sm font-medium">
                WhatsApp / WeChat <span className="text-red-500">*</span>
              </Label>
              <Input
                id="contact_info"
                name="contact_info"
                placeholder="Your WhatsApp or WeChat ID"
                className={errors.contact_info ? "border-red-500" : ""}
              />
              {errors.contact_info && (
                <span className="text-red-500 text-xs">
                  {errors.contact_info}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="company_name" className="text-sm font-medium">
                Company Name <span className="text-ui-fg-subtle">(Optional)</span>
              </Label>
              <Input
                id="company_name"
                name="company_name"
                placeholder="Your company name"
              />
            </div>

            {/* Remark */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="remark" className="text-sm font-medium">
                Remark <span className="text-ui-fg-subtle">(Optional)</span>
              </Label>
              <Textarea
                id="remark"
                name="remark"
                placeholder="Any additional information or requirements..."
                rows={3}
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="file" className="text-sm font-medium">
                Attachment <span className="text-ui-fg-subtle">(Optional)</span>
              </Label>
              <input
                id="file"
                name="file"
                type="file"
                accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.xls,.xlsx"
                className="block w-full text-sm text-ui-fg-subtle
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-ui-bg-subtle file:text-ui-fg-base
                  hover:file:bg-ui-bg-subtle-hover
                  cursor-pointer"
              />
              <span className="text-xs text-ui-fg-subtle">
                Supported: Images, PDF, Excel (Max 10MB)
              </span>
            </div>

            {/* Cart Summary */}
            <div className="bg-ui-bg-subtle rounded-md p-3 mt-2">
              <p className="text-sm font-medium mb-1">Items in your quote:</p>
              <p className="text-sm text-ui-fg-subtle">
                {cart?.items?.length || 0} item(s) •{" "}
                {cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0}{" "}
                total quantity
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-2"
              size="large"
              isLoading={isSubmitting}
              disabled={isSubmitting || !cart?.items?.length}
            >
              Submit Quote Request
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default QuoteFormModal
