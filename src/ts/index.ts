let characterName = (document.getElementById("character-name") as HTMLInputElement);
        let enjoyButton = document.getElementById("enjoy-button");
        let mystical = (document.getElementById("mystical") as HTMLMediaElement);

        let nameData = JSON.parse(localStorage.getItem("nameData") || '[]');

        enjoyButton!.addEventListener("click", function () {
            console.log(characterName!.value)
            if (characterName!.value == "") {
                return alert("Debes de poner tu nombre")
            }else{
                const userName = {
                    characterName: characterName!.value
                }
                nameData.push(userName);
                console.log(nameData);
    
                localStorage.setItem("nameData", JSON.stringify(nameData));
                enjoy()
            }


           

            
            // characterName.textContent !== "" ?  enjoy() : console.log(3);
            
           
            // playFuntion(mystical);
        });

        function enjoy() {
           
            location.href = "./src/pages/game.html";
            console.log("Clicks");
        }



//FUNCION PLAY
const play = ( id: HTMLMediaElement) => id.play()


enjoyButton?.addEventListener("mouseover", function () {

    mystical.src="/src/sounds/mystical.mp3"
    console.log(mystical)
  mystical.play()
})

