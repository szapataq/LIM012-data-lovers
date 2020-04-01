
export const filterByType = (arrayObj, elementType) => {
  const pokemon = arrayObj.filter(obj => obj.type.includes(elementType));
  return pokemon;
};
export const searchPokemonByName = (arrayObj, input) => {
  const pokemon = arrayObj.filter(poke => poke.name.startsWith(input.toLowerCase()));
  return pokemon;
};
export const order = (arrayObj, orderBy) => {
  let sortObj = [];
  switch (orderBy) {
    case 'a-z':
      sortObj = arrayObj.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case 'max-cp':
      sortObj = arrayObj.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
      break;
    case 'max-hp':
      sortObj = arrayObj.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
      break;
    case 'num':
      sortObj = arrayObj.sort((a, b) => b.num - a.num);
      break;
    default:
  }
  return sortObj;
};
export const changeOrder = array => array.reverse();
