let select = document.querySelector("#mode");

select.addEventListener("click", () => {

    if (select.value === "minimalist") {
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#000";
    } else if (select.value === "dark") {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else if (select.value === "light"){
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }

});

console.log(select.value);
