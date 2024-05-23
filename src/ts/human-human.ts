const cellbuttonn = document.querySelectorAll(".cellButton") //Se toman los 9 botones por medio de la clase
// document.getElementById("header")!.innerHTML = "INITIAL TEXT!" //Se toma el Id header y se le asigna un contenido

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
// allPosicionsWin() ? document.getElementById("header")!.innerHTML = "WINNER!" : document.getElementById("header")!.innerHTML = "NOTHING";
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

//////////////////DOBLE FOR//////////////////////////////////////////////////////////////////////////////////
// for(startx;startx <= endx; startx++){
//   for(starty; starty <= endy; starty++){ 
//    console.log(startx, endx, starty, endy); 
//  } }



///////////////////////////LOGICA DE REPRODUCCION



// const songs = ['music-1.mp3', 'music-2.mp3', 'music-3.mp3'];
// let currentSongIndex = 0;

const audioPlayer = (document.getElementById('play-button') as HTMLMediaElement);
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');



let counterIndexSong = 0
const bestFun = () => {
// counterIndexSong < 3 ? counterIndexSong++:  counterIndexSong = 0 ;
audioPlayer!.src = '/src/sounds/music-' + counterIndexSong + ".mp3";


console.log(typeof audioPlayer!.src );

}


  audioPlayer!.addEventListener("click", function () {
    
   counterIndexSong < 3 ? counterIndexSong++:  counterIndexSong = 0 ;

    bestFun()
  })

  const plays = ( id: HTMLMediaElement, specificSong: string) => id.play()








