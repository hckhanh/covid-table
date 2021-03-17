import { Moment } from "moment";
import { QueryFunctionContext } from "react-query";
import { CaseRecord, Country } from "./types";
import { fetcher, formatDate } from "./utils";

export const getCountries = (): Promise<Country[]> => fetcher("/countries");

export const getTotalByCountry = (context: QueryFunctionContext<[Country, Moment, Moment]>): Promise<CaseRecord[]> => {
  const [country, startDate, endDate] = context.queryKey;
  return fetcher(`/total/country/${country.Slug}?from=${formatDate(startDate)}&to=${formatDate(endDate)}`);
};
