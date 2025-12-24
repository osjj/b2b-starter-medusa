export const simpleQuoteFields = [
  "id",
  "name",
  "email",
  "contact_info",
  "company_name",
  "remark",
  "file_url",
  "cart_items",
  "created_at",
  "updated_at",
];

export const defaultSimpleQuoteFields = [
  "id",
  "name",
  "email",
  "company_name",
  "created_at",
];

export const simpleQuoteQueryConfig = {
  list: {
    defaults: defaultSimpleQuoteFields,
    isList: true,
  },
  retrieve: {
    defaults: simpleQuoteFields,
    isList: false,
  },
};
