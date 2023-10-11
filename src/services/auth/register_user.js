import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const RegisterUser = async (input) => {
  return await http.post(API_ENDPOINT.REGISTER_USER, input);
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useCreateUser };
