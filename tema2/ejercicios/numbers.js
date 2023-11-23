/**Create a function which prompts for a number until the visitor enters a valid numeric value.
- The resulting value must be returned as a number.
- The visitor can also stop the process by entering an empty line, some whitespaces or
pressing “CANCEL”. In that case, the function should return null. 
*/

/** ejercicio 2
 * Create a function that displays:
a) A random number between 0 and 1.
b) When passed two values it generates a random number between those two values.
 */
let random0o1 = () => Math.random();
let randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

console.log("el numero random entre 0 y 1 es: " + random0o1());
console.log("el numero random es: " + randomNumber(7, 15));

/** ejercicio 3
 * Write a function that predicts your fortune with a message like this: "You will be an X in Y,
and married to Z with N children".
Each value predicted is taken randomly from an array specifically dedicated to it, where
several values will be available:
- N: number of children
- Z: name of the couple
- Y: geographic location
- X: job position.
 */

const trabajos = ["profe", "policia", "limpiacristales", "juez"];
const localidad = ["malaga", "sevilla", "cadiz", "bcn"];
const hombre = ["manoloo", "pepe", "juan", "javier"];
const numb = [0, 1, 2, 3, 4];
let msn = (x, y, z, n) => `Serás una ${x} en ${y}, y casada con ${z} y con ${n} hijos`;
let randomNumber2 = (max) => Math.floor((Math.random() * (max + 1)));

let fortuna = () => {
  let x = trabajos[randomNumber2(trabajos.length - 1)];
  let y = localidad[randomNumber2(localidad.length - 1)];
  let z = hombre[randomNumber2(hombre.length - 1)];
  let n = numb[randomNumber2(numb.length - 1)];

  return msn(x, y, z, n);
}

console.log("el mensaje es : " + fortuna());


/**ejercicio 4 5 y 7
 * Credit Card Validation follows these rules:
- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the
same)
- The final digit must be even
- The sum of all the digits must be greater than 16
Create a function that takes a credit card number as argument and returns true or false after
validation.
The following credit card numbers are valid:
● 9999777788880000
● 6666666666661666
The following credit card numbers are invalid:
● a92332119c011112 invalid characters
● 4444444444444444 only one type of number
● 1111111111111110 sum less than 16
● 6666666666666661 odd final number
 */
function validarTarjetaCredito(numeroTarjeta) {

  // Elimina guiones y luego aplicao las reglas de validación
  const numeroTarjetaSinGuiones = numeroTarjeta.replace(/-/g, '');

  //El número debe tener 16 dígitos y todos deben ser números
  if (!/^\d{16}$/.test(numeroTarjetaSinGuiones)) {
    return { valido: false, numero: numeroTarjeta, error: 'longitud_incorrecta o no_numeros' };
  }

  //Debe tener al menos dos dígitos diferentes representados
  if (/^(\d)\1{15}$/.test(numeroTarjetaSinGuiones)) {
    return { valido: false, numero: numeroTarjeta, error: 'digitos_repetidos' };
  }

  // Convertir el número de tarjeta en un array de dígitos
  const digitos = numeroTarjetaSinGuiones.split('').map(Number);

  // El último dígito debe ser par
  if (digitos[15] % 2 !== 0) {
    return { valido: false, numero: numeroTarjeta, error: 'ultimo_digito_impar' };
  }

  // La suma de todos los dígitos debe ser mayor que 16
  const sumaDigitos = digitos.reduce((acumulador, num) => acumulador + num, 0);

  if (sumaDigitos <= 16) {
    return { valido: false, numero: numeroTarjeta, error: 'suma_digitos_menor_igual_16' };
  }

  // Si pasa todas las reglas la tarjeta es válida
  return { valido: true, numero: numeroTarjeta };
}

console.log(validarTarjetaCredito("9999777788880000"));
console.log(validarTarjetaCredito("0101-0201-0102-0202"));



/**ejercicio 6 
 * check the credit date
 */

let verificarFechaVencimiento = (fechaVencimiento) => {

  const vencimiento = new Date(fechaVencimiento);
  const fechaActual = new Date();
  let valid;

  if (vencimiento < fechaActual) {
    valid = false;
  } else {
    valid = true;
  }

  return valid;
}

const fechaVencimiento = "2027-12";
const esValida = verificarFechaVencimiento(fechaVencimiento);

if (esValida) {
  console.log("La tarjeta de crédito aún es válida.");
} else {
  console.log("La tarjeta de crédito ha vencido.");
}