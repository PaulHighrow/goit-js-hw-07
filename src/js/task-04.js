// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
const incrementButtonRef = document.querySelector('[data-action="increment"]');

const decreaseValueByOne = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const increaseValueByOne = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementButtonRef.addEventListener('click', decreaseValueByOne);
incrementButtonRef.addEventListener('click', increaseValueByOne);