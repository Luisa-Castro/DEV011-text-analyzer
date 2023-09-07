import analyzer from './analyzer.js';


//Obtener elementos del DOM
const userInput = document.querySelector("textarea[name='user-input']");
const button = document.getElementById("reset-button");
//Escuchar "click" del botón y limpiar textarea
button.addEventListener("click", () => {
  document.querySelector("textarea[name='user-input']").value ="";
  document.querySelector("li[data-testid='word-count']").textContent="Palabras: 0 ";
  document.querySelector("li[data-testid='character-count']").textContent="Carácteres: 0 ";
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Carácteres sin espacios ni signos: 0 ";
  document.querySelector("li[data-testid='number-count']").textContent="Números: 0 ";
  document.querySelector("li[data-testid='number-sum']").textContent="Suma Números: 0.00 ";
  document.querySelector("li[data-testid='word-length-average']").textContent="Promedio longitud: 0.00 ";
  //console.log('var palabras  '+document.querySelector("li[data-testid='word-count']").textContent);
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
userInput.addEventListener("keyup", () => {

  const wordnum = analyzer.getWordCount(userInput.value);
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: " + wordnum;
  const characternum = analyzer.getCharacterCount(userInput.value);
  document.querySelector("li[data-testid='character-count']").textContent = "Carácteres: " + characternum;
  const characterexcludingspacesnum = analyzer.getCharacterCountExcludingSpaces(userInput.value)
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Carácteres sin espacios ni signos: " + characterexcludingspacesnum;
  const wordlengthprom = analyzer.getAverageWordLength(userInput.value);
  document.querySelector("li[data-testid='word-length-average']").textContent = "Promedio longitud: " + wordlengthprom;
  const numcount = analyzer.getNumberCount(userInput.value);
  document.querySelector("li[data-testid='number-count']").textContent = "Números: " + numcount;
  const numsum = analyzer.getNumberSum(userInput.value).toFixed(2);
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma Números: " + numsum;

});


