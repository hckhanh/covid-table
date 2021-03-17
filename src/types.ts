import { Moment } from "moment";

export type Country = {
  Country: string;
  Slug: string;
  ISO2: string;
};

export type SearchQuery = {
  country: Country;
  startDate?: Moment;
  endDate?: Moment;
};

export type CaseRecord = {
  ID: string;
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
};
