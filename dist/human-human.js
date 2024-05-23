"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
cellbuttonn.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "x";
            console.log(pulserCounter());
        }
        else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "o";
            console.log(pulserCounter());
        }
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
const audioPlayer = document.getElementById('play-button');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');
let counterIndexSong = 0;
const bestFun = () => {
    audioPlayer.src = '/src/sounds/music-' + counterIndexSong + ".mp3";
    console.log(typeof audioPlayer.src);
};
audioPlayer.addEventListener("click", function () {
    counterIndexSong < 3 ? counterIndexSong++ : counterIndexSong = 0;
    bestFun();
});
const plays = (id) => id.play();
