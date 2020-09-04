const busquedaProductos = document.querySelector("#buscar-productos")
const tarjetas = document.getElementsByTagName("article")
const filtroPuntaje = document.getElementsByClassName("rating")


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


for (let filtrosCheckbox of filtroPuntaje) {
    filtrosCheckbox.onclick = () => {
        
        for (let tarjeta of tarjetas) {
            if (filtrosCheckbox.checked) {
                const puntajeFiltro = tarjeta.dataset.puntaje

                if (filtrosCheckbox.value === puntajeFiltro) {
                    tarjeta.classList.remove("no-mostrar")
                }
                else {
                    tarjeta.classList.add("no-mostrar")
                }
            }
            else {
                tarjeta.classList.remove("no-mostrar")
            }
        }
    }
}