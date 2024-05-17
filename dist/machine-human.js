"use strict";
const cellButtons = document.querySelectorAll('.cellButton');
cellButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        cellButtons[index].innerHTML = "X";
    });
});
