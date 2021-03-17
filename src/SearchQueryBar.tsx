import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { ReactElement } from "react";
import CountryInput, { CountryInputProps } from "./CountryInput";
import DateFilterInput, { DateFilterInputProps } from "./DateFilterInput";

type SearchQueryBarProps = {
  onCountryChange: CountryInputProps["onChange"];
  onDateRangeChange: DateFilterInputProps["onChange"];
};

function SearchQueryBar(props: SearchQueryBarProps): ReactElement {
  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <CountryInput onChange={props.onCountryChange} />
      </EuiFlexItem>
      <EuiFlexItem>
        <DateFilterInput onChange={props.onDateRangeChange} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default SearchQueryBar;
