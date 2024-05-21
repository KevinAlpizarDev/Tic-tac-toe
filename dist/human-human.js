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
        cellButtons[index].innerHTML = "X";
        if (cellButtons[index].textContent == "") {
            console.log(1);
            cellButtons[index].innerHTML = "x";
            demoPulser();
        }
        else {
            setTimeout(() => {
                cellButtons[demoRandom()].innerHTML = "o";
                console.log(2);
            }, 1000);
            demoPulser();
        }
    });
});
