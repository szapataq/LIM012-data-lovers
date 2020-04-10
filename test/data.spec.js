import {
  filterByType,
  searchPokemonByName,
  order,
  changeOrder,
  calculateStab,
  calculateDps,
  calculateEps,
} from '../src/data.js';
import {
  inputTest,
  outputTypeElement,
  outputSearchName1,
  outputSearchName2,
  inputTestOrder,
  outputAlfaAscendente,
  outputCPAscendente,
  outputHPAscendente,
  outputNumAscendente,
  outputAlfaDescendente,
  outputCPDescendente,
  outputHPDescendente,
  outputNumDescendente,
  inputAttack,
  typePokemon,
  outputStab,
  outputDps,
  outputEps,
} from '../src/testCases.js';

describe('Filtrar por tipo de elemento', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('Deberia retornar un arreglos de los pokemon que son tipo "fuego"', () => {
    expect(filterByType(inputTest, 'fire')).toEqual(outputTypeElement);
  });
});
describe('Busqueda de pokemon por nombre', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof searchPokemonByName).toBe('function');
  });
  it('Deberia retornar un arreglos de los pokemon que inician con "ch"', () => {
    expect(searchPokemonByName(inputTest, 'ch')).toEqual(outputSearchName1);
  });
  it('Deberia retornar un arreglo con el pokemon de nombre "charmander"', () => {
    expect(searchPokemonByName(inputTest, 'charmander')).toEqual(outputSearchName2);
  });
  it('Deberia retornar un arreglo vacio de no encontrar ningun pokemon', () => {
    const arrayVacio = searchPokemonByName(inputTest, 'abcdef').length;
    expect(arrayVacio).toBe(0);
  });
});
describe('Orden ascendente', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof order).toBe('function');
  });
  it('Deberia retornar un arreglo ascendentemente "a-z"', () => {
    expect(order(inputTestOrder, 'a-z')).toEqual(outputAlfaAscendente);
  });
  it('Deberia retornar un arreglo ascendentemente "max-cp"', () => {
    expect(order(inputTestOrder, 'max-cp')).toEqual(outputCPAscendente);
  });
  it('Deberia retornar un arreglo ascendentemente "max-hp"', () => {
    expect(order(inputTestOrder, 'max-hp')).toEqual(outputHPAscendente);
  });
  it('Deberia retornar un arreglo ascendentemente "num"', () => {
    expect(order(inputTestOrder, 'num')).toEqual(outputNumAscendente);
  });
});
describe('Orden descendente', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof order).toBe('function');
  });
  it('Deberia retornar un arreglo descendentemente "z-a"', () => {
    expect(changeOrder(outputAlfaAscendente)).toEqual(outputAlfaDescendente);
  });
  it('Deberia retornar un arreglo descendentemente "max-cp"', () => {
    expect(changeOrder(outputCPAscendente)).toEqual(outputCPDescendente);
  });
  it('Deberia retornar un arreglo descendentemente "max-hp"', () => {
    expect(changeOrder(outputHPAscendente)).toEqual(outputHPDescendente);
  });
  it('Deberia retornar un arreglo descendentemente "num"', () => {
    expect(changeOrder(outputNumAscendente)).toEqual(outputNumDescendente);
  });
});

describe('Calcular STAB de cada pokemon', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof calculateStab).toBe('function');
  });
  it('Deberia retornar el calculo de los STAB de los ataques', () => {
    expect(calculateStab(inputAttack, 'grass')).toEqual(outputStab);
  });
  it('Retorna un arreglo del calculo de STAB de cada poder', () => {
    expect(calculateStab(inputAttack, typePokemon)).toEqual(outputStab);
  });
});
describe('Calcular DPS de cada pokemon', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof calculateDps).toBe('function');
  });
  it('Deberia retornar el calculo de los DPS de los ataques', () => {
    expect(calculateDps(inputAttack, 'grass')).toEqual(outputDps);
  });
  it('Retorna un arreglo del calculo de DPS de cada poder', () => {
    expect(calculateDps(inputAttack, typePokemon)).toEqual(outputDps);
  });
});

describe('Calcular EPS de cada pokemon', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof calculateEps).toBe('function');
  });
  it('Retorna un arreglo del calculo de EPS de cada poder', () => {
    expect(calculateEps(inputAttack)).toEqual(outputEps);
  });
});
