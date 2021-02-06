import { getCarrito, addCarrito } from "./components/datos.js";

//cargando podria pasarle que pagina deberia llamar luego de retornar la info de la api rest

import Cargando from "./components/cargando.js";
import Carrito from "./components/carrito.js";
import Categorias from "./components/categorias.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Landing from "./components/landing.js";
import Productos from "./components/productos.js";

let root = document.querySelector(".root");

let props = {};
if (!localStorage.getItem("show")) {
  props = {
    proximaPagina: [
      { componente: "header", props: {} },
      { componente: "landing", props: {} },
      { componente: "categorias", props: {} },
      { componente: "footer", props: {} },
    ],
  };
  localStorage.setItem(
    "show",
    JSON.stringify([{ componente: "cargando", props: props }])
  );
}
function crearComponente(elemento) {
  elemento.props.acciones = {
    show: (componentes) => show(componentes),
    agregarCarrito: (producto) => agregarCarrito(producto),
  };

  switch (elemento.componente) {
    case "header":
      return new Header(elemento.props);
    case "cargando":
      return new Cargando(elemento.props);
    case "carrito":
      return new Carrito(elemento.props);
    case "categorias":
      return new Categorias(elemento.props);
    case "landing":
      return new Landing(elemento.props);
    case "productos":
      return new Productos(elemento.props);
    case "footer":
      return new Footer(elemento.props);
    default:
      break;
  }
}
function agregarShow(componente) {
  root.appendChild(componente);
}

function show(componentes) {
  while (root.lastElementChild) {
    root.removeChild(root.lastElementChild);
  }
  componentes.map((el) => agregarShow(crearComponente(el).modelo));
}

function agregarCarrito(producto) {
  let carrito = document.querySelector(".header__carrito");
  addCarrito(producto)
    .then((res) => getCarrito())
    .then((res) => (carrito.textContent = "carrito " + res.length));
}

/**aca empieza todo**/
show(JSON.parse(localStorage.getItem("show")));
