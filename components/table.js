const getTable = () => {

    let table = document.createElement("table");

    let tableHead = document.createElement("thead");
    let row = document.createElement("tr");

    let firstHeader = document.createElement("th");
    firstHeader.innerText = "Name";

    let secondHeader = document.createElement("th");
    secondHeader.innerText = "Age";

    row.appendChild(firstHeader);
    row.appendChild(secondHeader);

    tableHead.appendChild(row);
    table.appendChild(tableHead);

    return table;
}