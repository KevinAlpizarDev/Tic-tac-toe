const cellbuttonn = document.querySelectorAll(".cellButton")
//TRAIGO EL H1 DEL HTML



// console.log(cellbuttonn.length);


//DECLARACION DE FUNCIONES
let counter = 0 //VALOR INICIAL
//PRIMERA FUNCION
 const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
//SEGUNDA FUNCION PARFUNTION
const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 

let button: Element;
//LOOP BUTTON
cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX
  button.addEventListener("click", () => {

     //pulserCounter()//EJECUTA LA FUNCNION
     //console.log(pulserCounter());
     
    if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //TRUE EJECUTA LA FUNCNION DENTRO DEL IF

      cellbuttonn[index].textContent = "x";// "X" al boton especifico
   
   

      pulserCounter()
    //  console.log( pulserCounter());
     
      // console.log(cellbuttonn[index].textContent)
       
    } else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){
     
      cellbuttonn[index].textContent = "o"
// console.log(pulserCounter());
pulserCounter()
      // console.log( pulserCounter());
      // console.log(cellbuttonn[index].textContent)

    }

if (validate(0) ) {
  console.log("You got it");
  
}



  })

})


const validate = ( position: number ) => cellbuttonn[position].textContent == "x"|| cellbuttonn[position].textContent == "o"

