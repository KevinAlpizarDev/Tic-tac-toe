"use strict";
{
}
console.log(8);
function backgrounChanger() {
    document.getElementById('main').style.backgroundImage = "url('./src/img/bike.webp')";
    document.getElementById('main').style.backgroundSize = "cover";
    document.getElementById('main').style.backgroundRepeat = "no-repeat";
}
function normalBackground() {
    document.body.style.backgroundImage = "url('./src/img/bike.webp')";
    "1000px 600px";
    document.body.style.backgroundSize = "100% 500px";
    document.body.style.backgroundRepeat = "no-repeat";
}
