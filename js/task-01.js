const categoriesElem = document.querySelector("#categories");
console.log(`Number of categories ${categoriesElem.children.length}`);

const categoriesItemElem = categoriesElem.children;

for (let category of categoriesItemElem) {
  console.log("Category:", category.children[0].textContent);
  console.log("Elements:", category.children[1].children.length);
}
