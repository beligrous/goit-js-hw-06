let counterValue = 0;

const decrementButtonElem = document.querySelector("[data-action = decrement]");
const incrementButtonElem = document.querySelector("[data-action = increment]");
const valueCounterElem = document.querySelector("#value");
valueCounterElem.textContent = counterValue;

const onDecrementButtonClick = () => {
  counterValue -= 1;
  return (valueCounterElem.textContent = counterValue);
};
const onIncrementButtonClick = () => {
  counterValue += 1;
  return (valueCounterElem.textContent = counterValue);
};

decrementButtonElem.addEventListener("click", onDecrementButtonClick);
incrementButtonElem.addEventListener("click", onIncrementButtonClick);
console.log();
