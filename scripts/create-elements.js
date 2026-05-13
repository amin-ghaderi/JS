const imageFormats = [
    "AVIF is an AV1 bytestream in a HEIF container.",
    "WebP is a VP8 bytestream (or lossless WebP) in a RIFF container.",
    "Sometimes, an image format defines its own container.",
    "PNG, JPEG, and JPEG XL include the layout as part of the file format specification."
];

let targetElement =
    document.querySelector("div");

let buttonElement =
    document.querySelector("#add-item-button");

let ulElement =
    document.createElement("ul");


/*for (let format of imageFormats) {

    let liElement = document.createElement("li");

    liElement.append(format);

    ulElement.append(liElement);
}*/

targetElement.append(ulElement);

let currentIndex = 0;

buttonElement.addEventListener("click", () => {

    let liElement =
    document.createElement("li");

    liElement.append(
        imageFormats[currentIndex]
    );

    ulElement.append(liElement);

    currentIndex++;
});