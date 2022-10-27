// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorValueTextEl = document.querySelector('.color');
const colorChangingButtonEl = document.querySelector('.change-color');

const changeBackgroundColor = () => { 
  colorValueTextEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueTextEl.textContent;

  // Варіант, при якому в span.color передається колір в rgb-форматі.
  // bodyEl.style.backgroundColor = getRandomHexColor();
  // colorValueTextEl.textContent = bodyEl.style.backgroundColor;
}

colorChangingButtonEl.addEventListener("click", changeBackgroundColor);