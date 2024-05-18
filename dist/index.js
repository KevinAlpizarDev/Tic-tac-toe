"use strict";
let enjoyButton = document.getElementById("enjoy-button");
enjoyButton.addEventListener("click", function () {
    enjoy();
});
function enjoy() {
    location.href = "./src/pages/game.html";
}
