import analyzer from './analyzer.js';

console.log("Hola");

//Obtener elementos del DOM
const userInput = document.querySelector("textarea[name='user-input']");
const output = document.querySelector("#output");
userInput.addEventListener("input", (event) => {
    output.textContent = `Presionaste "${event.target.value}".`
    console.log(userInput.value);
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`