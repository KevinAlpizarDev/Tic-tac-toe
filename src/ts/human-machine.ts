// const cellbuttonn = document.querySelectorAll(".cellButton") //Se toman los 9 botones por medio de la clase
// document.getElementById("header")!.innerHTML = "INITIAL TEXT!" //Se toma el Id header y se le asigna un contenido

// //DECLARACION DE FUNCIONES
// let counter = 0 //VALOR INICIAL
// //PRIMERA FUNCION
//  const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
// //SEGUNDA FUNCION PARFUNTION
// const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 

// //LOOP BUTTON
// cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX
//   button.addEventListener("click", () => {
  
     
//     if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //TRUE EJECUTA LA FUNCNION DENTRO DEL IF

//       cellbuttonn[index].textContent = "x";// "X" al boton especifico

//       pulserCounter();
       
//     } else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){

//       cellbuttonn[index].textContent = "0"
//       pulserCounter();
       

//     }
// //OPERADOR TERNARIO 
// allPosicionsWin() ? document.getElementById("header")!.innerHTML = "WINNER!" : document.getElementById("header")!.innerHTML = "NOTHING";

//   })

// })




const cellbuttonn = document.querySelectorAll(".cellButton") //Se toman los 9 botones por medio de la clase
document.getElementById("header")!.innerHTML = "INITIAL TEXT!" //Se toma el Id header y se le asigna un contenido

let counter = 0 //Valor inicial

 const pulserCounter = () => counter ++  //PRIMERA FUNCION //Variable de ingremento 
const toggleFunction = (counter: number) =>  counter % 2 === 0 //SEGUNDA FUNCION PARFUNTION //Recibe el valor counter como parametro 
cellbuttonn.forEach((button, index) => { //LOOP PARA TODOS LOS BOTONES  //Recorro el boton especifico por su index 
  button.addEventListener("click", () => { //Evento escucha por medio del parametro button
    if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //CONDICIONALES PARA CAMBIAR EL TEXTO DEL BOTON  //True ejecuta la funcion dentro del if
      cellbuttonn[index].textContent = "x"; //CAMBIA EL TEXTCONTENT POR MEDIO DE SU INDEX // "X" al boton especifico
//SE SUMA UNO AL CONTADOR|
      // pulserCounter()
      console.log( pulserCounter());
      
    } else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){
//CAMBIA EL TEXTCONTENT POR MEDIO DE SU INDEX
      cellbuttonn[index].textContent = "o"
//SE SUMA UNO AL CONTADOR
    // pulserCounter()
    console.log( pulserCounter());
    }
//OPERADOR TERNARIO 
allPosicionsWin() ? document.getElementById("header")!.innerHTML = "WINNER!" : document.getElementById("header")!.innerHTML = "NOTHING";
  })

})
//Valores vara los parametros necesarios en la nuevas funciones
const firstCaracter = "x"
const secondCaracter = "o"

//Funtion llamada validate              
const validate = ( position: number, caracter: string ) =>
   cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter

const allPosicionsWin = () =>{
  // PRIMERA FILA HORIZONTAL
  return (validate(3, firstCaracter ) && validate(4, firstCaracter) && validate(5, firstCaracter )) || //con "X" 
  validate(3, secondCaracter ) && validate(4, secondCaracter) && validate(5, secondCaracter) || //CON "O"
  // SEGUNDA FILA HORIZONTAL
validate(0, firstCaracter ) && validate(1, firstCaracter) && validate(2, firstCaracter ) || //con "X" 
  validate(0, secondCaracter ) && validate(1, secondCaracter) && validate(2, secondCaracter) ||//CON "O"
//   //TERCERA FILA HORIZONTAL
 (validate(6, firstCaracter ) && validate(7, firstCaracter) && validate(8, firstCaracter )) || //con "X" 
    validate(6, secondCaracter ) && validate(7, secondCaracter) && validate(8, secondCaracter) || //CON "O"
// PRIMERA FILA VERTICAL
    (validate(0, firstCaracter ) && validate(3, firstCaracter) && validate(6, firstCaracter )) || //con "X" 
  validate(0, secondCaracter ) && validate(3, secondCaracter) && validate(6, secondCaracter) || //CON "O"
  // SEGUNDA FILA VERTICAL
validate(1, firstCaracter ) && validate(4, firstCaracter) && validate(7, firstCaracter ) || //con "X" 
  validate(1, secondCaracter ) && validate(4, secondCaracter) && validate(7, secondCaracter) ||//CON "O"
//   //TERCERA FILA VERTICAL
 (validate(2, firstCaracter ) && validate(5, firstCaracter) && validate(8, firstCaracter )) || //con "X" 
    validate(2, secondCaracter ) && validate(5, secondCaracter) && validate(8, secondCaracter) ||//CON "O"
//   //FILA DIAGONAL 1
(validate(0, firstCaracter ) && validate(4, firstCaracter) && validate(8, firstCaracter )) || //con "X" 
validate(0, secondCaracter ) && validate(4, secondCaracter) && validate(8, secondCaracter) ||//CON "O"
//   //FILA DIAGONAL 2
(validate(2, firstCaracter ) && validate(4, firstCaracter) && validate(6, firstCaracter )) || //con "X" 
validate(2, secondCaracter ) && validate(4, secondCaracter) && validate(6, secondCaracter) //CON "O"

}






 
