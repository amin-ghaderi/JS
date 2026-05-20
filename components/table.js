const getTable = (data) => {

    let table =
    document.createElement("table");

    let tableHead =
    document.createElement("thead");

    let row =
    document.createElement("tr");

    let firstHeader =
    document.createElement("th");

    firstHeader.innerText =
    "Name";

    let secondHeader =
    document.createElement("th");

    secondHeader.innerText =
    "Age";

    row.appendChild(firstHeader);
    row.appendChild(secondHeader);

    tableHead.appendChild(row);
    table.appendChild(tableHead);

    let tableBody =
    document.createElement("tbody");

    data.forEach(person => {

        let bodyRow =
        document.createElement("tr");

        let firstData =
        document.createElement("td");

        firstData.innerText =
        person.name;

        let secondData =
        document.createElement("td");

        secondData.innerText =
        person.age;

        bodyRow.appendChild(firstData);
        bodyRow.appendChild(secondData);

        tableBody.appendChild(bodyRow);
    });

    table.appendChild(tableBody);

    return table;
}