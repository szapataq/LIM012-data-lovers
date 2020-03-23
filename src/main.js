import data from './data/pokemon/pokemon.js';
import {
  filterByType,
} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');

const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-card');
  list.forEach((pokem) => {
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
const elementTypeFilter = document.getElementById('element-type-filter');
elementTypeFilter.addEventListener('change', () => {
  const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
  containerPokemons.innerHTML = '';
  showPokemon(catchFilter);
});
