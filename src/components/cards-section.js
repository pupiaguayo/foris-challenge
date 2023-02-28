import * as React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/cards-section.css";
import { CardsContainer } from "./cards-container";
import { CustomButton } from "./custom-button";
export const CardsSection = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/game");
  return (
    <div className="cards-section cards-home">
      <h2 className="home-title">Personajes</h2>
      <CardsContainer />
      <CustomButton classButton="play" data="Jugar" onClick={handleClick} />
    </div>
  );
};
