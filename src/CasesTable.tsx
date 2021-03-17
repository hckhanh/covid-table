import { EuiInMemoryTable } from "@elastic/eui";
import { EuiTableFieldDataColumnType } from "@elastic/eui/src/components/basic_table/table_types";
import moment from "moment";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { getTotalByCountry } from "./apis";
import { CaseRecord, SearchQuery } from "./types";
import { emptyArray } from "./utils";

const caseColumns: EuiTableFieldDataColumnType<CaseRecord>[] = [
  { field: "Confirmed", name: "Confirmed", dataType: "auto", sortable: true },
  { field: "Deaths", name: "Deaths", sortable: true },
  { field: "Recovered", name: "Recovered", sortable: true },
  { field: "Date", name: "Date", sortable: true, render: date => moment(date).format()},
];

type CasesTableProps = {
  searchQuery?: Partial<SearchQuery>;
};

function CasesTable(props: CasesTableProps): ReactElement {
  const { data, isFetching } = useQuery<CaseRecord[]>(
    [props.searchQuery?.country, props.searchQuery?.startDate, props.searchQuery?.endDate],
    getTotalByCountry,
    {
      enabled: Boolean(props.searchQuery?.country && props.searchQuery.startDate && props.searchQuery.endDate),
      keepPreviousData: true,
    },
  );
  return <EuiInMemoryTable items={data || emptyArray} columns={caseColumns} loading={isFetching} sorting />;
}

export default CasesTable;
