"use strict";
const cellButtons = document.querySelectorAll(".demoButtons");
document.getElementById("demo").innerHTML = "Playing";
let demoCounter = 0;
const demoPulser = () => demoCounter++;
cellButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        console.log(cellButtons[index]);
    });
});
