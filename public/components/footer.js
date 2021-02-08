export default class Footer {
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
    let container = document.createElement("footer");
    let h1 = document.createElement("h1");

    container.classList.add("footer__container");
    h1.textContent = "Footer";

    container.append(h1, css);
    return container;
  }
}
