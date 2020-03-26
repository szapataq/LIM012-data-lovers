import data from './data/pokemon/pokemon.js';
import {
  filterByType,
  searchPokemonByName,
} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');
const elementTypeFilter = document.getElementById('element-type-filter');
const btnSearch = document.getElementById('btn');
const inputSearch = document.getElementById('search');

const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-card');
  let count = 0;
  list.forEach((pokem) => {
    const card = `
    <div class="pokemon-group">
      <div class="poke-img">
        <img src="${pokem.img}">
      </div>
      <div class="container-info">
        <p class="poke-name">${pokem.name}</p>
        <p class="poke-num"> N° ${pokem.num}</p>
        <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
        <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
      </div>
    </div>`;
    containerPokemon.innerHTML += card;
    count += 1;
  });
  document.getElementById('quantity').innerHTML = count;
  return containerPokemon;
};
// muestra todos los pokemon
showPokemon(pokemonList);

// muestra los tipos de pokemon seleccionando el select type
elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});
// muestra los pokemon buscados atravez del input
btnSearch.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(searchPokemonByName(pokemonList, inputSearch.value));
});

// muestras las acciones del botton para que suba la pantalla
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};

document.querySelector('.container-btn-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
