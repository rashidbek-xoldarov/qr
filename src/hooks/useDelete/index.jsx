import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDelete = () => {
  const deleteFn = async (args) => {
    const { url } = args;
    const response = await axios.delete(url);
    return response.data;
  };

  return useMutation(deleteFn);
};

export default useDelete;
