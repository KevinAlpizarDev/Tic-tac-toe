
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
cellButtons.forEach((button, index) => {
    button!.addEventListener("click", () => {
        cellButtons[index].innerHTML="x"
        if (cellButtons[index].textContent == "") { 
            console.log(1);
            cellButtons[index].innerHTML = "x"
            demoPulser()
        }
        else{
            setTimeout(() => {
                cellButtons[demoRandom()].innerHTML = "o"
            }, 1000);
            demoPulser()
        }
    } )
});

