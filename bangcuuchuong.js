let table = document.getElementById("myTable");
for (let i = 1; i<=9;i++) {
    let row = document.createElement("tr");
    for(let j = 1; j<=9; j++){
        let cell=document.createElement("td");
        cell.textContent = i + "x" + j + "="+(i*j);
        row.appendChild(cell);

    }
    table.appendChild(row);
}