import { request, containerPokeCard } from "../Constants Variables/index.js";

request
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const arr = data.results;
    const individualPokemonData = arr.map((x) => x.url);
    console.log(individualPokemonData);
    individualPokemonData.forEach((url) => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const pokeName =
            data.name[0].toUpperCase() + data.name.slice(1).toLowerCase();
          console.log(data.sprites.other.dream_world.front_default);
          containerPokeCard.innerHTML += ` <div class="card">
         <div class="card-header">
           <img
             src="${data.sprites.other.dream_world.front_default}"
             alt="pokemon"
           />
         </div>
         <div class="card-body">
         <h3 id = "pokeId" >#${data.id}</h3>
           <h3 id = "pokemonName" >${pokeName}</h3>
           <div class="type">
             <button class="buttonEvolution" role="button">Evolution</button>
             <button class="buttonKnowMore" role="button">Know More</button>
           </div>
         </div>
       </div>
         `;
        });
    });
  });
