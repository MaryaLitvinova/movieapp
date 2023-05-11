import React from "react";
import { Alert } from "antd";

const Warning = () => (
  <Alert
    message="Oops... Nothing found for your request"
    type="info"
    showIcon
  />
);
export default Warning;
