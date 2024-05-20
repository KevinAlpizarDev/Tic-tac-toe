const cellbuttonn = document.querySelectorAll(".cellButton")

// console.log(cellbuttonn.length);



//DECLARACION DE FUNCIONES
let counter = 0 //VALOR INICIAL
//PRIMERA FUNCTION COUNTER
 const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
//SEGUNDA FUNCION PARFUNCTION
const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 

//LOOP BUTTON
cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX


  button.addEventListener("click", () => {
    
console.log(pulserCounter());
console.log(toggleFunction(counter));



    if (!toggleFunction || cellbuttonn[index].textContent === "" ) {
      cellbuttonn[index].textContent = "x"
      toggleFunction(counter)
      
    }else if ( cellbuttonn[index].textContent === "0" || toggleFunction(counter)) {
     
      toggleFunction(counter)
    }

  })
})



 