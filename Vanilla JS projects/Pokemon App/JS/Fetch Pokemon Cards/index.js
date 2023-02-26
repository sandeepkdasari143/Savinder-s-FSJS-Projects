import {
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
  backBtn,
  evolutionHeading,
} from "../Constants Variables/index.js";
import { fetchingStarts, fetchingEnds } from "../During Fetching/index.js";
import { count } from "../Pagination/index.js";
import { evolution, knowMore } from "../Evolution & Know More/index.js";


function showPokemon(offset = 0) {
  fetchingStarts();
  containerPokeCard.innerHTML = "";

  const request = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`
  );
  request
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const allPokemonInfo = data.results;
      const individualPokemonData = allPokemonInfo.map((obj) => obj.url);
      const arrOfIndividualPromises = individualPokemonData.map((api) =>
        fetch(api).then((response) => response.json())
      );
      Promise.all(arrOfIndividualPromises).then((data) => {
        data.forEach((data) => {
          const pokemonName =
            data.name[0].toUpperCase() + data.name.slice(1).toLowerCase();
          containerPokeCard.innerHTML += ` <div class="card animation">
   <div class="card-header">
     <img
       src="${data.sprites.other.dream_world.front_default}"
       alt="pokemon"
     />
   </div>
   <div class="card-body">
   <h3 id = "pokeId" >#${data.id}</h3>
     <h3 id = "pokemonName" >${pokemonName}</h3>
     <div class="type">
       <button class="buttonEvolution" role="button">Evolution</button>
       <button class="buttonKnowMore" role="button">Know More</button>
     </div>
   </div>
 </div>
   `;
          evolution();
          knowMore()
          
        });
      });
    })
    .catch((error) => {
      containerPokeCard.innerHTML = `<h2 class = "displayError"> OOPS! Some Error Occured!</h2>`;
    })
    .finally(() => {
      fetchingEnds();
    });
}

showPokemon();
export { showPokemon };
backBtn.addEventListener("click", () => {
  showPokemon(count);
  backBtn.style.display = "none";
  pagination.style.display = "flex";
  evolutionHeading.style.display = "none";
  containerPokeCard.style.flexDirection = "row";
});
