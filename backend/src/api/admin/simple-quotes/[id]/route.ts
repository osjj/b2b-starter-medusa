import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@medusajs/framework";
import { MedusaError } from "@medusajs/framework/utils";
import { SIMPLE_QUOTE_MODULE } from "../../../../modules/simple-quote";

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const simpleQuoteService = req.scope.resolve(SIMPLE_QUOTE_MODULE);
  const { id } = req.params;

  const simpleQuote = await simpleQuoteService.retrieveSimpleQuote(id);

  if (!simpleQuote) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      `Simple quote with id ${id} not found`
    );
  }

  return res.json({ simple_quote: simpleQuote });
};
