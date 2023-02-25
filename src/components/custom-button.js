import React from "react";
import "../styles/custom-button.css";
export const CustomButton = ({classButton, data}) => {
  return <button className={classButton}>{data}</button>;
};
