import { MedusaService } from "@medusajs/framework/utils";
import { SimpleQuote } from "./models";

class SimpleQuoteModuleService extends MedusaService({ SimpleQuote }) {}

export default SimpleQuoteModuleService;
