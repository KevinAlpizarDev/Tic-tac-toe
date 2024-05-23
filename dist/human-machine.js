"use strict";
const cellButtons = document.querySelectorAll(".demoButtons");
document.getElementById("demo").innerHTML = "Playing";
let demoCounter = 0;
const demoPulser = () => demoCounter++;
const demoLength = cellButtons.length;
const demoRandom = () => Math.floor(Math.random() * demoLength);
const demoPulse = (demoCounter) => demoCounter % 2 == 0;
cellButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cellButtons[index].innerHTML = "x";
        validateFunction();
        demoPulser();
    });
});
const validateFunction = () => {
    let spaces = [];
    for (let i = 0; i < cellButtons.length; i++) {
        if (cellButtons[i].textContent === "") {
            spaces.push(i);
        }
        if (spaces.length > 0) {
            let secondIndex = Math.floor(Math.random() * spaces.length);
            console.log(secondIndex);
            cellButtons[i].innerHTML = "o";
            return spaces[secondIndex];
        }
    }
};
