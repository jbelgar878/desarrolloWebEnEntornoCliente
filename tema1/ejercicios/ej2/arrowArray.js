
//ejercicio1
let matrizNombres  = ["maria", "pepe" , "jose"];
let greetings = "";

/* saludos(matrizNombres);

function saludos(matrizNomb){
    for (let i = 0; i<matrizNomb.length; i++){
        console.log("hola " + matrizNomb[i]);
    }
} */

//ESTA ES LA IMPORTANTE
/* let grates = matrizNombres.map( n => "hi ${n}")
 */
let saludar = (nombres) => {
    for (let i = 0; i<nombres.length; i++){
        greetings += "hola " + nombres[i] + " \n";
    }
    return greetings;
}
console.log(saludar(matrizNombres));

//ejercicio2
let matrizNum = [5, 7, 1, 2, 3];
let matrizNumCuadrado =[];

        //apartado a
function cuadrado(matriz){

    let matrizCuadrado = [];
    for (let i = 0; i<matriz.length; i++){

        matrizCuadrado[i] = Math.pow(matriz[i], 2);
        console.log("el cuadrado de " + matriz[i] + " es " + matrizCuadrado[i]);

    }
    return matrizCuadrado;
}
matrizNumCuadrado = cuadrado(matrizNum);

        //apartado b
//.map se le pasa el item => y lo que quieres que le haga al item esto con todo el array
let cuadradoB = matrizNum.map(item => Math.pow(item, 2));

console.log(cuadradoB);


//ejercicio3
        //apartado a

/*         burbuja(matrizNum);

function burbuja(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) {
          for (var j = 0; j < (length - i - 1); j++) {
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
} */

        //apartado b

matrizNum.sort((a, b) => {
    return b - a;
});
console.log(matrizNum)

//ejercicio 4

let numbers = [3, 3, 3];
//.reduce se le pasan dos parametros y se le indica que hacer con ellos creando uno nuevo y lo vuelve a hacer con el siguiente item del array
let media = (arr) => arr.reduce((a, b) => a+b) / numbers.length;
console.log(`la media es: ${media(numbers)}`);

//ejercicio 5
let numbersEj5 = [2,3,44,5,7];

// cuando a .reduce le pasamos 2 parametros el segundo es el valor inicial en este caso acumulador comienza por Number.MIN_VALUE
let calcularMayor = (array) =>array.reduce((acumulador,b)=> acumulador>b? acumulador:b,Number.MIN_VALUE);
console.log(calcularMayor(numbersEj5));
