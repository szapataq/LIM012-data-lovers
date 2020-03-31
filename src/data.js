
export const filterByType = (arrayObj, elementType) => {
  const pokemon = arrayObj.filter(obj => obj.type.includes(elementType));
  return pokemon;
};
export const searchPokemonByName = (arrayObj, input) => {
  const pokemon = arrayObj.filter(poke => poke.name.startsWith(input.toLowerCase()));
  return pokemon;
};
