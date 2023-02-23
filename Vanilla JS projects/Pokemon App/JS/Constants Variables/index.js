 const request = fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=40`);
 const containerPokeCard = document.getElementsByClassName("container")[0];

 export { request, containerPokeCard};

// request
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const arr = data.results;
//     const individualPokemonData = arr.map((x) => x.url);
//     console.log(individualPokemonData);
//     individualPokemonData.forEach((url) => {
//       fetch(url)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           console.log(data.sprites.other.dream_world.front_default);
//           containerPokeCard.innerHTML += ` <div class="card">
//          <div class="card-header">
//            <img
//              src="${data.sprites.other.dream_world.front_default}"
//              alt="pokemon"
//            />
//          </div>
//          <div class="card-body">
//            <h3>${data.name}</h3>
//            <div class="type">
//              <button class="button typeBtn" role="button">Grass</button>
//              <button class="button readMoreBtn" role="button">Know More</button>
//            </div>
//          </div>
//        </div>
//          `;
//         });
//     });
//   });
