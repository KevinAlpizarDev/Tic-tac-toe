const cellbuttonn = document.querySelectorAll(".cellButton")


//DECLARACION DE FUNCIONES
let counter = 0 //VALOR INICIAL
 const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
//SEGUNDA FUNCION PARFUNTION
const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 
//LOOP BUTTON
cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX
  button.addEventListener("click", () => {
    pulserCounter()//FUNCION A EJECUTAR
    if (!toggleFunction(counter)) { //TRUE EJECUTA LA FUNCNION DENTRO DEL IF
      cellbuttonn[index].textContent = "X";// "X" al boton especifico
    } else{
      cellbuttonn[index].textContent = "0";// "X" al boton especifico
    }
  })
})

 