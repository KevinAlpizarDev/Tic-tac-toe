
///////////////////////////////////////////

const cellButtons = document.querySelectorAll(".demoButtons")
document.getElementById("demo")!.innerHTML = "Playing"
//CONTADOR DE TURNOS 
let demoCounter = 0;
const demoPulser = () => demoCounter++
//Declaramos la variable para ver el largo del NodeList
const demoLength = cellButtons.length // 9
//FUNCNION RANDOM
const demoRandom = () => Math.floor(Math.random() * demoLength);
///////////////////////Recibe el contador como parametro 
const demoPulse= (demoCounter:number) => demoCounter % 2 == 0
//////////////////////////////////////


//CREAMOS LA LOGICA PARA VALIDAR ESPACIOS Y NO CAER ENCIMA
const validateFunction = () => {
let spaces: number[] = []

for (let i = 0; i < cellButtons.length; i++) {
    
if (cellButtons[i].innerHTML == "") {
    
    spaces.push(i)
    console.log(spaces);
    
} if (spaces.length > 0) {
    let secondIndex = Math.floor(Math.random() * spaces.length  )
    return spaces[secondIndex];

  
}

return null

    
}


} 


cellButtons.forEach((button, index) => {
    button!.addEventListener("click", () => {
        cellButtons[index].innerHTML="x"
        if (cellButtons[index].textContent == "") { 
            console.log(1);
            cellButtons[index].innerHTML = "x"
            demoPulser()
            

    
// validateFunction() 
        }
        else{
            setTimeout(() => {
                cellButtons[demoRandom()].innerHTML = "o"
               
// if (validateFunction() != null) {
    
// cellButtons[index] == "o"

    
// }

                // validateFunction() 
            }, 1000);
            demoPulser()
        }
    } )
});




