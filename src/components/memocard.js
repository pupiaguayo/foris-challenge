import React from "react";
import "../styles/memocard.css";
import { useLocation } from "react-router-dom";
import backgroundCard from "../images/background-card.svg";
export const Memocard = ({ title, img, status, species, flip, animating, handleMemoClick, memocard }) => {
  
  let location = useLocation();
  return (
    <div className="memocard" onClick={() => (!animating && !flip) && handleMemoClick(memocard)}>
      <div className={`${location.pathname === "/" ? 'memocard-inner' :  !flip && location.pathname === "/game" ? 'memocard-flipped' : 'memocard-selected'}`}>
        <div className="memocard-front">
          <img src={img} alt="memocard-front" />
          <p>{title}</p>
          <span>
            {status} - {species}
          </span>
        </div>
        <div className="memocard-back">
          <img src={backgroundCard} alt="memocard-back" />
        </div>
      </div>
    </div>
  );
};
