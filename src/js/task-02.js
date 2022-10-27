// Напиши скрипт, який для кожного елемента масиву ingredients: 
// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement(). 
// Додасть назву інгредієнта як його текстовий вміст. 
// Додасть елементу клас item. 
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients. 

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientsItemsEl = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add('item');
  ingredientsItemsEl.push(itemEl);
}

ingredientsListEl.append(...ingredientsItemsEl);