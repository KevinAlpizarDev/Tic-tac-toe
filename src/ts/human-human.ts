
const cellButtons = document.querySelectorAll(".demoButtons")
document.getElementById("demo")!.innerHTML = "Playing"
//CONTADOR DE TURNOS 
let demoCounter = 1;
const demoPulser = () => demoCounter++
// console.log(demoPulser());
//////////////////////
//Declaramos la variable para ver el largo del NodeList
const demoLength = cellButtons.length // 9

//FUNCNION RANDOM
const demoRandom = () => Math.floor(Math.random() * demoLength);

///////////////////////Recibe el contador como parametro 
const demoPulse= (demoCounter:number) => demoCounter % 2 == 0

cellButtons.forEach((button, index) => {
    button!.addEventListener("click", () => {
        cellButtons[index].innerHTML="X"
        if (demoPulse(demoCounter) && cellButtons[index].textContent == "") { 
            // alert("Nada")
            cellButtons[index].innerHTML = "x"
      
            console.log(demoPulser());
   
        } else if (demoPulse(demoCounter) && cellButtons[index].textContent == "x" ||  cellButtons[index].textContent == "o" ) {
            console.log(demoPulser());
       
        } else {

            console.log(demoPulser());
            
            console.log("hola")

            let valor = Math.floor(Math.random()*8)

            console.log(valor)
           

            setTimeout(() => {
                cellButtons[valor].innerHTML = "o"
            }, 1000);
            console.log(cellButtons[demoRandom()]);
            
        }

        
        
    } )
});

