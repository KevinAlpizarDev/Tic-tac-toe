
// ESTABLECE UN BACKGROUND POR DEFECTO
 document.getElementById("main")!.style.backgroundImage = "url('../img/mv.jpg";
// BOTONES A LOS CUALES REACCIONAR
let mode1 = document.getElementById("mode-1")
let mode2 = document.getElementById("mode-2")
 
let urlImg: string;
const backgrounChanger = (urlImg: string) => {
  document.getElementById("main")!.style.transition = "ease-in-out 1s"
  document.getElementById("main")!.style.backgroundImage = urlImg;
}
// EVENTO DE ESCUCHA A EL MODO1 y MODO2
// FUNCION PARA LOS MOUSE SOBRE CUALQUIER BOTON DEL JUEGO
const backgroundFunction = (wichBoton:  HTMLElement | null, typeMouseEvent: string, OverOrOutImg: string) => {
  wichBoton!.addEventListener(typeMouseEvent,  () => {
    backgrounChanger(OverOrOutImg);
  });
}

// Cambio visual del background con mouseover de los botones
backgroundFunction(mode1,"mouseover", "url('../img/03stranger-2-superJumbo-v2.jpg" )
backgroundFunction(mode2,"mouseover", "url('../img/fotonoticia_20170928112151_1200.jpg")

// Cambio visual del background con mouseover de los botones
backgroundFunction(mode1,"mouseout", "url('../img/mv.jpg" )
backgroundFunction(mode2,"mouseout", "url('../img/mv.jpg")
