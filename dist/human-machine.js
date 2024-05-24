"use strict";
const cellButtons = document.querySelectorAll(".demoButtons");
let demoCounter = 0;
const demoPulser = () => demoCounter++;
const demoLength = cellButtons.length;
const demoRandom = () => Math.floor(Math.random() * demoLength);
const demoPulse = (demoCounter) => demoCounter % 2 == 0;
cellButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cellButtons[index].innerHTML = "X";
        setTimeout(() => {
            validateFunction();
        }, 1000);
        demoPulser();
        allPosicionsWin2() ? nombreUsuario2.appendChild(textoh12).textContent = "En buena hora" : nombreUsuario2.appendChild(textoh12);
    });
});
const validateFunction = () => {
    let spaces = [];
    for (let i = 0; i < cellButtons.length; i++) {
        if (cellButtons[i].textContent === "") {
            spaces.push(i);
        }
        if (spaces.length > 0) {
            let secondIndex = Math.floor(Math.random() * spaces.length);
            cellButtons[i].innerHTML = "O";
            return spaces[secondIndex];
        }
    }
};
const firstCaracter2 = "X";
const secondCaracter2 = "O";
const validate2 = (position, caracter) => cellButtons[position].textContent == caracter && cellButtons[position].textContent == caracter && cellButtons[position].textContent == caracter;
const allPosicionsWin2 = () => {
    return (validate2(3, firstCaracter2) && validate2(4, firstCaracter2) && validate2(5, firstCaracter2)) ||
        validate2(3, secondCaracter2) && validate2(4, secondCaracter2) && validate2(5, secondCaracter2) ||
        validate2(0, firstCaracter2) && validate2(1, firstCaracter2) && validate2(2, firstCaracter2) ||
        validate2(0, secondCaracter2) && validate2(1, secondCaracter2) && validate2(2, secondCaracter2) ||
        (validate2(6, firstCaracter2) && validate2(7, firstCaracter2) && validate2(8, firstCaracter2)) ||
        validate2(6, secondCaracter2) && validate2(7, secondCaracter2) && validate2(8, secondCaracter2) ||
        (validate2(0, firstCaracter2) && validate2(3, firstCaracter2) && validate2(6, firstCaracter2)) ||
        validate2(0, secondCaracter2) && validate2(3, secondCaracter2) && validate2(6, secondCaracter2) ||
        validate2(1, firstCaracter2) && validate2(4, firstCaracter2) && validate2(7, firstCaracter2) ||
        validate2(1, secondCaracter2) && validate2(4, secondCaracter2) && validate2(7, secondCaracter2) ||
        (validate2(2, firstCaracter2) && validate2(5, firstCaracter2) && validate2(8, firstCaracter2)) ||
        validate2(2, secondCaracter2) && validate2(5, secondCaracter2) && validate2(8, secondCaracter2) ||
        (validate2(0, firstCaracter2) && validate2(4, firstCaracter2) && validate2(8, firstCaracter2)) ||
        validate2(0, secondCaracter2) && validate2(4, secondCaracter2) && validate2(8, secondCaracter2) ||
        (validate2(2, firstCaracter2) && validate2(4, firstCaracter2) && validate2(6, firstCaracter2)) ||
        validate2(2, secondCaracter2) && validate2(4, secondCaracter2) && validate2(6, secondCaracter2);
};
const resetButton2 = document.getElementById('reset-button');
const exitButton2 = document.getElementById('exit-button');
resetButton2 === null || resetButton2 === void 0 ? void 0 : resetButton2.addEventListener("click", function () {
    location.reload();
});
exitButton2 === null || exitButton2 === void 0 ? void 0 : exitButton2.addEventListener("click", function () {
    location.href = "/src/pages/game.html";
});
const elementoPadre2 = document.querySelector(".nombre");
const nombreUsuario2 = document.createElement("h2");
const textoh12 = document.createTextNode("Good lock!");
elementoPadre2.appendChild(nombreUsuario2);
nombreUsuario2.appendChild(textoh12);
const audioPlayer2 = document.getElementById('pasa2');
const playButton2 = document.getElementById('play-button2');
const pauseButton2 = document.getElementById('pause-button2');
const nextButton2 = document.getElementById('next-button2');
let counterIndexSong2 = 1;
playButton2 === null || playButton2 === void 0 ? void 0 : playButton2.addEventListener("click", function () {
    playSong2();
});
pauseButton2 === null || pauseButton2 === void 0 ? void 0 : pauseButton2.addEventListener("click", function () {
    pauseSong2();
});
nextButton2 === null || nextButton2 === void 0 ? void 0 : nextButton2.addEventListener("click", function () {
    nextSong2();
});
const playSong2 = () => {
    audioPlayer2.src = `/src/sounds/soundTrack-${counterIndexSong2}.mp3`;
    audioPlayer2.play();
};
const pauseSong2 = () => {
    audioPlayer2.src = `/src/sounds/soundTrack-${counterIndexSong2}.mp3`;
    audioPlayer2.pause();
};
const nextSong2 = () => {
    counterIndexSong2 < 4 ? counterIndexSong2++ : counterIndexSong2 = 1;
    audioPlayer2.src = `/src/sounds/soundTrack-${counterIndexSong2}.mp3`;
    audioPlayer2.play();
};
const resetButton3 = document.getElementById('reset-button');
const exitButton3 = document.getElementById('exit-button');
