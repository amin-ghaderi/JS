const users = [
    {
        name: "Amin",
        age: 35
    },
    {
        name: "Sara",
        age: 28
    },
    {
        name: "Ali",
        age: 41
    }
];

let table =
getTable(users);

document
    .getElementById("app")
    .appendChild(table);



    const clickFunction = () => {
        alert("Button clicked");
    }
    
    const warningButton =
        getButton(
            "warning",
            "Delete",
            clickFunction
        );
    
    document.body.appendChild(warningButton);