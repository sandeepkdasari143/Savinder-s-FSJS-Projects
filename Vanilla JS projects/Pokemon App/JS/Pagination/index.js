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
let count = 0;
function prevBtnState(param) {
  if (param <= 0) {
    prevBtn.classList.add("inactive");
    prevBtn.disabled = true;
  } else {
    prevBtn.classList.remove("inactive");
    prevBtn.disabled = false;
  }
}
function nextBtnState(param) {
  // Want to show only 1258 results
  if (param >= 1258) {
    nextBtn.classList.add("inactive");
    nextBtn.disabled = true;
  } else {
    nextBtn.classList.remove("inactive");
    nextBtn.disabled = false;
  }
}

nextBtn.addEventListener("click", () => {
  count += 21;
  prevBtnState(count);
  nextBtnState(count);
  showPokemon(count);
});

prevBtn.addEventListener("click", () => {
  count -= 21;
  console.log(count);
  prevBtnState(count);
  nextBtnState(count);
  showPokemon(count);
});

prevBtnState(count);
nextBtnState(count);

export {count}

