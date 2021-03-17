import {
  EuiButtonIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiSpacer,
} from "@elastic/eui";
import { Moment } from "moment";
import React, { ReactElement, useState } from "react";
import { Country, SearchQuery } from "../types";
import CasesTable from "./CasesTable";
import SearchQueryBar from "./SearchQueryBar";

function App(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<Partial<SearchQuery>>();

  const handleCountryChange = (country: Country) => {
    setSearchQuery((searchQuery) => ({ ...searchQuery, country }));
  };

  const handleDateRangeChange = (startDate: Moment, endDate: Moment) => {
    setSearchQuery((searchQuery) => ({ ...searchQuery, startDate, endDate }));
  };

  const linkButton = (
    <EuiButtonIcon
      href="https://github.com/hckhanh/covid-table"
      iconType="logoGithub"
      iconSize="xl"
      target="_blank"
      color="text"
    />
  );

  return (
    <div>
      <EuiPage paddingSize="none">
        <EuiPageBody>
          <EuiPageHeader
            restrictWidth
            iconType="searchProfilerApp"
            pageTitle="Covid Table"
            rightSideItems={[linkButton]}
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
