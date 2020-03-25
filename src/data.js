// estas funciones son de ejemplo
/* export const example = () => 'example';
export const searchPokemon = (listPokemon, input) => {
  const pokemon = listPokemon.filter(poke => poke.toLowerCase().startsWith(input));
  return pokemon;
}; */

export const filterByType = (arrayObj, elementType) => {
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

export const searchPokemonByName = (arrayObj, namePokemon) => {
  const arrayName = [];
  for (let i = 0; i < arrayObj.length; i += 1) {
    if (arrayObj[i].name === namePokemon) {
      arrayName.push(arrayObj[i]);
    }
  }
  return arrayName;
};
