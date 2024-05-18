
let enjoyButton  = document.getElementById("enjoy-button")!
// let price = document.getElementById("price")
// let addButton = document.getElementById("add-button")

// let productData: null = JSON.parse(localStorage.getItem("productData")) || []

// // console.log(productData);

// addButton!.addEventListener("click", function () {


// let characterName = {
//     product: product.value,
//     unities: unities.value,
//     price: price.value

// }

// productData.push(data);
// // console.log(productData);


// localStorage.setItem("productData", JSON.stringify(productData))




// })

// EVENTO DE ESCUCHA AL BOTON ENJOY
// <button onclick="myFunction()">Take me to w3schools.com</button>

enjoyButton.addEventListener("click", function () {
    enjoy()
})

function enjoy() {
  location.href = "./src/pages/game.html";
}