"use strict";
{
}
let mode1 = document.getElementById("mode-1");
let mode2 = document.getElementById("mode2");
document.getElementById("main").style.backgroundImage = "url('../img/mv.webp";
function backgrounChanger() {
    document.getElementById("main").style.backgroundImage = "url('../img/bike.webp";
}
function normalBackground() {
    document.getElementById("main").style.backgroundImage = "url('../img/mv.webp')";
}
mode1.addEventListener("mouseover", function () {
    backgrounChanger();
    console.log(4);
});
mode1.addEventListener("mouseout", function () {
    normalBackground();
    console.log(4);
});
