import {
  getCategorias,
  getProductoDestacado,
  getProductosCategoria,
} from "./datos.js";

export default class Cargando {
  constructor(props) {
    this.modelo = this.modelo(props);
    this.props = props;
    this.main(this.props);
  }
  cargarCSS() {
    let css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute(
      "href",
      "./components/" + this.constructor.name.toLowerCase() + ".css"
    );
    css.setAttribute("media", "screen");
    return css;
  }
  modelo() {
    let css = this.cargarCSS();

    let container = document.createElement("section");
    let h1 = document.createElement("h1");

    container.classList.add("cargando__container");
    h1.textContent = "Cargando";

    container.append(h1, css);
    return container;
  }
  main(props) {
    let arrayPromise = props.cargar.map((el) => {
      switch (el) {
        case "categorias":
          return getCategorias();
        case "productoDestacado":
          return getProductoDestacado();
        case "productosCategoria":
          return getProductosCategoria(props.cargarProps.categoria);
        default:
          break;
      }
    });
    Promise.all(arrayPromise).then(() =>
      setTimeout(() => props.acciones.show(props.proximaPagina), 10)
    );
  }
}
