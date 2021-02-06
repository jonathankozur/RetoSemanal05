export default class Header {
  constructor(props) {
    this.modelo = this.modelo(props);
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("header__container");
    h1.textContent = "Header";

    container.append(h1);
    return container;
  }
}
