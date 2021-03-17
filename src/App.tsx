import { EuiPage, EuiPageBody, EuiPageContent, EuiPageContentBody, EuiPageHeader, EuiSpacer } from "@elastic/eui";
import { Moment } from "moment";
import React, { ReactElement, useState } from "react";
import CasesTable from "./CasesTable";
import SearchQueryBar from "./SearchQueryBar";
import { Country, SearchQuery } from "./types";

function App(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<Partial<SearchQuery>>();

  const handleCountryChange = (country: Country) => {
    setSearchQuery((searchQuery) => ({ ...searchQuery, country }));
  };

  const handleDateRangeChange = (startDate: Moment, endDate: Moment) => {
    setSearchQuery((searchQuery) => ({ ...searchQuery, startDate, endDate }));
  };

  return (
    <div>
      <EuiPage paddingSize="none">
        <EuiPageBody>
          <EuiPageHeader
            restrictWidth
            iconType="searchProfilerApp"
            pageTitle="Covid Table"
            // rightSideItems={[button]}
            paddingSize="l"
          />
          <EuiPageContent borderRadius="none" hasShadow={false} style={{ display: "flex" }}>
            <EuiPageContent verticalPosition="center" horizontalPosition="center" paddingSize="none" hasShadow={false}>
              <EuiPageContentBody restrictWidth>
                <SearchQueryBar onCountryChange={handleCountryChange} onDateRangeChange={handleDateRangeChange} />
                <EuiSpacer />
                <CasesTable searchQuery={searchQuery} />
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

export default App;
