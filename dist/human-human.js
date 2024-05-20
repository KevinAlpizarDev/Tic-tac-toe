"use strict";
const cellButtons = document.querySelectorAll('.cellButton');
cellButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        cellButtons[index].textContent = "X";
    });
});
let clickCellCount = 0;
document.querySelectorAll('.cellButton');
