export default class Carrito {
  constructor(props) {
    this.modelo = this.modelo(props);
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

    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("carrito__container");
    h1.textContent = "Carrito";

    container.append(h1, css);
    return container;
  }
}
