const buscarProductos = document.querySelector("#buscar-productos")
const titulo = document.querySelector(".product-name")

buscarProductos.oninput = () => {
    console.log(titulo.textContent)
    console.log(buscarProductos.value)
}