import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const LoginUser = async (input) => {
  return await http.post(API_ENDPOINT.LOGIN_USER, input);
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };
