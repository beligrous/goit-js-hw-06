const inputElem = document.querySelector("#name-input");

const outputElem = document.querySelector("#name-output");

// const onInput = () => {
//   inputElem.value = outputElem.textContent;
// };

inputElem.addEventListener("input", (evt) => {
  if (evt.currentTarget.value === "") {
    return (outputElem.textContent = "Anonymous");
  }
  return (outputElem.textContent = evt.currentTarget.value);
});
