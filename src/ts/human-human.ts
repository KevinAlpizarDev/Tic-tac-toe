
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

const cellButtons = document.querySelectorAll('.cellButton');  //NodeListOf<Element>

cellButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        cellButtons[index].textContent = "X";
    })
})



// for (let i= 0; i < cellButtons.length; i++) {
   
//     cellButtons[i].addEventListener("click", () =>{

// console.log(cellButtons);


//     })
// }


//const cellButtons = document.querySelectorAll('.cellButton');  //NodeListOf<Element>
let clickCellCount = 0;
document.querySelectorAll('.cellButton')
 

 

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



