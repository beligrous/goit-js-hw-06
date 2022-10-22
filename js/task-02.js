const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElem = document.querySelector("#ingredients");
console.log(ingredientsElem);

const ingredientsElemItems = ingredients.reduce((acc, ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  acc.push(ingredientItem);
  return acc;
}, []);

ingredientsElem.append(...ingredientsElemItems);
console.log(ingredientsElem);
