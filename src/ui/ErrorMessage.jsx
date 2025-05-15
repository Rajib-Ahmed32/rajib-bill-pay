import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <p className="text-sm text-red-500 mt-1">{message}</p>;
};

export default ErrorMessage;
