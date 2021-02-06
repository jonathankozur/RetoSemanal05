export default class Footer {
  constructor(props) {
    this.modelo = this.modelo(props);
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("footer__container");
    h1.textContent = "Footer";

    container.append(h1);
    return container;
  }
}
