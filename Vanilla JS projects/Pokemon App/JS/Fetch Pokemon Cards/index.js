import {
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
} from "../Constants Variables/index.js";

import { fetchingStarts, fetchingEnds } from "../During Fetching/index.js";

// function showPokemon(offset = 0) {
//   const request = fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`
//   );
//   request
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const arr = data.results;
//       const individualPokemonData = arr.map((x) => x.url);

//       console.log(individualPokemonData);
//       individualPokemonData.forEach((url) => {
//         fetch(url)
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data);
//             const pokeName =
//               data.name[0].toUpperCase() + data.name.slice(1).toLowerCase();
//             console.log(data.sprites.other.dream_world.front_default);
//             containerPokeCard.innerHTML += ` <div class="card">
//          <div class="card-header">
//            <img
//              src="${data.sprites.other.dream_world.front_default}"
//              alt="pokemon"
//            />
//          </div>
//          <div class="card-body">
//          <h3 id = "pokeId" >#${data.id}</h3>
//            <h3 id = "pokemonName" >${pokeName}</h3>
//            <div class="type">
//              <button class="buttonEvolution" role="button">Evolution</button>
//              <button class="buttonKnowMore" role="button">Know More</button>
//            </div>
//          </div>
//        </div>
//          `;
//           });
//       });
//     });
// }
function showPokemon(offset = 0) {
  containerPokeCard.innerHTML = "";
  fetchingStarts();
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
          containerPokeCard.innerHTML += ` <div class="card">
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
        });
      });
    })
    .catch((error) => {
      containerPokeCard.innerHTML = `<h2 class = "displayError"> OOPS! Some Error Occured!</h2>`;
      console.log(error);
    })
    .finally(() => {
      fetchingEnds();
    });
}

showPokemon();

export { showPokemon };
console.log(nextBtn);
