

document.getElementById("addArrow").addEventListener("click", () => {
    document.getElementById("tabla").innerHTML += "<tr><td></td><td></td></tr>"
});

document.getElementById("addColum").addEventListener("click", () => {
    let array = Array.from(document.querySelectorAll("tr"))
  
    array.forEach(element => {
        element.innerHTML+= "<td></td>"
    });

});
