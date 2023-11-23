const tableContainer = document.getElementById('tableContainer');
const display = document.getElementById('display');
const rowCount = 4;
const colCount = 5;

const table = document.createElement('table'); // este for crea la tabla y la introduce
for (let i = 0; i < rowCount; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < colCount; j++) {
    const cell = document.createElement('td');
    cell.textContent = `Row ${i + 1} Cell ${j + 1}`;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
tableContainer.appendChild(table);

let prevRow = null;
let prevCol = null;

table.addEventListener('click', function(event) {
  const ctrlKey = event.ctrlKey;
  const shiftKey = event.shiftKey;
  const target = event.target;

  if (target.tagName === 'TD') {  // no se porque esta en mayus pero si lo pones min no funciona
    const row = target.parentNode.rowIndex;
    const col = target.cellIndex;

    // Restore previous cells' colors    // cambia cada celda-columna hermana del target a gris
    if (prevRow !== null && prevCol !== null) {
      const cells = table.getElementsByTagName('td');
      for (let cell of cells) {
        cell.style.backgroundColor = '';
      }
    }

    // Change color of cells in the same row and column  // cambia cada celda-fila hermana del target a gris
    const currentRowCells = table.rows[row].cells;
    for (let j = 0; j < currentRowCells.length; j++) {
      if (currentRowCells[j] !== target) {
        currentRowCells[j].style.backgroundColor = 'lightgray';
      }
    }

    const cellsInColumn = Array.from(table.rows).map(row => row.cells[col]);
    for (let cell of cellsInColumn) {
      if (cell !== target) {
        cell.style.backgroundColor = 'lightgray';
      }
    }

    // Change cell color based on keys pressed
    if (ctrlKey) {
      target.style.backgroundColor = '#FFFFBF';
    } else if (shiftKey) {
      target.style.backgroundColor = '#F1A85B';
    } else {
      target.style.backgroundColor = '#99FF33';
    }

    prevRow = row;
    prevCol = col;
  }
});
