"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
let button;
cellbuttonn.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "x";
            pulserCounter();
        }
        else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "o";
            pulserCounter();
        }
        if (validate(0)) {
            console.log("You got it");
        }
    });
});
const validate = (position) => cellbuttonn[position].textContent == "x" || cellbuttonn[position].textContent == "o";
