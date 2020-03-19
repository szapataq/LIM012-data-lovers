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
          <p class="poke-name">${pokem.name}</p>
          <p class="poke-num"> N° ${pokem.num}</p>
          <p class="poke-info"> CP Máx: ${pokem.stats['max-cp']}</p>
          <p class="poke-info"> HP Máx: ${pokem.stats['max-hp']}</p>
        </div>
      </div> `;
    containerPokemon.innerHTML += card;
  });
};
showPokemon(pokemonList);
