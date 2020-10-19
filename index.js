const busquedaProductos = document.querySelector("#buscar-productos");
const tarjetas = document.getElementsByTagName("article");
const filtroPuntaje = document.getElementsByClassName("rating-checkbox");
const botonLimpiar = document.querySelector(".filters-clear-btn");
const productos = document.getElementsByClassName("productos");
const filtroCategoria = document.querySelectorAll(".categorias");

const carrito = document.querySelector(".carrito");
const botonMostrarCarrito = document.querySelector("#abrir-carrito");
const botonOcultarCarrito = document.querySelector("#cerrar-carrito");
const overlay = document.getElementById("overlay");

const botonLista = document.querySelector(".fa-list");
const contenedorProductos = document.querySelector(".contenedor-seccion-productos");
const tarjetasProducto = document.querySelectorAll(".producto");
const botonGrilla = document.querySelector(".fa-th");
const descripcionProducto = document.querySelectorAll(".descripcion-producto");
const botonesListaAgregarCarrito = document.querySelectorAll(".boton-agregar-carrito");
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
const botonDelivery = document.querySelector("#boton-delivery");
const botonDescuento = document.querySelector("#boton-giftcard");
const recargoDelivery = document.querySelector(".contenedor-delivery");
const descuentoGiftCard = document.querySelector(".contenedor-giftcard");

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

const form = document.querySelector(".boton-enviar-formulario");
const inputNombre = document.querySelector("#ingresar-nombre-completo");
const inputEmail = document.querySelector("#ingresar-email");

//Responsive

const botonFiltro = document.querySelector(".boton-filtro");
const overlayFiltrosResponsive = document.querySelector(".overlay-seccion-aside-responsive");
const seccionFiltrosResponsive = document.querySelector(".seccion-aside-responsive");
const botonCerrarAsideResponsive = document.querySelector("#boton-cerrar-aside-responsive");
const busquedaProductosResponsive = document.querySelector("#buscar-productos-responsive");
const cuadroComprarResponsive = document.querySelector("#reponsive-cuadro-comprar");



// Filtro categoria

for (let checkbox of filtroCategoria) {
  checkbox.oninput = () => {
    filtrarTarjetas();
  };
}

// Filtro búsqueda

busquedaProductos.oninput = () => {
  filtrarTarjetas();
};

// Filtro puntaje

for (let checkbox of filtroPuntaje) {
  checkbox.oninput = () => {
    filtrarTarjetas();
  };
}

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetasProducto) {
    if (pasaFiltros(tarjeta)) {
      mostrarTarjetas(tarjeta);
    } else {
      ocultarTarjetas(tarjeta);
    }
  }
  mostrarCantidadDeProductos()
};

const mostrarTarjetas = (tarjeta) => {
  return tarjeta.classList.remove("no-mostrar-producto");
};

const ocultarTarjetas = (tarjeta) => {
  return tarjeta.classList.add("no-mostrar-producto");
};

const hayAlgunaCategoriaChequeada = () => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const hayAlgunRatingSeleccionado = () => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const hayAlgoEscritoEnInput = () => {
  return Boolean(busquedaProductos.value);
};

const coincideBusquedaInputConTarjeta = (tarjeta) => {
  const nombreTarjeta = tarjeta.dataset.nombre.toLowerCase();
  const busqueda = busquedaProductos.value.toLowerCase();

  if (nombreTarjeta.includes(busqueda)) {
    return true;
  } else {
    return false;
  }
};

const coincideCategoriaConTarjeta = (tarjeta) => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.value === tarjeta.dataset.categoria && checkbox.checked) {
      return true;
    }
  }
  return false;
};

const coincideRatingConTarjeta = (tarjeta) => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.value === tarjeta.dataset.puntaje && checkbox.checked) {
      return true;
    }
  }
  return false;
};

const filtroInputEscrito = (tarjeta) => {
  if (hayAlgoEscritoEnInput()) {
    return coincideBusquedaInputConTarjeta(tarjeta);
  } else {
    return true;
  }
};

const filtroCategoriaSeleccionada = (tarjeta) => {
  if (hayAlgunaCategoriaChequeada()) {
    return coincideCategoriaConTarjeta(tarjeta);
  } else {
    return true;
  }
};

const filtroRatingSeleccionado = (tarjeta) => {
  if (hayAlgunRatingSeleccionado()) {
    return coincideRatingConTarjeta(tarjeta);
  } else {
    return true;
  }
};

const pasaFiltros = (tarjeta) => {
  if (
    filtroInputEscrito(tarjeta) == true &&
    filtroCategoriaSeleccionada(tarjeta) == true &&
    filtroRatingSeleccionado(tarjeta) == true
  ) {
    return true;
  } else {
    return false;
  }
};

// Cantidad mostrada

const cantidadMostrada = document.querySelector(".cantidad-mostrada")

 const mostrarCantidadDeProductos = () => {
   const productosEscondidos = document.querySelectorAll(".no-mostrar-producto")
   const cantidadProductosEscondidos = productosEscondidos.length
   const resultadoProductosMostrados = 12 - cantidadProductosEscondidos

   cantidadMostrada.textContent = resultadoProductosMostrados
 }


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

const obtenerDescuento = (subtotal) => {
  return subtotal * 0.05;
};

mostrarDescuento.textContent = "$" + obtenerDescuento(subtotal);

const obtenerRecargo = (subtotal) => {
  return subtotal * 0.1;
};

mostrarRecargo.textContent = "$" + obtenerRecargo(subtotal);

let subtotalEnNumero = Number(subtotal);

const metodosDePago = document.querySelectorAll(".metodos-de-pago");
const recargos = document.querySelectorAll(".recargo");
const inputCredito = document.querySelector("input[value='credito']");
const inputDescuento = document.querySelector("input[value='giftcard']");
const inputDelivery = document.querySelector("input[value='delivery']");

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
    mostrarRecargo.textContent = "$" + resultadoRecargo;
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
    mostrarDescuento.textContent = "$" + resultadoDescuento;
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
    mostrarDelivery.textContent = "$" + resultadoEnvio;
    recargoDelivery.classList.remove("no-mostrar");
  } else {
    resultadoEnvio = 0;
    recargoDelivery.classList.add("no-mostrar");
  }
  return resultadoEnvio;
};

const calcularTotalCompleto = () => {
  let totalCompleto =
    subtotalEnNumero + recargoEnvio() + recargoTarjeta() + aplicarDescuento();
  mostrarTotal.textContent = "$" + totalCompleto.toFixed(2);
  return totalCompleto;
};

// Botón limpiar

botonLimpiar.onclick = () => {
  busquedaProductos.value = "";
  tarjeta.classList.remove("no-mostrar-producto");
};


// Responsive

botonFiltro.onclick = () => {
  overlayFiltrosResponsive.classList.remove("no-mostrar");
  document.body.classList.add("no-scroll");
  seccionFiltrosResponsive.classList.add("mostrar-seccion-aside-responsive");
};

botonCerrarAsideResponsive.onclick = () => {
  overlayFiltrosResponsive.classList.add("no-mostrar");
  document.body.classList.remove("no-scroll");
  seccionFiltrosResponsive.classList.remove("mostrar-seccion-aside-responsive");
};



// Filtros responsive

for (let checkbox of filtroCategoria) {
  checkbox.oninput = () => {
    filtrarTarjetasResponsive();
  };
}


busquedaProductosResponsive.oninput = () => {
  filtrarTarjetasResponsive();
};


for (let checkbox of filtroPuntaje) {
  checkbox.oninput = () => {
    filtrarTarjetasResponsive();
  };
}

const filtrarTarjetasResponsive = () => {
  for (let tarjeta of tarjetasProducto) {
    if (pasaFiltrosResponsive(tarjeta)) {
      mostrarTarjetas(tarjeta);
    } else {
      ocultarTarjetas(tarjeta);
    }
  }
  mostrarCantidadDeProductos()
};


const hayAlgoEscritoEnInputResponsive = () => {
  return Boolean(busquedaProductosResponsive.value);
};

const coincideBusquedaInputConTarjetaResponsive = (tarjeta) => {
  const nombreTarjeta = tarjeta.dataset.nombre.toLowerCase();
  const busqueda = busquedaProductosResponsive.value.toLowerCase();

  if (nombreTarjeta.includes(busqueda)) {
    return true;
  } else {
    return false;
  }
};

const filtroInputEscritoResponsive = (tarjeta) => {
  if (hayAlgoEscritoEnInputResponsive()) {
    return coincideBusquedaInputConTarjetaResponsive(tarjeta);
  } else {
    return true;
  }
};


const pasaFiltrosResponsive = (tarjeta) => {
  if (
    filtroInputEscritoResponsive(tarjeta) == true &&
    filtroCategoriaSeleccionada(tarjeta) == true &&
    filtroRatingSeleccionado(tarjeta) == true
  ) {
    return true;
  } else {
    return false;
  }
};



