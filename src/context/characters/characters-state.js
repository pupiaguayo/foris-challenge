import React, { useReducer, useState } from "react";
import {
    GET_CHARACTERS,
} from "../types";

import CharactersContext from "./characters-context";
import CharactersReducer from "./characters-reducer";

export const CharactersState = (props) => {
  const initialState = {
    charactersList: [],
  };

  const [state, dispatch] = useReducer(CharactersReducer, initialState);

  //Orden aleatorio characters
  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const getCharacters = async () => {
    try {
      let response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      let res = await response.json();
      const data = res.results.slice(0,6);
      const charactersArray = shuffleArray([
        ...data,
        ...data,
      ]);
      const shufledMemocards = charactersArray.map( (character, i) => ({ index: i, character, flipped: false}) )
      dispatch({ type: GET_CHARACTERS, payload: shufledMemocards });
    } catch (e) {
      alert(e)
    }
  };
  return (
    <CharactersContext.Provider
      value={{
        charactersList: state.charactersList,
        getCharacters,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};