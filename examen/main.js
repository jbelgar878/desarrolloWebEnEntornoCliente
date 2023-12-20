document.addEventListener("DOMContentLoaded", async function () {
    async function getData(url) {
        return fetch(url).then(res => res.json().catch(err => err = "error"));
    }

    let countries = await getData("all_countries.json");
    let string = "";

    for (const coun of countries.countries) {
        var pais = coun.name_en;

        string = ` <tr>
                        <td class="colSel" id="${pais}">${pais}</td>
                        <td></td>
                        <td></td>
                    </tr>`;
        document.getElementById("tbod").innerHTML += string;
    }

    let selectedCountry = null;

    document.querySelectorAll(".colSel").forEach(cell => {
        
        cell.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            document.querySelectorAll(".colSel").forEach(el => {
                el.classList.remove("seleccionado");

                
            });

            
            this.classList.add("seleccionado");

            selectedCountry = this.textContent;

            
        });
    });

    document.getElementById("sp").addEventListener("input", function () {
        if (selectedCountry !== null) {
            let rows = document.querySelectorAll(".colSel");
            rows.forEach(row => {
                
                if (row.textContent === selectedCountry) {

                    row.parentNode.children[1].textContent = this.value;

                    for (let index = 0; index < countries.countries.length; index++) {
                        const element = countries.countries[index];
            
                        if(element.name_en == selectedCountry){
                            element.name_sp = this.value;
                            console.log(element);
            
                        }
                        
                    }
                }
            });

            
        }

        
    });

    document.getElementById("gr").addEventListener("input", function () {
        if (selectedCountry !== null) {
            let rows = document.querySelectorAll(".colSel");
            rows.forEach(row => {
                if (row.textContent === selectedCountry) {
                    row.parentNode.children[2].textContent = this.value;

                    for (let index = 0; index < countries.countries.length; index++) {
                        const element = countries.countries[index];
            
                        if(element.name_en == selectedCountry){
                            element.name_gr = this.value;
                            console.log(element);
            
                        }
                        
                    }
                }
            });
        }
    });
});
