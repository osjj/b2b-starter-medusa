"use server"

export interface CartItemDTO {
  variant_id: string
  product_id: string
  product_title: string
  variant_title: string
  variant_sku?: string
  quantity: number
  unit_price?: number
  thumbnail?: string
}

export interface SimpleQuoteFormData {
  name: string
  email: string
  contact_info: string
  company_name?: string
  remark?: string
  cart_items: CartItemDTO[]
}

export interface SimpleQuoteResponse {
  simple_quote: {
    id: string
    name: string
    email: string
    contact_info: string
    company_name: string | null
    remark: string | null
    file_url: string | null
    cart_items: CartItemDTO[]
    created_at: string
    updated_at: string
  }
}

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""

export async function submitSimpleQuote(
  formData: FormData
): Promise<{ success: boolean; data?: SimpleQuoteResponse; error?: string }> {
  try {
    const response = await fetch(`${BACKEND_URL}/store/simple-quotes`, {
      method: "POST",
      body: formData,
      headers: {
        "x-publishable-api-key": PUBLISHABLE_KEY,
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.message || `Request failed with status ${response.status}`,
      }
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
