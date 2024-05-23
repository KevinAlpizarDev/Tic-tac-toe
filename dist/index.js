"use strict";
let characterName = document.getElementById("character-name");
let enjoyButton = document.getElementById("enjoy-button");
let mystical = document.getElementById("mystical");
let nameData = JSON.parse(localStorage.getItem("nameData") || '[]');
enjoyButton.addEventListener("click", function () {
    console.log(characterName.value);
    if (characterName.value == "") {
        return alert("Debes de poner tu nombre");
    }
    else {
        const userName = {
            characterName: characterName.value
        };
        nameData.push(userName);
        console.log(nameData);
        localStorage.setItem("nameData", JSON.stringify(nameData));
        enjoy();
    }
});
function enjoy() {
    location.href = "./src/pages/game.html";
    console.log("Clicks");
}
const play = (id) => id.play();
enjoyButton === null || enjoyButton === void 0 ? void 0 : enjoyButton.addEventListener("mouseover", function () {
    mystical.src = "/src/sounds/mystical.mp3";
    console.log(mystical);
    mystical.play();
});
