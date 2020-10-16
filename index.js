
const busquedaProductos = document.querySelector("#buscar-productos");
const tarjetas = document.getElementsByTagName("article");
const filtroPuntaje = document.getElementsByClassName("rating-checkbox");
const botonLimpiar = document.querySelector(".filters-clear-btn");
const productos = document.getElementsByClassName("productos");
const filtroCategoria = document.getElementsByClassName("categorias");

const carrito = document.querySelector(".carrito");
const botonMostrarCarrito = document.querySelector("#abrir-carrito");
const botonOcultarCarrito = document.querySelector("#cerrar-carrito");
const overlay = document.getElementById("overlay");

const botonLista = document.querySelector(".fa-list");
const contenedorProductos = document.querySelector(".contenedor-seccion-productos");
const tarjetasProducto = document.querySelectorAll(".producto");
const botonGrilla = document.querySelector(".fa-th");
const descripcionProducto = document.querySelectorAll(".descripcion-producto");
const botonesListaAgregarCarrito = document.querySelectorAll(".add-to-cart-btn");
const contenedoresProductos = document.querySelectorAll(".product-body");

const botonVaciar = document.querySelector("#boton-vaciar");
const cuadroVaciar = document.querySelector(".cuadro-vaciar");
const overlayCuadroVaciar = document.querySelector(".overlay-cuadro-vaciar");

const botonVaciarCuadroVaciar = document.querySelector(".boton-rojo-cuadro-vaciar");
const botonCancelarCuadroVaciar = document.querySelector("#boton-cancelar");

const botonComprar = document.querySelector("#boton-comprar");
const cuadroComprar = document.querySelector(".cuadro-comprar");
const overlayCuadroComprar = document.querySelector(".overlay-cuadro-comprar");

const botonDebito = document.querySelector("#boton-debito");
const recargoCredito = document.querySelector(".contenedor-recargo");
const botonCredito = document.querySelector("#boton-credito");
const botonSeguirComprando = document.querySelector("#boton-seguir-comprando");
const botonDelivery = document.querySelector("#boton-delivery")
const botonDescuento = document.querySelector("#boton-giftcard")
const recargoDelivery = document.querySelector(".contenedor-delivery")
const descuentoGiftCard = document.querySelector(".contenedor-giftcard")

const subtotal = 72;
const mostrarSubtotal = document.querySelector(".subtotal-precio-opciones-pago");
mostrarSubtotal.textContent = "$" + subtotal;

let total = 72;
const mostrarTotal = document.querySelector(".total-precio-opciones-pago");
mostrarTotal.textContent = "$" + total;

const mostrarDescuento = document.querySelector(".giftcard-precio-opciones-pago");

const delivery = 300;
const mostrarDelivery = document.querySelector(".delivery-precio-opciones-pago");
mostrarDelivery.textContent = "$" + delivery;

const mostrarRecargo = document.querySelector(".recargo-precio-opciones-pago");



const form = document.querySelector(".boton-enviar-formulario")
const inputNombre = document.querySelector("#ingresar-nombre-completo")
const inputEmail = document.querySelector("#ingresar-email")

//Responsive

const botonFiltro = document.querySelector(".boton-filtro")
const overlayFiltrosResponsive = document.querySelector(".overlay-seccion-aside-responsive")
const seccionFiltrosResponsive = document.querySelector(".seccion-aside-responsive")
const botonCerrarAsideResponsive = document.querySelector("#boton-cerrar-aside-responsive")


// Botones grilla y lista

botonLista.onclick = () => {
  contenedorProductos.classList.add("lista");

  for (let descripcion of descripcionProducto) {
    descripcion.classList.remove("no-mostrar");
  }

  for (let tarjeta of tarjetasProducto) {
    tarjeta.classList.add("productos-lista-flex");
  }

  for (let boton of botonesListaAgregarCarrito) {
    boton.classList.add("boton-lista");
  }

  for (let contenedorProducto of contenedoresProductos) {
    contenedorProducto.classList.add("contenedor-producto");
  }
};

botonGrilla.onclick = () => {
  contenedorProductos.classList.remove("lista");

  for (let descripcion of descripcionProducto) {
    descripcion.classList.add("no-mostrar");
  }

  for (let tarjeta of tarjetasProducto) {
    tarjeta.classList.remove("productos-lista-flex");
  }

  for (let boton of botonesListaAgregarCarrito) {
    boton.classList.remove("boton-lista");
  }

  for (let contenedorProducto of contenedoresProductos) {
    contenedorProducto.classList.remove("contenedor-producto");
  }
};

// Carrito



botonMostrarCarrito.onclick = () => {
  overlay.classList.remove("no-mostrar");
  document.body.classList.add("no-scroll");
  carrito.classList.add("mostrar-carrito");
};

botonOcultarCarrito.onclick = () => {
  overlay.classList.add("no-mostrar");
  document.body.classList.remove("no-scroll");
  carrito.classList.remove("mostrar-carrito");
};


// Cuadro comprar

// Botones carrito

botonVaciar.onclick = () => {
  overlayCuadroVaciar.classList.remove("no-mostrar");
  document.body.classList.add("no-scroll");
  cuadroVaciar.classList.add("mostrar-cuadro-vaciar");
};

botonCancelarCuadroVaciar.onclick = () => {
  console.log("click");
  overlayCuadroVaciar.classList.add("no-mostrar");
  cuadroVaciar.classList.remove("mostrar-cuadros");
};

botonVaciarCuadroVaciar.onclick = () => {
  overlayCuadroVaciar.classList.add("no-mostrar");
  cuadroVaciar.classList.remove("mostrar-cuadros");
};

botonComprar.onclick = () => {
  overlayCuadroComprar.classList.remove("no-mostrar");
  document.body.classList.add("no-scroll");
  cuadroComprar.classList.add("mostrar-cuadros");
};

botonSeguirComprando.onclick = () => {
  overlayCuadroComprar.classList.add("no-mostrar");
  cuadroComprar.classList.remove("mostrar-cuadros");
};

// Sección para pagar

// ver cómo hacer andar esto de abajo

const obtenerDescuento = (subtotal) => {
    return (subtotal * 0.05)
}

mostrarDescuento.textContent = "$" + obtenerDescuento(subtotal);

const obtenerRecargo = (subtotal) => {
    return (subtotal * 0.1)
}

mostrarRecargo.textContent = "$" + obtenerRecargo(subtotal);


// const obtenerGastosDeEnvio = (subtotal) => {
//     return subtotal + delivery
// }

// const obtenerCalculoDescuento = (precio) => {
//     let descuento = obtenerDescuento(precio) - precio
//     return descuento
// }

let tieneDescuento = true
let tieneRecargo = true
let tieneGastosDeEnvio = false

// const obtenerTotal = () => {
//     // let descuento = 0
//     // let recargo = 0
//     // let gastoDeEnvio = 0
//     if (botonDescuento.onclick) {
//         console.log(mostrarTotal.textContent = "$" + obtenerDescuento(subtotal) + subtotal)
//     }
    
//     // if (tieneRecargo) {
//     //     precioRecargo = obtenerRecargo(subtotal) - subtotal
//     // }
//     // if (tieneGastosDeEnvio) {
//     //     precioDelivery = delivery - subtotal
//     // }
//     // return subtotal + recargo + descuento + delivery
// }



// botonCredito.onclick = () => {
//     recargoCredito.classList.remove("no-mostrar")
//     mostrarTotal.textContent = "$" + (subtotal + obtenerRecargo(subtotal))
// }

// botonDebito.onclick = () => {
//     recargoCredito.classList.add("no-mostrar")
//     mostrarTotal.textContent = "$" + (subtotal)
// }

// botonDelivery.onclick = () => {
//     recargoDelivery.classList.toggle("no-mostrar")
//     mostrarTotal.textContent = "$" + (subtotal + delivery)
// }

// botonDescuento.onclick = () => {
//     descuentoGiftCard.classList.toggle("no-mostrar")
//     mostrarTotal.textContent = "$" + (subtotal - obtenerDescuento(subtotal))
// }



let subtotalEnNumero = Number(subtotal);

const metodosDePago = document.querySelectorAll(".metodos-de-pago")
const recargos = document.querySelectorAll(".recargo")
const inputCredito = document.querySelector("input[value='credito']")
const inputDescuento = document.querySelector("input[value='giftcard']")
const inputDelivery = document.querySelector("input[value='delivery']")


for (let metodo of metodosDePago) {
  metodo.oninput = () => {
    calcularTotalCompleto();
  };
}
let resultadoRecargo;

const recargoTarjeta = () => {
  if (inputCredito.checked) {
    resultadoRecargo = subtotalEnNumero * 0.1;
    console.log(resultadoRecargo);
    mostrarRecargo.textContent = '$' + resultadoRecargo;
    recargoCredito.classList.remove("no-mostrar");
  } else {
    resultadoRecargo = 0;
    recargoCredito.classList.add("no-mostrar");
  }
  return resultadoRecargo;
};

let resultadoDescuento;

const aplicarDescuento = () => {
  if (inputDescuento.checked) {
    resultadoDescuento = -subtotalEnNumero * 0.05;
    mostrarDescuento.textContent = '$' + resultadoDescuento;
    descuentoGiftCard.classList.remove("no-mostrar");
  } else {
    resultadoDescuento = 0;
    descuentoGiftCard.classList.add("no-mostrar");
  }
  return resultadoDescuento;
};

let resultadoEnvio;

const recargoEnvio = () => {
  if (inputDelivery.checked) {
    resultadoEnvio = 300;
    mostrarDelivery.textContent = '$' + resultadoEnvio;
    recargoDelivery.classList.remove("no-mostrar");
  } else {
    resultadoEnvio = 0;
    recargoDelivery.classList.add("no-mostrar");
  }
  return resultadoEnvio;
};

const calcularTotalCompleto = () => {
  let totalCompleto = subtotalEnNumero + recargoEnvio()  + recargoTarjeta() + aplicarDescuento();
  mostrarTotal.textContent = '$' + totalCompleto.toFixed(2);
  return totalCompleto;
};


// Búsqueda

busquedaProductos.oninput = (e) => {
  buscarProductos()
}

const buscarProductos = () => {


  if (busquedaProductos.oninput) {
    for (let tarjeta of tarjetas) {
      const titulo = tarjeta.dataset.nombre;
      const busqueda = busquedaProductos.value;

      if (titulo.includes(busqueda)) {
        tarjeta.classList.remove("no-mostrar");
      } else {
        tarjeta.classList.add("no-mostrar");
      }
    }
  };
}


// Filtro puntaje

for (let checkbox of filtroPuntaje) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  };
}

const checkboxSeleccionado = () => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.checked) {
      return true;
    }
  }

  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxYTarjeta = (tarjeta) => {
  const puntaje = tarjeta.dataset.puntaje;
  for (let checkbox of filtroPuntaje) {
    if (checkbox.value === puntaje && checkbox.checked) {
      return true;
    }
  }

  const categories = tarjeta.dataset.categoria;
  for (let checkbox of filtroCategoria) {
    if (checkbox.value === categories && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("no-mostrar");
    if (checkboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove("no-mostrar");
      }
    } else {
      tarjeta.classList.remove("no-mostrar");
    }
  }
};



// Filtro categorías

for (let checkbox of filtroCategoria) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  };
}

// Botón limpiar

botonLimpiar.onclick = () => {
  busquedaProductos.value = "";
  tarjeta.classList.remove("no-mostrar");
};

// Cantidad de productos mostrados

const cantidadMostrada = document.querySelector(".cantidad-mostrada");
const checkboxes = document.querySelectorAll("input[type='checkbox']");


busquedaProductos.oninput = () => {
  buscarProductos();
  cantidadProductosMostrados();
  
};

for (let checkbox of checkboxes) {
  checkbox.onclick = () => {
    filtrarTarjetas();
    cantidadProductosMostrados();
  };
}

const cantidadProductosNoMostrados = document.getElementsByClassName("producto no-mostrar");

const cantidadProductosMostrados = () => {
  productosMostrados = tarjetasProducto.length - cantidadProductosNoMostrados.length;
  cantidadMostrada.textContent = productosMostrados;
};


// Responsive 

botonFiltro.onclick = () => {
  overlayFiltrosResponsive.classList.remove("no-mostrar")
  document.body.classList.add("no-scroll");
  seccionFiltrosResponsive.classList.add("mostrar-seccion-aside-responsive")
  
}

botonCerrarAsideResponsive.onclick = () => {
  overlayFiltrosResponsive.classList.add("no-mostrar")
  document.body.classList.remove("no-scroll");
  seccionFiltrosResponsive.classList.remove("mostrar-seccion-aside-responsive")
}