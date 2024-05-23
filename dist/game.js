"use strict";
document.getElementById("main").style.backgroundImage = "url('../img/game.jpg";
let mode1 = document.getElementById("mode-1");
let mode2 = document.getElementById("mode-2");
const backgrounChanger = (urlImg) => {
    document.getElementById("main").style.transition = "ease-in-out 1s";
    document.getElementById("main").style.backgroundImage = urlImg;
};
const backgroundFunction = (wichBoton, typeMouseEvent, OverOrOutImg) => {
    wichBoton.addEventListener(typeMouseEvent, () => {
        backgrounChanger(OverOrOutImg);
    });
};
backgroundFunction(mode1, "mouseover", "url('../img/Play-Arcade.png");
backgroundFunction(mode2, "mouseover", "url('../img/The-Mind-Flayer..png");
backgroundFunction(mode1, "mouseout", "url('../img/mv.jpg");
backgroundFunction(mode2, "mouseout", "url('../img/mv.jpg");
const redirectFuntion = (where) => location.href = where;
