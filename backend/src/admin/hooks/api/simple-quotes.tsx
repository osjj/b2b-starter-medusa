import { FetchError } from "@medusajs/js-sdk";
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { queryKeysFactory } from "../../lib/query-key-factory";
import { sdk } from "../../lib/client";

export interface SimpleQuote {
  id: string;
  name: string;
  email: string;
  contact_info: string;
  company_name: string | null;
  remark: string | null;
  file_url: string | null;
  cart_items: CartItemDTO[];
  created_at: string;
  updated_at: string;
}

export interface CartItemDTO {
  variant_id: string;
  product_id: string;
  product_title: string;
  variant_title: string;
  variant_sku?: string;
  quantity: number;
  unit_price?: number;
  thumbnail?: string;
}

export interface SimpleQuotesResponse {
  simple_quotes: SimpleQuote[];
  count: number;
  offset: number;
  limit: number;
}

export interface SimpleQuoteResponse {
  simple_quote: SimpleQuote;
}

export interface SimpleQuoteFilterParams {
  limit?: number;
  offset?: number;
  order?: string;
  q?: string;
}

export const simpleQuoteQueryKey = queryKeysFactory("simple_quote");

export const useSimpleQuotes = (
  query?: SimpleQuoteFilterParams,
  options?: UseQueryOptions<
    SimpleQuotesResponse,
    FetchError,
    SimpleQuotesResponse,
    QueryKey
  >
) => {
  const fetchSimpleQuotes = (query?: SimpleQuoteFilterParams) =>
    sdk.client.fetch<SimpleQuotesResponse>(`/admin/simple-quotes`, {
      query,
    });

  const { data, ...rest } = useQuery({
    ...options,
    queryFn: () => fetchSimpleQuotes(query),
    queryKey: simpleQuoteQueryKey.list(query),
  });

  return { ...data, ...rest };
};

export const useSimpleQuote = (
  id: string,
  options?: UseQueryOptions<
    SimpleQuoteResponse,
    FetchError,
    SimpleQuoteResponse,
    QueryKey
  >
) => {
  const fetchSimpleQuote = (id: string) =>
    sdk.client.fetch<SimpleQuoteResponse>(`/admin/simple-quotes/${id}`);

  const { data, ...rest } = useQuery({
    queryFn: () => fetchSimpleQuote(id),
    queryKey: simpleQuoteQueryKey.detail(id),
    ...options,
  });

  return { ...data, ...rest };
};
