/* import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

import {
  filterByType,
} from '../src/data.js';

const allPokemon = [
  {
    num: 1,
    name: 'bulbasaur',
    type: ['grass', 'fire'],
  },
  {
    num: 5,
    name: 'charmeleon',
    type: ['fire'],
  },
  {
    num: 10,
    name: 'caterpie',
    type: ['bug'],
  },
];

const filter = [
  {
    num: 1,
    name: 'bulbasaur',
    type: ['grass', 'fire'],
  },
  {
    num: 5,
    name: 'charmeleon',
    type: ['fire'],
  },
];

describe('filterByType', () => {
  it('Is a function', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('returns an array of objects containing only the pokemon with the chosen type', () => {
    expect(filterByType(allPokemon, 'fire')).toEqual(filter);
  });
});
