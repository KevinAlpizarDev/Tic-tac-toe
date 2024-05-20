"use strict";
let characterName = document.getElementById("character-name");
let enjoyButton = document.getElementById("enjoy-button");
let mystical = document.getElementById("mystical");
let nameData = JSON.parse(localStorage.getItem("nameData") || '[]');
enjoyButton.addEventListener("click", function () {
    const userName = {
        characterName: characterName.value
    };
    nameData.push(userName);
    console.log(nameData);
    localStorage.setItem("nameData", JSON.stringify(nameData));
    enjoy();
});
function enjoy() {
    location.href = "./src/pages/game.html";
    console.log("Clicks");
}
function playFuntion(id) {
    return id.play();
}
console.log(3);
