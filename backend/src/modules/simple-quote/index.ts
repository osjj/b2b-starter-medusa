import { Module } from "@medusajs/framework/utils";
import SimpleQuoteModuleService from "./service";

export const SIMPLE_QUOTE_MODULE = "simpleQuote";

export default Module(SIMPLE_QUOTE_MODULE, { service: SimpleQuoteModuleService });
