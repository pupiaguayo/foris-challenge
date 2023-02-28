import React, { useContext } from "react";
import CharactersContext from "../context/characters/characters-context";
import { CustomButton } from "./custom-button";

import { useNavigate } from "react-router-dom";

import "../styles/game-section.css";

import { CardsContainer } from "./cards-container";

export const GameSection = () => {
  const { shifts, success, getRandomCharacters } =
    useContext(CharactersContext);
  const navigate = useNavigate();

  let data = success;

  const initClick = () => navigate("/");
  const repeatClick = () => getRandomCharacters();

  return (
    <div className="cards-section">
      {data === 6 ? (
        <div className="success-view">
          <h2>¡Felicitaciones!</h2>
          <p>Terminaste el juego con {shifts} turnos</p>
          <div className="buttons-container">
            <CustomButton
              classButton="repeat"
              data="Repetir"
              onClick={repeatClick}
            />
            <CustomButton
              classButton="init"
              data="Inicio"
              onClick={initClick}
            />
          </div>
        </div>
      ) : (
        <div className="game-view">
          <div className="game-data">
            <p>Aciertos: {success}</p> <p>Turnos: {shifts}</p>
          </div>
          <CardsContainer />
        </div>
      )}
    </div>
  );
};
