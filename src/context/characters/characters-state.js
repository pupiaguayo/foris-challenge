import React, { useReducer } from "react";
import {
  GET_CHARACTERS,
  GET_RANDOM_CHARACTERS,
  GET_ANIMATION,
  GET_SELECTED_MEMOCARD,
  GET_SHIFTS,
  GET_SUCCESS,
} from "../types";

import CharactersContext from "./characters-context";
import CharactersReducer from "./characters-reducer";

export const CharactersState = (props) => {
  const storedBlogs = JSON.parse(localStorage.getItem('arrayShufledCards'))
  const initialState = {
    charactersList: [],
    randomCharacters: storedBlogs || [],
    selectedMemocard: null,
    animating: false,
    success: 0,
    shifts: 0,
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
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let res = await response.json();
      const data = res.results.slice(0, 6);
      dispatch({ type: GET_CHARACTERS, payload: [...data, ...data] });
    } catch (e) {
      alert(e);
    }
  };
  const getRandomCharacters = () => {
    const charactersArray = shuffleArray([...state.charactersList]);
    const shufledMemocards = charactersArray.map((character, i) => ({
      index: i,
      character,
      flipped: false,
    }));
    dispatch({ type: GET_SHIFTS, payload: 0 });
    dispatch({ type: GET_SUCCESS, payload: 0 });
    dispatch({ type: GET_RANDOM_CHARACTERS, payload: shufledMemocards });
    localStorage.setItem("arrayShufledCards", JSON.stringify(shufledMemocards));
  };

  const handleMemocardClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...state.randomCharacters];
    shuffledMemoBlocksCopy.splice(memoBlock?.index, 1, flippedMemoBlock);
    dispatch({ type: GET_RANDOM_CHARACTERS, payload: shuffledMemoBlocksCopy });

    if (state.selectedMemocard === null) {
      dispatch({ type: GET_SELECTED_MEMOCARD, payload: memoBlock });
    } else if (state.selectedMemocard.character.id === memoBlock.character.id) {
      dispatch({ type: GET_SELECTED_MEMOCARD, payload: null });
      setTimeout(() => {
        dispatch({ type: GET_SHIFTS, payload: state.shifts + 1 });
        dispatch({ type: GET_SUCCESS, payload: state.success + 1 });
      }, 1000);
    } else {
      dispatch({ type: GET_ANIMATION, payload: true });
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          state.selectedMemocard.index,
          1,
          state.selectedMemocard
        );
        dispatch({
          type: GET_RANDOM_CHARACTERS,
          payload: shuffledMemoBlocksCopy,
        });
        dispatch({ type: GET_SELECTED_MEMOCARD, payload: null });
        dispatch({ type: GET_ANIMATION, payload: false });
        dispatch({ type: GET_SHIFTS, payload: state.shifts + 1 });
      }, 1000);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        charactersList: state.charactersList,
        randomCharacters: state.randomCharacters,
        selectedMemocard: state.selectedMemocard,
        animating: state.animating,
        success: state.success,
        shifts: state.shifts,
        handleMemocardClick,
        getCharacters,
        getRandomCharacters,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
