import { ArrowDownTray } from "@medusajs/icons";
import { Container, Heading, Text, Toaster, Badge } from "@medusajs/ui";
import { useParams } from "react-router-dom";
import { useSimpleQuote, CartItemDTO } from "../../../hooks/api/simple-quotes";

const SimpleQuoteDetails = () => {
  const { id } = useParams();
  const { simple_quote, isLoading } = useSimpleQuote(id!);

  if (isLoading || !simple_quote) {
    return (
      <Container className="p-6">
        <Text>Loading...</Text>
      </Container>
    );
  }

  const cartItems = simple_quote.cart_items as CartItemDTO[];

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col gap-x-4 lg:flex-row xl:items-start">
        <div className="flex w-full flex-col gap-y-3">
          {/* Quote Info */}
          <Container className="divide-y divide-dashed p-0">
            <div className="flex items-center justify-between px-6 py-4">
              <Heading level="h1">Quote Request</Heading>
              <Badge color="blue">{simple_quote.id}</Badge>
            </div>

            <div className="px-6 py-4">
              <Text className="text-ui-fg-subtle text-sm">
                Created at:{" "}
                {new Date(simple_quote.created_at).toLocaleString()}
              </Text>
            </div>
          </Container>

          {/* Cart Items */}
          <Container className="divide-y divide-dashed p-0">
            <div className="flex items-center justify-between px-6 py-4">
              <Heading level="h2">Requested Items</Heading>
              <Badge color="grey">{cartItems.length} items</Badge>
            </div>

            <div className="px-6 py-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm text-ui-fg-subtle">
                    <th className="pb-2">Product</th>
                    <th className="pb-2">Variant</th>
                    <th className="pb-2">SKU</th>
                    <th className="pb-2 text-right">Quantity</th>
                    <th className="pb-2 text-right">Unit Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.product_title}
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                          <Text className="font-medium">
                            {item.product_title}
                          </Text>
                        </div>
                      </td>
                      <td className="py-3">
                        <Text>{item.variant_title || "-"}</Text>
                      </td>
                      <td className="py-3">
                        <Text className="text-ui-fg-subtle">
                          {item.variant_sku || "-"}
                        </Text>
                      </td>
                      <td className="py-3 text-right">
                        <Text>{item.quantity}</Text>
                      </td>
                      <td className="py-3 text-right">
                        <Text>
                          {item.unit_price
                            ? `$${(item.unit_price / 100).toFixed(2)}`
                            : "-"}
                        </Text>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>

          {/* Remark */}
          {simple_quote.remark && (
            <Container className="divide-y divide-dashed p-0">
              <div className="px-6 py-4">
                <Heading level="h2" className="mb-2">
                  Remark
                </Heading>
                <Text className="whitespace-pre-wrap">
                  {simple_quote.remark}
                </Text>
              </div>
            </Container>
          )}
        </div>

        {/* Sidebar - Customer Info */}
        <div className="mt-2 flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]">
          <Container className="divide-y p-0">
            <div className="flex items-center justify-between px-6 py-4">
              <Heading level="h2">Customer Information</Heading>
            </div>

            <div className="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
              <Text size="small" weight="plus" leading="compact">
                Name
              </Text>
              <Text size="small" leading="compact" className="text-pretty">
                {simple_quote.name}
              </Text>
            </div>

            <div className="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
              <Text size="small" weight="plus" leading="compact">
                Email
              </Text>
              <a
                href={`mailto:${simple_quote.email}`}
                className="text-sm text-blue-500"
              >
                {simple_quote.email}
              </a>
            </div>

            <div className="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
              <Text size="small" weight="plus" leading="compact">
                WhatsApp/WeChat
              </Text>
              <Text size="small" leading="compact" className="text-pretty">
                {simple_quote.contact_info}
              </Text>
            </div>

            {simple_quote.company_name && (
              <div className="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
                <Text size="small" weight="plus" leading="compact">
                  Company
                </Text>
                <Text size="small" leading="compact" className="text-pretty">
                  {simple_quote.company_name}
                </Text>
              </div>
            )}
          </Container>

          {/* File Download */}
          {simple_quote.file_url && (
            <Container className="divide-y p-0">
              <div className="flex items-center justify-between px-6 py-4">
                <Heading level="h2">Attached File</Heading>
              </div>

              <div className="px-6 py-4">
                <a
                  href={simple_quote.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  <ArrowDownTray />
                  <Text size="small">Download File</Text>
                </a>
              </div>
            </Container>
          )}
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default SimpleQuoteDetails;
