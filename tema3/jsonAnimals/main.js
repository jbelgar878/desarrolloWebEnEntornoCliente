let nombres = await fetch("/tema3/jsonAnimals/animals.json")  // Nombres almacena json
    .then(
        successRensponse => {
            if (successRensponse.status != 200) {  //si .status es distinto a 200 no devuelve nada
                console.log("error successResponse");
                return null;
            } else {  //si .status es 200 te devuelve el json
                return successRensponse.json();
            }

        },
        failResponse => { //este segundo parametro seria igual al .catch
            console.log(failResponse.status);
            console.log("error failResponse");

            return null;
        }
    )
    /* .then() */;

console.log(nombres.animals);

/*for (const animal in nombres.animals) { // para aceder a la clave hay que usar el forIn
    console.log(animal);
}*/

let arr = Object.keys(nombres.animals); // Object.keys() devuelve un array de las claves
//let arr =Object.values(nombres.animals);  // Object.values() devuelve un array de las propiedades
//let arr =Object.entries(nombres.animals);  // Objet.entries() devuelve un array, donde cada elemento tiene clave y valor (keys y values)

console.log(arr);

for (let index = 0; index < 6; index++) {
    const element = arr[index];
    document.getElementById("animalsNames").innerHTML += `<p>${element}</p>`
};

