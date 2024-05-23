
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

//TURNO HUMANO
cellButtons.forEach((button, index) => {
    button!.addEventListener("click", () => {
        cellButtons[index].innerHTML="x"
            validateFunction()
            demoPulser()
    } )
});

//CREAMOS LA LOGICA PARA VALIDAR ESPACIOS Y NO CAER ENCIMA
const validateFunction = () => {
let spaces: number[] = []

for (let i = 0; i < cellButtons.length; i++) {
    if (cellButtons[i].textContent === "") {
        spaces.push(i)
    } 
    if (spaces.length > 0) {
        let secondIndex = Math.floor(Math.random() * spaces.length  )
        console.log(secondIndex)
        cellButtons[i].innerHTML="o"
        return spaces[secondIndex];
    }
}} 
