let text = "p,p,p,p\n" +
"a,a,a,a\n" +
"a\n" +
"a,a,a\n" +
"a,a"
let rows = text.split("\n");
let row = rows[0].split(",");
let table = new Array(rows.length);
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(row.length);
}
for (let i = 0; i < rows.length; i++) {
    let row = rows[i].split(",");
    for (let j = 0; j < table[i].length; j++) {
        if(row[j]!==undefined){
            table[i][j] = row[j];
        }else{
            table[i][j]= null;
        }

    }
}
for (let i = 0; i < table.length; i++) {
    console.log(table[i])
}

