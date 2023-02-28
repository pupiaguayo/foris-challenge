import React, { useEffect, useContext } from "react";
import CharactersContext from "../context/characters/characters-context";
import "../styles/cards-container.css";
import { useLocation } from "react-router-dom";

import { Memocard } from "./memocard";

export const CardsContainer = () => {
  let location = useLocation();
  const {
    charactersList,
    randomCharacters,
    animating,
    handleMemocardClick,
    getRandomCharacters,
    getCharacters,
  } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters();
    getRandomCharacters();
  }, []);
  
  return (
    <div className="cards-container">
      {location.pathname === "/game" &&
      randomCharacters &&
      randomCharacters.length > 0
        ? randomCharacters?.map((character, i) => (
            <Memocard
              title={character.character.name}
              key={`${i}_${character.character}`}
              img={character.character.image}
              status={character.character.status}
              species={character.character.species}
              flip={character.flipped}
              memocard={character}
              handleMemoClick={handleMemocardClick}
              animating={animating}
            ></Memocard>
          ))
        : charactersList?.map((character, i) => (
            <Memocard
              title={character.name}
              key={i}
              img={character.image}
              status={character.status}
              species={character.species}
              handleMemoClick={() => {}}
            ></Memocard>
          ))}
    </div>
  );
};
