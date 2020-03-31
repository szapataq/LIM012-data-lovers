import data from './data/pokemon/pokemon.js';
import {
  filterByType,
  searchPokemonByName,
} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const elementTypeFilter = document.getElementById('element-type-filter');
const inputSearch = document.getElementById('search');
const btnAll = document.querySelector('.all-pokemon');

const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-card');
  let count = 0;
  let card = '';
  list.forEach((pokem) => {
    card += `
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
    count += 1;
  });
  containerPokemon.innerHTML = card;
  document.getElementById('quantity').innerHTML = count;
  return containerPokemon;
};


// BUTTON ALL, muestra todos los pokemon
btnAll.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(pokemonList);
});
// SELECTOR TYPE, muestra los tipos de pokemon seleccionando el select type
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
// INPUT buscacdor
inputSearch.addEventListener('input', () => {
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

// evolucion de codigos

/* export const filterByType = (arrayObj, elementType) => {
  const arrayTipeFilter = [];
  for (let i = 0; i < arrayObj.length; i += 1) {
    const obj = arrayObj[i].type;
    for (let j = 0; j < obj.length; j += 1) {
      if (obj[j] === elementType) {
        arrayTipeFilter.push(arrayObj[i]);
      }
    }
  }
  return arrayTipeFilter;
};
export const filterByType = (arrayObj, element) => {
  const finalFilter = [];
  arrayObj.forEach((obj) => {
    obj.type.forEach((typeElements) => {
      if (typeElements === element) {
        finalFilter.push(obj);
      }
    });
  });
  return finalFilter;
};

export const searchPokemonByName = (arrayObj, namePokemon) => {
  const namePoke = namePokemon.toLowerCase();
  const arrayName = [];
  for (let i = 0; i < arrayObj.length; i += 1) {
    if (arrayObj[i].name === namePoke) {
      arrayName.push(arrayObj[i]);
    }
  }
  return arrayName;
};
*/
