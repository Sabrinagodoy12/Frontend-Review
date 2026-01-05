// Variables ///////////////////////////////////////////////////////////////////////////
let nombre = "Sabrina";
let edad = 28;
let presenteONo = true;
let dni = true;

console.log("Nombre: " + nombre + " - Tipo: " + typeof nombre); // Typeof: para ver el tipo de dato
console.log("Edad: " + edad + " - Tipo: " + typeof edad);
console.log("Pesente: " + presenteONo + " - Tipo: " + typeof presenteONo);

// Operadores aritméticos ////////////////////////////////////////////////////////////////////
var suma = 35 + 3;
console.log(suma);

var resta = 35 - 5;
console.log(resta);

var multiplicacion = 3 * 2;
console.log(multiplicacion);

var division = 30 / 5;
console.log(division);

var resto = 6 % 2;
console.log(resto);

// Operadores relacionales
console.log(5 > 2); //Devuelve true

// Operadores lógicos
permiso = edad >= 18 && dni == true; // Devuelve true si ambas condiciones son true
console.log("Permiso de entrada: " + permiso);

console.log(!permiso); // Devuelve false, ya que permiso da true

// Condicionales /////////////////////////////////////////////////////////////////////
if (edad < 18) {
  console.log("Eres menor de 18 años");
} else if (edad == 18) {
  console.log("Tienes 18 años");
} else {
  console.log("Eres mayor de 18 años");
}

// Switch
let color = prompt("Escribí un color primario: ");
let colorminuscula = color.toLowerCase();

switch (colorminuscula) {
  case "rojo":
    console.log("Has elegido el color rojo.");
    break;
  case "azul":
    console.log("Has elegido el color azul.");
    break;
  case "amarillo":
    console.log("Has elegido el color amarillo.");
    break;

  default:
    console.log("El valor ingresado no corresponde a ningún color primario.");
    break;
}
