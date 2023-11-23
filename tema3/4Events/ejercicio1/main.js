//ejecicio 1
function getRandomColor() {
    let h =Math.floor(Math.random() * (255));
    let s =Math.floor(Math.random() * (255));
    let l = Math.floor(Math.random() * (255));
  
    return `rgb(${h}, ${s}, ${l})`;
  };
  
  
document.body.addEventListener("dblclick", () => {
    //document.body.css('background-color', getRandomColor());
    document.body.style.backgroundColor = getRandomColor();
});


//ejercicio 2

document.addEventListener("mouseover", () => {
        
})

// ejercicio 5

