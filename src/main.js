import data from './data/pokemon/pokemon.js';
import {
  filterByType,
  searchPokemonByName,
  order,
  changeOrder,
} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const containerModal = document.querySelector('.container-modal');
const elementTypeFilter = document.getElementById('element-type-filter');
const orderBy = document.querySelector('#order-by');
const inputSearch = document.getElementById('search');
const btnAll = document.querySelector('.all-pokemon');
const btnOrder = document.querySelector('.btn-order');


let btnSort = false;

const showModal = (pokemon) => {
  const modal = document.createElement('div');
  modal.className = 'modal ocultar';
  modal.innerHTML = `<div class="modal-flex"> 
                    <div class="container-modal">
                      <span class="close">&times;</span>
                      <h2>${pokemon.name}</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente praesentium quos nostrum ullam consectetur alias modi. Excepturi accusantium quidem id facere natus deleniti, mollitia explicabo expedita veniam esse, necessitatibus repudiandae vitae aliquid reiciendis distinctio, nobis magni tenetur aut. Nostrum repudiandae in nobis nemo unde debitis laudantium perferendis inventore quia veniam exercitationem ab eveniet mollitia, consequatur natus fuga sint eos recusandae dolore laborum. Delectus, est! Asperiores, ad magnam! Maxime, id reprehenderit?
                      </p>
                      <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                    </div>
                    </div>`;
  containerModal.appendChild(modal);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  return modal;
};

// Historia 1 y 2: mostrar pokemones y realizar un contador
const showPokemon = (list) => {
  let count = 0;
  list.forEach((pokem) => {
    const card = document.createElement('div');
    card.className = 'pokemon-group';
    card.innerHTML = `
      <div class="poke-img">
        <img src="${pokem.img}">
      </div>
      <div class="container-info">
        <p class="poke-name">${pokem.name}</p>
        <p class="poke-num"> N° ${pokem.num}</p>
        <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
        <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
      </div>`;
    const m = showModal(pokem);
    card.addEventListener('click', () => {
      m.style.display = 'block';
    });
    count += 1;
    containerPokemons.appendChild(card);
  });

  document.getElementById('quantity').innerHTML = count;
  return containerPokemons;
};

showPokemon(pokemonList); // llamado al metodo

btnAll.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(pokemonList);
});

// Historia 3: filtrar pokemones por tipo
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

// Historia 4: buscar pokemon por nombre
const MessageError = () => {
  containerPokemons.innerHTML = '';
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  div.className = 'message-error comun';
  p.innerHTML = 'No hay ningun pokemon con ese nombre';
  img.src = 'img/error.gif';
  div.appendChild(p);
  div.appendChild(img);
  containerPokemons.appendChild(div);
};

inputSearch.addEventListener('input', () => {
  const pokemones = searchPokemonByName(pokemonList, inputSearch.value);
  if (pokemones.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(pokemones);
  }
});

// Historia 5: Ordenar alfabeticamente
btnOrder.addEventListener('click', () => {
  if (btnSort === false) {
    containerPokemons.innerHTML = '';
    btnOrder.classList.replace('btn-order', 'btn-orderAsc');
    const ascendente = order(pokemonList, 'a-z');
    showPokemon(ascendente);
  }
  if (btnSort === true) {
    containerPokemons.innerHTML = '';
    btnOrder.classList.replace('btn-orderAsc', 'btn-order');
    const descendente = changeOrder(order(pokemonList, 'a-z'));
    showPokemon(descendente);
  }
  btnSort = !btnSort;
});
// Historia 6,7,8: Ordenar por num, max-cp, max-hp
orderBy.addEventListener('change', () => {
  switch (orderBy.value) {
    case 'num':
      containerPokemons.innerHTML = '';
      showPokemon(order(pokemonList, 'num'));
      break;
    case 'cp':
      containerPokemons.innerHTML = '';
      showPokemon(order(pokemonList, 'max-cp'));
      break;
    case 'hp':
      containerPokemons.innerHTML = '';
      showPokemon(order(pokemonList, 'max-hp'));
      break;
    default:
  }
});

//
// Funcion Extra : boton para subir en pantalla
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

/*
const modal = document.querySelector('.modal');
const modalFlex = document.querySelector('.modal-flex');
const open = document.querySelector('.pokemon-group');
const close = document.querySelector('.close');

open.addEventListener('click', () => {
  modal.style.display = 'block';
});
close.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modalFlex) {
    modal.style.display = 'none';
  }
});
*/
// console.log(pokemonList.reverse());

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
}; */
/*
const modal = document.querySelector('.modal');
const modalFlex = document.querySelector('.modal-flex');
const open = document.querySelector('.pokemon-group');
const close = document.querySelector('.close');

open.addEventListener('click', () => {
  modal.style.display = 'block';
});
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

}); */
