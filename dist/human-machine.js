"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
cellbuttonn.forEach((button, index) => {
    button.addEventListener("click", () => {
        console.log(pulserCounter());
        console.log(toggleFunction(counter));
        if (!toggleFunction || cellbuttonn[index].textContent === "") {
            cellbuttonn[index].textContent = "x";
            toggleFunction(counter);
        }
        else if (cellbuttonn[index].textContent === "0" || toggleFunction(counter)) {
            toggleFunction(counter);
        }
    });
});
