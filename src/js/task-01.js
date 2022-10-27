// Напиши скрипт, який: Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Для кожного элемента li.item у спиcку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const listOfCategories = document.querySelector('#categories');
const categories = listOfCategories.querySelectorAll('.item');
console.log('Number of categories:', categories.length)

for (const category of categories) {
    console.log(category);
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);

    // Спосіб для підрахунку саме дочірніх елементів категорії, на випадок, якщо в кожному з таких елементів теж будуть вкладені списки зі своїми <li>
    // const list = category.querySelector('ul');
    // console.log('Elements:', list.children.length);
}

