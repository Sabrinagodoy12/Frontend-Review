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
