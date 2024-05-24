////////////////////////////////////////////////////////////////////
const cellButtons = document.querySelectorAll(".demoButtons")
// document.getElementById("demo")!.innerHTML = "Playing"
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
        cellButtons[index].innerHTML="X"
      
        setTimeout(() => {
            validateFunction()
        }, 1000); // Ajusta el tiempo de retraso según sea necesario

            demoPulser()
            allPosicionsWin2() ?     nombreUsuario2.appendChild(textoh12).textContent = "En buena hora" :  nombreUsuario2.appendChild(textoh12)   ;
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
        cellButtons[i].innerHTML="O"
        return spaces[secondIndex];
    }
}} 



//VALIDACIONES DE GANES 

//Valores vara los parametros necesarios en la nuevas funciones
const firstCaracter2 = "X"
const secondCaracter2 = "O"
//Funtion llamada validate
const validate2 = ( position: number, caracter: string ) =>
  cellButtons[position].textContent == caracter && cellButtons[position].textContent == caracter && cellButtons[position].textContent == caracter;

const allPosicionsWin2 = () =>{
  // PRIMERA FILA HORIZONTAL
  return (validate2(3, firstCaracter2 ) && validate2(4, firstCaracter2) && validate2(5, firstCaracter2 )) || //con "X"
  validate2(3, secondCaracter2 ) && validate2(4, secondCaracter2) && validate2(5, secondCaracter2) || //CON "O"
  // SEGUNDA FILA HORIZONTAL
validate2(0, firstCaracter2 ) && validate2(1, firstCaracter2) && validate2(2, firstCaracter2 ) || //con "X"
  validate2(0, secondCaracter2 ) && validate2(1, secondCaracter2) && validate2(2, secondCaracter2) ||//CON "O"
//   //TERCERA FILA HORIZONTAL
 (validate2(6, firstCaracter2 ) && validate2(7, firstCaracter2) && validate2(8, firstCaracter2 )) || //con "X"
    validate2(6, secondCaracter2 ) && validate2(7, secondCaracter2) && validate2(8, secondCaracter2) || //CON "O"
// PRIMERA FILA VERTICAL
    (validate2(0, firstCaracter2 ) && validate2(3, firstCaracter2) && validate2(6, firstCaracter2 )) || //con "X"
  validate2(0, secondCaracter2 ) && validate2(3, secondCaracter2) && validate2(6, secondCaracter2) || //CON "O"
  // SEGUNDA FILA VERTICAL
validate2(1, firstCaracter2 ) && validate2(4, firstCaracter2) && validate2(7, firstCaracter2 ) || //con "X"
  validate2(1, secondCaracter2 ) && validate2(4, secondCaracter2) && validate2(7, secondCaracter2) ||//CON "O"
//   //TERCERA FILA VERTICAL
 (validate2(2, firstCaracter2 ) && validate2(5, firstCaracter2) && validate2(8, firstCaracter2 )) || //con "X"
    validate2(2, secondCaracter2 ) && validate2(5, secondCaracter2) && validate2(8, secondCaracter2) ||//CON "O"
//   //FILA DIAGONAL 1
(validate2(0, firstCaracter2 ) && validate2(4, firstCaracter2) && validate2(8, firstCaracter2 )) || //con "X"
validate2(0, secondCaracter2 ) && validate2(4, secondCaracter2) && validate2(8, secondCaracter2) ||//CON "O"
//   //FILA DIAGONAL 2
(validate2(2, firstCaracter2 ) && validate2(4, firstCaracter2) && validate2(6, firstCaracter2 )) || //con "X"
validate2(2, secondCaracter2 ) && validate2(4, secondCaracter2) && validate2(6, secondCaracter2) //CON "O"
}



//////////////////////////////////////////////////////

//RESET AND QUIT BUTTON 
const resetButton2 = document.getElementById('reset-button');
const exitButton2 = document.getElementById('exit-button');


resetButton2?.addEventListener("click", function () {
    location.reload();
  })
  
  
  exitButton2?.addEventListener("click", function () {
    location.href = "/src/pages/game.html";
  })
  

  const elementoPadre2 = document.querySelector(".nombre"); // Agregar el nodo 
const nombreUsuario2 = document.createElement("h2"); // Tipo de elemento
const textoh12 = document.createTextNode("Good lock!"); // Seleccionar elemento padre 

// Resultado = "Kevin"
elementoPadre2!.appendChild(nombreUsuario2);
  nombreUsuario2.appendChild(textoh12);