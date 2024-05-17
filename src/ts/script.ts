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

console.log(6);

function backgrounChanger() {
  document.body.style.backgroundImage = "url('./src/img/background-image-reverse-3000px.jpg')";
  document.body.style.backgroundSize = "1200px 1200px"
  document.body.style.backgroundRepeat = "no-repeat"
  

}
function backgrounChanger2() {
  // document.body.style.backgroundColor = "blue";
  document.body.style.backgroundImage = "url('./src/img/first-mode-background.webp')";
  document.body.style.backgroundSize = "1000px 600px"
  document.body.style.backgroundRepeat = "no-repeat"
}

function normalBackground() {
  // document.body.style.backgroundColor = "aqua";
  document.body.style.backgroundImage = "url('./src/img/default-backgound-body.webp')";

  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"


}





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