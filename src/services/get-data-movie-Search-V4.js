import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataSearchV4 = async ({ query }) => {
  const { data } = await http.get(`${API_ENDPOINT.SEARCH}movie?query=${query}&include_adult=false&language=en-US&page=1`);
  return data;
};

const useDataSearchV4 = (options) => {
  return useQuery(["dataSearch", options], () => fetchDataSearchV4(options));
};

export { fetchDataSearchV4, useDataSearchV4 };
