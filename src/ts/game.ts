//Funcion para cambiar de color el background con un evento de escucha


{/* <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="smiley.gif" alt="Smiley" width="32" height="32">

<p>The function bigImg() is triggered when the user moves the mouse pointer over the image.</p>
<p>The function normalImg() is triggered when the mouse pointer is moved out of the image.</p>
 */}
//ID Y COLOR
//class-button

// const optionSelectors = document.querySelectorAll('.option-selector');  //NodeListOf<Element>

// optionSelectors.forEach((button, index) => {
//   button.addEventListener("mouseout", (e) => {


//   })
// })
console.log(8);

function backgrounChanger() {
  
  //  (document as any).main.style.backgroundImage = "url('./src/img/im.jpg')";

  //  (document as any).main.style.backgroundSize = "1200px 1200px";
  //  (document as any).main.style.backgroundRepeat = "no-repeat"
  document.getElementById('main')!.style.backgroundImage = "url('./src/img/bike.webp')";
  document.getElementById('main')!.style.backgroundSize = "cover";
  document.getElementById('main')!.style.backgroundRepeat = "no-repeat";
}


function normalBackground() {
  
  document.body.style.backgroundImage = "url('./src/img/bike.webp')";
  "1000px 600px"
document.body.style.backgroundSize = "100% 500px";
  document.body.style.backgroundRepeat = "no-repeat"

  
}


// function backgrounChanger2() {
//   // document.body.style.backgroundColor = "blue";
//   document.body.style.backgroundImage = "url('./src/img/first-mode-background.webp')";
//   document.body.style.backgroundSize = "1000px 600px"
//   document.body.style.backgroundRepeat = "no-repeat"
// }



// function backgrounChanger() {
//   x.style.backgroundColor = "red";

// }

// function normalImg(x) {
//   x.style.height = "32px";
//   x.style.width = "32px";
// }


// function backgroundChanger(id, color) {
//   x.style.height = "64px";
//   x.style.width = "64px";
// }





// function normalImg(x) {
//   x.style.height = "32px";
//   x.style.width = "32px";
// }