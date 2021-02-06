export default class Cargando {
  constructor(props) {
    this.modelo = this.modelo(props);
    this.props = props;
    this.main();
  }
  modelo() {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");

    container.classList.add("cargando__container");
    h1.textContent = "Cargando";

    container.append(h1);
    return container;
  }
  main() {
    // console.log(this.props);
    this.props.acciones.show(this.props.proximaPagina);
  }
}
