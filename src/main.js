import data from './data/pokemon/pokemon.js';

const pokemonList = data.pokemon;

const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-card');
  Object.values(list).map((pokem) => {
    const card = `
    <div class="pokemon-group">
    <div class="poke-img">
      <img src="${pokem.img}">
    </div>
    <div class="container-info">
      <p class="poke-name bold">${pokem.name}</p>
      <p class="poke-num"> N° ${pokem.num}</p>
      <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
      <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
    </div>
  </div>`;
    containerPokemon.innerHTML += card;
  });
  return containerPokemon;
};
showPokemon(pokemonList);
