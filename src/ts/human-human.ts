
//Estudiar javascript en 1,25 y hacer los ejercicios
//Con el video de Johans ver como hacer un true o false para ambos jugadores
//Crear evento click para cada boton especific
// buscar el boton en un for primero //jonas

// crear una funcnion que reciba dos argumentos fila, columna
//Intentar css con estar wars o strange
//Crear funcnion
//Buscar como cambie el tamaño de las imagenes
//Crear un contador de turnos para el backgron changer

//Crear barra de progreso
//Modal en algumn lugar, un solo boton

//Crear una funcnion para
//averiguar turno maximo turno minimo
//estructurar css y html

// function backgroundChanger() {

// }


/////////////////////////////////////////////

// const cellButtons = document.querySelectorAll('.cellButton');  //NodeListOf<Element>

// cellButtons.forEach((button, index) => {
//     button.addEventListener("click", (e) => {
//         cellButtons[index].textContent = "X";
//     })
// })



// for (let i= 0; i < cellButtons.length; i++) {
   
//     cellButtons[i].addEventListener("click", () =>{

// console.log(cellButtons);


//     })
// }


//const cellButtons = document.querySelectorAll('.cellButton');  //NodeListOf<Element>
// let clickCellCount = 0;
// document.querySelectorAll('.cellButton')
 

 

// cellButtons!let pulser =  clickCellCount ++
// const totalButtons = 9
// let remainingturns = totalButtons - pulser
// //   pulser  <= totalButtons ? console.log(pulser): clickCellCount = 9
// // pulser <= totalButtons ? remainingturns
// //  : pulser = 9
// // console.log(pulser);
// remainingturns >= 0 ? pulser : remainingturns = 0
// console.log(remainingturns);

// document.querySelectorAll('.cellButton')
// })

/////////////////////////////////////////////////////////////////////////

// const cellbuttonn = document.querySelectorAll(".cellButton")


// //DECLARACION DE FUNCIONES
// let counter = 0 //VALOR INICIAL
// //PRIMERA FUNCION
//  const pulserCounter = () => counter ++  //VARIABLE DE INCREMENTO
// //SEGUNDA FUNCION PARFUNTION
// const toggleFunction = (counter: number) =>  counter % 2 === 0 //RECIBE LA VARIABLE COUNTER COMO PARAMETRO 

//LOOP BUTTON
// cellbuttonn.forEach((button, index) => {//RECORRO LOS BOTONES ESPECIFICOS POR SU INDEX
//   button.addEventListener("click", () => {

//      //pulserCounter()//EJECUTA LA FUNCNION
//      //console.log(pulserCounter());
     
//     if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //TRUE EJECUTA LA FUNCNION DENTRO DEL IF

//       cellbuttonn[index].textContent = "x";// "X" al boton especifico

//      console.log( pulserCounter());
     
//       console.log(cellbuttonn[8].textContent)
       
//     } else if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){

//       cellbuttonn[index].textContent = "0"

//       // console.log( pulserCounter());
//       console.log(cellbuttonn[index].textContent)

//     }
    

//   })

// })



const cellButtons = document.querySelectorAll(".demoButtons")
document.getElementById("demo")!.innerHTML = "Playing"


let demoCounter = 0;

const demoPulser = () => demoCounter++

// console.log(demoPulser);



cellButtons.forEach((button, index) => {
    button!.addEventListener("click", function() {


console.log(cellButtons[index]);



    } )
});



// const demogorgon = () => 