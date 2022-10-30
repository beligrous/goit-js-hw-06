const inputElem = document.querySelector("#validation-input");

function inputValidation(e) {
  let textLength = e.currentTarget.value.length;

  if (textLength === Number(inputElem.dataset.length)) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");
  }
}

inputElem.addEventListener("blur", inputValidation);
