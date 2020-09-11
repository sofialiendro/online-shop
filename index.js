const busquedaProductos = document.querySelector("#buscar-productos")
const tarjetas = document.getElementsByTagName("article")
const filtroPuntaje = document.getElementsByClassName("rating-checkbox")
const botonLimpiar = document.querySelector(".filters-clear-btn")
const productos = document.getElementsByClassName("productos")
const filtroCategoria = document.getElementsByClassName("categorias")

const carrito = document.querySelector(".carrito")
const subtotal = document.querySelector("#subtotal")
const total = document.querySelector("#total")
const recargoParrafo = document.querySelector("#recargo")
const checkboxTarjeta = document.querySelector("#tarjeta")
const botonMostrarCarrito = document.querySelector("#abrir-carrito")
const botonOcultarCarrito = document.querySelector("#cerrar-carrito")

const subtotalProductos = 5999

carrito.classList.add("no-mostrar")

botonMostrarCarrito.onclick = () => {
  subtotal.textContent = subtotalProductos
 carrito.classList.remove("no-mostrar")
}

botonOcultarCarrito.onclick = () => {
  carrito.classList.add("no-mostrar")
}

checkboxTarjeta.onclick = () => {
  const recargo = subtotalProductos * 0.1
  recargoParrafo.textContent = recargo
  total.textContent = subtotalProductos + recargo
}



// Búsqueda

busquedaProductos.oninput = () => {
    
    for (let tarjeta of tarjetas) {
        
        const titulo = tarjeta.dataset.nombre
        const busqueda = busquedaProductos.value
        
        if (titulo.includes(busqueda)) {
            tarjeta.classList.remove("no-mostrar")
        }

        else {
            tarjeta.classList.add("no-mostrar")
        }
    }
}



// Filtro puntaje

for (let checkbox of filtroPuntaje) {
    checkbox.onclick = () => {
        filtrarTarjetas()
    }       
}        

const checkboxSeleccionado = () => {
    for (let checkbox of filtroPuntaje) {
        if (checkbox.checked) {
            return true
        }
    }

    for (let checkbox of filtroCategoria) {
        if (checkbox.checked) {
            return true
        }
    }
} 

const coincidenCheckboxYTarjeta = tarjeta => {
    const puntaje = tarjeta.dataset.puntaje
    for (let checkbox of filtroPuntaje) {
        if (checkbox.value === puntaje && checkbox.checked) {
            return true
        }
    }

    const categories = tarjeta.dataset.categoria
    for (let checkbox of filtroCategoria) {
        if (checkbox.value === categories && checkbox.checked) {
            return true
        }
    }
}

const filtrarTarjetas = () => {
    for (let tarjeta of tarjetas) {
      tarjeta.classList.add("no-mostrar")
      if (checkboxSeleccionado()) {
        if (coincidenCheckboxYTarjeta(tarjeta)) {
          tarjeta.classList.remove("no-mostrar")
        }
      }
      else {
        tarjeta.classList.remove("no-mostrar")
      }
    }
}



// Botón limpiar

botonLimpiar.onclick = () => {

    busquedaProductos.value = ""
    for (let checkbox of checkboxes) {
      checkbox.checked = false 
    }
    tarjeta.classList.remove("no-mostrar")
}




// Filtro categorías

for (let checkbox of filtroCategoria) {
    checkbox.onclick = () => {
        filtrarTarjetas()
    }       
}        



