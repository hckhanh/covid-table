import { Moment } from "moment";
import { QueryFunctionContext } from "react-query";
import { CaseRecord, Country } from "./types";
import { fetcher } from "./utils";

export const getCountries = (): Promise<Country[]> => fetcher("/countries");

export const getTotalByCountry = (context: QueryFunctionContext<[Country, Moment, Moment]>): Promise<CaseRecord[]> => {
  const [country, startDate, endDate] = context.queryKey;
  return fetcher(`/total/country/${country.Slug}?from=${startDate.toISOString()}&end=${endDate.toISOString()}`);
};
