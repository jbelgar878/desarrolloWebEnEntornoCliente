
/* ------------------------ejercicio 2------------------------- */
document.addEventListener("DOMContentLoaded", async function () {
    async function getData(url) {
        return fetch(url).then(res => res.json().catch(err => err = "error"));
    }

    let pizzas = await getData("Pizza.json");

    for (const pz of pizzas.Menu){
        const imgElement = document.createElement("img");
        imgElement.src = pz.asset.url;
        imgElement.width = 200;
        imgElement.height = 200;
        imgElement.alt = "";
        imgElement.draggable = true;
        imgElement.addEventListener("dragstart", drag);

        document.getElementById("div1").appendChild(imgElement);
    }

    function drag(event) {
        event.dataTransfer.setData("text", event.target.src);
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");

        if (event.target.childNodes.length == 0) {
            const imgElement = document.createElement("img");
            imgElement.src = data;
            imgElement.width = 200;
            imgElement.height = 200;
            imgElement.alt = "";
            event.target.appendChild(imgElement);
        }
    }

    const divs = document.querySelectorAll('.ej2');
    divs.forEach(div => {
        div.addEventListener("dragover", allowDrop);
        div.addEventListener("drop", drop);
    });

    this.target.addEventListener("click", () => {
        
    })
});
