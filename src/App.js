import React from "react";
import { CharactersState } from "./context/characters/characters-state";
import { Home } from "./views/home";
import { Header } from "./components/header";
import { GameView } from "./views/game-view";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <CharactersState>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/game" element={<GameView />} />
          </Routes>
        </Router>
      </CharactersState>
    </>
  );
}

export default App;
