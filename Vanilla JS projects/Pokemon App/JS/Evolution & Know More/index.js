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

// Evoulution Chain Logic
function evolution() {
  const evolution = Array.from(
    document.getElementsByClassName("buttonEvolution")
  );

  evolution.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      containerPokeCard.innerHTML = "";
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

//Know More button Logic
function knowMore() {
  const knowMoreBtn = Array.from(
    document.getElementsByClassName("buttonKnowMore")
  );
  knowMoreBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
      fetchingStarts();
      const pokeName =
        e.target.parentElement.previousElementSibling.innerText.toLowerCase();
      containerPokeCard.innerHTML = "";
      backBtn.style.display = "block";
      pagination.style.display = "none";

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const stats = data.stats;
          console.log(stats);
          containerPokeCard.innerHTML = `<h3 id = "pokenameKnowMore"  class = "animation2" >${
            data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()
          }</h3>`;
          containerPokeCard.innerHTML += `
          <div id = "pokemonInfo" class = "animation2">
          <button class="button-32" role="button"> Height : ${data.height} meters</button>
          <button class="button-32" role="button">Weight : ${data.weight} kgs</button>
          <button class="button-32" role="button">Type : ${data.types[0].type.name}</button>
          </div>
          <div class = "knowMore class = "animation2""> 
          <div id = "box-left">
          <img class = "animation2" src="${data.sprites.other.dream_world.front_default}" alt="pokemon"/>
          </div>
          <div class = "stats">
          
<div class = "progressBox class = "animation2"">

</div>`;
          const progressBox = document.getElementsByClassName("progressBox")[0];
          stats.forEach((stat, index) => {
            console.log(stat.base_stat);
            console.log(stat.stat.name);
            progressBox.innerHTML += `
            <div class ="box animation2">
            <div  style="margin-bottom: 6px;"><b id = "statsText" >${stat.stat.name.toUpperCase()}</b></div>
            <div class="progress">
              <div class="bar" style = "width : ${
                stat.base_stat * 3
              }px; background-color: #fd${index}${index}4${index}">${
              stat.base_stat
            }
            </div>
            </div>
            </div
            `;
          });
        })
        .catch((error) => {})
        .finally(() => {
          fetchingEnds();
          pagination.style.display = "none"
        });
    });
  });
}

export { evolution, knowMore };
