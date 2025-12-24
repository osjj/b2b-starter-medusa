import { defineRouteConfig } from "@medusajs/admin-sdk";
import { ChatBubbleLeftRight } from "@medusajs/icons";
import { Container, Heading, Toaster } from "@medusajs/ui";
import { SimpleQuotesTable } from "./components/simple-quotes-table";

const SimpleQuotes = () => {
  return (
    <>
      <Container className="flex flex-col p-0 overflow-hidden">
        <Heading className="p-6 pb-0 font-sans font-medium h1-core">
          Quote Requests
        </Heading>

        <SimpleQuotesTable />
      </Container>
      <Toaster />
    </>
  );
};

export const config = defineRouteConfig({
  label: "Quote Requests",
  icon: ChatBubbleLeftRight,
});

export default SimpleQuotes;
