// BOTONES A LOS CUALES REACCIONAR
let mode1 = document.getElementById("mode-1")
let mode2 = document.getElementById("mode-2")

// ESTABLECE UN BACKGROUND POR DEFECTO
 document.getElementById("main")!.style.backgroundImage = "url('../img/mv.webp";

 //FUNCION QUE ALMACENA LAS ACCIONES A EJECUTAR
// function backgrounChanger() {
//   document.getElementById("main")!.style.backgroundImage = "url('../img/bike.webp";
// }
function backgrounChanger(urlImg: string) {
  document.getElementById("main")!.style.transition = "ease-in-out 1s";
  document.getElementById("main")!.style.backgroundImage = urlImg;
  // document.getElementById("main")!.style.backgroundColor = "red";
  // document.getElementById("main")!.style.opacity= "0.9";
  
}




 //FUNCION QUE ALMACENA LAS ACCIONES A EJECUTAR
function normalBackground(urlImg: string) {
  document.getElementById("main")!.style.transition = "ease-in-out 1s";
document.getElementById("main")!.style.backgroundImage = urlImg;
// document.getElementById("main")!.style.opacity= "1";
}


// EVENTO DE ESCUCHA A EL MODO1
mode1!.addEventListener("mouseover", function () {
  backgrounChanger("url('../img/03stranger-2-superJumbo-v2.jpg");
  console.log(4);
});
mode1!.addEventListener("mouseout", function () {
normalBackground("url('../img/mv.webp')")
  console.log(4);
});


// EVENTO DE ESCUCHA A EL MODO1
mode2!.addEventListener("mouseover", function () {
  backgrounChanger("url('../img/fotonoticia_20170928112151_1200.jpg");
  console.log(4);
});
mode2!.addEventListener("mouseout", function () {
normalBackground("url('../img/mv.webp')")
  console.log(4);
});



