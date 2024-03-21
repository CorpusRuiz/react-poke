import { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonData, setPokemonData] = useState([])
 

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then(data => setPokemonData([data]));
  }, [pokemonName]);
  
  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    };

  return (
  <>
  <div>
    <h1>Buscador de pokemons</h1>
    <form onSubmit={handleSubmit} className='search-bar'>
      <label htmlFor='pokemonName'> Nombre </label>
      <input type="text" name="pokemonName" id="pokemonName" placeholder="introduce el nombre de un pokemon" onChange={handleNameChange}/>
      <button type="submit">Buscar</button>
    </form>
  </div>
  <div className="pokemonResultCard">
    
      {pokemonData.map((pokemon) =>(
      <div key={pokemon.id}>
        <h1>{pokemon.name}</h1>
      </div>))}
   
  </div>
  </>
  )
};

export default App;
