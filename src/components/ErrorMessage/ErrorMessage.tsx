import React from "react";
import "./ErrorMessage.css";

type Props = {
  error: string;
};

const ErrorMessage = ({ error }: Props) => {
  return (
    <div className="error-message">
      <span>{error}</span>
    </div>
  );
};

export default ErrorMessage;
