import React from "react";
import "../styles/memocard.css";
import backgroundCard from "../images/background-card.svg";
export const Memocard = ({ title, img, status, species }) => {
  return (
    <div className="memocard">
      <div className="memocard-inner">
        <div className="memocard-front">
          <img src={img} alt="memocard-front" />
          <p>{title}</p>
          <span>{status} - {species}</span>
        </div>
        <div className="memocard-back">
          <img src={backgroundCard} alt="memocard-back" />
        </div>
      </div>
    </div>
  );
};
