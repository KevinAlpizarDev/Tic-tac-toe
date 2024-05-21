"use strict";
const cellButtons = document.querySelectorAll(".demoButtons");
document.getElementById("demo").innerHTML = "Playing";
let demoCounter = 1;
const demoPulser = () => demoCounter++;
const demoLength = cellButtons.length;
const demoRandom = () => Math.floor(Math.random() * demoLength);
const demoPulse = (demoCounter) => demoCounter % 2 == 0;
cellButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cellButtons[index].innerHTML = "X";
        if (demoPulse(demoCounter) && cellButtons[index].textContent == "") {
            cellButtons[index].innerHTML = "x";
            console.log(demoPulser());
        }
        else if (demoPulse(demoCounter) && cellButtons[index].textContent == "x" || cellButtons[index].textContent == "o") {
            console.log(demoPulser());
        }
        else {
            console.log(demoPulser());
            console.log("hola");
            let valor = Math.floor(Math.random() * 8);
            console.log(valor);
            setTimeout(() => {
                cellButtons[valor].innerHTML = "o";
            }, 1000);
            console.log(cellButtons[demoRandom()]);
        }
    });
});
