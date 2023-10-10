import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataDetailsV4 = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key + _params.id);
  return data;
};

const useDataDetails = (options) => {
  return useQuery([API_ENDPOINT.DETAILS, options], fetchDataDetailsV4);
};

export { fetchDataDetailsV4, useDataDetails };
