// Declarar variable ////////////////////////////////////////////////////////
let edad;
let nombre;

// Inicializar variable
edad = 28;
nombre = "Sabrina";

// Declarar e inicializar variable
let nacionalidad = "Argentina";

// Variable Constante
const idioma = "Español";

// Estructuras repetitivas
// While
let contador = 0;

while (contador < 10) {
  //Porque son 10 vueltas --> 0 1 2 3 4 5 6 7 8 9
  console.log("Estoy en la vuelta número: " + (contador + 1)); //Para que imprima: 1 2 3 4 5 6 7 8 9 10
  contador++;
}

// For
for (let i = 1; i <= 10; i++) {
  console.log("Vuelta número: " + i);
}

// Do while
let contador2 = 1;
do {
  console.log("Esta es la vuelta número: " + contador2);
  contador2++;
} while (contador2 <= 10);

//Prompt
// let respuesta = window.prompt("Ya comiste hoy?", "Si");
// // alert("Su respuesta fue: " + respuesta);

// //Confirm
// let confirmar = window.confirm("Ya comiste el día de hoy?");
// if (confirmar == true) {
// alert("Excelente, vas por buen camino");
// }

//Fecha --> para hacerla como string: let fecha = new Date("10/23/1997")
// let fecha = new Date(1997, 10, 23); //Si pongo new Date() --> es el día de hoy, sino puedo poner parámetros --> año, mes, día
// alert("La fecha elegida es: " + fecha);
// //Mostrar una parte de la fecha:
// let dia = fecha.getDate();
// let mes = fecha.getMonth();
// let anio = fecha.getFullYear();
// alert("-Día: " + dia + " -Mes: " + mes + " -Año: " + anio);

// Array /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let vector = [1, 2, 3, 4, 5];
console.log(vector);

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz);
console.log(matriz[1][2]); // Imprime 6 --> Fila 1 columna 2

let nuevoVector = new Array(3); //Un nuevo arreglo vacío
nuevoVector[0] = "Sabrina";
nuevoVector[1] = "Paula";

let nuevaMatriz = new Array(3);
for (let i = 0; i < 3; i++) {
  nuevaMatriz[i] = new Array(3);
}
console.log(nuevaMatriz);

// Recorrer un Array
let paises = ["Argentina", "México", "Colombia", "Brasil"];
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}

// Recorrer una Matriz
let paisesEuropa = [
  ["España", "Inglaterra"],
  ["Francia", "Ucrania"],
];
for (let f = 0; f < paisesEuropa.length; f++) {
  // Se puede usar la: i
  for (let c = 0; c < paisesEuropa[f].length; c++) {
    // Se puede usar la j
    console.log(paisesEuropa[f][c]);
  }
}

// Métodos en Arrays
let frutas = ["naranja", "banana", "kiwi"];
frutas.push("manzana"); // Agrega un elemento
console.log(frutas);
frutas.pop(); //Elimina el último elemento del array
console.log(frutas);
frutas.shift(); // Borra el primer elemento del array
console.log(frutas);
frutas.unshift("sandia"); // Agrega un elemento al inicio del array
console.log(frutas);

// Filter
let frutasConA = frutas.filter((fruta) => fruta.includes("a")); // parámetros --> nombre para lo que es cada elemento, hacemos una función y ponemos la condición
console.log("Filtro: " + frutasConA);

let frutas2 = ["pera", "mango"];

let todasLasFrutas = frutas.concat(frutas2); // Unifica los arrays, concatena.
console.log(todasLasFrutas);

// Da vuelta el orden de los elementos
todasLasFrutas.reverse();
console.log(todasLasFrutas);

todasLasFrutas.sort(); //Ordena alfabéticamente
console.log(todasLasFrutas);

// Funciones ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Declaro la función
function saludar() {
  console.log("Hola! Estoy en la función");
}
// Llamo a la función
saludar();

//Función con parametros
function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado; // Lo retorna a sumar
}
// Pongo mi función en una variable para poder mostrarla
let suma = sumar(5, 2);
console.log("El resultado de la función sumar es: " + suma);

// Strings //////////////////////////////////////////////////////////////////////////////////////////
let frase = "Hola, ¿cómo estas?";
console.log(`La longitud de la frase es: ${frase.length}`);
console.log(`Fragmento recortado: ${frase.slice(0, 4)}`); // Se pone al caracter siguiente que quiero recortar. Se puede usar en cadenas o Arrays

let verduras = "apio, lechuga, tomate, repollo";
console.log(verduras);
console.log(verduras.split(",")); //Genera un array con elementos separados por el caracter ingresado
console.log(`${verduras.indexOf("lechuga")}`); //Me da la posición (cadena de caracteres) en la que esta la palabra. Si no está devuelve posición -1
console.log(`${verduras.includes("tomate")}`); // Devuelve un booleano

// DOM ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cambiarTexto() {
  let parrafo = document.querySelector("#parrafo");
  parrafo.textContent = "Texto cambiado";
  parrafo.style.color = "red";
}
