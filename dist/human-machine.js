"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
cellbuttonn.forEach((button, index) => {
    button.addEventListener("click", () => {
        pulserCounter();
        if (!toggleFunction(counter)) {
            cellbuttonn[index].textContent = "X";
        }
        else {
            cellbuttonn[index].textContent = "0";
        }
    });
});
