import {
  MiddlewareRoute,
  validateAndTransformQuery,
} from "@medusajs/framework";
import { GetSimpleQuotesParamsSchema } from "./validators";

export const adminSimpleQuotesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/simple-quotes",
    method: "GET",
    middlewares: [validateAndTransformQuery(GetSimpleQuotesParamsSchema, {})],
  },
  {
    matcher: "/admin/simple-quotes/:id",
    method: "GET",
    middlewares: [],
  },
];
