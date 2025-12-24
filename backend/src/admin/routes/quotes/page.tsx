import { Container, Heading, Toaster } from "@medusajs/ui";
import { QuotesTable } from "./components/quotes-table";

const Quotes = () => {
  return (
    <>
      <Container className="flex flex-col p-0 overflow-hidden">
        <Heading className="p-6 pb-0 font-sans font-medium h1-core">
          Quotes
        </Heading>

        <QuotesTable />
      </Container>
      <Toaster />
    </>
  );
};

// Note: Config export removed to hide from sidebar menu
// The native Quotes functionality is replaced by Simple Quotes (Quote Requests)

export default Quotes;
