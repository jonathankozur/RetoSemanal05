import { productoDestacado } from "./datos.js";

export default class Landing {
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

  clickComprar(props) {
    props.acciones.agregarCarrito(productoDestacado);
  }
  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("div");
    container.classList.add("landing__container");

    let imagenFondo = document.createElement("img");
    imagenFondo.classList.add("landing__fondo");
    imagenFondo.src = "https://picsum.photos/1200/500";

    let comprar = document.createElement("button");
    comprar.classList.add("landing__comprar");
    comprar.textContent = "Comprar";
    comprar.addEventListener("click", () => this.clickComprar(props));

    container.append(comprar, imagenFondo, css);
    return container;
  }
  main(props) {}
}
