import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postData = async (args) => {
  const { url, method, data, params } = args;
  const response = await axios[method](url, data, params);
  return response.data;
};

const usePost = () => {
  return useMutation(postData);
};

export default usePost;
