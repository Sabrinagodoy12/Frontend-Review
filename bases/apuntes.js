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

// Array
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
