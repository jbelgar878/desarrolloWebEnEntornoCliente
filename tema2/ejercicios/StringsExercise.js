/*   ejercicio 1
         Create a script with 2 string variables.
        − Display both variables between single quotes.
        − Display both variables separated by a line break.
        a) Using traditional string concatenation
        b) Using string literals
 
 */

//a
let str1 = "hello";
let str2 = "people";

let traditionalShow = (a,b) => console.log('\'' + a +" " + b + '\'');
let traditionalShowLineBreak = (a,b) => console.log( a + "\n" + b + "\n\n");

traditionalShow(str1, str2);
traditionalShowLineBreak(str1, str2);

//b
let SLShow = (a,b) => console.log(`' ${a} ${b} '`);
let SLShowLineBreak = (a,b) => console.log(
` ${a} 
 ${b} 
 
 `);

SLShow(str1, str2);
SLShowLineBreak(str1, str2);

/*
    ejercicio 2

        In this exercise, you will create a function that accepts the components of an email
        sending service and combines them into an email body template. To make things more
        interesting, only adults are eligible to post comments on the website. Accordingly, the
        message text will change.

        function sendEmail(name, age, comments) {
        - check the passed parameters now. If any are invalid or missing, the function will
        simply return null
        - use the ternary operator to check whether this person is of legal age or not.
        sendEmail("Jane", 27, "Your website is fantastic!");
        // => "A user has posted a comment from the website:
        // => name: Jane
        // => age: 27
        // => status: Jane is a valid user
        // => comments Your website is fantastic!"
*/

let  sendEmail = (name, age, comments)=> {
    if(typeof name !== "string" || typeof age !== "number" || typeof comments !== "string"){
        console.log("type of any argument is a mistake");
        return -1;
    }

    if(age<18){
        console.log("you are so youger");
    }else{
        console.log(
            `A user has posted a comment from the website:
            name: ${name}
            age: ${age} 
            status: ${name} is a valid user
            coments: ${comments}
            
            `
            );
    }
};

sendEmail("joaquin", 22 , "hola");


// let sendEmailCorrect = function (name, age, comments) {
//     returnarguments[1] >= 18 ? 
//     ` => A user has posted a comment from the website:
//         => name: ${name}
//         => age: ${age} 
//         => status: ${name} is a valid user \n coments: ${comments}` : console.log("type of any argument is a mistake")
// }


/*
    ejercicio 3

        Write a JavaScript program to replace every character in a given string with the character
        following it in the alphabet.
*/
function changeCharacters(str) {

    console.log("The string we will work on is: " + str + "\nProcessing...");

    let arr = str.split("");
    let newArr = arr.map(chars => String.fromCharCode(chars.charCodeAt(0) + 1));
    
    console.log("The resulting string is: " + newArr.join(""));
}

changeCharacters("JavaScript");
console.log("\n\n");
/**
     ejercicio 4
          Write a JavaScript function to extract a specified number of characters from a string.
          Test Data :
          console.log(truncate_string("Robin Singh",4));
          "Robi"
 */

let separatedStr = arr => console.log ( `la cadena principal es: ${arr}` + `\nla nueva cadena es: ` + arr.split(``,7).join("") );
separatedStr("Robin Singh");


//** ejercicio 4 hecho de otra manera */
function extract2(palabra, numero){ return texto = palabra.split("")
                                                          .filter((x,y) => y<numero)
                                                          .join("") ;}

console.log(extract2("Robin Singh", 7));

/** ejercicio 5
 * Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
 *  
 */ 




/** ejercicio 6
 * Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
robin...@example.com
 */

function protect(email){

    let mail = email.split("@"); 
    let  final = mail[0].substring(0,4) + "...@" + mail[1];

    return console.log( "el email quedaria asi: " + final);
}

protect("mariovaquerizo@gmail.com");

/** ejercicio 7
 * Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
 */
function parametrizar(texto){
    texto = texto.split(" ");
    resultado = texto[0].toLowerCase();
    for (i=1; i<texto.length;i++){
        resultado += "-"+texto[i].toLowerCase();
    }
    return resultado;
}
console.log(parametrizar("hola Mundo"));



/** ejercicio 8
 * Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */

let capitalizeFirstLetter = ( str = "robin singh perez") => {
    let array = str.split(" ");
    let capitalizedString = array.map(e => e.charAt(0).toUpperCase() + e.slice(1));
    return capitalizedString.join("");
}

console.log(capitalizeFirstLetter("hola caracola"));

/**ejercicio 9
 * Write a JavaScript function that takes a string with both lowercase and upper case letters
as a parameter. It converts upper case letters to lower case, and lower case letters to
upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

    /*function change(str){
        let array = str.split("");
        let newArr = array.map(char => {
            let chars;

            if( char === char.toUpperCase()){
                chars = char.toLowerCase();
            }else{
                chars = char.toUpperCase();
            }
            return chars;
        });


    console.log(newArr);
    return newArr.join("");
}*/

let change = str =>  str.split("")
                        .map(char => (char === char.toUpperCase())? char.toLowerCase() : char.toUpperCase())
                        .join("");


        
console.log(change("HKkhhLHbKkhK"));
console.log(change("JoAqUiN"));


/** ejercicio 10 
 * Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
 */

let camelize = s => {
    if (typeof s === "string") {
        return s.split(" ").map(l => `${l.charAt(0).toUpperCase() + 
            l.substring(1, l.length)}`).join("");
    }
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));


// 11. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

function uncamelize(s, separator = " ") {
    if (typeof s === "string") {
        return s.split("").map(l => l.charCodeAt(0) < 97 && 
        l.charCodeAt(0) >= 65
            ? `${separator + l}` : l).join("")
    }
    return null;
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));