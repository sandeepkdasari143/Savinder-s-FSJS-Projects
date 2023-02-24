let offset = 1250;
function modifyOffset(value) {
  return offset = value;
}
const containerPokeCard = document.getElementsByClassName("container")[0];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const loader = document.getElementsByClassName("lds-roller")[0];
const pagination = document.getElementById("pagination");
const footer = document.getElementsByTagName("footer")[0];
export {
  offset,
  modifyOffset,
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
};
