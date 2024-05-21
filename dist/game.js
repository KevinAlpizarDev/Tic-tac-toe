"use strict";
{
}
let mode1 = document.getElementById("mode-1");
let mode2 = document.getElementById("mode-2");
document.getElementById("main").style.backgroundImage = "url('../img/mv.webp";
function backgrounChanger(urlImg) {
    document.getElementById("main").style.transition = "ease-in-out 1s";
    document.getElementById("main").style.backgroundImage = urlImg;
}
function normalBackground(urlImg) {
    document.getElementById("main").style.transition = "ease-in-out 1s";
    document.getElementById("main").style.backgroundImage = urlImg;
}
mode1.addEventListener("mouseover", function () {
    backgrounChanger("url('../img/03stranger-2-superJumbo-v2.jpg");
    console.log(4);
});
mode1.addEventListener("mouseout", function () {
    normalBackground("url('../img/mv.webp')");
    console.log(4);
});
mode2.addEventListener("mouseover", function () {
    backgrounChanger("url('../img/fotonoticia_20170928112151_1200.jpg");
    console.log(4);
});
mode2.addEventListener("mouseout", function () {
    normalBackground("url('../img/mv.webp')");
    console.log(4);
});
