"use strict";
document.getElementById("main").style.backgroundImage = "url('../img/mv.jpg";
let mode1 = document.getElementById("mode-1");
let mode2 = document.getElementById("mode-2");
let urlImg;
const backgrounChanger = (urlImg) => {
    document.getElementById("main").style.transition = "ease-in-out 1s";
    document.getElementById("main").style.backgroundImage = urlImg;
};
const backgroundFunction = (wichBoton, typeMouseEvent, OverOrOutImg) => {
    wichBoton.addEventListener(typeMouseEvent, () => {
        backgrounChanger(OverOrOutImg);
    });
};
backgroundFunction(mode1, "mouseover", "url('../img/03stranger-2-superJumbo-v2.jpg");
backgroundFunction(mode2, "mouseover", "url('../img/fotonoticia_20170928112151_1200.jpg");
backgroundFunction(mode1, "mouseout", "url('../img/mv.jpg");
backgroundFunction(mode2, "mouseout", "url('../img/mv.jpg");
