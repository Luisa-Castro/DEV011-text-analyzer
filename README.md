# Analizador de texto

## Índice

* [1. Generalidades](#1-Generalidades)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Descripción scripts / archivos](#5-descripción-scripts)

***

## 1. Generalidades

* Este proyecto lo desarrollé de forma individual, priorizando el aprendizaje. Al principio fue difícil para mi entender como era el manejo del DOM y le interacción de los archivos. Pero depués logré entender y todo empezó a fluir. Todavía me cuesta el trabajo con las plataformas, pero poco a poco lo voy resolviendo.

## 2. Preámbulo

![Una lupa sobre texto de libro](https://github.com/Laboratoria/bootcamp/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

En este proyecto cree una aplicación web que sirve para que la usuaria pueda analizar un texto en el navegador al mostrar los siguientes indicadores: conteo de palabras, conteo de carácteres, conteo de carácteres sin espacios ni signos, conteo de números, suma de números y longitud promedio de palabras. Esto lo hice utilizando HTML, CSS y JavaScript. 

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Conteo de palabras**: Muestra el número de palabras ingresadas por la usuaria en el texto, teniendo cómo parámetro el espacio entre ellas y sin tener en cuenta espacios adicionales o signos. 
    - **Conteo de carácteres**: Muestra el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación.
    - **Conteo de carácteres excluyendo espacios y signos de puntuación**: Muestra el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación.  
    - **Conteo de números**: Muestra cuantos números hay en
    el texto de entrada.
    - **Suma total de números**: Muestra el resultado de la suma de todos los números que
    hay en el texto de entrada.
    - **Longitud media de las palabras**: Muestra el calculo de la
    longitud media de las palabras en el texto de entrada.

3. La aplicación limpia el contenido de la caja de texto por medio de un botón.

![Text analyzer demo](https://cdn.loom.com/sessions/thumbnails/7e09e463a78d4a01b82d05e4f8a6c256-1694497436412-with-play.gif "Text analyzer demo")


## 5.  Descripción de scripts / archivos

* `README.md`: Contiene la descripción del proyecto.
* `.github/workflows`: esta carpeta contine la configuracion para la ejecution
  de Github Actions. No debes modificar esta carpeta ni su contenido.
* `docs/images`: contiene las imagenes de este README.
* `read-only/`: esta carpeta contiene las pruebas de criterios mínimos de
  aceptación y end-to-end. No debes modificar esta carpeta ni su contenido.
* [`src/index.html`](./src/index.html): este es el punto de entrada a la
  aplicación. Este archivo contiene el HTML.
* [`src/style.css`](./src/style.css): este archivo contiene las reglas de
  estilo, usando CSS.
* [`src/analyzer.js`](./src/analyzer.js): este archivo permite implementar el objeto
  `analyzer`. Este objeto contiene seis métodos para el calculo de cada una de las métricas:
  
  - `analyzer.getWordCount(text)`: esta función retorna el conteo de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función retorna el conteo
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función retorna
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función retorna cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función retorna la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función retorna la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  Mostrando el resultado con 2 dígitos decimales.
  
* [`src/index.js`](./src/index.js): acá se escuchan eventos del DOM, y se invocan
  los métodos del objeto `analyzer` según sea necesario, para actualizar el resultado
  en la UI (interfaz de usuaria).
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): este archivo contiene las
pruebas unitarias para los métodos del objeto `analyzer`.

***
