//a
console.log("EJERCICIO A");
console.log("-----------");
console.log();

let numero1 = 2,numero2 = 3,resultadoA;

function tipoNumero(numero) {
    if (numero % 2 == 0) {
        resultadoA = "El número " + numero + " es par.";
    } else {
        resultadoA = "El número " + numero + " es impar.";
    }

    return resultadoA;
}

console.log(tipoNumero(numero1));
console.log(tipoNumero(numero2));
console.log();

//b
console.log("EJERCICIO B");
console.log("-----------");
console.log();

let numero3 = 2000;
let numero4 = 23,resultadoB;

function add(numero1,numero2){

    return ` ${numero1}  plus  ${numero2}  is  ${numero1 + numero2} `;
}

console.log(add(numero3,numero4));

//c
console.log("EJERCICIO C");
console.log("-----------");
console.log();

let nota1 = 0.0, nota2 = 4.9, nota3 = 10.0, notaFinal;

function decision(nota){
    switch (nota) {
        case (nota < 5.0):
            console.log("El alumno ha suspendido.")
            break;
        case (nota >= 5.0 && nota < 6.0):
            console.log("El alumno ha sacado Suficiente.")
            break;
        case (nota >= 6.0 && nota < 7.0):
            console.log("El alumno ha sacado Bien.")
            break;
        case (nota >= 7.0 && nota < 9.0):
            console.log("El alumno ha sacado Notable.")
            break;
        case (nota >= 9.0 && nota <= 10.0):
            console.log("El alumno ha sacado Sobresaliente.")
            break;
    }

    return
}

decision(nota1);
decision(nota2);
decision(nota3);

//d
//e
let frutas = ["manana", "platano", "cereza", "pera", "kiwi"];
frutas.forEach((frutas)=> console.log(frutas));

//f
let param = process.argv[2];
let index = frutas.findIndex( (frutas) => frutas === process.argv[2]);  //findIndex devuelve la posicion y si no lo encuentra devuelve