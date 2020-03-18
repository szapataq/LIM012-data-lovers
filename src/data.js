// estas funciones son de ejemplo

export const example = () => 'example';

export const searchPokemon = (listPokemon, input) => {
  const pokemon = listPokemon.filter(poke => poke.toLowerCase().startsWith(input));
  return pokemon;
};
export const anotherExample = () => 'OMG';
