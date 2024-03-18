import React from "react";
import { useGetAll } from "../../hooks";

const All = ({ children, url, name, params, onSuccess }) => {
  const result = useGetAll({
    url,
    name,
    params,
    onSuccess,
  });

  return children(result);
};

export default All;
