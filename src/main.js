import { pokemon } from './data/pokemon/pokemon.js';

let number = pokemon.filter(pokemon => pokemon.name);
console.log(number);