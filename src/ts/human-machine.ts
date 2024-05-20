const cellbuttonn = document.querySelectorAll(".cellButton")

//DECLARACION DE FUNCIONES
let counter = 0 //VALOR INICIAL
//PRIMERA FUNCION
 const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
//SEGUNDA FUNCION PARFUNTION
const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 

//LOOP BUTTON
cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX
  button.addEventListener("click", () => {
  
     
    if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //TRUE EJECUTA LA FUNCNION DENTRO DEL IF

      cellbuttonn[index].textContent = "x";// "X" al boton especifico

      pulserCounter();
       
    } else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){

      cellbuttonn[index].textContent = "0"
      pulserCounter();
       

    }
  })

})









 