const textElem = document.querySelector("#text");
const rangeElem = document.querySelector("#font-size-control");
const changeFontSize = (e) => {
  textElem.style.fontSize = `${e.currentTarget.value}px`;
};

rangeElem.addEventListener("input", changeFontSize);
