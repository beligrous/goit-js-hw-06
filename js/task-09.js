function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonElem = document.querySelector(".change-color");
const spanColorElem = document.querySelector(".color");

function onColorChange(e) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorElem.textContent = getRandomHexColor();
}

changeColorButtonElem.addEventListener("click", onColorChange);
