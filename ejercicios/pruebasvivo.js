// Ejercicio 1: Un restaurante está a punto de calcular la cuenta de un comensal, al cual se le suma por separado: $2800 + $1300 de comida y $900 + $650 de bebida.
// Crear un programa en Javascript que calcule el total de comida, el total de bebida y el total completo de la cena. Informar el resultado por consola o por un cartel de alerta.

let comida = 2800 + 1300;
let bebida = 900 + 650;
let total = comida + bebida;

console.log(
  "El total gastado en la comida es de: $" +
    comida +
    "\nEl total gastado en la bebida es de: $" +
    bebida +
    "\nEl total final queda en: $" +
    total
);

// alert(
//   "El total gastado en la comida es de: $" +
//     comida +
//     ". El total gastado en la bebida es de: $" +
//     bebida +
//     ". El total final queda en: $" +
//     total
// );

// Ejercicio 2: almacenar en dos variables distintos números ingresados por el usuario. Realizar una resta entre los dos valores y almacenar el resultado en una nueva variable.
// Si el resultado de la resta es mayor a 0, mostrar mediante un console.log() o un alert() el mensaje: "Es mayor a 0". En el caso de ser mayor también mostrar si es par o impar por mensaje.
// Si el resultado es menor o igual a 0, mostrar un mensaje que diga: "Es menor o igual a 0"

let num1 = prompt("Ingrese un número para restarlo por otro: ");
let num2 = prompt("Ingrese el segundo número: ");

let resta = num1 - num2;

if (resta > 0) {
  console.log("Es mayor a 0");

  if (resta % 2 == 0) {
    console.log("El resultado de la resta es par.");
  } else {
    console.log("El resultado de la resta es impar.");
  }
} else if (resta == 0) {
  console.log("Es igual a 0");
} else {
  console.log("Es menor a 0");
}
