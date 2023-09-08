const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const textsplit = text.split(" ");
    const word_num = textsplit.filter(Boolean).length;
    return word_num;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const character_num = text.length;
    return character_num;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textsinesp = text.replaceAll(/[.,#!$%&*;:{}=\-_`~()]/g, "");
    const Character_Excluding_Spaces = textsinesp.replaceAll(" ", "").length;
    return Character_Excluding_Spaces;

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const textsplit = text.split(" ");
    const textfilter = textsplit.filter(Boolean);
    let wordlengthsum = 0;

    for (let i = 0; i < textfilter.length; i++) {
      const wordlengt = textfilter[i].length;
      wordlengthsum = wordlengthsum + wordlengt;
    }
    const word_length_prom = Number((wordlengthsum / textfilter.length).toFixed(2));

    return word_length_prom;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textsplit = text.split(" ");
    const textfilter = textsplit.filter(Boolean);
    let Number_Count = 0;

    for (let i = 0; i < textfilter.length; i++) {
      if (!isNaN(textfilter[i])) {
        Number_Count = Number_Count + 1;
      }
    }
    return Number_Count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textsplit = text.split(" ").filter(Boolean);
    let Number_Sum = 0;

    for (let i = 0; i < textsplit.length; i++) {
      if (!isNaN(textsplit[i])) {
        Number_Sum = Number_Sum + Number(textsplit[i]);
      }
    }
    return Number_Sum;

  },
};

export default analyzer;
