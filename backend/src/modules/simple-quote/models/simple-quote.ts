import { model } from "@medusajs/framework/utils";

export const SimpleQuote = model.define("simple_quote", {
  id: model.id({ prefix: "sq" }).primaryKey(),
  name: model.text(),
  email: model.text(),
  contact_info: model.text(),
  company_name: model.text().nullable(),
  remark: model.text().nullable(),
  file_url: model.text().nullable(),
  cart_items: model.json(),
});
