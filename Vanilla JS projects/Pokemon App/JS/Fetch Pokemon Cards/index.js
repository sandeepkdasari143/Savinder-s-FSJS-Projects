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
console.log(nextBtn);

function evolution() {
  const evolution = Array.from(
    document.getElementsByClassName("buttonEvolution")
  );

  evolution.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      fetchingStarts();
      containerPokeCard.style.flexDirection = "column";
      window.scrollTo(0, 0);
      backBtn.style.display = "block";
      pagination.style.display = "none";
      evolutionHeading.style.display = "block";
      const pokeName =
        e.target.parentElement.previousElementSibling.innerText.toLowerCase();
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return fetch(data.evolution_chain.url);
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let current = data.chain;
          let chain = [];
          do {
            chain.push(current.species.name);
            current = current.evolves_to[0];
          } while (current !== undefined);
          evolutionHeading.innerText = `Evolution Chain of ${
            chain[0][0].toUpperCase() + chain[0].slice(1).toLowerCase()
          }`;
          containerPokeCard.innerHTML = "";
          const chainApis = chain.map((item) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then(
              (response) => response.json()
            )
          );

          console.log(chainApis);
          Promise.all(chainApis).then((data) => {
            console.log(data);
            data.forEach((data) => {
              containerPokeCard.innerHTML += `<div class = "evolution animation"> 
            <img src="${
              data.sprites.other.dream_world.front_default
            }" alt="pokemon"/>
            <div class = "evolutionInfo">
            <h3>#${data.id}</h3>
            <h3>${
              data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()
            }</h3>
            </div>
            </div>
            <div class="container001">
             <div class="arrow"></div> 
             <div class="arrow"></div>   
            <div class="arrow"></div>
           </div>
            `;
            });

            const container001 = Array.from(
              document.getElementsByClassName("container001")
            );
            container001[container001.length - 1].style.display = "none";
            console.log(container001);
          });
        })
        .catch((error) => {})
        .finally(() => {
          fetchingEnds();
          pagination.style.display = "none";
        });
    });
  });
}

backBtn.addEventListener("click", () => {
  showPokemon(count);
  backBtn.style.display = "none";
  pagination.style.display = "flex";
  evolutionHeading.style.display = "none";
  containerPokeCard.style.flexDirection = "row";
});
