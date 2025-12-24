import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@medusajs/framework";
import { SIMPLE_QUOTE_MODULE } from "../../../modules/simple-quote";
import { GetSimpleQuotesParamsType } from "./validators";

export const GET = async (
  req: AuthenticatedMedusaRequest<GetSimpleQuotesParamsType>,
  res: MedusaResponse
) => {
  const simpleQuoteService = req.scope.resolve(SIMPLE_QUOTE_MODULE);

  const { limit = 50, offset = 0, order, q } = req.validatedQuery || {};

  const filters: Record<string, any> = {};
  
  // Simple search by name or email
  if (q) {
    filters.$or = [
      { name: { $like: `%${q}%` } },
      { email: { $like: `%${q}%` } },
      { company_name: { $like: `%${q}%` } },
    ];
  }

  const [simpleQuotes, count] = await simpleQuoteService.listAndCountSimpleQuotes(
    filters,
    {
      skip: offset,
      take: limit,
      order: order ? { [order.replace("-", "")]: order.startsWith("-") ? "DESC" : "ASC" } : { created_at: "DESC" },
    }
  );

  return res.json({
    simple_quotes: simpleQuotes,
    count,
    offset,
    limit,
  });
};
