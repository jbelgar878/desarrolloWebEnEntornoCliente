function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
    event.preventDefault();

    let data = event.dataTransfer.getData("text");
    let draggedElement = document.querySelector(data);
    let emptyBin = document.querySelector(".container");

    emptyBin.innerHTML = '<img id="binLlena" src="img/binLlena.png">';
}