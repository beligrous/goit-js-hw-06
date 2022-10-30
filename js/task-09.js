function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonElem = document.querySelector(".change-color");
const spanColorElem = document.querySelector(".color");

function onColorChange(e) {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  spanColorElem.textContent = bgColor;
}

changeColorButtonElem.addEventListener("click", onColorChange);
