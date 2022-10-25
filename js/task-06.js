const inputElem = document.querySelector("#validation-input");

function inputValidation(e) {
  let textLength = e.currentTarget.value.length;
  console.log(textLength);
  if (textLength === Number(inputElem.dataset.length)) {
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.add("invalid");
  }
}

inputElem.addEventListener("blur", inputValidation);

console.log(inputElem.dataset.length);
