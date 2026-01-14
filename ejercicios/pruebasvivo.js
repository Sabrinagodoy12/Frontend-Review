// // Ejercicio 1: Un restaurante está a punto de calcular la cuenta de un comensal, al cual se le suma por separado: $2800 + $1300 de comida y $900 + $650 de bebida.
// // Crear un programa en Javascript que calcule el total de comida, el total de bebida y el total completo de la cena. Informar el resultado por consola o por un cartel de alerta.

// let comida = 2800 + 1300;
// let bebida = 900 + 650;
// let total = comida + bebida;

// console.log(
//   "El total gastado en la comida es de: $" +
//     comida +
//     "\nEl total gastado en la bebida es de: $" +
//     bebida +
//     "\nEl total final queda en: $" +
//     total
// );

// // alert(
// //   "El total gastado en la comida es de: $" +
// //     comida +
// //     ". El total gastado en la bebida es de: $" +
// //     bebida +
// //     ". El total final queda en: $" +
// //     total
// // );

// // Ejercicio 2: almacenar en dos variables distintos números ingresados por el usuario. Realizar una resta entre los dos valores y almacenar el resultado en una nueva variable.
// // Si el resultado de la resta es mayor a 0, mostrar mediante un console.log() o un alert() el mensaje: "Es mayor a 0". En el caso de ser mayor también mostrar si es par o impar por mensaje.
// // Si el resultado es menor o igual a 0, mostrar un mensaje que diga: "Es menor o igual a 0"

// // let num1 = prompt("Ingrese un número para restarlo por otro: ");
// // let num2 = prompt("Ingrese el segundo número: ");

// // let resta = num1 - num2;

// // if (resta > 0) {
// //   console.log("Es mayor a 0");

// //   if (resta % 2 == 0) {
// //     console.log("El resultado de la resta es par.");
// //   } else {
// //     console.log("El resultado de la resta es impar.");
// //   }
// // } else if (resta == 0) {
// //   console.log("Es igual a 0");
// // } else {
// //   console.log("Es menor a 0");
// // }

// // Ejercicio 3
// for (let i = 1; i <= 35; i++) {
//   console.log(i);
// }

// //Ejercicio 4
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// // Ejercicio 5
// num1 = parseInt(prompt("Ingrese un número: ")); // parseInt: lo convierte a número entero
// num2 = parseInt(prompt("Ingrese otro número: "));

// if (num1 > num2) {
//   alert("El número: " + num1 + " Es mayor a: " + num2);
// } else if (num1 == num2) {
//   alert("Los números: " + num1 + " y " + num2 + " son iguales.");
// } else {
//   alert("El número: " + num2 + " es mayor a: " + num1);
// }

// // Ejercicio 6
// let ingresarFecha = prompt(
//   "Ingrese una fecha con el siguiente formato: mm/dd/yyyy "
// );
// let fecha = new Date(ingresarFecha);
// let dia = fecha.getDay();
// let diaSemana;

// switch (dia) {
//   case 0:
//     diaSemana = "Domingo";
//     break;
//   case 1:
//     diaSemana = "Lunes";
//     break;
//   case 2:
//     diaSemana = "Martes";
//     break;
//   case 3:
//     diaSemana = "Miércoles";
//     break;
//   case 4:
//     diaSemana = "Jueves";
//     break;
//   case 5:
//     diaSemana = "Viernes";
//     break;
//   case 6:
//     diaSemana = "Sábado";
//     break;
//   default:
//     console.log("El día ingresado no existe.");
//     break;
// }
// alert("La fecha ignresada es: " + fecha + " el día es: " + diaSemana);

// Ejercicio 7
let pokemones = ["Pikachu", "Bulbasaur", "Charmander"];

let habilidades = [
  [60, 50, 30],
  [75, 33, 36],
  [98, 100, 52],
];

// Calcula los promedios de cada pokemon
function promedioHabilidades(habilidades) {
  let promedios = [];

  for (let i = 0; i < habilidades.length; i++) {
    let fila = habilidades[i];
    // Unifica todos los elementos del array, se le pasan dos parametros: el acumulador y el elemento actual.
    let suma = fila.reduce((total, habilidad) => total + habilidad, 0); // se le pasa un nombre a cada cosa y se indica con la función de flecha qué es lo que queremos que haga
    promedios[i] = suma / fila.length;
  }
  return promedios;
}

// Calcula si es apto o no para el torneo
function evaluarAptitud(pokemones, promedios) {
  for (let i = 0; i < habilidades.length; i++) {
    if (promedios[i] >= 70) {
      console.log(
        "El Pokemon " +
          pokemones[i] +
          " supera el promedio con: " +
          promedios[i]
      );
    } else {
      console.log(
        "El Pokemon: " +
          pokemones[i] +
          " no supera el promedio con: " +
          promedios[i]
      );
    }
  }
}
let promedios = promedioHabilidades(habilidades);
evaluarAptitud(pokemones, promedios);

// Ejercicio 8
let nombres = ["Paula", "Ana", "María", "Pedrita"];
let busqueda = prompt("Ingrese el nombre que desea buscar: ").toLowerCase();
let posicion = busqueda.includes(busqueda);
if (posicion == true) {
  console.log(busqueda);
} else {
  console.log("Ese nombre no existe en nuestra lista.");
}
