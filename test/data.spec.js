/* eslint-disable jest/valid-expect */
import { filterByType, searchPokemonByName, order } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

const pokemon = [
  { num: 1, name: 'bulbasaur', stats: { 'max-cp': 1115, 'max-hp': 113 } },
  { num: 137, name: 'porygon', stats: { 'max-cp': 1720, 'max-hp': 140 } },
  { num: 251, name: 'celebi', stats: { 'max-cp': 3265, 'max-hp': 189 } },
];

const nameAsc = [
  { num: 137, name: 'porygon', stats: { 'max-cp': 1720, 'max-hp': 140 } },
  { num: 1, name: 'bulbasaur', stats: { 'max-cp': 1115, 'max-hp': 113 } },
  { num: 251, name: 'celebi', stats: { 'max-cp': 3265, 'max-hp': 189 } },
];
const maxCP = [
  { num: 251, name: 'celebi', stats: { 'max-cp': 3265, 'max-hp': 189 } },
  { num: 137, name: 'porygon', stats: { 'max-cp': 1720, 'max-hp': 140 } },
  { num: 1, name: 'bulbasaur', stats: { 'max-cp': 1115, 'max-hp': 113 } },
];
const maxHP = [
  { num: 251, name: 'celebi', stats: { 'max-cp': 3265, 'max-hp': 189 } },
  { num: 137, name: 'porygon', stats: { 'max-cp': 1720, 'max-hp': 140 } },
  { num: 1, name: 'bulbasaur', stats: { 'max-cp': 1115, 'max-hp': 113 } },
];
const num = [
  { num: 1, name: 'bulbasaur', stats: { 'max-cp': 1115, 'max-hp': 113 } },
  { num: 137, name: 'porygon', stats: { 'max-cp': 1720, 'max-hp': 140 } },
  { num: 251, name: 'celebi', stats: { 'max-cp': 3265, 'max-hp': 189 } },
];

describe('Filtrar por tipo de elemento', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Retorna arreglo de pokemones de tipo fuego', () => {
    const array = filterByType(data.pokemon, 'fire');
    array.forEach(typo => expect(typo.type).toContain('fire'));
  });
});

describe('Busqueda de pokemones por nombre', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof searchPokemonByName).toBe('function');
  });

  it('retorna arreglo con los nombres que coincidan con charmander', () => {
    const array = searchPokemonByName(data.pokemon, 'charmander');
    array.forEach(arr => expect(arr.name).toContain('charmander'));
  });
  it('retorna arreglo con los nombres que coincidan con ch', () => {
    const array = searchPokemonByName(data.pokemon, 'ch');
    array.forEach(arr => expect(arr.name).toContain('ch'));
  });
  it('retorna arreglo de longitud "0" si no encuentra coincidencias', () => {
    const array = searchPokemonByName(data.pokemon, 'chipika').length;
    expect(array).toEqual(0);
  });
});

describe('Ordenamiento de data', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof order).toBe('function');
  });
  it('Ordena alfabeticamente "a-z"', () => {
    expect(order(pokemon, 'a-z').toEqual(nameAsc));
  });
  it('Ordena de mayor a menor el max-CP', () => {
    expect(order(pokemon, 'max-cp').toEqual(maxCP));
  });
  it('Ordena de mayor a menor el max-HP', () => {
    expect(order(pokemon, 'max-hp').toEqual(maxHP));
  });
  it('Ordena de mayor a menor el num de cada pokemon', () => {
    expect(order(pokemon, 'num').toEqual(num));
  });
});
