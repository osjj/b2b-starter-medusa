import { MiddlewareRoute } from "@medusajs/medusa";
import { adminCompaniesMiddlewares } from "./companies/middlewares";
import { adminQuotesMiddlewares } from "./quotes/middlewares";
import { adminApprovalsMiddlewares } from "./approvals/middlewares";
import { adminSimpleQuotesMiddlewares } from "./simple-quotes/middlewares";

export const adminMiddlewares: MiddlewareRoute[] = [
  ...adminCompaniesMiddlewares,
  ...adminQuotesMiddlewares,
  ...adminApprovalsMiddlewares,
  ...adminSimpleQuotesMiddlewares,
];
