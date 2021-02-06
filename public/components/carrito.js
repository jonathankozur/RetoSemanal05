export default class Carrito {
  constructor(props) {
    this.modelo = this.modelo(props);
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("carrito__container");
    h1.textContent = "Carrito";

    container.append(h1);
    return container;
  }
}
