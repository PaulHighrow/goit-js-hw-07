// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxQuantityInputEl = document.querySelector('input[type="number"]');
const boxCreateButtonEl = document.querySelector("[data-create]");
const boxDestroyButtonEl = document.querySelector("[data-destroy]");
const createdBoxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  if (
    boxQuantityInputEl.value >= +boxQuantityInputEl.min &&
    boxQuantityInputEl.value <= +boxQuantityInputEl.max
  ) {
    /*
      |==============================
      | Варіант за методом createElement()
      |==============================
    */
    // const boxesArray = [];
    // for (let i = 0; i < amount; i += 1) {
    //   const box = document.createElement("div");
    //   box.style.backgroundColor = getRandomHexColor();
    //   box.style.width = `${30 + 10 * i}px`;
    //   box.style.height = `${30 + 10 * i}px`;
    //   boxesArray.push(box);
    // }
    // createdBoxesContainer.append(...boxesArray);

    /*
      |==============================
      | Варіант за методом insertAdjacentHTML()
      |==============================
    */
    let boxesMarkup = '';
    for (let i = 0; i < amount; i += 1) {
      boxesMarkup += `<div style = "background-color: ${getRandomHexColor()}; width: ${30 + 10 * i}px; height: ${30 + 10 * i}px;"></div>`;
    }
    createdBoxesContainer.insertAdjacentHTML("afterbegin", boxesMarkup);

  } else if (boxQuantityInputEl.value > +boxQuantityInputEl.max) {
    alert(
      `Ой-вей, пане, тут забагато, зламаєте. Лише від ${boxQuantityInputEl.min} до ${boxQuantityInputEl.max}.`
    );
  } else if (!boxQuantityInputEl.value) {
    alert(
      `Ну ви введіть щось від ${boxQuantityInputEl.min} до ${boxQuantityInputEl.max}, що ви.`
    );
  } else if (boxQuantityInputEl.value < +boxQuantityInputEl.min) {
    alert(
      `Ні, нулі та від'ємні значення ми тут не створюємо. Лише від ${boxQuantityInputEl.min} до ${boxQuantityInputEl.max}.`
    );
  }
};

const destroyBoxes = () => (createdBoxesContainer.innerHTML = "");

boxCreateButtonEl.addEventListener("click", () =>
  createBoxes(boxQuantityInputEl.value)
);
boxDestroyButtonEl.addEventListener("click", destroyBoxes);
