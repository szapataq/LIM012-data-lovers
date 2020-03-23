// estas funciones son de ejemplo

export const example = () => 'example';

export const searchPokemon = (listPokemon, input) => {
  const pokemon = listPokemon.filter(poke => poke.toLowerCase().startsWith(input));
  return pokemon;
};
export const anotherExample = () => 'OMG';


export const filterByType = (ArrayObj, elementType) => {
  const arrayTipeFilter = [];
  for (let i = 0; i < ArrayObj.length; i += 1) {
    const obj = ArrayObj[i].type;
    for (let j = 0; j < obj.length; j += 1) {
      if (obj[j] === elementType) {
        arrayTipeFilter.push(ArrayObj[i]);
      }
    }
  }
  return arrayTipeFilter;
};
