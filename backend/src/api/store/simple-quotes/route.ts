import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { SIMPLE_QUOTE_MODULE } from "../../../modules/simple-quote";
import SimpleQuoteModuleService from "../../../modules/simple-quote/service";
import { CreateSimpleQuoteType } from "./validators";

export const POST = async (
  req: MedusaRequest<CreateSimpleQuoteType>,
  res: MedusaResponse
) => {
  const simpleQuoteService = req.scope.resolve(SIMPLE_QUOTE_MODULE) as SimpleQuoteModuleService;

  const { name, email, contact_info, company_name, remark, cart_items } =
    req.validatedBody;

  // Get file_url from uploaded file if present
  const file_url = (req as any).file?.path || (req as any).file?.location || null;

  const [simpleQuote] = await simpleQuoteService.createSimpleQuotes([
    {
      name,
      email,
      contact_info,
      company_name: company_name || null,
      remark: remark || null,
      file_url,
      cart_items,
    },
  ]);

  return res.status(201).json({ simple_quote: simpleQuote });
};
