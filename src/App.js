import { CharactersState } from "./context/characters/characters-state";
import { Home } from "./views/home";
function App() {
  return (
    <CharactersState>
      <>
        <Home />
      </>
    </CharactersState>
  );
}

export default App;
