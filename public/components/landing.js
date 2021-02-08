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

  clickComprar(producto) {
    this.props.acciones.agregarCarrito(producto);
  }
  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("section");
    container.classList.add("landing__container");
    container.style.backgroundImage = "url(https://picsum.photos/1200/500)";

    let fondoDatos = document.createElement("div");
    fondoDatos.classList.add("landing__fondo");

    let titulo = document.createElement("h1");
    titulo.classList.add("landing__fondo--titulo");
    titulo.textContent = productoDestacado.title;

    let descripcion = document.createElement("p");
    descripcion.classList.add("landing__fondo--descripcion");
    descripcion.textContent = productoDestacado.description;

    let comprar = document.createElement("button");
    comprar.classList.add("landing__fondo--comprar");
    comprar.textContent = "Comprar";
    comprar.addEventListener("click", () =>
      this.clickComprar(productoDestacado)
    );

    fondoDatos.append(titulo, descripcion, comprar);

    container.append(fondoDatos, css);
    return container;
  }
  main(props) {}
}
