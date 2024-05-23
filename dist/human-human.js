"use strict";
const cellbuttonn = document.querySelectorAll(".cellButton");
let counter = 0;
const pulserCounter = () => counter++;
const toggleFunction = (counter) => counter % 2 === 0;
cellbuttonn.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "X";
            pulserCounter();
        }
        else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "") {
            cellbuttonn[index].textContent = "O";
            pulserCounter();
        }
    });
});
const firstCaracter = "X";
const secondCaracter = "O";
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
const audioPlayer = document.getElementById('pasar');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');
let counterIndexSong = 1;
playButton === null || playButton === void 0 ? void 0 : playButton.addEventListener("click", function () {
    playSong();
});
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener("click", function () {
    pauseSong();
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", function () {
    nextSong();
});
const playSong = () => {
    audioPlayer.src = `/src/sounds/music-${counterIndexSong}.mp3`;
    console.log(audioPlayer);
    audioPlayer.play();
};
const pauseSong = () => {
    audioPlayer.src = `/src/sounds/music-${counterIndexSong}.mp3`;
    console.log(audioPlayer);
    audioPlayer.pause();
};
const nextSong = () => {
    counterIndexSong < 3 ? counterIndexSong++ : counterIndexSong = 1;
    audioPlayer.src = `/src/sounds/music-${counterIndexSong}.mp3`;
    console.log(audioPlayer);
    audioPlayer.play();
};
