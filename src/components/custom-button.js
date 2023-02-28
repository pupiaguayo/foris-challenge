import React from "react";
import "../styles/custom-button.css";
export const CustomButton = ({ classButton, data, onClick }) => {
  return (
    <button className={classButton} onClick={onClick}>
      {data}
    </button>
  );
};
