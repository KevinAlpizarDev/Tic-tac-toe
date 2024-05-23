"use strict";
const cellButtons = document.querySelectorAll(".demoButtons");
document.getElementById("demo").innerHTML = "Playing";
let demoCounter = 0;
const demoPulser = () => demoCounter++;
const demoLength = cellButtons.length;
const demoRandom = () => Math.floor(Math.random() * demoLength);
const demoPulse = (demoCounter) => demoCounter % 2 == 0;
const validateFunction = () => {
    let spaces = [];
    for (let i = 0; i < cellButtons.length; i++) {
        if (cellButtons[i].innerHTML == "") {
            spaces.push(i);
            console.log(spaces);
        }
        if (spaces.length > 0) {
            let secondIndex = Math.floor(Math.random() * spaces.length);
            return spaces[secondIndex];
        }
        return null;
    }
};
cellButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cellButtons[index].innerHTML = "x";
        if (cellButtons[index].textContent == "") {
            console.log(1);
            cellButtons[index].innerHTML = "x";
            demoPulser();
        }
        else {
            setTimeout(() => {
                cellButtons[demoRandom()].innerHTML = "o";
            }, 1000);
            demoPulser();
        }
    });
});
