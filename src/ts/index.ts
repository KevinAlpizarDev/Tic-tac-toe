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

            
            // characterName.textContent !== "" ?  enjoy() : console.log(3);
            
           enjoy()
            // playFuntion(mystical);
        });

        function enjoy() {
           
            location.href = "./src/pages/game.html";
            console.log("Clicks");
        }



//////////////PLay funtion
let id
const play = ( id:  HTMLMediaElement) => id.play()

