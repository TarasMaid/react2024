import React from 'react';
import './App.css';
import CharacterList from './component/CharacterList';
import RickAndMortyCharacters from "./component/RickAndMortyCharacters";

function App() {
  return (
      <div>
        <h1>The Simpsons Characters</h1>
        <CharacterList/>
          <h1>Rick and Morty Characters</h1>
          <RickAndMortyCharacters />
      </div>


  );
}

export default App;
