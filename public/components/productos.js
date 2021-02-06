export default class Productos {
  constructor(props) {
    this.modelo = this.modelo(props);
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("productos__container");
    h1.textContent = "Productos";

    container.append(h1);
    return container;
  }
}
