const cellbuttonn = document.querySelectorAll(".cellButton") //Se toman los 9 botones por medio de la clase
const elementoPadre = document.querySelector(".nombre"); // Agregar el nodo 
const nombreUsuario = document.createElement("h2"); // Tipo de elemento
const textoh1 = document.createTextNode("WELCOME!"); // Seleccionar elemento padre 
// CREA EL ElEMENTO 
elementoPadre!.appendChild(nombreUsuario); // Resultado = "Kevin"
nombreUsuario.appendChild(textoh1);
// CONTADOR DE TURNO
let counter = 0 //Valor inicial
 const pulserCounter = () => counter ++  //PRIMERA FUNCION //Variable de ingremento
const toggleFunction = (counter: number) =>  counter % 2 === 0 //SEGUNDA FUNCION PARFUNTION //Recibe el valor counter como parametro
cellbuttonn.forEach((button, index) => { //LOOP PARA TODOS LOS BOTONES  //Recorro el boton especifico por su index
  button.addEventListener("click", () => { //Evento escucha por medio del parametro button
    if (toggleFunction(counter) && cellbuttonn[index].textContent == "") { //CONDICIONALES PARA CAMBIAR EL TEXTO DEL BOTON  //True ejecuta la funcion dentro del if
      cellbuttonn[index].textContent = "X"; //CAMBIA EL TEXTCONTENT POR MEDIO DE SU INDEX // "X" al boton especifico
pulserCounter()
allXPosicionsWin() ?   nombreUsuario.appendChild(textoh1).textContent =  "Winner 'X' 🏆" :   nombreUsuario.appendChild(textoh1) 

   nombreUsuario.appendChild(textoh1)
    } 
   if (!toggleFunction(counter) && cellbuttonn[index].textContent == "" ){
//CAMBIA EL TEXTCONTENT POR MEDIO DE SU INDEX
      cellbuttonn[index].textContent = "O"
//SE SUMA UNO AL CONTADOR

    pulserCounter()
    allOPosicionsWin() ?   nombreUsuario.appendChild(textoh1).textContent = "Winner 'O' 🏆":   nombreUsuario.appendChild(textoh1)
    
    }
  })
})
//Valores vara los parametros necesarios en la nuevas funciones
const firstCaracter = "X"
const secondCaracter = "O"
//Funtion llamada validate
const validate = ( position: number, caracter: string ) =>
   cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter && cellbuttonn[position].textContent == caracter

// VALIDA TODOS LOS GANES EN X
const allXPosicionsWin = () =>{
  // PRIMERA FILA HORIZONTAL
  return (validate(3, firstCaracter ) && validate(4, firstCaracter) && validate(5, firstCaracter )) || //con "X"
  // SEGUNDA FILA HORIZONTAL
validate(0, firstCaracter ) && validate(1, firstCaracter) && validate(2, firstCaracter ) || //con "X"
//   //TERCERA FILA HORIZONTAL
 (validate(6, firstCaracter ) && validate(7, firstCaracter) && validate(8, firstCaracter )) || //con "X"
// PRIMERA FILA VERTICAL
    (validate(0, firstCaracter ) && validate(3, firstCaracter) && validate(6, firstCaracter )) || //con "X"
  // SEGUNDA FILA VERTICAL
validate(1, firstCaracter ) && validate(4, firstCaracter) && validate(7, firstCaracter ) || //con "X"
//   //TERCERA FILA VERTICAL
 (validate(2, firstCaracter ) && validate(5, firstCaracter) && validate(8, firstCaracter )) || //con "X"
//   //FILA DIAGONAL 1
(validate(0, firstCaracter ) && validate(4, firstCaracter) && validate(8, firstCaracter )) || //con "X"
//   //FILA DIAGONAL 2
(validate(2, firstCaracter ) && validate(4, firstCaracter) && validate(6, firstCaracter ))  //con "X"
}
// VALIDA TODOS LOS GANES EN O
const allOPosicionsWin = () =>{
  // PRIMERA FILA HORIZONTAL
  return validate(3, secondCaracter ) && validate(4, secondCaracter) && validate(5, secondCaracter) || //CON "O"
  // SEGUNDA FILA HORIZONTAL
  validate(0, secondCaracter ) && validate(1, secondCaracter) && validate(2, secondCaracter) ||//CON "O"
//TERCERA FILA HORIZONTAL
   validate(6, secondCaracter ) && validate(7, secondCaracter) && validate(8, secondCaracter) || //CON "O"
// PRIMERA FILA VERTICAL
  validate(0, secondCaracter ) && validate(3, secondCaracter) && validate(6, secondCaracter) || //CON "O"
  // SEGUNDA FILA VERTICAL
  validate(1, secondCaracter ) && validate(4, secondCaracter) && validate(7, secondCaracter) ||//CON "O"
//TERCERA FILA VERTICAL
   validate(2, secondCaracter ) && validate(5, secondCaracter) && validate(8, secondCaracter) ||//CON "O"
//FILA DIAGONAL 1
validate(0, secondCaracter ) && validate(4, secondCaracter) && validate(8, secondCaracter) ||//CON "O"
 //FILA DIAGONAL 2
validate(2, secondCaracter ) && validate(4, secondCaracter) && validate(6, secondCaracter) //CON "O"
}

// //LOGICA DE REPRODUCCION
const audioPlayer = (document.getElementById('pasar') as HTMLMediaElement);
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');


let counterIndexSong = 1

//EVENTOS DE ESCUCHA DE LOS RADIO BOTONES

//ESCUCHA CLICK DEL BOTON PLAY
playButton?.addEventListener("click", function () {
  playSong()
})
//ESCUCHA CLICK DEL BOTON PAUSE
pauseButton?.addEventListener("click", function () {
  pauseSong()
})
//ESCUCHA CLICK DEL BOTON NEXT
nextButton?.addEventListener("click", function () {
  nextSong()
})

//FUNCIONES RADIO ACTIONS 

//FUNCION PLAY
const playSong = () => {
  audioPlayer.src=`/src/sounds/music-${counterIndexSong}.mp3`
  console.log(audioPlayer)
  audioPlayer.play()
}
//FUNCION PAUSE
const pauseSong = () => {
  audioPlayer.src=`/src/sounds/music-${counterIndexSong}.mp3`
  console.log(audioPlayer)
  audioPlayer.pause()
}
//FUNCION NEXT
const nextSong = () => {
 counterIndexSong < 4 ? counterIndexSong++:  counterIndexSong = 1 ;
  audioPlayer.src=`/src/sounds/music-${counterIndexSong}.mp3`
  console.log(audioPlayer)
  audioPlayer.play()
}

// BOTONES DE OPCIONES
const resetButton = document.getElementById('reset-button');
const exitButton = document.getElementById('exit-button');
//BOTON RESET GAME 
resetButton?.addEventListener("click", function () {
  location.reload();
})
//BOTON REDIRECTION GAME 
exitButton?.addEventListener("click", function () {
  location.href = "/src/pages/game.html";
})

