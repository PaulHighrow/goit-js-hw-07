// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const validatedInputRef = document.querySelector("#validation-input");

const validateInputBySymbols = () => {
  if (validatedInputRef.value.length !== +validatedInputRef.dataset.length) {
    validatedInputRef.classList.remove("valid");
    validatedInputRef.classList.add("invalid");
  } else {
    validatedInputRef.classList.remove("invalid");
    validatedInputRef.classList.add("valid");
  }
};

validatedInputRef.addEventListener("blur", validateInputBySymbols);
