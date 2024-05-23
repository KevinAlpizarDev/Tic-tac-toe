
// ESTABLECE UN BACKGROUND POR DEFECTO
 document.getElementById("main")!.style.backgroundImage = "url('../img/game.jpg";
// BOTONES A LOS CUALES REACCIONAR
let mode1 = document.getElementById("mode-1")
let mode2 = document.getElementById("mode-2")
 //FUNCION CON LAS REGLAS CSS
const backgrounChanger = (urlImg: string) => {
  document.getElementById("main")!.style.transition = "ease-in-out 1s"
  document.getElementById("main")!.style.backgroundImage = urlImg;
}
// FUNCION PARA LOS MOUSE SOBRE CUALQUIER BOTON DEL JUEGO
const backgroundFunction = (wichBoton:  HTMLElement | null, typeMouseEvent: string, OverOrOutImg: string) => {
  wichBoton!.addEventListener(typeMouseEvent,  () => {
    backgrounChanger(OverOrOutImg);
  });
}
//CAMBIO VISUAL DEL BACKGROUND CON MOUSEOVER DE LOS BOTONES 
backgroundFunction(mode1,"mouseover", "url('../img/Play-Arcade.png" )
backgroundFunction(mode2,"mouseover", "url('../img/The-Mind-Flayer..png")
//CAMBIO VISUAL DEL BACKGROUND CON MOUSEOVER DE LOA BOTONES
backgroundFunction(mode1,"mouseout", "url('../img/mv.jpg" )
backgroundFunction(mode2,"mouseout", "url('../img/mv.jpg")
//FUNCION REDIRECCION
const redirectFuntion = (where: string) => location.href = where;