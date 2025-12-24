import { z } from "zod";

export const GetSimpleQuotesParamsSchema = z.object({
  limit: z.coerce.number().optional().default(50),
  offset: z.coerce.number().optional().default(0),
  order: z.string().optional(),
  q: z.string().optional(),
});

export type GetSimpleQuotesParamsType = z.infer<typeof GetSimpleQuotesParamsSchema>;

export const GetSimpleQuoteParamsSchema = z.object({
  id: z.string(),
});

export type GetSimpleQuoteParamsType = z.infer<typeof GetSimpleQuoteParamsSchema>;
