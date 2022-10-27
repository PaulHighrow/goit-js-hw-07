// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
 
const changeOutputName = () => nameOutputRef.textContent = nameInputRef.value ? nameInputRef.value : "Anonymous";

// Варіант з використанням властивості currentTarget
// const changeOutputName = (event) => nameOutputRef.textContent = !event.currentTarget.value ? nameOutputRef.textContent = "Anonymous" : event.currentTarget.value;

nameInputRef.addEventListener('input', changeOutputName)

