import { z } from "zod";

export const CartItemSchema = z.object({
  variant_id: z.string(),
  product_id: z.string(),
  product_title: z.string(),
  variant_title: z.string(),
  variant_sku: z.string().optional(),
  quantity: z.number().int().positive(),
  unit_price: z.number().optional(),
  thumbnail: z.string().optional(),
});

export const CreateSimpleQuoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  contact_info: z.string().min(1, "Contact info is required"),
  company_name: z.string().optional(),
  remark: z.string().optional(),
  cart_items: z.array(CartItemSchema).min(1, "At least one cart item is required"),
});

export type CreateSimpleQuoteType = z.infer<typeof CreateSimpleQuoteSchema>;

export const GetSimpleQuotesParamsSchema = z.object({
  limit: z.coerce.number().optional().default(50),
  offset: z.coerce.number().optional().default(0),
});

export type GetSimpleQuotesParamsType = z.infer<typeof GetSimpleQuotesParamsSchema>;
