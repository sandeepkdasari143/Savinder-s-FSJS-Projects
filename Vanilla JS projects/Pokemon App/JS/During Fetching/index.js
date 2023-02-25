import {
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
} from "../Constants Variables/index.js";


function fetchingStarts() {
  loader.style.display = "inline-block";
  pagination.style.display = "none";
  footer.style.display = "none";
}
function fetchingEnds() {
  loader.style.display = "none";
  pagination.style.display = "flex";
  footer.style.display = "flex";
}
export { fetchingStarts, fetchingEnds };
