const $table = document.querySelector("table");  // selector de las tablas
const $All = (selector) => document.querySelectorAll(selector);  // esto significa que selecciona todos los elementos `x` se ve bien en clearAllStyles
const $ = (selector) => document.querySelector(selector); // igual que el de arriba pero solo el seleccionado


function detectSpecialKeys (event) {  // detecta si pulsas alguna tecla de funcion como ctrl o shift
  if (event.shiftKey) { return 'red'}
  if (event.ctrlKey) { return 'yellow'}
  return 'blue'
}

const clearAllSytle = () => {  // quita todas las clases que tenga el elemento
  $All('tr').forEach(tr => tr.classList = '')
  $All('td').forEach(td => td.classList = '')
}

$table.addEventListener("click", (event) => {

  clearAllSytle()
  const color = detectSpecialKeys(event)
  const cell = event.target;  // coge el elemento que clicas
  const cellIndex = event.target.cellIndex;  // cellIndex devuelve el indice del taget dentro de la columna 
  const rowIndex = cell.parentElement.rowIndex  // .parentElement.rowIndex devuelve el indice del taget dentro de la fila
  
  
  $All(`tr td:nth-child(${cellIndex + 1})`).forEach(td => td.classList.add('gray-background'))  // selecciona toda la columna y la pone en gris
  $(`tr:nth-child(${rowIndex + 1})`).classList.add(('gray-background')) // selecciona toda la fila que comparte indice con el taget y la pone en gris
  
  cell.classList.replace('gray-background', color); // al target le cambia la clase y le pone el color que debe llevar
});