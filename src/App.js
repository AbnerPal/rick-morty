import './App.css';
import {useState} from 'react'
import CharactersList from './components/CharactersList';

function App() {

  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters ? (
          <CharactersList characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img if className="img-home" src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/10/09/6523c754a7788.png" alt="Rick & Morty"></img>
            <button className="btn-search" onClick={reqApi}>Buscar Personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
