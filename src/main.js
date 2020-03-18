import data from './data/pokemon/pokemon.js';

const pokemonList = data.pokemon;

const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-pokemon');
  Object.values(list).map((pokem) => {
    const card = `          
      <div class="pokemon-group">
        <div class="pokemon-img">
          <img src="${pokem.img}">
        </div>
        <div class="pokemon-info">
          <p>${pokem.name}</p>
          <p>${pokem.num}</p>
        </div>
      </div> `;
    containerPokemon.innerHTML += card;
  });
};
showPokemon(pokemonList);
