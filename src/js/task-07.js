// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControllerInputRef = document.querySelector('#font-size-control');
const textOutputRef = document.querySelector('#text');

const changeFontSize = () => { 
    textOutputRef.style.fontSize = `${fontSizeControllerInputRef.value}px`
}

fontSizeControllerInputRef.addEventListener('input', changeFontSize);