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
    console.log("clickComprar");
    props.acciones.agregarCarrito(productoDestacado);
  }
  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("div");
    container.classList.add("landing__container");

    let comprar = document.createElement("button");
    comprar.classList.add("landing__comprar");
    comprar.textContent = "Comprar";
    comprar.addEventListener("click", () => this.clickComprar(props));

    let h1 = document.createElement("h1");
    h1.textContent = "Landing";

    container.append(h1, comprar, css);
    return container;
  }
  main(props) {}
}
