import React, { useEffect, useContext } from "react";
import CharactersContext from "../context/characters/characters-context";
import "../styles/cards-container.css";

import { Memocard } from "./memocard";

export const CardsContainer = () => {
  const { charactersList, getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="cards-container">
      {charactersList?.map((element, i) => (
        <Memocard
          title={element.character.name}
          key={i}
          img={element.character.image}
          status={element.character.status}
          species={element.character.species}
        ></Memocard>
      ))}
    </div>
  );
};
