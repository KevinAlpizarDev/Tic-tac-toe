let characterName = (document.getElementById("character-name") as HTMLInputElement);
        let enjoyButton = document.getElementById("enjoy-button");
        let mystical = document.getElementById("mystical");

        let nameData = JSON.parse(localStorage.getItem("nameData") || '[]');

        enjoyButton!.addEventListener("click", function () {
            const userName = {
                characterName: characterName!.value
            }

            nameData.push(userName);
            console.log(nameData);

            localStorage.setItem("nameData", JSON.stringify(nameData));

            enjoy();
            // playFuntion(mystical);
        });

        function enjoy() {
            location.href = "./src/pages/game.html";
            console.log("Clicks");
        }



// // SE SELECCIONA EL INPUT DEL INDEX
// let characterName = (document.getElementById("character-name") as HTMLInputElement)
// // SE SELECCIONA EL BOTON JOIN DEL INDEX
// let enjoyButton  = document.getElementById("enjoy-button")
// //AUDIO
// let mystical = document.getElementById("mystical")

// ///////////////////////////////////////////////////////////////////////////////////
// let nameData = JSON.parse(localStorage.getItem("nameData") || '[]');
// //EVENTO DE ESCUCHA AL BOTON JOIN DEL INDEX
// enjoyButton!.addEventListener("click", function () {

// let userName = {
//   characterName: characterName!.value
// }

// nameData!.push(userName);
// console.log(nameData);


// localStorage.setItem("nameData", JSON.stringify(nameData))


// enjoy()
// // playFuntion(mystical)

// })


// function enjoy() {
//   location.href = "./src/pages/game.html";
//   console.log("Clicks");

  
// }



// <audio value="PLAY" id="mystical" src="./src/sounds/mystical.mp3"></audio>
function playFuntion(id: HTMLMediaElement) {
  return id.play();
  
}  
console.log(3);
// playFuntion(mystical)
  