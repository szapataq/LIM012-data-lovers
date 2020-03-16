/**import { example } from './data.js';*/
import data from './data/pokemon/pokemon.js';



let pokemonList = data.pokemon;
let containerPokemon = document.querySelector("#container-pokemon");

Object.values(pokemonList).map( (pokem) =>{
    const divGroup = document.createElement("div");
    const divImg = document.createElement("div");
    const divInfo = document.createElement("div");
    const img = document.createElement ("img");
    const p = document.createElement("p");

    divGroup.className = "pokemon-group";
    divImg.className = "pokemon-img";
    divInfo.className = "pokemon-info";
    p.className = "pokemon-name";

    img.src = `${pokem.img}`;
    p.innerHTML = `${pokem.name}`;

    divImg.appendChild(img);
    divInfo.appendChild(p);
    divGroup.appendChild(divImg);
    divGroup.appendChild(divInfo);
    containerPokemon.appendChild(divGroup);

});






