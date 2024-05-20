"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
document.getElementById("header").innerHTML = "INITIAL TEXT!";
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
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
        allPosicionsWin() ? document.getElementById("header").innerHTML = "WINNER!" : document.getElementById("header").innerHTML = "NOTHING";
    });
});
const firstCaracter = "x";
const secondCaracter = "o";
const validate = (position, caracter) => cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter;
const allPosicionsWin = () => {
    return (validate(3, firstCaracter) && validate(4, firstCaracter) && validate(5, firstCaracter)) ||
        validate(3, secondCaracter) && validate(4, secondCaracter) && validate(5, secondCaracter) ||
        validate(0, firstCaracter) && validate(1, firstCaracter) && validate(2, firstCaracter) ||
        validate(0, secondCaracter) && validate(1, secondCaracter) && validate(2, secondCaracter) ||
        (validate(6, firstCaracter) && validate(7, firstCaracter) && validate(8, firstCaracter)) ||
        validate(6, secondCaracter) && validate(7, secondCaracter) && validate(8, secondCaracter) ||
        (validate(0, firstCaracter) && validate(3, firstCaracter) && validate(6, firstCaracter)) ||
        validate(0, secondCaracter) && validate(3, secondCaracter) && validate(6, secondCaracter) ||
        validate(1, firstCaracter) && validate(4, firstCaracter) && validate(7, firstCaracter) ||
        validate(1, secondCaracter) && validate(4, secondCaracter) && validate(7, secondCaracter) ||
        (validate(2, firstCaracter) && validate(5, firstCaracter) && validate(8, firstCaracter)) ||
        validate(2, secondCaracter) && validate(5, secondCaracter) && validate(8, secondCaracter) ||
        (validate(0, firstCaracter) && validate(4, firstCaracter) && validate(8, firstCaracter)) ||
        validate(0, secondCaracter) && validate(4, secondCaracter) && validate(8, secondCaracter) ||
        (validate(2, firstCaracter) && validate(4, firstCaracter) && validate(6, firstCaracter)) ||
        validate(2, secondCaracter) && validate(4, secondCaracter) && validate(6, secondCaracter);
};
