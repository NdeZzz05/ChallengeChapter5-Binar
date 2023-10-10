import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataPopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataPopular = (options) => {
  return useQuery([API_ENDPOINT.POPULAR, options], fetchDataPopular);
};

export { fetchDataPopular, useDataPopular };
