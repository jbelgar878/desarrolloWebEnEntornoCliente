let ListaDeA = document.querySelectorAll("a");
count = 0;

for (let x of ListaDeA){
    count += 1;
}

document.getElementById("info").innerHTML = "hay un total de " + count + " elaces";