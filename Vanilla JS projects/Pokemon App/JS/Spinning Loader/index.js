import {
  offset,
  modifyOffset,
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
} from "../Constants Variables/index.js";
import { showPokemon } from "../Fetch Pokemon Cards/index.js";
console.log(prevBtn);
let count = 0;
nextBtn.addEventListener("click", () => {
  count += 21;
  showPokemon(count);
});
console.log(offset);
