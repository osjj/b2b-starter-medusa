import { DataTable } from "../../../components/common/table/data-table";
import { useDataTable } from "../../../hooks";
import { useSimpleQuotes } from "../../../hooks/api/simple-quotes";
import { useSimpleQuotesTableColumns } from "./table/columns";
import { useSimpleQuotesTableQuery } from "./table/query";

const PAGE_SIZE = 50;
const PREFIX = "sq";

export const SimpleQuotesTable = () => {
  const { searchParams, raw } = useSimpleQuotesTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
  });

  const {
    simple_quotes = [],
    count,
    isPending,
  } = useSimpleQuotes({
    ...searchParams,
    order: "-created_at",
  });

  const columns = useSimpleQuotesTableColumns();

  const { table } = useDataTable({
    data: simple_quotes,
    columns,
    enablePagination: true,
    count,
    pageSize: PAGE_SIZE,
  });

  return (
    <div className="flex size-full flex-col overflow-hidden">
      <DataTable
        columns={columns}
        table={table}
        pagination
        navigateTo={(row) => `/simple-quotes/${row.original.id}`}
        count={count}
        search
        isLoading={isPending}
        pageSize={PAGE_SIZE}
        orderBy={["id", "created_at"]}
        queryObject={raw}
        noRecords={{
          title: "No quote requests found",
          message: "There are currently no quote requests.",
        }}
      />
    </div>
  );
};
