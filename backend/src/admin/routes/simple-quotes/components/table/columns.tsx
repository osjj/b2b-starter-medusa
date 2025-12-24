import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { DateCell } from "../../../../components/common/table/table-cells/date-cell";
import { TextCell } from "../../../../components/common/table/table-cells/text-cell";
import { SimpleQuote } from "../../../../hooks/api/simple-quotes";

const columnHelper = createColumnHelper<SimpleQuote>();

export const useSimpleQuotesTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
        cell: ({ getValue }) => <TextCell text={getValue()} />,
      }),
      columnHelper.accessor("name", {
        header: "Name",
        cell: ({ getValue }) => <TextCell text={getValue()} />,
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: ({ getValue }) => <TextCell text={getValue()} />,
      }),
      columnHelper.accessor("company_name", {
        header: "Company",
        cell: ({ getValue }) => <TextCell text={getValue() || "-"} />,
      }),
      columnHelper.accessor("created_at", {
        header: "Created At",
        cell: ({ getValue }) => <DateCell date={getValue()} />,
      }),
    ],
    []
  );
};
