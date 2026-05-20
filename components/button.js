const getButton = (type, text, action) => {
    let button = document.createElement("button");

    button.innerText = text;

    if (type === "warning") {
        button.setAttribute("class", "btn-warning");
    }
    else if (type === "info") {
        button.setAttribute("class", "btn-info");
    }

    button.addEventListener("click", action);

    return button;
}