const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");

const makeListIngredients = options => {
  return options.map(option => {
    const itemEl = document.createElement("li");
    itemEl.textContent = option;
    itemEl.classList.add("item");

    return itemEl;
  });
};
  
const elements = makeListIngredients(ingredients);

ingredientsUl.append(...elements);
