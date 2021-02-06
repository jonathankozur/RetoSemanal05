import { categorias, getCarrito } from "./datos.js";

export default class Header {
  constructor(props) {
    this.modelo = this.modelo(props);
    this.props = props;
    this.main(this.props);
  }
  crearCategoria(categoria) {
    let elemento = document.createElement("button");
    elemento.textContent = categoria;
    elemento.classList.add("header__categoria");
    return elemento;
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

  clickCarrito(props) {
    let componentes = [
      { componente: "header", props: {} },
      { componente: "carrito", props: {} },
      { componente: "footer", props: {} },
    ];
    localStorage.setItem("show", JSON.stringify(componentes));
    props.acciones.show(componentes);
  }
  clickLogo(props) {
    let nuevasProps = {
      proximaPagina: [
        { componente: "header", props: {} },
        { componente: "landing", props: {} },
        { componente: "categorias", props: {} },
        { componente: "footer", props: {} },
      ],
    };
    let componentes = [
      {
        componente: "cargando",
        props: nuevasProps,
      },
    ];
    localStorage.setItem("show", JSON.stringify(componentes));
    props.acciones.show(componentes);
  }

  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("div");
    container.classList.add("header__container");

    let logo = document.createElement("button");
    logo.classList.add("header__logo");
    logo.textContent = "logo";
    // logo.src = "./images/logo.svg";
    logo.addEventListener("click", () => this.clickLogo(props));

    let contenedorCategorias = document.createElement("div");
    contenedorCategorias.classList.add("header__contenedorCategorias");
    categorias.map((categoria) =>
      contenedorCategorias.appendChild(this.crearCategoria(categoria))
    );

    let carrito = document.createElement("button");
    carrito.classList.add("header__carrito");
    getCarrito().then((res) => (carrito.textContent = "carrito " + res.length));
    // carrito.src = "./images/shopping-cart.svg";
    carrito.addEventListener("click", () => this.clickCarrito(props));

    container.append(logo, contenedorCategorias, carrito, css);
    return container;
  }
  main(props) {}
}
