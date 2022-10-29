function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elem = document.querySelector("#controls");
const boxesElem = document.querySelector("#boxes");
const inputElem = elem.firstElementChild;
const destroyButtonElem = elem.lastElementChild;
const createButtonElem = destroyButtonElem.previousElementSibling;

// const dataCreateButton = () => {
//   const strinsArray = [];
//   const stringsArrayLength = inputElem.value;
//   for (let i = 0; i <= stringsArrayLength; i += 1) {}
// };

const destroyBoxes = () => {
  inputElem.value = "";
  boxesElem.innerHTML = "";
};

const create = () => {
  const amount = inputElem.value;
  createBoxes(amount);
};

function createBoxes(amount) {
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    markup.push(divBox);
  }
  boxesElem.append(...markup);
}

inputElem.addEventListener("input", (e) => e.currentTarget.value);
createButtonElem.addEventListener("click", create);
destroyButtonElem.addEventListener("click", destroyBoxes);
