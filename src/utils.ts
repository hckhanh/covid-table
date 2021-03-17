import { Moment } from "moment";
import { QueryClient } from "react-query";
import joinUrl from "url-join";

export const emptyArray: never[] = [];

const BASE_URL = "https://api.covid19api.com";

export const queryClient = new QueryClient();

export const getFullApi = (apiEndpoint: string): string => joinUrl(BASE_URL, apiEndpoint);

export const fetcher = <T>(url: string, headers?: HeadersInit): Promise<T> =>
  fetch(getFullApi(url), { headers }).then((r) => r.json());

export const formatDate = (date: Moment): string => date.format("YYYY-MM-DDTHH:mm:ss.SS[Z]");
