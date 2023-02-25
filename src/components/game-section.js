import React from "react";
import "../styles/game-section.css";
import { CardsContainer } from "./cards-container";
import { CustomButton } from "./custom-button";
export const GameSection = () => {
  return (
    <div className="game-section">
      <p>Personajes</p>
      <CardsContainer/>
      <CustomButton classButton="play" data="Jugar"/>
    </div>
  );
};
