export default class Categorias {
  constructor(props) {
    this.modelo = this.modelo(props);
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("categorias__container");
    h1.textContent = "Categorias";

    container.append(h1);
    return container;
  }
}
